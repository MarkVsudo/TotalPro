import React, { useState } from "react";
import { IoIosRemoveCircle } from "react-icons/io";

export default function DraggableImageUploader() {
  const [images, setImages] = useState([]);

  const handleUpload = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map((file) => ({
      id: Date.now() + Math.random(),
      url: URL.createObjectURL(file),
      x: 0,
      y: 0,
    }));
    setImages((prev) => [...prev, ...newImages]);
  };

  const handleDragStart = (e, id) => {
    const img = images.find((img) => img.id === id);
    e.dataTransfer.setData("id", id);
    e.dataTransfer.setData("offsetX", e.clientX - img.x);
    e.dataTransfer.setData("offsetY", e.clientY - img.y);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    const id = Number(e.dataTransfer.getData("id"));
    const offsetX = Number(e.dataTransfer.getData("offsetX"));
    const offsetY = Number(e.dataTransfer.getData("offsetY"));

    const newX = e.clientX - offsetX;
    const newY = e.clientY - offsetY;

    setImages((prev) =>
      prev.map((img) => (img.id === id ? { ...img, x: newX, y: newY } : img))
    );
  };

  const removeImage = (id) => {
    setImages((prev) => prev.filter((img) => img.id !== id));
  };

  return (
    <div className="w-full space-y-4">
      <input type="file" multiple onChange={handleUpload} className="mb-4" />

      <div
        className="relative w-full h-[400px] border border-dashed border-gray-400 rounded-lg overflow-hidden"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {images.map((img) => (
          <div
            key={img.id}
            draggable
            onDragStart={(e) => handleDragStart(e, img.id)}
            style={{
              position: "absolute",
              top: img.y,
              left: img.x,
              width: "120px",
              height: "120px",
              cursor: "grab",
            }}
            className="border-2 border-blue-900 rounded-md"
          >
            <img
              src={img.url}
              alt="uploaded"
              className="w-full h-full object-cover rounded-md"
            />
            <button
              onClick={() => removeImage(img.id)}
              className="absolute -top-2 -right-2"
            >
              <IoIosRemoveCircle className="text-red-600 text-2xl" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
