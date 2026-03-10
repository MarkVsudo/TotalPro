import { useEffect, useState } from "react";
import axios from "axios";

const statusMap = {
  pending: { badge: "bg-orange-50 text-orange-700", dot: "bg-orange-400" },
  processing: { badge: "bg-blue-50 text-blue-700", dot: "bg-blue-400" },
  completed: { badge: "bg-green-50 text-green-700", dot: "bg-green-400" },
  cancelled: { badge: "bg-red-50 text-red-700", dot: "bg-red-400" },
  default: { badge: "bg-gray-100 text-gray-600", dot: "bg-gray-400" },
};

const getStatus = (status) =>
  statusMap[status?.toLowerCase()] || statusMap.default;

const formatDate = (date) => {
  if (!date) return "—";
  return new Date(date).toLocaleString("bg-BG");
};

const formatValue = (value) =>
  value !== null && value !== undefined && value !== "" ? value : "—";

const BoolBadge = ({ value }) => {
  if (value === true)
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2.5 py-0.5 text-xs font-semibold text-green-700">
        ✓ Да
      </span>
    );
  if (value === false)
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-red-50 px-2.5 py-0.5 text-xs font-semibold text-red-700">
        ✕ Не
      </span>
    );
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-semibold text-gray-500">
      · —
    </span>
  );
};

const Field = ({ label, value, mono = false }) => (
  <div className="flex flex-col gap-0.5">
    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
      {label}
    </span>
    <span
      className={`break-words text-[13px] text-gray-800 ${mono ? "font-mono" : ""}`}
    >
      {formatValue(value)}
    </span>
  </div>
);

const SectionLabel = ({ children }) => (
  <div className="col-span-full text-[10px] font-bold uppercase tracking-widest text-[#002b5b]/50">
    {children}
  </div>
);

const Divider = () => (
  <hr className="col-span-full border-dashed border-gray-200" />
);

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [expandedOrder, setExpandedOrder] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get("/api/orders");
        setOrders(res.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };
    fetchOrders();
  }, []);

  const filteredOrders = orders.filter((order) => {
    const q = search.toLowerCase();
    return (
      !q ||
      [
        order.order_number,
        order.first_name,
        order.last_name,
        order.email,
        order.phone,
        order.status,
      ].some((v) =>
        String(v || "")
          .toLowerCase()
          .includes(q),
      )
    );
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#002b5b] pb-14 pt-8">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Поръчки
            </h1>
            <span className="mt-1 inline-flex items-center rounded-full bg-indigo-100 px-3 py-1 text-xs font-bold text-indigo-700">
              {filteredOrders.length} записа
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto -mt-9 max-w-4xl px-4 pb-12 sm:px-6">
        {/* Search bar */}
        <div className="mb-3 flex flex-wrap items-center gap-3 rounded-2xl border border-gray-200 bg-white px-4 py-3 shadow-sm">
          <div className="relative min-w-[200px] flex-1">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              width="15"
              height="15"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
            <input
              className="w-full rounded-xl border border-gray-200 bg-white py-2 pl-9 pr-4 text-sm text-gray-800 outline-none transition focus:border-[#002b5b] focus:ring-2 focus:ring-[#002b5b]/10"
              placeholder="Търси по номер, клиент, имейл..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          {search && (
            <button
              onClick={() => setSearch("")}
              className="rounded-lg px-3 py-1.5 text-xs font-medium text-gray-400 transition hover:bg-gray-100 hover:text-gray-600"
            >
              Изчисти
            </button>
          )}
        </div>

        {/* Empty state */}
        {filteredOrders.length === 0 ? (
          <div className="rounded-2xl border border-gray-200 bg-white p-12 text-center shadow-sm">
            <div className="mb-3 text-4xl">📭</div>
            <p className="text-sm text-gray-400">Няма намерени поръчки</p>
          </div>
        ) : (
          <div className="flex flex-col gap-2.5">
            {filteredOrders.map((order, index) => {
              const id = order.id || index;
              const isOpen = expandedOrder === id;
              const { badge, dot } = getStatus(order.status);

              return (
                <div
                  key={id}
                  className={`overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-200 ${
                    isOpen
                      ? "border-[#002b5b] shadow-lg"
                      : "border-gray-200 hover:border-gray-300 hover:shadow-md"
                  }`}
                >
                  {/* Card header */}
                  <div
                    className="grid cursor-pointer select-none grid-cols-[48px_1fr_auto] items-center gap-3 px-4 py-4 sm:gap-4 sm:px-5"
                    onClick={() => setExpandedOrder(isOpen ? null : id)}
                  >
                    {/* Order number badge */}
                    <div
                      className={`flex h-12 w-12 flex-shrink-0 flex-col items-center justify-center rounded-xl transition-colors duration-200 ${
                        isOpen ? "bg-[#002b5b]" : "bg-gray-100"
                      }`}
                    >
                      <span
                        className={`text-[9px] font-bold uppercase tracking-wider ${isOpen ? "text-white/50" : "text-gray-400"}`}
                      >
                        No
                      </span>
                      <span
                        className={`text-sm font-bold leading-none ${isOpen ? "text-white" : "text-[#002b5b]"}`}
                      >
                        {formatValue(order.order_number)}
                      </span>
                    </div>

                    {/* Name, status, meta */}
                    <div className="min-w-0 flex flex-col gap-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-sm font-bold text-gray-900 sm:text-[15px]">
                          {formatValue(order.first_name)}{" "}
                          {order.last_name || ""}
                        </span>
                        <span
                          className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-bold capitalize ${badge}`}
                        >
                          <span className={`h-1.5 w-1.5 rounded-full ${dot}`} />
                          {formatValue(order.status)}
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        {order.email && (
                          <span className="flex items-center gap-1 text-xs text-gray-500">
                            <svg
                              width="11"
                              height="11"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <rect x="2" y="4" width="20" height="16" rx="2" />
                              <path d="M2 7l10 7 10-7" />
                            </svg>
                            <span className="max-w-[160px] truncate sm:max-w-none">
                              {order.email}
                            </span>
                          </span>
                        )}
                        {order.phone && (
                          <span className="flex items-center gap-1 text-xs text-gray-500">
                            <svg
                              width="11"
                              height="11"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92v2z" />
                            </svg>
                            {order.phone}
                          </span>
                        )}
                        {order.total != null && (
                          <span className="text-xs font-bold text-[#002b5b]">
                            {order.total} лв.
                          </span>
                        )}
                        <span className="text-[11px] text-gray-300">
                          {formatDate(order.created_at)}
                        </span>
                      </div>
                    </div>

                    {/* Chevron */}
                    <svg
                      className={`flex-shrink-0 text-gray-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                      width="18"
                      height="18"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </div>

                  {/* Expanded details */}
                  {isOpen && (
                    <div className="grid grid-cols-2 gap-4 border-t border-gray-100 p-4 sm:grid-cols-3 sm:gap-5 sm:p-5 md:grid-cols-4">
                      <SectionLabel>📦 Доставка</SectionLabel>
                      <Field label="Адрес" value={order.address} />
                      <Field label="Град" value={order.city} />
                      <Field label="Пощенски код" value={order.postal} />
                      <Field label="Държава" value={order.country} />
                      {order.order_note && (
                        <Field label="Бележка" value={order.order_note} />
                      )}

                      <Divider />

                      <SectionLabel>🧾 Фактура</SectionLabel>
                      <div className="flex flex-col gap-1">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                          Фактура поискана
                        </span>
                        <BoolBadge value={order.invoice_requested} />
                      </div>

                      {order.invoice_requested && (
                        <>
                          <Field
                            label="Тип фактура"
                            value={order.invoice_type}
                          />
                          <Field
                            label="Име за фактура"
                            value={order.invoice_name}
                          />
                          <Field
                            label="Фирма"
                            value={order.invoice_company_name}
                          />
                          <Field label="ЕИК" value={order.invoice_eik} mono />
                          <Field label="МОЛ" value={order.invoice_mol} />
                          <div className="flex flex-col gap-1">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                              Същият адрес
                            </span>
                            <BoolBadge
                              value={order.invoice_address_same_as_shipping}
                            />
                          </div>
                          {!order.invoice_address_same_as_shipping && (
                            <>
                              <Field
                                label="Адрес фактура"
                                value={order.invoice_address}
                              />
                              <Field
                                label="Град фактура"
                                value={order.invoice_city}
                              />
                              <Field
                                label="Пощ. код фактура"
                                value={order.invoice_postal}
                              />
                              <Field
                                label="Държава фактура"
                                value={order.invoice_country}
                              />
                            </>
                          )}
                        </>
                      )}

                      <Divider />

                      <SectionLabel>💳 Плащане & Съгласия</SectionLabel>
                      <Field
                        label="Начин на плащане"
                        value={order.payment_type}
                      />
                      {[
                        { label: "Общи условия", value: order.terms_accepted },
                        {
                          label: "Поверителност",
                          value: order.privacy_accepted,
                        },
                        { label: "Маркетинг", value: order.marketing_opt_in },
                      ].map(({ label, value }) => (
                        <div key={label} className="flex flex-col gap-1">
                          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                            {label}
                          </span>
                          <BoolBadge value={value} />
                        </div>
                      ))}

                      <Divider />

                      <SectionLabel>🕐 Дати</SectionLabel>
                      <Field label="ID" value={order.id} mono />
                      <Field
                        label="Създадена"
                        value={formatDate(order.created_at)}
                      />
                      <Field
                        label="Обновена"
                        value={formatDate(order.updated_at)}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default OrdersPage;
