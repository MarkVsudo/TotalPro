import React from "react";
import {
  FiShield,
  FiInfo,
  FiSettings,
  FiCreditCard,
  FiLock,
} from "react-icons/fi";

const CookiesPage = () => {
  return (
    <section className="relative bg-white">
      {/* subtle background separation */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-white to-[#002B5B]/[0.04]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 text-[#002B5B]">
        {/* Header */}
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Политика за бисквитки
          </h1>
          <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-700">
            Тази страница обяснява как{" "}
            <span className="font-semibold">ТОТАЛ ПРО ЕООД</span> използва
            бисквитки и сходни технологии в уебсайта{" "}
            <span className="font-semibold">totalpro.bg</span>.
          </p>

          <div className="mt-6 rounded-2xl bg-[#002B5B]/5 p-4 sm:p-5 ring-1 ring-[#002B5B]/10">
            <p className="text-[#002B5B] font-semibold">
              ✅ Използваме само строго необходими (технически) бисквитки за
              логин, сесия и сигурност. Нямаме аналитични или маркетингови
              бисквитки.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* What are cookies */}
          <div className="group rounded-2xl bg-white p-6 sm:p-7 shadow-sm ring-1 ring-[#002B5B]/10 transition hover:-translate-y-1 hover:shadow-md hover:ring-[#002B5B]/20">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#002B5B] text-white shadow-sm">
              <FiInfo className="h-6 w-6" />
            </div>
            <h2 className="mt-4 text-lg sm:text-xl font-bold text-[#002B5B]">
              1) Какво са бисквитките
            </h2>
            <p className="mt-2 text-slate-600 leading-relaxed">
              Бисквитките са малки текстови файлове, които се записват на Вашето
              устройство при посещение на сайт. Те помагат на сайта да работи
              коректно и да запази определени настройки (например вход в
              профил).
            </p>
          </div>

          {/* What we use */}
          <div className="group rounded-2xl bg-white p-6 sm:p-7 shadow-sm ring-1 ring-[#002B5B]/10 transition hover:-translate-y-1 hover:shadow-md hover:ring-[#002B5B]/20">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#002B5B] text-white shadow-sm">
              <FiShield className="h-6 w-6" />
            </div>
            <h2 className="mt-4 text-lg sm:text-xl font-bold text-[#002B5B]">
              2) Какви бисквитки използваме
            </h2>
            <p className="mt-2 text-slate-600 leading-relaxed">
              Използваме само{" "}
              <span className="font-semibold">строго необходими</span>{" "}
              бисквитки, които са нужни, за да функционира сайтът:
            </p>

            <ul className="mt-3 list-disc pl-6 space-y-2 text-slate-600 leading-relaxed">
              <li>вход в потребителски профил и поддържане на сесия</li>
              <li>функциониране на количката и завършване на поръчка</li>
              <li>защита и сигурност (предотвратяване на злоупотреби)</li>
            </ul>

            <p className="mt-4 text-slate-600 leading-relaxed">
              Тези бисквитки не се използват за рекламиране и не проследяват
              Вашето поведение извън totalpro.bg.
            </p>
          </div>

          {/* Consent */}
          <div className="group rounded-2xl bg-white p-6 sm:p-7 shadow-sm ring-1 ring-[#002B5B]/10 transition hover:-translate-y-1 hover:shadow-md hover:ring-[#002B5B]/20">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#002B5B] text-white shadow-sm">
              <FiLock className="h-6 w-6" />
            </div>
            <h2 className="mt-4 text-lg sm:text-xl font-bold text-[#002B5B]">
              3) Нужно ли е съгласие
            </h2>
            <p className="mt-2 text-slate-600 leading-relaxed">
              Строго необходимите бисквитки могат да се използват без
              предварително съгласие, защото са нужни за предоставяне на
              услугата (например логин и поръчка). Понеже не използваме
              аналитични/маркетингови бисквитки, не показваме банер
              „Приемам/Отказвам“.
            </p>
          </div>

          {/* Third parties */}
          <div className="group rounded-2xl bg-white p-6 sm:p-7 shadow-sm ring-1 ring-[#002B5B]/10 transition hover:-translate-y-1 hover:shadow-md hover:ring-[#002B5B]/20">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#002B5B] text-white shadow-sm">
              <FiCreditCard className="h-6 w-6" />
            </div>
            <h2 className="mt-4 text-lg sm:text-xl font-bold text-[#002B5B]">
              4) Бисквитки от трети страни (myPOS)
            </h2>
            <p className="mt-2 text-slate-600 leading-relaxed">
              При плащане с карта чрез платежния оператор{" "}
              <span className="font-semibold">myPOS</span> е възможно той да
              използва собствени технически бисквитки/технологии, необходими за
              сигурната обработка на транзакцията.
            </p>
            <p className="mt-3 text-slate-600 leading-relaxed">
              <span className="font-semibold">ТОТАЛ ПРО ЕООД</span> не съхранява
              данни за банкови карти и няма достъп до настройките/бисквитките на
              платежния оператор.
            </p>
          </div>
        </div>

        {/* Browser settings */}
        <div className="mt-10 rounded-2xl bg-white p-6 sm:p-7 shadow-sm ring-1 ring-[#002B5B]/10">
          <div className="flex items-start gap-4">
            <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#002B5B] text-white shadow-sm">
              <FiSettings className="h-6 w-6" />
            </div>

            <div>
              <h2 className="text-lg sm:text-xl font-bold text-[#002B5B]">
                5) Как да управлявате бисквитките
              </h2>
              <p className="mt-2 text-slate-600 leading-relaxed">
                Можете да контролирате и изтривате бисквитки чрез настройките на
                Вашия браузър. Имайте предвид, че ако деактивирате техническите
                бисквитки, части от сайта (логин, количка, поръчка) може да не
                работят коректно.
              </p>
            </div>
          </div>
        </div>

        {/* Company block */}
        <div className="mt-10 rounded-2xl bg-[#002B5B]/5 p-6 sm:p-7 ring-1 ring-[#002B5B]/10">
          <h3 className="text-lg font-bold text-[#002B5B]">
            Данни за администратора
          </h3>
          <div className="mt-3 space-y-1 text-slate-700">
            <p>
              <span className="font-semibold">ТОТАЛ ПРО ЕООД</span>
            </p>
            <p>ЕИК: 207752096</p>
            <p>ДДС №: BG207752096</p>
            <p>Адрес: гр. София, жк. Дружба 1, бл. 74, вх. А, ет. 10, ап. 45</p>
            <p>
              Имейл:{" "}
              <a
                href="mailto:support@totalpro.bg"
                className="font-semibold underline underline-offset-4 decoration-[#002B5B]/40 hover:decoration-[#002B5B]"
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

export default CookiesPage;
