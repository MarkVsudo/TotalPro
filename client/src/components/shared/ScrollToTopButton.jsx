import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed right-5 z-50 flex justify-center items-center bg-[#002B5B] text-white w-[3rem] h-[3rem] rounded-full shadow-md text-2xl hover:bg-blue-900 cursor-pointer transition-all duration-300 ease-in-out
        ${isVisible ? "bottom-5 opacity-100" : "bottom-[-60px] opacity-0"}`}
    >
      <IoIosArrowUp />
    </button>
  );
};

export default ScrollToTopButton;
