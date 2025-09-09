import { MdSpaceDashboard } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="py-4 h-screen sticky top-0">
      <div className="flex flex-col h-full w-64 bg-[#002B5B] text-white shadow-lg rounded-r-xl">
        {/* Profile Section */}
        <div className="flex flex-col items-center gap-2 p-6 border-b border-white/20">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl font-bold">
            МВ
          </div>
          <p className="text-lg font-semibold">Марк Весков</p>
          <p className="text-sm text-gray-300">totalproltd@gmail.com</p>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col mt-6">
          {[
            { label: "Профил", icon: <MdSpaceDashboard size={22} /> },
            { label: "Поръчки", icon: <MdSpaceDashboard size={22} /> },
            { label: "Продукти", icon: <MdSpaceDashboard size={22} /> },
            { label: "Настройки", icon: <MdSpaceDashboard size={22} /> },
          ].map((item, index) => (
            <button
              key={index}
              className="flex items-center gap-3 px-6 py-3 hover:bg-white/10 transition-colors cursor-pointer"
            >
              {item.icon}
              <span className="text-md">{item.label}</span>
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
