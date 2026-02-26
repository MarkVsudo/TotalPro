import NavLogoImg from "../../assets/nav-logo.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import ErrorAlert from "../../components/shared/ErrorAlert";
import SucessAlert from "../../components/shared/SucessAlert";

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [isSuccess, setIsSuccess] = useState(null);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsSuccess(null);

      await axios.post(
        "/api/auth/login",
        { email: formData.email, password: formData.password },
        { withCredentials: true },
      );

      const res = await axios.get("/api/auth/me", { withCredentials: true });
      login(res.data);

      setIsSuccess(true);
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      setIsSuccess(false);
    }
  };

  const inputClass =
    "mt-2 w-full rounded-xl border border-[#002B5B]/25 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-[#002B5B] focus:ring-2 focus:ring-[#002B5B]/20";

  return (
    <div className="flex max-h-screen flex-col">
      {isSuccess === true && <SucessAlert text="Успешен вход." />}
      {isSuccess === false && <ErrorAlert text="Грешка при вход." />}

      <div className="flex w-full justify-center items-center bg-white py-6">
        <Link to="/">
          <span className="sr-only">TotalPro</span>
          <img alt="Nav logo" src={NavLogoImg} className="h-10 w-auto" />
        </Link>
      </div>

      <div className="flex flex-1 flex-col items-center py-12">
        <h2 className="text-center text-2xl font-bold tracking-tight text-[#002B5B] mb-6">
          Влезте в профила си
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 w-full max-w-sm p-6 sm:p-8"
        >
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
              autoComplete="email"
              value={formData.email}
              onChange={handleInputChange}
              className={inputClass}
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-slate-700"
            >
              Парола <span className="text-red-500">*</span>
            </label>

            <input
              id="password"
              name="password"
              type="password"
              required
              autoComplete="current-password"
              value={formData.password}
              onChange={handleInputChange}
              className={inputClass}
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-[#002B5B] px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-[#003d7a] focus:outline-none focus:ring-2 focus:ring-[#002B5B]/50 focus:ring-offset-2"
          >
            Вход
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
