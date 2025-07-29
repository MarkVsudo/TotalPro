import React from "react";
import { FiPhone } from "react-icons/fi";
import { VscTools } from "react-icons/vsc";
import { FaRegHandshake } from "react-icons/fa6";

import AboutUsImg from "../../assets/about-us-img.png";
const AboutUsSection = () => {
  //
  return (
    <section
      id="about-us"
      className="bg-white text-[#002B5B] my-24 px-4 max-w-7xl mx-auto"
    >
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        {/* Left Text Section */}
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-bold mb-6">
            Изградихме бизнеса си върху уважението към клиента
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            От първия ден вярваме, че успехът се гради върху коректност, яснота
            и истинско отношение към хората. При нас няма "само да мине номерът"
            или "няма смисъл да се стараем". Всеки клиент е важен, а всяка
            услуга е изпълнена така, както бихме я направили и за себе си.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            🎯 За нас няма маловажна поръчка, няма "пренебрежим проблем", и със
            сигурност няма изрази като:
            <br />
            <span className="font-semibold italic text-[#002B5B]">
              „Защо да се старая – да не би да го правя за нас?“
            </span>
          </p>
          <p className="text-lg font-medium text-[#002B5B]">
            💡 Ценим всяко доверие. Искаме не просто да свършим работа, а да я
            свършим така, че да ни препоръчаш с увереност.
          </p>
        </div>

        {/* Right Image Section */}
        <div className="lg:w-1/2 flex justify-center items-center">
          <img
            src={AboutUsImg}
            alt="Our team at work"
            className="w-full h-auto drop-shadow-[0_10px_20px_rgba(0,0,0,0.3)]"
          />
        </div>
      </div>

      {/* Bottom Features */}
      <div className="max-w-7xl mx-auto mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
        {/* Feature 1 */}
        <div className="flex flex-col items-start">
          <div className="bg-[#002B5B] text-white w-14 h-14 flex items-center justify-center rounded-lg">
            <FaRegHandshake className="w-8 h-8" />
          </div>
          <h4 className="mt-4 text-lg font-semibold">
            Коректност без компромис
          </h4>
          <p className="mt-2 text-gray-700">
            Ясни условия, точни срокове и отношение без излишни обещания – само
            реални резултати.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col items-start">
          <div className="bg-[#002B5B] text-white w-14 h-14 flex items-center justify-center rounded-lg">
            <VscTools className="w-7 h-7" />
          </div>
          <h4 className="mt-4 text-lg font-semibold">
            Опит и внимание към детайла
          </h4>
          <p className="mt-2 text-gray-700">
            Работим с утвърдени специалисти – от монтаж на климатици до
            електроинсталации и сухо строителство.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col items-start">
          <div className="bg-[#002B5B] text-white w-14 h-14 flex items-center justify-center rounded-lg">
            <FiPhone className="w-7 h-7" />
          </div>
          <h4 className="mt-4 text-lg font-semibold">Винаги отзивчиви</h4>
          <p className="mt-2 text-gray-700">
            При нас няма автоматични гласове и „изчакайте на линия“. Реални хора
            – с истинско отношение.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
