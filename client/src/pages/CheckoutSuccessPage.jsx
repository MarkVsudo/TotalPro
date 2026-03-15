import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const paymentDetails = {
  "on-delivery": {
    description:
      "Поръчката ти е потвърдена! Ще платиш на куриера при получаване на пратката.",
  },
  "with-card": {
    description:
      "Получихме потвърждение за плащането ти чрез myPos. Поръчката ти е потвърдена и ще бъде изпратена скоро.",
  },
  "bank-transfer": {
    description:
      "Моля, преведете цялата сума по следната банкова сметка. Поръчката ще бъде изпратена след получаване на плащането.",
    extra: (
      <div className="mt-4 rounded-md border border-blue-100 bg-blue-50 p-4 space-y-1 text-sm text-gray-700">
        <p className="font-semibold text-gray-800">Банкови реквизити:</p>
        <p>
          <span className="font-medium">Получател:</span> ТОТАЛ ПРО ЕООД
        </p>
        <p>
          <span className="font-medium">Банка:</span> Пощенска банка АД
        </p>
        <p>
          <span className="font-medium">IBAN:</span> BG00BPBI00000000000000
        </p>
        <p>
          <span className="font-medium">BIC:</span> BPBIBGSF
        </p>
        <p className="mt-2 text-gray-500">
          За основание напишете номера на поръчката.
        </p>
      </div>
    ),
  },
  "on-lease": {
    description:
      "Заявката ти за изплащане чрез tbi bank е приета. Ще получиш имейл с допълнителни инструкции.",
  },
};

const CheckoutSuccessPage = () => {
  const { orderNumber } = useParams();
  const [paymentType, setPaymentType] = useState("");

  useEffect(() => {
    const fetchPaymentType = async () => {
      try {
        const res = await axios.get(`/api/order/success/${orderNumber}`);
        setPaymentType(res.data);
      } catch (err) {
        console.error("Failed to fetch payment type:", err);
      }
    };

    fetchPaymentType();
  }, [orderNumber]);

  const payment = paymentDetails[paymentType] ?? {
    description:
      "Благодарим ти! Ако имаш имейл, би трябвало да получиш потвърждение на поръчката.",
  };

  const isBankTransfer = paymentType === "bank-transfer";

  return (
    <section className="bg-white text-[#002B5B] my-24 px-4 max-w-4xl mx-auto">
      <div className="rounded-lg border border-gray-200 bg-white p-8">
        <div className="flex items-start gap-4">
          <div
            className={`shrink-0 rounded-full p-3 border ${
              isBankTransfer
                ? "bg-yellow-50 border-yellow-200"
                : "bg-green-50 border-green-200"
            }`}
          >
            {isBankTransfer ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6 text-yellow-600"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
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
            )}
          </div>

          <div className="flex-1">
            <h1 className="text-2xl font-bold text-gray-900">
              Поръчката е приета{" "}
            </h1>

            {orderNumber && (
              <p className="mt-1 text-sm font-medium text-gray-500">
                Поръчка №{orderNumber}
              </p>
            )}

            <p className="mt-2 text-sm text-gray-600">{payment.description}</p>

            {payment.extra}

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
