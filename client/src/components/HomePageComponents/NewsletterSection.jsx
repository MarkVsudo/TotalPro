import { PiHandLight } from "react-icons/pi";
import { AiOutlineBulb } from "react-icons/ai";

const NewsletterSection = () => {
  return (
    <div className="bg-[#002B5B] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-4xl font-bold tracking-tight text-white">
              Абонирай се за нашия бюлетин
            </h2>
            <p className="mt-4 text-lg text-gray-200">
              Получавай полезни съвети за дома, специални оферти и новини
              директно на имейла си.
            </p>
            <div className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Имейл адрес
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full px-4 py-3 border bg-white border-[#002B5B] rounded-lg focus:border-blue-900 transition-colors"
                placeholder="Въведете имейл адрес"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-[#002B5B] shadow-sm cursor-pointer hover:bg-gray-50 transition-colors"
              >
                Абонирай се
              </button>
            </div>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="bg-white text-[#002B5B] w-12 h-12 flex items-center justify-center rounded-xl">
                <AiOutlineBulb className="size-6" />
              </div>
              <dt className="mt-4 text-base font-semibold text-white">
                Оферти и полезни съвети
              </dt>
              <dd className="mt-2 text-base text-gray-200">
                Възползвай се от специални предложения и научи как да поддържаш
                техниката си в изправност.
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="bg-white text-[#002B5B] w-12 h-12 flex items-center justify-center rounded-xl">
                <PiHandLight className="size-6" />
              </div>
              <dt className="mt-4 text-base font-semibold text-white">
                Без спам
              </dt>
              <dd className="mt-2 text-base text-gray-200">
                Изпращаме само важна и полезна информация. Отписването е лесно
                по всяко време.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSection;
