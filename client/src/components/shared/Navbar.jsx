import { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import { FiPhone } from "react-icons/fi";
import { GiScrew } from "react-icons/gi";
import { PiFanFill } from "react-icons/pi";
import { GiElectric } from "react-icons/gi";
import { RiSofaFill } from "react-icons/ri";
import { BiSolidCctv } from "react-icons/bi";
import { FaPeopleCarry } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { RiLayoutGridFill } from "react-icons/ri";
import { MdOutlinePlumbing } from "react-icons/md";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";

import NavLogoImg from "../../assets/nav-logo.png";
import { useCart } from "../../context/CartContext";

const services = [
  {
    name: "Климатици",
    description: "Продажба, монтаж и поддръжка на климатици",
    href: "/air-conditioning",
    icon: PiFanFill,
  },
  {
    name: "Ел. инсталации",
    description: "Изграждане и ремонт на електроинсталации",
    href: "/electric-installations",
    icon: GiElectric,
  },
  {
    name: "Хамалски услуги",
    description: "Преместване, транспорт и товаро-разтоварна дейност",
    href: "/moving-services",
    icon: FaPeopleCarry,
  },
  {
    name: "Гипсокартон",
    description: "Окачени тавани, стени и прегради от гипсокартон",
    href: "/drywall",
    icon: GiScrew,
  },
  {
    name: "СОТ",
    description: "Сигнализация и охранителни системи",
    href: "/security-alarm-equipment",
    icon: BiSolidCctv,
  },
  {
    name: "ВиК",
    description: "Водоинсталационни и канализационни работи",
    href: "/plumbing-services",
    icon: MdOutlinePlumbing,
  },
  {
    name: "Плочкаджии",
    description: "Полагане на плочки и керамични облицовки",
    href: "/tiling-services",
    icon: RiLayoutGridFill,
  },
  {
    name: "Мебели",
    description: "Производство и инсталиране на мебели",
    href: "/furniture",
    icon: RiSofaFill,
  },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openCart } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
      <nav
        aria-label="Global"
        className="relative mx-auto flex h-16 max-w-7xl items-center px-4 sm:px-6 lg:px-8"
      >
        {/* LEFT — Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center -m-1.5 p-1.5">
            <span className="sr-only">TotalPro</span>
            <img alt="Nav logo" src={NavLogoImg} className="h-9 w-auto" />
          </Link>
        </div>

        {/* CENTER — Links (centered only on lg+) */}
        <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-x-12">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold text-slate-900 hover:text-[#002B5B] transition">
              Услуги
              <ChevronDownIcon className="h-5 w-5 text-slate-400" />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute top-full -left-8 z-50 mt-3 w-screen max-w-3xl rounded-3xl bg-white shadow-lg ring-1 ring-black/5 transition
  data-closed:translate-y-2 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
            >
              {({ close }) => (
                <div className="p-4 grid grid-cols-2 gap-1">
                  {services.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => close()}
                      className="group flex items-center gap-4 rounded-xl p-4 hover:bg-slate-50 transition"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-50">
                        <item.icon className="h-5 w-5 text-slate-600 group-hover:text-[#002B5B]" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900">
                          {item.name}
                        </div>
                        <p className="text-sm text-slate-600">
                          {item.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </PopoverPanel>
          </Popover>

          <HashLink
            to="/#projects"
            className="text-sm font-semibold text-slate-900 hover:text-[#002B5B] transition"
          >
            Проекти
          </HashLink>

          <HashLink
            to="/#about-us"
            className="text-sm font-semibold text-slate-900 hover:text-[#002B5B] transition"
          >
            За нас
          </HashLink>

          <HashLink
            to="/#contact"
            className="text-sm font-semibold text-slate-900 hover:text-[#002B5B] transition"
          >
            Контакти
          </HashLink>
        </div>

        {/* RIGHT — Cart + Mobile menu */}
        <div className="ml-auto flex items-center gap-2">
          <button
            onClick={openCart}
            className="hidden lg:inline-flex items-center justify-center rounded-lg p-2 text-[#002B5B] hover:bg-slate-100 transition"
            aria-label="Отвори количка"
          >
            <FaCartShopping className="h-6 w-6" />
          </button>

          <button
            onClick={openCart}
            className="lg:hidden inline-flex items-center justify-center rounded-lg p-2 text-[#002B5B] hover:bg-slate-100 transition"
            aria-label="Отвори количка"
          >
            <FaCartShopping className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden inline-flex items-center justify-center rounded-lg p-2 text-slate-700 hover:bg-slate-100 transition"
            aria-label="Отвори меню"
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Mobile menu (slide) */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="relative z-50 lg:hidden"
      >
        {/* Backdrop — same as Cart */}
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-closed:opacity-0"
        />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            {/* Right sliding container — same as Cart */}
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
              <DialogPanel
                transition
                className="pointer-events-auto w-screen max-w-sm transform bg-white shadow-xl
          transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700"
              >
                {/* PANEL CONTENT */}
                <div className="flex h-full flex-col overflow-y-auto px-5 py-6">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <Link
                      to="/"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-2"
                    >
                      <img
                        alt="TotalPro"
                        src={NavLogoImg}
                        className="h-9 w-auto"
                      />
                    </Link>

                    <button
                      type="button"
                      onClick={() => setMobileMenuOpen(false)}
                      className="relative -m-2 p-2 text-slate-500 hover:text-slate-700 cursor-pointer"
                      aria-label="Затвори меню"
                    >
                      <span className="absolute -inset-0.5" />
                      <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                    </button>
                  </div>

                  {/* Body */}
                  <div className="mt-6 divide-y divide-slate-200">
                    <div className="py-4">
                      <Disclosure as="div">
                        <DisclosureButton className="group flex w-full items-center justify-between rounded-xl px-3 py-3 text-base font-semibold text-slate-900 hover:bg-slate-50 transition">
                          Услуги
                          <ChevronDownIcon
                            aria-hidden="true"
                            className="h-5 w-5 flex-none text-slate-400 group-data-open:rotate-180 transition"
                          />
                        </DisclosureButton>

                        {/* Dropdown: slide like a panel (same timing & easing) */}
                        <DisclosurePanel
                          transition
                          className="mt-2 space-y-1 overflow-hidden
                    transition duration-500 ease-in-out data-closed:opacity-0 data-closed:-translate-y-2"
                        >
                          {services.map((item) => (
                            <Link
                              key={item.name}
                              to={item.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50 transition"
                            >
                              <item.icon className="h-5 w-5 text-[#002B5B]" />
                              {item.name}
                            </Link>
                          ))}
                        </DisclosurePanel>
                      </Disclosure>

                      <div className="mt-3 space-y-1">
                        <HashLink
                          to="/#projects"
                          onClick={() => setMobileMenuOpen(false)}
                          className="block rounded-xl px-3 py-3 text-base font-semibold text-slate-900 hover:bg-slate-50 transition"
                        >
                          Проекти
                        </HashLink>

                        <HashLink
                          to="/#about-us"
                          onClick={() => setMobileMenuOpen(false)}
                          className="block rounded-xl px-3 py-3 text-base font-semibold text-slate-900 hover:bg-slate-50 transition"
                        >
                          За нас
                        </HashLink>

                        <HashLink
                          to="/#contact"
                          onClick={() => setMobileMenuOpen(false)}
                          className="block rounded-xl px-3 py-3 text-base font-semibold text-slate-900 hover:bg-slate-50 transition"
                        >
                          Контакти
                        </HashLink>
                      </div>
                    </div>

                    {/* Bottom actions */}
                    <div className="py-4">
                      <button
                        type="button"
                        onClick={() => {
                          setMobileMenuOpen(false);
                          openCart();
                        }}
                        className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#002B5B] px-4 py-3 text-white font-semibold hover:bg-[#003d7a] transition"
                      >
                        <FaCartShopping className="h-5 w-5" />
                        Количка
                      </button>

                      <a
                        href="tel:+359889303334"
                        className="mt-3 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-slate-100 px-4 py-3 text-slate-900 font-semibold hover:bg-slate-200 transition"
                      >
                        <FiPhone className="h-5 w-5" />
                        Обади се
                      </a>
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </div>
          </div>
        </div>
      </Dialog>
    </header>
  );
}
