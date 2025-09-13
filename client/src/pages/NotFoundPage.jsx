import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <section class="bg-white h-screen flex items-center justify-center">
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-sm text-center">
          <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-[#002B5B]">
            404
          </h1>
          <p class="mb-4 text-3xl tracking-tight font-bold text-[#002B5B] md:text">
            Несъществуваща страница
          </p>
          <p class="mb-4 text-lg font-light text-gray-500">
            Съжаляваме, не можем да намерим тази страница. Ще откриете много за
            разглеждане на началната страница.
          </p>
          <Link
            to="/"
            class="inline-flex text-[#002B5B] hover:bg-gray-50 border-2 border-[#002B5B] font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4 transition-all"
          >
            Начална страница
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
