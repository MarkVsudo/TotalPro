import { FiPhone } from "react-icons/fi";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

export default function TopBanner() {
  return (
    <div
      className="relative isolate flex justify-center items-center overflow-hidden bg-gray-50 px-6 py-2.5"
      style={{ backgroundColor: "var(--blue)" }}
    >
      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
        <div className="flex items-center gap-2 text-white">
          <FiPhone className="w-5 h-5" />
          <a href="tel:+359889303334" className="font-semibold">
            +359 88 930 3334
          </a>
        </div>
        <div className="flex items-center gap-2 text-white">
          <EnvelopeIcon className="w-5 h-5" />
          <a href="mailto:total.pro@mail.bg" className="font-semibold">
            total.pro@mail.bg
          </a>
        </div>
      </div>
    </div>
  );
}
