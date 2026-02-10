import { useSearchParams } from "react-router-dom";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

export default function AirConPagination({ total }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;

  const lastPage = Math.max(1, Math.ceil(Number(total) / 12));

  const updatePage = (nextPage) => {
    const clamped = Math.min(Math.max(nextPage, 1), lastPage);
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      next.set("page", String(clamped));
      return next;
    });
  };

  const getVisiblePages = () => {
    const isMobile = window.matchMedia("(max-width: 639px)").matches;

    if (!isMobile) {
      return Array.from({ length: lastPage }, (_, i) => i + 1);
    }

    const windowSize = 3;
    const pages = new Set([1, lastPage, page]);

    for (let i = 1; i <= windowSize; i++) {
      pages.add(page - i);
      pages.add(page + i);
    }

    return [...pages]
      .filter((p) => p >= 1 && p <= lastPage)
      .sort((a, b) => a - b);
  };

  const visiblePages = getVisiblePages();

  const withDots = (pages) => {
    const out = [];
    for (let i = 0; i < pages.length; i++) {
      out.push(pages[i]);
      if (i < pages.length - 1 && pages[i + 1] - pages[i] > 1) {
        out.push("…");
      }
    }
    return out;
  };

  const items = withDots(visiblePages);

  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white py-3 mt-4">
      <div className="flex flex-1 items-center justify-between">
        <p className="hidden sm:block text-sm text-gray-700">
          Показани са{" "}
          <span className="font-medium">
            {(page - 1) * 12 + 1}-{Math.min(page * 12, total)}
          </span>{" "}
          от <span className="font-medium">{total}</span> резултата
        </p>

        <nav
          aria-label="Pagination"
          className="isolate inline-flex -space-x-px rounded-md shadow-xs"
        >
          <button
            disabled={page === 1}
            onClick={() => updatePage(page - 1)}
            className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 disabled:opacity-40"
          >
            <IoIosArrowBack className="size-5" />
          </button>

          {items.map((item, idx) =>
            item === "…" ? (
              <span
                key={`dots-${idx}`}
                className="relative inline-flex items-center px-3 py-2 text-sm font-semibold text-gray-500 ring-1 ring-inset ring-gray-300"
              >
                …
              </span>
            ) : (
              <button
                type="button"
                key={item}
                onClick={() => updatePage(item)}
                className={`relative inline-flex items-center px-3 sm:px-4 py-2 text-sm font-semibold ${
                  page === item
                    ? "z-10 bg-[#002B5B] text-white"
                    : "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                }`}
              >
                {item}
              </button>
            ),
          )}

          <button
            disabled={page === lastPage}
            onClick={() => updatePage(page + 1)}
            className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 disabled:opacity-40"
          >
            <IoIosArrowForward className="size-5" />
          </button>
        </nav>
      </div>
    </div>
  );
}
