import { PhoneIcon } from "@heroicons/react/20/solid";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

export default function TopBanner() {
  return (
    <div
      className="relative isolate flex justify-center items-center overflow-hidden bg-gray-50 px-6 py-2.5"
      style={{ backgroundColor: "var(--light-beige)" }}
    >
      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
        <div className="flex items-center gap-2">
          <PhoneIcon className="w-5 h-5" />
          <a href="tel:+359888030123" className="font-semibold">
            +359 88 803 0123
          </a>
        </div>
        <div className="flex items-center gap-2">
          <EnvelopeIcon className="w-5 h-5" />
          <a href="mailto:totalpro@gmail.com" className="font-semibold">
            totalpro@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
