import { navItems } from "../constants/Index";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };
  return (
    <nav className="flex top-0 p-5 justify-center w-full">
      <div className="flex justify-between items-center w-full pt-5">
        <div className="flex">
          <ul className="text-white flex gap-10 items-center">
            <div className="relative">
              <img src="/src/assets/logo.svg" alt="Logo" className="relative" />
              <div className="absolute -top-5 right-2">
                <img
                  src="/src/assets/vector.svg"
                  alt="Vector"
                  className="w-full h-full"
                />
              </div>
            </div>
            {navItems.map((item, index) => (
              <li
                key={index}
                className="hidden lg:flex hover:underline-offset-4 decoration-nav-gradient text-[#F2F2F2] transition-all duration-500 "
              >
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden lg:flex items-center gap-6 pr-8">
          <a
            href="#"
            className="px-6 py-2 bg-[#FFBE98] rounded-md text-[#F2F2F2] text-base font-normal "
          >
            Попробовать бесплатно
          </a>
          <a href="#">
            <img src="/src/assets/search-ico.svg" alt="" className="size-8" />
          </a>
          <a href="#">
            <img src="/src/assets/person-ico.svg" alt="" className="size-8" />
          </a>
        </div>
        <div className="lg:hidden md:flex-col justify-end">
          <button onClick={toggleNavbar} className="fixed top-10 right-5 z-50">
            {mobileDrawerOpen ? <X /> : <Menu />}
          </button>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed top-0 left-0 w-full h-screen bg-black opacity-75 z-50 lg:hidden flex-col flex">
            <div className="flex justify-end">
              <button
                onClick={toggleNavbar}
                className="fixed top-10 right-5 z-50"
              >
                {mobileDrawerOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
