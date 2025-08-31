import NavLogoImg from "../../assets/nav-logo.png";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="flex max-h-screen flex-col">
      {/* Top nav */}
      <div className="flex w-full justify-center items-center bg-white py-6">
        <Link to="/">
          <span className="sr-only">TotalPro</span>
          <img alt="Nav logo" src={NavLogoImg} className="h-10 w-auto" />
        </Link>
      </div>

      {/* Main content (centered) */}
      <div className="flex flex-1 flex-col items-center py-12 ">
        <h2 className="text-center text-2xl font-bold tracking-tight text-[#002B5B] mb-8">
          Влезте в профила си
        </h2>

        <div className="w-full max-w-sm">
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[#002B5B]"
              >
                Имейл адрес
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-white/5 px-3 py-2 text-base text-[#002B5B] outline outline-2 outline-[#002B5B] placeholder:text-gray-500 focus:outline-2 focus:outline-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-[#002B5B]"
              >
                Парола
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white/5 px-3 py-2 text-base text-[#002B5B] outline outline-2 outline-[#002B5B]placeholder:text-gray-500 focus:outline-2 focus:outline-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-[#002B5B] text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-900 focus:ring-2 focus:ring-[#002B5B] focus:ring-offset-2 transition-colors duration-200 cursor-pointer"
              >
                Вход
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
