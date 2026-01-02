import { useSearchParams } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

export default function AirConPagination({ total }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = Number(searchParams.get("page")) || 1;

  const updatePage = (page) => {
    setSearchParams((prev) => {
      prev.set("page", page);
      return prev;
    });
  };

  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white py-3 mt-4">
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Показани са <span className="font-medium">1-12</span> от{" "}
            <span className="font-medium">{total}</span> резултата
          </p>
        </div>
        <div>
          <nav
            aria-label="Pagination"
            className="isolate inline-flex -space-x-px rounded-md shadow-xs"
          >
            <button
              disabled={page === 1}
              onClick={() => updatePage(page - 1)}
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <IoIosArrowBack aria-hidden="true" className="size-5" />
            </button>

            {Array.from({ length: Math.ceil(Number(total) / 12) }).map(
              (_, index) => (
                <button
                  type="button"
                  key={index}
                  onClick={() => updatePage(index + 1)}
                  className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold focus:z-20 ${
                    page === index + 1
                      ? "z-10 bg-[#002B5B] text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#002B5B]"
                      : "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0"
                  }`}
                >
                  {index + 1}
                </button>
              )
            )}

            {/* <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-gray-300 ring-inset focus:outline-offset-0">
              ...
            </span> */}

            <button
              disabled={page === Math.ceil(Number(total) / 12)}
              onClick={() => updatePage(page + 1)}
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <IoIosArrowForward aria-hidden="true" className="size-5" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}
