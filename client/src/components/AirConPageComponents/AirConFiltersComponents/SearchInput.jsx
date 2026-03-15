import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const SearchInput = ({ mode }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const urlSearch = searchParams.get("search") ?? "";
  const [searchValue, setSearchValue] = useState(urlSearch);

  useEffect(() => {
    setSearchValue(urlSearch);
  }, [urlSearch]);

  useEffect(() => {
    const trimmed = searchValue.trim();

    const t = setTimeout(() => {
      setSearchParams((prev) => {
        const currentSearch = prev.get("search") || "";

        if (currentSearch === trimmed) return prev;

        const next = new URLSearchParams(prev);

        if (trimmed) {
          next.set("search", trimmed);
        } else {
          next.delete("search");
        }
        next.delete("page");

        return next;
      });
    }, 250);

    return () => clearTimeout(t);
  }, [searchValue, setSearchParams]);
  return (
    <div
      className={
        mode === "mobile"
          ? "px-4 py-4 border-b border-gray-200"
          : "relative mt-2"
      }
    >
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-gray-900">Търсене</span>
      </div>
      <input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className="w-full rounded-lg border border-[#002B5B]/25 bg-white px-4 py-2 text-slate-900 shadow-sm outline-none transition focus:border-[#002B5B] focus:ring-2 focus:ring-[#002B5B]/20"
        placeholder="Име продукт"
      />
    </div>
  );
};

export default SearchInput;
