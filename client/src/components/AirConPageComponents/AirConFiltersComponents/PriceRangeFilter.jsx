import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const PriceRangeFilter = ({ mode }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [priceMin, setPriceMin] = useState(100);
  const [priceMax, setPriceMax] = useState(10000);
  const [minDraft, setMinDraft] = useState(null);
  const [maxDraft, setMaxDraft] = useState(null);
  const PRICE_MIN = 100;
  const PRICE_MAX = 10000;
  const GAP = 100;

  const setMin = (val) => {
    const v = Math.max(
      PRICE_MIN,
      Math.min(Number(val) || PRICE_MIN, priceMax - GAP),
    );
    setPriceMin(v);
  };

  const setMax = (val) => {
    const v = Math.min(
      PRICE_MAX,
      Math.max(Number(val) || PRICE_MAX, priceMin + GAP),
    );
    setPriceMax(v);
  };

  useEffect(() => {
    const t = setTimeout(() => {
      setSearchParams((prev) => {
        prev.set("priceMin", String(priceMin));
        prev.set("priceMax", String(priceMax));
        return prev;
      });
    }, 250);

    return () => clearTimeout(t);
  }, [priceMin, priceMax, setSearchParams]);

  useEffect(() => {
    const rawMin = searchParams.get("priceMin");
    const rawMax = searchParams.get("priceMax");

    if (rawMin === null && rawMax === null) return;

    const pMin = Number(rawMin);
    const pMax = Number(rawMax);

    let nextMin = Number.isNaN(pMin)
      ? PRICE_MIN
      : Math.max(PRICE_MIN, Math.min(pMin, PRICE_MAX));
    let nextMax = Number.isNaN(pMax)
      ? PRICE_MAX
      : Math.max(PRICE_MIN, Math.min(pMax, PRICE_MAX));

    if (nextMax - nextMin < GAP) nextMax = Math.min(PRICE_MAX, nextMin + GAP);

    setPriceMin(nextMin);
    setPriceMax(nextMax);
  }, [searchParams]);
  return (
    <div
      className={
        mode === "mobile"
          ? "px-4 py-4 border-b border-gray-200"
          : "relative mt-2"
      }
    >
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-gray-900">Цена</span>
      </div>

      {/* Track */}
      <div className="relative h-2 mb-4">
        <div className="absolute inset-0 rounded-full bg-gray-200" />
        <div
          className="absolute h-full rounded-full bg-[#002b5b]"
          style={{
            left: `${((priceMin - PRICE_MIN) / (PRICE_MAX - PRICE_MIN)) * 100}%`,
            right: `${100 - ((priceMax - PRICE_MIN) / (PRICE_MAX - PRICE_MIN)) * 100}%`,
          }}
        />

        {/* Min thumb */}
        <input
          type="range"
          step={50}
          min={PRICE_MIN}
          max={PRICE_MAX}
          value={priceMin}
          onChange={(e) => setMin(e.target.value)}
          className="range-thumb absolute inset-0 w-full appearance-none bg-transparent cursor-pointer
pointer-events-none
[&::-webkit-slider-thumb]:pointer-events-auto
[&::-webkit-slider-thumb]:appearance-none
[&::-webkit-slider-thumb]:h-4
[&::-webkit-slider-thumb]:w-4
[&::-webkit-slider-thumb]:rounded-full
[&::-webkit-slider-thumb]:bg-white
[&::-webkit-slider-thumb]:border-2
[&::-webkit-slider-thumb]:border-[#002b5b]
[&::-webkit-slider-thumb]:shadow
[&::-webkit-slider-thumb]:cursor-grab
[&::-moz-range-thumb]:pointer-events-auto
[&::-moz-range-thumb]:h-4
[&::-moz-range-thumb]:w-4
[&::-moz-range-thumb]:rounded-full
[&::-moz-range-thumb]:bg-white
[&::-moz-range-thumb]:border-2
[&::-moz-range-thumb]:border-[#002b5b]"
          style={{ zIndex: 3 }}
        />

        {/* Max thumb */}
        <input
          type="range"
          step={50}
          min={PRICE_MIN}
          max={PRICE_MAX}
          value={priceMax}
          onChange={(e) => setMax(e.target.value)}
          className="range-thumb absolute inset-0 w-full appearance-none bg-transparent cursor-pointer
pointer-events-none
[&::-webkit-slider-thumb]:pointer-events-auto
[&::-webkit-slider-thumb]:appearance-none
[&::-webkit-slider-thumb]:h-4
[&::-webkit-slider-thumb]:w-4
[&::-webkit-slider-thumb]:rounded-full
[&::-webkit-slider-thumb]:bg-white
[&::-webkit-slider-thumb]:border-2
[&::-webkit-slider-thumb]:border-[#002b5b]
[&::-webkit-slider-thumb]:shadow
[&::-webkit-slider-thumb]:cursor-grab
[&::-moz-range-thumb]:pointer-events-auto
[&::-moz-range-thumb]:h-4
[&::-moz-range-thumb]:w-4
[&::-moz-range-thumb]:rounded-full
[&::-moz-range-thumb]:bg-white
[&::-moz-range-thumb]:border-2
[&::-moz-range-thumb]:border-[#002b5b]"
          style={{ zIndex: 4 }}
        />
      </div>

      {/* Number inputs */}
      <div className="flex items-center gap-2 mt-3">
        <div className="flex-1">
          <label className="text-xs text-gray-500 mb-1 block">От</label>
          <div className="flex items-center border border-gray-300 rounded-md px-2 py-1 focus-within:border-[#002b5b]">
            <input
              type="number"
              step={50}
              min={PRICE_MIN}
              max={PRICE_MAX}
              value={minDraft ?? priceMin}
              onChange={(e) => setMinDraft(e.target.value)}
              onBlur={() => {
                setMin(minDraft ?? priceMin);
                setMinDraft(null);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setMin(minDraft ?? priceMin);
                  setMinDraft(null);
                  e.target.blur();
                }
                if (e.key.length === 1 && !/\d/.test(e.key)) e.preventDefault();
              }}
              className="w-full text-sm text-gray-700 outline-none bg-transparent"
            />
            <span className="text-sm text-gray-400 ml-1">€</span>
          </div>
        </div>

        <span className="text-gray-400 mt-5">—</span>

        <div className="flex-1">
          <label className="text-xs text-gray-500 mb-1 block">До</label>
          <div className="flex items-center border border-gray-300 rounded-md px-2 py-1 focus-within:border-[#002b5b]">
            <input
              type="number"
              step={50}
              min={PRICE_MIN}
              max={PRICE_MAX}
              value={maxDraft ?? priceMax}
              onChange={(e) => setMaxDraft(e.target.value)}
              onBlur={() => {
                setMax(maxDraft ?? priceMax);
                setMaxDraft(null);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setMax(maxDraft ?? priceMax);
                  setMaxDraft(null);
                  e.target.blur();
                }
                if (e.key.length === 1 && !/\d/.test(e.key)) e.preventDefault();
              }}
              className="w-full text-sm text-gray-700 outline-none bg-transparent"
            />
            <span className="text-sm text-gray-400 ml-1">€</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceRangeFilter;
