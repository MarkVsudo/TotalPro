import { Link, useParams } from "react-router-dom";

const CheckoutSuccessPage = () => {
  const { orderNumber } = useParams();

  return (
    <section className="bg-white text-[#002B5B] my-24 px-4 max-w-4xl mx-auto">
      <div className="rounded-lg border border-gray-200 bg-white p-8">
        <div className="flex items-start gap-4">
          <div className="shrink-0 rounded-full bg-green-50 border border-green-200 p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6 text-green-700"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.81a.75.75 0 10-1.22-.88l-3.83 5.32-2.22-2.22a.75.75 0 10-1.06 1.06l2.85 2.85c.31.31.82.28 1.09-.08l4.4-6.05z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          <div className="flex-1">
            <h1 className="text-2xl font-bold text-gray-900">
              Плащането е успешно
            </h1>

            {orderNumber && (
              <p className="mt-1 text-sm font-medium text-gray-500">
                Поръчка №{orderNumber}
              </p>
            )}

            <p className="mt-2 text-sm text-gray-600">
              Благодарим ти! Получихме потвърждение за плащането ти. Ако имаш
              имейл, би трябвало да получиш и потвърждение на поръчката.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link
                to="/"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-md bg-[#002B5B] px-5 py-3 text-white text-sm font-semibold hover:bg-blue-900 transition-colors"
              >
                Към началото
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutSuccessPage;
