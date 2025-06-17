const NewsletterSection = () => {
  return (
    <div
      className="rounded-2xl py-32 px-16 max-w-7xl mx-auto"
      style={{ backgroundColor: "var(--blue)" }}
    >
      <div className="flex gap-5 justify-center items-center">
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl sm:text-3xl font-bold text-white">
            Искате да Ви известим при намаления и други оферти?
          </h1>
          <h1 className="text-2xl sm:text-3xl font-bold text-white">
            Регистрирайте се за нашата бюлетина.
          </h1>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex justify-between gap-3">
            <div>
              <input
                id="emailNewsletter"
                name="emailNewsletter"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                className="block w-100 rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
              />
            </div>
            <button className="bg-white text-black px-5 py-2 rounded-md font-medium shadow-md hover:bg-gray-100 transition whitespace-nowrap">
              Извести ме
            </button>
          </div>
          <p className="text-white">
            Ние се грижим за вашите данни. Прочетете нашата{" "}
            <a href="#" className="font-bold">
              политика за поверителност
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSection;
