import { useState, useEffect } from "react";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const media = [
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
  "src/assets/projects/project-img-25.jpg",
  "src/assets/projects/project-img-26.jpg",
  "src/assets/projects/project-img-27.jpg",
  "src/assets/projects/project-img-28.jpg",
  "src/assets/projects/project-img-29.jpg",
  "src/assets/projects/project-img-30.jpg",
  "src/assets/projects/project-img-31.jpg",
  "src/assets/projects/project-img-32.jpg",
  "src/assets/projects/project-img-33.jpg",
  "src/assets/projects/project-img-34.jpg",
  "src/assets/projects/project-img-35.jpg",
  "src/assets/projects/project-img-36.jpg",
  "src/assets/projects/project-img-37.jpg",
  "src/assets/projects/project-img-38.jpg",
  "src/assets/projects/project-img-39.jpg",
  "src/assets/projects/project-img-40.jpg",
  "src/assets/projects/project-img-41.jpg",
  "src/assets/projects/project-vid-1.mp4",
  "src/assets/projects/project-vid-2.mp4",
  "src/assets/projects/project-vid-3.mp4",
  "src/assets/projects/project-vid-4.mp4",
  "src/assets/projects/project-vid-5.mp4",
  "src/assets/projects/project-vid-6.mp4",
];

export default function ProjectsSection() {
  const [open, setOpen] = useState(false);
  const [selectedImgIndx, setSelectedImgIndx] = useState(0);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        setSelectedImgIndx((prev) => (prev + 1) % media.length);
      } else if (e.key === "ArrowLeft") {
        setSelectedImgIndx(
          (prev) => (prev - 1 + media.length) % media.length
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);
  return (
    <section id="projects" className="py-24 px-6 lg:px-12 bg-[#002B5B]">
      <h2 className="text-center text-4xl font-bold text-white mb-8">
        Наши проекти
      </h2>

      <div className="relative mx-auto">
        <div className="swiper-container">
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
          >
            {media.map((medium, index) => (
              <SwiperSlide key={index}>
                <div
                  onClick={() => {
                    setOpen(true);
                    setSelectedImgIndx(index);
                  }}
                  className="relative overflow-hidden rounded-lg shadow-lg h-120"
                >
               
                  {medium.slice(-3) === 'mp4' 
                    ? (<video src={medium} autoPlay muted loop alt={`Project media ${index + 1}`} className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"  
                    />) 
                    : (<img src={medium}
                        alt={`Project media ${index + 1}`}
                        className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"/>)}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="custom-prev cursor-pointer absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-50 text-[#002B5B] p-4 rounded-full hover:bg-opacity-75 transition-all -ml-6">
            <MdOutlineArrowBackIos size={24} />
          </button>
          <button className="custom-next cursor-pointer absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-50 text-[#002B5B] p-4 rounded-full hover:bg-opacity-75 transition-all -mr-6">
            <MdOutlineArrowForwardIos size={24} />
          </button>

          <Dialog
            open={open}
            onClose={() => setOpen(false)}
            className="relative z-10"
          >
            <DialogBackdrop className="fixed inset-0 bg-[#002B5B]/50" />

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <DialogPanel className="relative transform  rounded-lg bg-white text-left shadow-xl sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="relative">
                  {media[selectedImgIndx].slice(-3) === 'mp4' 
  ? (
    <video 
      src={media[selectedImgIndx]} 
      autoPlay 
      muted 
      loop
      className="w-full h-auto max-h-170 object-cover rounded-lg"
    />
  ) 
  : (
    <img
      src={media[selectedImgIndx]}
      alt={`Project ${selectedImgIndx + 1}`}
      className="w-full h-auto rounded-lg"
    />
  )
}

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedImgIndx(
                          (prev) => (prev - 1 + media.length) % media.length
                        );
                      }}
                      className="custom-prev cursor-pointer absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-50 text-[#002B5B] p-4 rounded-full hover:bg-opacity-75 transition-all -ml-6"
                    >
                      <MdOutlineArrowBackIos size={24} />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedImgIndx(
                          (prev) => (prev + 1) % media.length
                        );
                      }}
                      className="custom-prev cursor-pointer absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-50 text-[#002B5B] p-4 rounded-full hover:bg-opacity-75 transition-all -mr-6"
                    >
                      <MdOutlineArrowForwardIos size={24} />
                    </button>
                  </div>
                </DialogPanel>
              </div>
            </div>
          </Dialog>
        </div>
      </div>
    </section>
  );
}
