import { useState } from "react";
import { PiHandLight } from "react-icons/pi";
import { AiOutlineBulb } from "react-icons/ai";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(null);

  const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValidEmail(email) || isSending) return;

    setIsSending(true);
    setIsSuccess(null);

    try {
      // TODO: replace with your API endpoint
      // await axios.post("/api/newsletter/subscribe", { email });

      await new Promise((r) => setTimeout(r, 900)); // fake request

      setIsSuccess(true);
      setEmail("");
    } catch (err) {
      setIsSuccess(false);
      console.error("An error occurred: ", err);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="relative bg-[#002B5B]">
      {/* subtle gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 relative">
        <div className="grid gap-12 lg:grid-cols-2 items-start">
          {/* LEFT */}
          <div className="max-w-xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Абонирай се за нашия бюлетин
            </h2>

            <p className="mt-4 text-white/80 text-base sm:text-lg">
              Получавай полезни съвети за дома, специални оферти и новини
              директно на имейла си.
            </p>

            {/* FORM */}
            <form
              onSubmit={handleSubmit}
              className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md"
            >
              <label htmlFor="email" className="sr-only">
                Имейл адрес
              </label>

              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
                placeholder="Въведете имейл адрес"
                className="rounded-xl border border-white/20 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:ring-2 focus:ring-white/50"
              />

              <button
                type="submit"
                disabled={!isValidEmail(email) || isSending}
                className="rounded-xl bg-white px-5 py-3 font-semibold text-[#002B5B] shadow-sm transition hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/60 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSending ? "..." : "Абонирай се"}
              </button>
            </form>

            {/* STATUS */}
            {isSuccess === true && (
              <p className="mt-3 text-sm text-green-300">
                ✔ Успешно се абонирахте!
              </p>
            )}
            {isSuccess === false && (
              <p className="mt-3 text-sm text-red-300">
                ✖ Възникна грешка. Опитайте отново.
              </p>
            )}
          </div>

          {/* RIGHT FEATURES */}
          <dl className="grid gap-6 sm:grid-cols-2">
            <div className="group rounded-2xl bg-white/5 backdrop-blur p-6 ring-1 ring-white/15 transition hover:bg-white/10">
              <div className="w-12 h-12 rounded-xl bg-white text-[#002B5B] flex items-center justify-center shadow-sm">
                <AiOutlineBulb className="size-6" />
              </div>

              <dt className="mt-4 text-lg font-semibold text-white">
                Оферти и полезни съвети
              </dt>

              <dd className="mt-2 text-white/75">
                Възползвай се от специални предложения и научи как да поддържаш
                техниката си в изправност.
              </dd>
            </div>

            <div className="group rounded-2xl bg-white/5 backdrop-blur p-6 ring-1 ring-white/15 transition hover:bg-white/10">
              <div className="w-12 h-12 rounded-xl bg-white text-[#002B5B] flex items-center justify-center shadow-sm">
                <PiHandLight className="size-6" />
              </div>

              <dt className="mt-4 text-lg font-semibold text-white">
                Без спам
              </dt>

              <dd className="mt-2 text-white/75">
                Изпращаме само важна и полезна информация. Отписването е лесно
                по всяко време.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
