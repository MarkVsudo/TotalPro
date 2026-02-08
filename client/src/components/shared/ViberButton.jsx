import { useEffect, useState } from "react";
import { FaViber } from "react-icons/fa";

const ViberButton = () => {
  const [scrollY, setScrollY] = useState(
    typeof window !== "undefined" ? window.scrollY : 0,
  );

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const phoneRaw = "359888030123";
  const viberLink = `viber://chat?number=${phoneRaw}`;

  const handleClick = () => {
    window.location.href = viberLink;
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Open Viber chat"
      className={`fixed ${
        scrollY > 300 ? "bottom-20" : "bottom-5"
      } right-5 z-50 flex justify-center items-center bg-[#7C529E] text-white w-[3rem] h-[3rem] rounded-full shadow-md text-2xl hover:opacity-90 cursor-pointer transition-all duration-300 ease-in-out`}
      title="Chat in Viber"
    >
      <FaViber />
    </button>
  );
};

export default ViberButton;
