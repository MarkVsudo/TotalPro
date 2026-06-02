const AirConMaintenance = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center px-4 py-12 max-w-7xl mx-auto">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-[#002B5B] mb-4">
          Профилактика на климатици
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-5xl mx-auto">
          Поддържайте климатика си в оптимално състояние с нашата професионална
          профилактика. Редовната грижа подобрява ефективността, удължава живота
          на уреда и гарантира по-чист въздух у дома.
          <br />
          <span className="text-sm text-[#002B5B] italic block mt-2">
            💡 Препоръчва се профилактика поне веднъж годишно – преди летния или
            зимния сезон.
          </span>
        </p>
      </div>

      <div className="max-w-3xl rounded-2xl border border-[#002B5B] shadow-xl overflow-hidden bg-white w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white bg-[#002B5B] text-white">
          <div className="px-8 py-6 hover:bg-blue-900 transition-colors">
            <h2 className="text-lg font-semibold mb-2">Вътрешно тяло</h2>
            <p className="text-3xl font-bold">40 €</p>
            <p className="text-sm mt-2 opacity-80">9 000 – 12 000 BTU</p>
          </div>

          <div className="px-8 py-6 hover:bg-blue-900 transition-colors">
            <h2 className="text-lg font-semibold mb-2">Вътрешно тяло</h2>
            <p className="text-3xl font-bold">50 €</p>
            <p className="text-sm mt-2 opacity-80">18 000 BTU</p>
          </div>

          <div className="px-8 py-6 hover:bg-blue-900 transition-colors">
            <h2 className="text-lg font-semibold mb-2">Вътрешно тяло</h2>
            <p className="text-3xl font-bold">60 €</p>
            <p className="text-sm mt-2 opacity-80">24 000 BTU</p>
          </div>

          <div className="px-8 py-6 hover:bg-blue-900 transition-colors">
            <h2 className="text-lg font-semibold mb-2">Външно тяло</h2>
            <p className="text-3xl font-bold">30 €</p>
            <p className="text-sm mt-2 opacity-80">9 000 – 24 000 BTU</p>
          </div>
        </div>

        <div className="border-t border-[#002B5B] px-6 py-8">
          <ul className="text-left text-md text-gray-800 space-y-2 leading-relaxed max-w-2xl mx-auto">
            <li>✔ Почистване и измиване на филтри на вътрешно тяло</li>
            <li>✔ Обработка на топлообменника с антибактериален препарат</li>
            <li>✔ Почистване на турбината и дренажната система</li>
            <li>✔ Почистване на външно тяло (при избрана услуга)</li>
            <li>✔ Проверка на хладилен агент (фреон) и налягане</li>
            <li>✔ Проверка на електрическите връзки</li>
            <li>✔ Тестване за нормална работа в различни режими</li>
            <li>✔ Съвети и препоръки за правилна експлоатация</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AirConMaintenance;
