import { Link, useParams } from "react-router-dom";

const CheckoutCancelPage = () => {
  const { orderNumber } = useParams();

  return (
    <section className="bg-white text-[#002B5B] my-24 px-4 max-w-4xl mx-auto">
      <div className="rounded-lg border border-gray-200 bg-white p-8">
        <div className="flex items-start gap-4">
          <div className="shrink-0 rounded-full bg-red-50 border border-red-200 p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6 text-red-700"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75S6.615 21.75 12 21.75 21.75 17.385 21.75 12 17.385 2.25 12 2.25zm2.47 13.28a.75.75 0 001.06-1.06L13.06 12l2.47-2.47a.75.75 0 00-1.06-1.06L12 10.94 9.53 8.47a.75.75 0 00-1.06 1.06L10.94 12l-2.47 2.47a.75.75 0 101.06 1.06L12 13.06l2.47 2.47z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          <div className="flex-1">
            <h1 className="text-2xl font-bold text-gray-900">
              Плащането е отказано или прекъснато
            </h1>

            {orderNumber && (
              <p className="mt-1 text-sm font-medium text-gray-500">
                Поръчка №{orderNumber}
              </p>
            )}

            <p className="mt-2 text-sm text-gray-600">
              Изглежда плащането не беше завършено. Можеш да опиташ отново или
              да избереш друг начин на плащане.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link
                to="/checkout"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-md bg-[#002B5B] px-5 py-3 text-white text-sm font-semibold hover:bg-blue-900 transition-colors"
              >
                Опитай пак
              </Link>

              <Link
                to="/"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50 transition-colors"
              >
                Към началото
              </Link>
            </div>

            <div className="mt-6 rounded-md border border-gray-200 bg-gray-50 p-4">
              <p className="text-xs text-gray-600">
                Ако виждаш този екран, не означава задължително проблем с
                картата — често е просто затворен прозорец или натиснат "Back".
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutCancelPage;
