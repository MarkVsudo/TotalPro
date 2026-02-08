import React, { useEffect, useState } from "react";
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

  const displayNumber = "+359 888 03 0123";
  const phoneDigits = "359888030123";

  const viberTry = `viber://add?number=${phoneDigits}`;

  const handleClick = async () => {
    window.location.href = viberTry;

    setTimeout(async () => {
      try {
        await navigator.clipboard.writeText(displayNumber);
        alert(
          `Номерът е копиран: ${displayNumber}\nПоставете го във Viber (Search).`,
        );
      } catch {
        window.location.href = `tel:${displayNumber.replace(/\s/g, "")}`;
      }
    }, 900);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Open Viber"
      className={`fixed ${scrollY > 300 ? "bottom-20" : "bottom-5"} right-5 z-50
        flex justify-center items-center bg-[#7C529E] text-white w-[3rem] h-[3rem]
        rounded-full shadow-md text-2xl hover:opacity-90 cursor-pointer transition-all`}
      title="Viber"
    >
      <FaViber />
    </button>
  );
};

export default ViberButton;
