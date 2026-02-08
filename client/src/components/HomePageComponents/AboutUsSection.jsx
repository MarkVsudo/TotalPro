import React from "react";
import { FiPhone } from "react-icons/fi";
import { VscTools } from "react-icons/vsc";
import { FaRegHandshake } from "react-icons/fa6";

import AboutUsImg from "../../assets/about-us-img.png";

const AboutUsSection = () => {
  return (
    <section id="about-us" className="relative bg-white">
      {/* subtle background separation */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-white to-[#002B5B]/[0.04]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 text-[#002B5B]">
        {/* Top: Text + Image */}
        <div className="grid items-center gap-10 lg:gap-14 lg:grid-cols-2">
          {/* Text block */}
          <div className="order-2 lg:order-1">
            <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Изградихме дейността си върху уважението към клиента
            </h2>

            <div className="mt-6 space-y-4 text-base sm:text-lg leading-relaxed text-slate-700">
              <p>
                От първия ден вярваме, че успехът се гради върху коректност,
                яснота и истинско отношение към хората. При нас няма{" "}
                <span className="font-semibold">„само да мине номерът“</span>{" "}
                или{" "}
                <span className="font-semibold">
                  „няма смисъл да се стараем“
                </span>
                . Всеки клиент е важен, а всяка услуга е изпълнена така, както
                бихме я направили и за себе си.
              </p>

              <p>
                🎯 За нас няма маловажна поръчка, няма „пренебрежим проблем“, и
                със сигурност няма изрази като:
              </p>

              <div className="rounded-2xl bg-[#002B5B]/5 p-4 sm:p-5 ring-1 ring-[#002B5B]/10">
                <p className="text-[#002B5B] font-semibold italic">
                  „Защо да се старая – да не би да го правя за нас?“
                </p>
              </div>

              <p className="font-semibold text-[#002B5B]">
                💡 Ценим всяко доверие. Искаме не просто да свършим работа, а да
                я свършим така, че да ни препоръчаш с увереност.
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative mx-auto w-full max-w-xl overflow-hidden rounded-3xl bg-white">
              <img
                src={AboutUsImg}
                alt="Our team at work"
                className="w-full h-auto drop-shadow-[0_10px_15px_rgba(0,0,0,0.25)]"
              />
            </div>
          </div>
        </div>

        {/* Bottom features */}
        <div className="mt-14 sm:mt-16 lg:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Feature card */}
          <div className="group rounded-2xl bg-white p-6 sm:p-7 shadow-sm ring-1 ring-[#002B5B]/10 transition hover:-translate-y-1 hover:shadow-md hover:ring-[#002B5B]/20">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#002B5B] text-white shadow-sm">
              <FaRegHandshake className="h-6 w-6" />
            </div>
            <h4 className="mt-4 text-lg font-bold text-[#002B5B]">
              Коректност без компромис
            </h4>
            <p className="mt-2 text-slate-600 leading-relaxed">
              Ясни условия, точни срокове и отношение без излишни обещания –
              само реални резултати.
            </p>
          </div>

          <div className="group rounded-2xl bg-white p-6 sm:p-7 shadow-sm ring-1 ring-[#002B5B]/10 transition hover:-translate-y-1 hover:shadow-md hover:ring-[#002B5B]/20">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#002B5B] text-white shadow-sm">
              <VscTools className="h-6 w-6" />
            </div>
            <h4 className="mt-4 text-lg font-bold text-[#002B5B]">
              Опит и внимание към детайла
            </h4>
            <p className="mt-2 text-slate-600 leading-relaxed">
              Работим с утвърдени специалисти – от монтаж на климатици до
              електроинсталации и сухо строителство.
            </p>
          </div>

          <div className="group rounded-2xl bg-white p-6 sm:p-7 shadow-sm ring-1 ring-[#002B5B]/10 transition hover:-translate-y-1 hover:shadow-md hover:ring-[#002B5B]/20">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#002B5B] text-white shadow-sm">
              <FiPhone className="h-6 w-6" />
            </div>
            <h4 className="mt-4 text-lg font-bold text-[#002B5B]">
              Винаги отзивчиви
            </h4>
            <p className="mt-2 text-slate-600 leading-relaxed">
              При нас няма автоматични гласове и „изчакайте на линия“. Реални
              хора – с истинско отношение.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
