import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const images = [
  "src/assets/projects/project-img-4.jpg",
  "src/assets/projects/project-img-6.jpg",
  "src/assets/projects/project-img-10.jpg",
  "src/assets/projects/project-img-3.jpg",
  "src/assets/projects/project-img-7.jpg",
  "src/assets/projects/project-img-1.jpg",
  "src/assets/projects/project-img-5.jpg",
  "src/assets/projects/project-img-2.jpg",
  "src/assets/projects/project-img-8.jpg",
  "src/assets/projects/project-img-9.jpg",
  "src/assets/projects/project-img-11.jpg",
  "src/assets/projects/project-img-12.jpg",
  "src/assets/projects/project-img-13.jpg",
  "src/assets/projects/project-img-14.jpg",
  "src/assets/projects/project-img-15.jpg",
  "src/assets/projects/project-img-16.jpg",
  "src/assets/projects/project-img-17.jpg",
  "src/assets/projects/project-img-18.jpg",
  "src/assets/projects/project-img-19.jpg",
  "src/assets/projects/project-img-20.jpg",
  "src/assets/projects/project-img-21.jpg",
  "src/assets/projects/project-img-22.jpg",
  "src/assets/projects/project-img-23.jpg",
  "src/assets/projects/project-img-24.jpg",
  "src/assets/projects/project-img-25.jpg",
  "src/assets/projects/project-img-26.jpg",
  "src/assets/projects/project-img-27.jpg",
  "src/assets/projects/project-img-28.jpg",
  "src/assets/projects/project-img-29.jpg",
  "src/assets/projects/project-img-30.jpg",
  "src/assets/projects/project-img-31.jpg",
  "src/assets/projects/project-img-32.jpg",
];

Modal.setAppElement("#root");

export default function ProjectsSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openModal = (idx) => {
    setActiveIndex(idx);
    setIsOpen(true);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <section id="projects" className="py-24 px-6 lg:px-12 bg-[#002B5B]">
      <h2 className="text-center text-4xl font-bold text-white mb-8">
        Наши проекти
      </h2>

      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        spaceBetween={40}
        breakpoints={{
          640: { slidesPerView: 1 },
          1024: { slidesPerView: 2 },
        }}
        className="rounded-lg h-100"
      >
        {images.map((src, idx) => (
          <SwiperSlide key={idx} className="flex justify-center">
            <img
              src={src}
              alt={`Проект ${idx + 1}`}
              onClick={() => openModal(idx)}
              className="w-full h-full object-cover rounded-lg shadow-md cursor-pointer transition-transform hover:scale-105"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {isOpen && (
        <Modal
          isOpen={isOpen}
          onRequestClose={() => setIsOpen(false)}
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50 w-full"
          overlayClassName="overlay"
        >
          <div className="relative flex items-center justify-center gap-4 w-full h-full">
            <button
              onClick={() =>
                setActiveIndex(
                  (activeIndex + images.length - 1) % images.length
                )
              }
              className="absolute left-4 text-white text-7xl focus:outline-none cursor-pointer"
            >
              ‹
            </button>
            <img
              src={images[activeIndex]}
              alt={`Project enlarged ${activeIndex + 1}`}
              className="max-w-[80vw] max-h-[80vh] rounded-lg shadow-xl"
            />
            <button
              onClick={() => setActiveIndex((activeIndex + 1) % images.length)}
              className="absolute right-4 text-white text-7xl focus:outline-none cursor-pointer"
            >
              ›
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-white text-4xl focus:outline-none cursor-pointer"
            >
              ×
            </button>
          </div>
        </Modal>
      )}
    </section>
  );
}
