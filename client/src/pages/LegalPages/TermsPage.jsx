import React from "react";
import {
  FiFileText,
  FiShoppingCart,
  FiTruck,
  FiCreditCard,
  FiRotateCcw,
  FiTool,
  FiShield,
  FiAlertTriangle,
  FiPhone,
} from "react-icons/fi";

const TermsPage = () => {
  return (
    <section className="relative bg-white">
      {/* subtle background separation */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-white to-[#002B5B]/[0.04]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 text-[#002B5B]">
        {/* Header */}
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Общи условия
          </h1>

          <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-700">
            Настоящите Общи условия уреждат отношенията между{" "}
            <span className="font-semibold">ТОТАЛ ПРО ЕООД</span> (наричано
            по-долу „Търговец“) и потребителите на{" "}
            <span className="font-semibold">totalpro.bg</span> във връзка с
            покупко-продажба на стоки (климатични системи и монтажни аксесоари)
            и предоставяне на услуга{" "}
            <span className="font-semibold">монтаж на климатични системи</span>.
          </p>

          <div className="mt-6 rounded-2xl bg-[#002B5B]/5 p-4 sm:p-5 ring-1 ring-[#002B5B]/10">
            <p className="text-[#002B5B] font-semibold">
              ℹ️ Важно: При поръчка на монтаж може да се изисква изрично
              съгласие услугата да започне преди изтичане на 14-дневния срок за
              отказ, което води до ограничения на правото на отказ (виж секция
              „Монтаж и отказ“).
            </p>
          </div>
        </div>

        {/* Cards grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Trader info */}
          <div className="group rounded-2xl bg-white p-6 sm:p-7 shadow-sm ring-1 ring-[#002B5B]/10">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#002B5B] text-white shadow-sm">
              <FiFileText className="h-6 w-6" />
            </div>
            <h2 className="mt-4 text-lg sm:text-xl font-bold">
              1) Данни за търговеца
            </h2>

            <div className="mt-3 space-y-1 text-slate-700">
              <p className="font-semibold">ТОТАЛ ПРО ЕООД</p>
              <p>ЕИК: 207752096</p>
              <p>ДДС №: BG207752096</p>
              <p>
                Адрес: гр. София, жк. Дружба 1, бл. 74, вх. А, ет. 10, ап. 45
              </p>
              <p>
                Имейл:{" "}
                <a
                  href="mailto:support@totalpro.bg"
                  className="font-semibold underline underline-offset-4 decoration-[#002B5B]/40 hover:decoration-[#002B5B]"
                >
                  totalproltd@gmail.com
                </a>
              </p>
              <p className="text-slate-600">
                Телефон: <span className="font-semibold">[добави телефон]</span>
              </p>
            </div>
          </div>

          {/* Orders & contract */}
          <div className="group rounded-2xl bg-white p-6 sm:p-7 shadow-sm ring-1 ring-[#002B5B]/10">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#002B5B] text-white shadow-sm">
              <FiShoppingCart className="h-6 w-6" />
            </div>
            <h2 className="mt-4 text-lg sm:text-xl font-bold">
              2) Поръчка и сключване на договор
            </h2>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-slate-600 leading-relaxed">
              <li>
                Поръчки се правят през сайта (с регистрация или като гост, ако е
                налично).
              </li>
              <li>
                Договорът за покупка се счита за сключен след
                потвърждение/приемане на поръчката от Търговеца (напр. чрез
                имейл или статус в профила).
              </li>
              <li>
                Търговецът може да откаже поръчка при липса на наличност,
                техническа грешка в цена/описание или съмнение за злоупотреба.
              </li>
            </ul>
          </div>

          {/* Prices & payments */}
          <div className="group rounded-2xl bg-white p-6 sm:p-7 shadow-sm ring-1 ring-[#002B5B]/10">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#002B5B] text-white shadow-sm">
              <FiCreditCard className="h-6 w-6" />
            </div>
            <h2 className="mt-4 text-lg sm:text-xl font-bold">
              3) Цени и плащания
            </h2>

            <p className="mt-2 text-slate-600 leading-relaxed">
              Всички цени са в лева (BGN) и включват ДДС, освен ако изрично не е
              посочено друго. Възможни методи на плащане:
            </p>

            <ul className="mt-3 list-disc pl-6 space-y-2 text-slate-600 leading-relaxed">
              <li>Наложен платеж (ако е активен)</li>
              <li>Банков превод (ако е активен)</li>
              <li>
                Онлайн плащане с карта чрез{" "}
                <span className="font-semibold">myPOS</span>
              </li>
            </ul>

            <div className="mt-4 rounded-2xl bg-[#002B5B]/5 p-4 ring-1 ring-[#002B5B]/10">
              <p className="text-slate-700 leading-relaxed">
                При плащане с карта транзакцията се обработва от myPOS.
                Търговецът <span className="font-semibold">не съхранява</span>{" "}
                данни за банкови карти.
              </p>
            </div>
          </div>

          {/* Shipping */}
          <div className="group rounded-2xl bg-white p-6 sm:p-7 shadow-sm ring-1 ring-[#002B5B]/10">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#002B5B] text-white shadow-sm">
              <FiTruck className="h-6 w-6" />
            </div>
            <h2 className="mt-4 text-lg sm:text-xl font-bold">4) Доставка</h2>
            <ul className="mt-3 list-disc pl-6 space-y-2 text-slate-600 leading-relaxed">
              <li>
                Доставка се извършва чрез куриер до адрес или офис (според
                наличните опции).
              </li>
              <li>
                Ориентировъчен срок: 1–3 работни дни (може да варира според
                наличност и адрес).
              </li>
              <li>
                Цената на доставка се изчислява при финализиране на поръчката.
              </li>
              <li>
                Клиентът е длъжен да провери пратката при получаване. При видими
                повреди се съставя протокол с куриера.
              </li>
            </ul>
          </div>

          {/* Returns for goods */}
          <div className="group rounded-2xl bg-white p-6 sm:p-7 shadow-sm ring-1 ring-[#002B5B]/10">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#002B5B] text-white shadow-sm">
              <FiRotateCcw className="h-6 w-6" />
            </div>
            <h2 className="mt-4 text-lg sm:text-xl font-bold">
              5) Право на отказ и връщане (за стоки)
            </h2>

            <p className="mt-2 text-slate-600 leading-relaxed">
              Потребителят има право да се откаже от договора за покупка на
              стоки в срок от <span className="font-semibold">14 дни</span> от
              получаването им, без да посочва причина, съгласно Закона за защита
              на потребителите.
            </p>

            <ul className="mt-3 list-disc pl-6 space-y-2 text-slate-600 leading-relaxed">
              <li>
                Стоката трябва да е без следи от употреба/монтаж и в търговски
                вид.
              </li>
              <li>
                Да е в оригинална опаковка и с всички принадлежности/документи
                (ако приложимо).
              </li>
              <li>
                Разходите за връщане са за сметка на клиента, освен ако не е
                уговорено друго.
              </li>
              <li>
                Възстановяването на суми се извършва след приемане и проверка на
                върнатата стока.
              </li>
            </ul>

            <div className="mt-4 rounded-2xl bg-white p-4 ring-1 ring-[#002B5B]/10">
              <p className="text-slate-700 font-semibold">
                Формуляр за отказ (текст):
              </p>
              <p className="mt-2 text-slate-600 leading-relaxed">
                До: ТОТАЛ ПРО ЕООД (support@totalpro.bg) <br />
                С настоящото уведомявам/уведомяваме, че се отказвам/отказваме от
                договора за покупка на следната стока/стоки: [описание] <br />
                Поръчка №: [номер], Дата: [дата], Име: [име], Адрес: [адрес]{" "}
                <br />
                Банкова сметка (IBAN) за възстановяване (ако е необходимо):
                [IBAN] <br />
                Дата и подпис (ако е на хартия)
              </p>
            </div>
          </div>

          {/* Installation */}
          <div className="group rounded-2xl bg-white p-6 sm:p-7 shadow-sm ring-1 ring-[#002B5B]/10">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#002B5B] text-white shadow-sm">
              <FiTool className="h-6 w-6" />
            </div>
            <h2 className="mt-4 text-lg sm:text-xl font-bold">
              6) Монтаж (услуга) и условия
            </h2>

            <ul className="mt-3 list-disc pl-6 space-y-2 text-slate-600 leading-relaxed">
              <li>
                Монтажът се извършва на предварително уговорена дата и час.
              </li>
              <li>
                Клиентът осигурява достъп до обекта и условия за безопасна
                работа.
              </li>
              <li>
                Допълнителни дейности/материали извън стандартния монтаж (ако
                има) се договарят и заплащат отделно.
              </li>
              <li>
                При невъзможност за монтаж по причини извън контрола на
                Търговеца (липса на достъп, неподходящи условия и др.) може да
                се начислят разходи за посещение, ако това е предварително
                уговорено.
              </li>
            </ul>

            <div className="mt-4 rounded-2xl bg-[#002B5B]/5 p-4 ring-1 ring-[#002B5B]/10">
              <p className="text-slate-700 leading-relaxed">
                <span className="font-semibold">Монтаж и право на отказ:</span>{" "}
                Когато услугата започне преди да изтекат 14 дни, може да се
                прилагат ограничения на правото на отказ. В checkout добави
                чекбокс:
              </p>
              <p className="mt-2 text-[#002B5B] font-semibold">
                „Желая услугата монтаж да започне преди изтичане на 14 дни и съм
                информиран, че при извършване на услугата губя правото си на
                отказ.“
              </p>
            </div>
          </div>
        </div>

        {/* Warranty & complaints */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          <div className="rounded-2xl bg-white p-6 sm:p-7 shadow-sm ring-1 ring-[#002B5B]/10">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#002B5B] text-white shadow-sm">
              <FiShield className="h-6 w-6" />
            </div>
            <h2 className="mt-4 text-lg sm:text-xl font-bold">
              7) Гаранции и рекламации
            </h2>

            <p className="mt-2 text-slate-600 leading-relaxed">
              За стоките важи минимум{" "}
              <span className="font-semibold">24 месеца</span> законова
              гаранция. За климатични системи може да важат и условия на
              производителя (напр. изискване за монтаж от квалифициран техник).
            </p>

            <p className="mt-3 text-slate-600 leading-relaxed">
              Рекламации се подават на{" "}
              <a
                href="mailto:support@totalpro.bg"
                className="font-semibold underline underline-offset-4 decoration-[#002B5B]/40 hover:decoration-[#002B5B]"
              >
                support@totalpro.bg
              </a>{" "}
              с описание на проблема и данни за поръчката. Отговор се предоставя
              в законовите срокове.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 sm:p-7 shadow-sm ring-1 ring-[#002B5B]/10">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#002B5B] text-white shadow-sm">
              <FiAlertTriangle className="h-6 w-6" />
            </div>
            <h2 className="mt-4 text-lg sm:text-xl font-bold">
              8) Ограничение на отговорност
            </h2>

            <p className="mt-2 text-slate-600 leading-relaxed">
              Търговецът не носи отговорност за вреди, причинени от неправилна
              употреба, неправилен монтаж от трети лица, неспазване на
              инструкциите на производителя или външни фактори (напр. токови
              удари), освен ако законът не предвижда друго.
            </p>

            <p className="mt-3 text-slate-600 leading-relaxed">
              Описанията и снимките на продуктите са с информативен характер.
              Възможни са разлики в опаковка/визия, когато това не променя
              функционалността.
            </p>
          </div>
        </div>

        {/* Disputes + contacts */}
        <div className="mt-10 rounded-2xl bg-[#002B5B]/5 p-6 sm:p-7 ring-1 ring-[#002B5B]/10">
          <div className="flex items-start gap-4">
            <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#002B5B] text-white shadow-sm">
              <FiPhone className="h-6 w-6" />
            </div>

            <div className="w-full">
              <h2 className="text-lg sm:text-xl font-bold">
                9) Контакти и спорове
              </h2>

              <p className="mt-2 text-slate-700 leading-relaxed">
                За въпроси и съдействие:{" "}
                <a
                  href="mailto:support@totalpro.bg"
                  className="font-semibold underline underline-offset-4 decoration-[#002B5B]/40 hover:decoration-[#002B5B]"
                >
                  support@totalpro.bg
                </a>{" "}
                или телефон{" "}
                <span className="font-semibold">[добави телефон]</span>.
              </p>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-2xl bg-white p-4 ring-1 ring-[#002B5B]/10">
                  <p className="font-semibold text-[#002B5B]">КЗП</p>
                  <p className="mt-1 text-slate-600">
                    Комисия за защита на потребителите (КЗП) – подаване на жалби
                    и потребителска защита.
                  </p>
                  <p className="mt-2 text-slate-600">
                    Уебсайт: <span className="font-semibold">kzp.bg</span>
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-4 ring-1 ring-[#002B5B]/10">
                  <p className="font-semibold text-[#002B5B]">ODR платформа</p>
                  <p className="mt-1 text-slate-600">
                    Онлайн решаване на спорове (ЕС) – за потребителски спорове
                    при онлайн покупки.
                  </p>
                  <p className="mt-2 text-slate-600">
                    Платформа:{" "}
                    <span className="font-semibold">
                      ec.europa.eu/consumers/odr
                    </span>
                  </p>
                </div>
              </div>

              <p className="mt-5 text-sm text-slate-600">
                Настоящите Общи условия могат да бъдат променяни. В сила е
                актуалната версия, публикувана на сайта.
              </p>
            </div>
          </div>
        </div>

        <p className="mt-10 text-sm text-slate-500">
          Последна актуализация: 19.02.2026
        </p>
      </div>
    </section>
  );
};

export default TermsPage;
