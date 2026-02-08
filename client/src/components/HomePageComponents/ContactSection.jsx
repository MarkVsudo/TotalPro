import { useEffect, useRef, useState } from "react";
import axios from "axios";

import { FiPhone, FiMapPin } from "react-icons/fi";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

import ErrorAlert from "../shared/ErrorAlert";
import SucessAlert from "../shared/SucessAlert";

export default function ContactForm() {
  const [isSuccess, setIsSuccess] = useState(null); // null | true | false
  const [isSending, setIsSending] = useState(false);
  const alertRef = useRef(null);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "", // store only digits (9 digits)
    message: "",
  });

  // Scroll to alert on success/error (nice on mobile)
  useEffect(() => {
    if (isSuccess === null) return;
    alertRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [isSuccess]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhoneChange = (e) => {
    // allow typing spaces etc., but store only digits, max 9
    const digitsOnly = e.target.value.replace(/\D/g, "").slice(0, 9);
    setFormData((prev) => ({ ...prev, phone: digitsOnly }));
  };

  const phoneDisplay = (digits) => {
    // simple pretty formatting: 88 123 4567
    const d = digits || "";
    const a = d.slice(0, 2);
    const b = d.slice(2, 5);
    const c = d.slice(5, 9);
    return [a, b, c].filter(Boolean).join(" ");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSending) return;

    setIsSending(true);
    setIsSuccess(null);

    try {
      await axios.post("/api/mailer/send", formData);
      setIsSuccess(true);

      // Reset form after success
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (err) {
      console.error("Error sending email:", err);
      setIsSuccess(false);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="relative">
      {/* subtle background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-white to-[#002B5B]/[0.04]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div ref={alertRef} className="mb-6">
          {isSuccess === true && (
            <SucessAlert text="Имейлът е изпратен успешно." />
          )}
          {isSuccess === false && (
            <ErrorAlert text="Имаше грешка при изпращането на имейл." />
          )}
        </div>

        <div className="grid gap-8 lg:gap-12 lg:grid-cols-2 items-start">
          {/* Left: Contact info */}
          <div className="rounded-2xl bg-white p-6 sm:p-8 shadow-sm ring-1 ring-[#002B5B]/10">
            <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#002B5B]">
              Свържете се с нас
            </h1>

            <p className="mt-5 text-slate-600 leading-relaxed">
              Предлагаме професионални услуги за климатици, електрически
              инсталации, хамалски услуги и гипсокартон. Свържете се с нас за
              безплатна консултация и оферта, адаптирана към вашите нужди.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-4">
                <div className="shrink-0 rounded-xl bg-[#002B5B] p-3 shadow-sm">
                  <FiMapPin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">
                    София, България
                  </p>
                  <p className="text-slate-600">
                    Обслужваме цяла София и областта
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="shrink-0 rounded-xl bg-[#002B5B] p-3 shadow-sm">
                  <FiPhone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">
                    +359 88 930 3334
                  </p>
                  <p className="text-slate-600">Всеки ден 8:00 – 20:00</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="shrink-0 rounded-xl bg-[#002B5B] p-3 shadow-sm">
                  <EnvelopeIcon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">
                    totalproltd@gmail.com
                  </p>
                  <p className="text-slate-600">
                    Отговаряме в рамките на 2 часа
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 rounded-2xl bg-[#002B5B] p-6 ring-1 ring-white/10">
              <h3 className="font-semibold text-white">Нашите услуги</h3>
              <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-white/85">
                <li>• Продажба и монтаж на климатици</li>
                <li>• Демонтаж на стари климатици</li>
                <li>• Електрически услуги</li>
                <li>• Хамалски услуги</li>
                <li>• Гипсокартонни конструкции</li>
                <li>• Сигнализация и охранителни системи</li>
                <li>• ВиК и канализационни работи</li>
                <li>• Плочкаджийство</li>
                <li className="sm:col-span-2">• Производство на мебели</li>
              </ul>
            </div>
          </div>

          {/* Right: Form */}
          <div className="rounded-2xl bg-white p-6 sm:p-8 shadow-sm ring-1 ring-[#002B5B]/10">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-semibold text-slate-700"
                  >
                    Име <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="mt-2 w-full rounded-xl border border-[#002B5B]/25 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-[#002B5B] focus:ring-2 focus:ring-[#002B5B]/20"
                    placeholder="Вашето име"
                    autoComplete="given-name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-semibold text-slate-700"
                  >
                    Фамилия <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="mt-2 w-full rounded-xl border border-[#002B5B]/25 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-[#002B5B] focus:ring-2 focus:ring-[#002B5B]/20"
                    placeholder="Вашата фамилия"
                    autoComplete="family-name"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-slate-700"
                >
                  Имейл адрес <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-2 w-full rounded-xl border border-[#002B5B]/25 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-[#002B5B] focus:ring-2 focus:ring-[#002B5B]/20"
                  placeholder="your.email@example.com"
                  autoComplete="email"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-slate-700"
                >
                  Телефонен номер <span className="text-red-500">*</span>
                </label>

                <div className="mt-2 relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                    <span className="text-slate-700 font-semibold">+359</span>
                  </div>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={phoneDisplay(formData.phone)}
                    onChange={handlePhoneChange}
                    inputMode="numeric"
                    className="w-full rounded-xl border border-[#002B5B]/25 bg-white pl-16 pr-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-[#002B5B] focus:ring-2 focus:ring-[#002B5B]/20"
                    placeholder="88 123 4567"
                    autoComplete="tel"
                  />
                </div>

                <p className="mt-1 text-xs text-slate-500">
                  Въведете 9-цифрен номер без кода +359.
                </p>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-slate-700"
                >
                  Съобщение <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  className="mt-2 w-full rounded-xl border border-[#002B5B]/25 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-[#002B5B] focus:ring-2 focus:ring-[#002B5B]/20 resize-y"
                  placeholder="Опишете вашите нужди - каква услуга ви трябва, кога, къде и други детайли..."
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSending}
                className="w-full rounded-xl bg-[#002B5B] px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-[#003d7a] focus:outline-none focus:ring-2 focus:ring-[#002B5B]/50 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSending ? "Изпращане..." : "Изпрати съобщение"}
              </button>

              <p className="text-xs text-slate-500 text-center">
                * Задължителни полета. Данните се използват само за контакт с
                вас.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
