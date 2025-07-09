import { HashLink } from "react-router-hash-link";
const AirConInstallation = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center px-4 py-12 max-w-7xl mx-auto">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-[#002B5B] mb-4">
          Монтаж на климатици
        </h1>
        <p className="text-lg text-[#002B5B]">
          Предлагаме професионален монтаж на климатици на конкурентни цени, в
          зависимост от мощността на уреда (BTU). Всеки монтаж включва
          необходимите стандартни услуги и консумативи.
          <br />
          <span className="text-sm text-[#002B5B] italic block mt-2">
            💡 Цените важат за стандартен монтаж до 3 метра тръбен път.
          </span>
        </p>
      </div>

      <div className="max-w-2xl rounded-2xl border border-[#002B5B] shadow-xl overflow-hidden bg-white w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white bg-[#002B5B] text-white">
          <div className="px-8 py-6 hover:bg-blue-900 transition-colors">
            <h2 className="text-xl font-semibold mb-2">7 000 - 14 000 BTU</h2>
            <p className="text-3xl font-bold">от 360 лв.</p>
          </div>
          <div className="px-8 py-6 hover:bg-blue-900 transition-colors">
            <h2 className="text-xl font-semibold mb-2">15 000 - 24 000 BTU</h2>
            <p className="text-3xl font-bold">от 400 лв.</p>
          </div>
          <div className="px-8 py-6 hover:bg-blue-900 transition-colors">
            <h2 className="text-xl font-semibold mb-2">30 000 - 55 000 BTU</h2>
            <p className="text-3xl font-bold">от 440 лв.</p>
          </div>
        </div>

        <div className="border-t border-[#002B5B]  px-6 py-8">
          <ul className="text-left text-md text-gray-800 space-y-2 leading-relaxed max-w-2xl mx-auto">
            <li>✔ Качване на климатик и материали с асансьор</li>
            <li>✔ Фиксиране на стойка на вътрешно тяло</li>
            <li>✔ Технологичен отвор в стената – 1 бр.</li>
            <li>✔ Медни тръби с термо изолация – до 3 л. м.</li>
            <li>✔ Отводняваща гофрирана тръба – до 3 л. м.</li>
            <li>✔ Комуникационен кабел – до 5 л.м.</li>
            <li>✔ Щепсел и захранващ кабел – до 4 л.м.</li>
            <li>✔ Поставяне на PVC канал – до 1 л. м.</li>
            <li>✔ Стойки за монтиране на външно тяло</li>
            <li>✔ Свързване на двете климатични тела</li>
            <li>✔ Вакуумиране</li>
            <li>✔ Тестване на машината</li>
            <li>✔ Кратък инструктаж на клиента за употреба</li>
          </ul>

          <div className="mt-10 text-center">
            <HashLink
              to="/#contact"
              className="bg-[#002B5B] hover:bg-blue-900 text-white px-6 py-3 rounded-xl font-semibold shadow-md transition"
            >
              Отправи запитване за монтаж
            </HashLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirConInstallation;
