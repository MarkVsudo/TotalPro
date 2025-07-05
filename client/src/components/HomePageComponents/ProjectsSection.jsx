import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";

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

export default function ProjectsSection() {
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
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="relative overflow-hidden rounded-lg shadow-lg h-100">
                  <img
                    src={image}
                    alt={`Project ${index + 1}`}
                    className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="custom-prev cursor-pointer absolute left-0 top-50 -translate-y-1/2 z-10 bg-white bg-opacity-50 text-[#002B5B] p-4 rounded-full hover:bg-opacity-75 transition-all -ml-6">
            <MdOutlineArrowBackIos size={24} />
          </button>
          <button className="custom-next cursor-pointer absolute right-0 top-50 -translate-y-1/2 z-10 bg-white bg-opacity-50 text-[#002B5B] p-4 rounded-full hover:bg-opacity-75 transition-all -mr-6">
            <MdOutlineArrowForwardIos size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
