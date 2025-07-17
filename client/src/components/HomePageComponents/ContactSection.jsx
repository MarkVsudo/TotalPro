import { useState } from "react";
import { FiPhone } from "react-icons/fi";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { FiMapPin } from "react-icons/fi";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    // Allow only digits and limit to 9 digits after +359
    const phoneNumber = value.replace(/\D/g, "").slice(0, 9);
    setFormData((prev) => ({
      ...prev,
      phone: phoneNumber,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your server
    alert("Съобщението е изпратено успешно!");
  };

  return (
    <section
      id="contact"
      className="py-24 px-4 max-w-6xl mx-auto min-h-screenpx-4"
    >
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Left Section - Contact Info */}
        <div className="bg-white p-8 rounded-lg shadow-sm">
          <h1 className="text-4xl font-bold text-[#002B5B] mb-6">
            Свържете се с нас
          </h1>

          <p className="text-gray-700 mb-6 leading-relaxed">
            Предлагаме професионални услуги за климатици, електрически
            инсталации, хамалски услуги и гипсокартон. Свържете се с нас за
            безплатна консултация и оферта, адаптирана към вашите нужди.
          </p>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-[#002B5B] p-3 rounded-lg">
                <FiMapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-medium text-gray-900">София, България</p>
                <p className="text-gray-700">
                  Обслужваме цяла София и областта
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-[#002B5B] p-3 rounded-lg">
                <FiPhone className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-medium text-gray-900">+359 88 930 3334</p>
                <p className="text-gray-700">
                  Обаждайте се всеки ден 8:00 - 20:00
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-[#002B5B] p-3 rounded-lg">
                <EnvelopeIcon className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-medium text-gray-900">total.pro@mail.bg</p>
                <p className="text-gray-700">Отговаряме в рамките на 2 часа</p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-[#002B5B] rounded-lg">
            <h3 className="font-semibold text-white mb-3">Нашите услуги:</h3>
            <ul className="text-gray-200 space-y-2 text-sm">
              <li>• Продажба и монтаж на климатици</li>
              <li>• Демонтаж на стари климатици</li>
              <li>• Електрически услуги</li>
              <li>• Хамалски услуги</li>
              <li>• Гипсокартонни конструкции</li>
              <li>• Сигнализация и охранителни системи</li>
              <li>• Водоинсталационни и канализационни работи</li>
              <li>• Плочкаджийство</li>
              <li>• Производство на мебели</li>
            </ul>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-sm">
          <div className="space-y-6">
            {/* Name Fields */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Име<span className="text-red-500">*</span>
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-[#002B5B] rounded-lg focus:border-blue-900 transition-colors"
                  placeholder="Вашето име"
                />
              </div>

              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Фамилия<span className="text-red-500">*</span>
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-[#002B5B] rounded-lg focus:border-blue-900 transition-colors"
                  placeholder="Вашата фамилия"
                />
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Имейл адрес<span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-[#002B5B] rounded-lg focus:border-blue-900 transition-colors"
                placeholder="your.email@example.com"
              />
            </div>

            {/* Phone Field */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Телефонен номер<span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                  <span className="text-gray-700 font-medium">+359</span>
                </div>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  className="w-full pl-16 pr-4 py-3 border border-[#002B5B] rounded-lg focus:border-blue-900 transition-colors"
                  placeholder="88 123 4567"
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Моля, въведете 9-цифрен номер без кода +359
              </p>
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Съобщение<span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-[#002B5B] rounded-lg focus:border-blue-900 transition-colors resize-vertical"
                placeholder="Опишете вашите нужди - каква услуга ви трябва, кога, къде и други детайли..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="button"
              onClick={handleSubmit}
              className="w-full bg-[#002B5B] text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-900 focus:ring-2 focus:ring-[#002B5B] focus:ring-offset-2 transition-colors duration-200 cursor-pointer"
            >
              Изпрати съобщение
            </button>

            <p className="text-xs text-gray-500 text-center">
              * Задължителни полета. Вашите данни ще бъдат използвани само за
              връзка с вас.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
