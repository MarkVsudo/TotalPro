import React from "react";
import {
  FiShield,
  FiUser,
  FiLock,
  FiDatabase,
  FiCreditCard,
  FiMail,
} from "react-icons/fi";

const PrivacyPage = () => {
  return (
    <section className="relative bg-white">
      {/* subtle background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-white to-[#002B5B]/[0.04]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 text-[#002B5B]">
        {/* Header */}
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Политика за поверителност
          </h1>

          <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-700">
            Настоящата политика описва как{" "}
            <span className="font-semibold">ТОТАЛ ПРО ЕООД</span> обработва и
            защитава личните данни на потребителите на{" "}
            <span className="font-semibold">totalpro.bg</span>, съгласно
            изискванията на GDPR и българското законодателство.
          </p>

          <div className="mt-6 rounded-2xl bg-[#002B5B]/5 p-4 sm:p-5 ring-1 ring-[#002B5B]/10">
            <p className="text-[#002B5B] font-semibold">
              🔒 Ние събираме само данни, необходими за изпълнение на поръчка,
              доставка, монтаж и плащане. Не продаваме и не споделяме лични
              данни за маркетинг.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Data we collect */}
          <div className="group rounded-2xl bg-white p-6 sm:p-7 shadow-sm ring-1 ring-[#002B5B]/10">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#002B5B] text-white">
              <FiUser className="h-6 w-6" />
            </div>
            <h2 className="mt-4 text-lg sm:text-xl font-bold">
              1) Какви данни събираме
            </h2>

            <ul className="mt-3 list-disc pl-6 space-y-2 text-slate-600">
              <li>Име и фамилия</li>
              <li>Телефонен номер</li>
              <li>Имейл адрес</li>
              <li>Адрес за доставка</li>
              <li>Данни за фактура</li>
            </ul>
          </div>

          {/* Purpose */}
          <div className="group rounded-2xl bg-white p-6 sm:p-7 shadow-sm ring-1 ring-[#002B5B]/10">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#002B5B] text-white">
              <FiDatabase className="h-6 w-6" />
            </div>
            <h2 className="mt-4 text-lg sm:text-xl font-bold">
              2) Защо обработваме данните
            </h2>

            <ul className="mt-3 list-disc pl-6 space-y-2 text-slate-600">
              <li>Изпълнение на поръчка</li>
              <li>Доставка на стоки</li>
              <li>Организиране на монтаж</li>
              <li>Издаване на фактура</li>
              <li>Комуникация с клиента</li>
              <li>Спазване на законови задължения</li>
            </ul>
          </div>

          {/* Legal basis */}
          <div className="group rounded-2xl bg-white p-6 sm:p-7 shadow-sm ring-1 ring-[#002B5B]/10">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#002B5B] text-white">
              <FiLock className="h-6 w-6" />
            </div>
            <h2 className="mt-4 text-lg sm:text-xl font-bold">
              3) Правно основание
            </h2>

            <p className="mt-2 text-slate-600">
              Данните се обработват съгласно:
            </p>

            <ul className="mt-3 list-disc pl-6 space-y-2 text-slate-600">
              <li>чл. 6(1)(b) GDPR – изпълнение на договор</li>
              <li>чл. 6(1)(c) GDPR – законово задължение</li>
            </ul>
          </div>

          {/* Payments */}
          <div className="group rounded-2xl bg-white p-6 sm:p-7 shadow-sm ring-1 ring-[#002B5B]/10">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#002B5B] text-white">
              <FiCreditCard className="h-6 w-6" />
            </div>
            <h2 className="mt-4 text-lg sm:text-xl font-bold">
              4) Плащания с карта (myPOS)
            </h2>

            <p className="mt-2 text-slate-600">
              Плащанията с карта се обработват от платежния оператор{" "}
              <span className="font-semibold">myPOS</span>.
            </p>

            <p className="mt-3 text-slate-600">
              ТОТАЛ ПРО ЕООД не съхранява номера на банкови карти и няма достъп
              до платежни данни.
            </p>
          </div>

          {/* Data sharing */}
          <div className="group rounded-2xl bg-white p-6 sm:p-7 shadow-sm ring-1 ring-[#002B5B]/10">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#002B5B] text-white">
              <FiShield className="h-6 w-6" />
            </div>
            <h2 className="mt-4 text-lg sm:text-xl font-bold">
              5) Предоставяне на данни
            </h2>

            <ul className="mt-3 list-disc pl-6 space-y-2 text-slate-600">
              <li>Куриерски фирми (за доставка)</li>
              <li>Счетоводство</li>
              <li>Платежен оператор (myPOS)</li>
            </ul>
          </div>

          {/* Retention */}
          <div className="group rounded-2xl bg-white p-6 sm:p-7 shadow-sm ring-1 ring-[#002B5B]/10">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#002B5B] text-white">
              <FiDatabase className="h-6 w-6" />
            </div>
            <h2 className="mt-4 text-lg sm:text-xl font-bold">
              6) Срок на съхранение
            </h2>

            <ul className="mt-3 list-disc pl-6 space-y-2 text-slate-600">
              <li>Счетоводни документи – 10 години</li>
              <li>Потребителски акаунт – до изтриване</li>
            </ul>
          </div>
        </div>

        {/* Rights */}
        <div className="mt-10 rounded-2xl bg-white p-6 sm:p-7 shadow-sm ring-1 ring-[#002B5B]/10">
          <h2 className="text-lg sm:text-xl font-bold">
            7) Права на потребителя
          </h2>

          <ul className="mt-3 list-disc pl-6 space-y-2 text-slate-600">
            <li>Право на достъп до личните данни</li>
            <li>Право на корекция</li>
            <li>Право на изтриване</li>
            <li>Право на ограничаване</li>
            <li>Право на жалба до КЗЛД</li>
          </ul>
        </div>

        {/* Company */}
        <div className="mt-10 rounded-2xl bg-[#002B5B]/5 p-6 sm:p-7 ring-1 ring-[#002B5B]/10">
          <h3 className="text-lg font-bold">Администратор на данни</h3>

          <div className="mt-3 space-y-1 text-slate-700">
            <p className="font-semibold">ТОТАЛ ПРО ЕООД</p>
            <p>ЕИК: 207752096</p>
            <p>ДДС №: BG207752096</p>
            <p>Адрес: гр. София, жк. Дружба 1, бл. 74, вх. А, ет. 10, ап. 45</p>

            <p>
              Имейл:{" "}
              <a
                href="mailto:support@totalpro.bg"
                className="font-semibold underline underline-offset-4"
              >
                totalproltd@gmail.com
              </a>
            </p>
          </div>
        </div>

        <p className="mt-10 text-sm text-slate-500">
          Последна актуализация: 19.02.2026
        </p>
      </div>
    </section>
  );
};

export default PrivacyPage;
