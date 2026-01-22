import { useState, useEffect } from "react";
import navImg from "../assets/z.png";
import Container from "./Container";
import { navItem } from "../assets/data";
import { VscChromeClose } from "react-icons/vsc";
import { CgMenuRight } from "react-icons/cg";
import DarkModeToggle from "./DarkModeToggle";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [active, setActive] = useState("Profile");

  // Sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleSpy = () => {
      navItem.forEach((item) => {
        const section = document.querySelector(item.link);
        if (!section) return;
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          setActive(item.name);
        }
      });
    };
    window.addEventListener("scroll", handleSpy);
    return () => window.removeEventListener("scroll", handleSpy);
  }, []);

  // Smooth scroll handler (Lenis friendly)
  const handleNavClick = (link, name) => {
    setActive(name);
    setOpen(false);
    const target = document.querySelector(link);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Links with icon fix
  const links = navItem.map((item, idx) => {
    const Icon = item.icon; // <-- fix: assign icon component

    return (
      <li key={idx} className="relative">
        <button
          onClick={() => handleNavClick(item.link, item.name)}
          className={`transition-all flex items-center cursor-pointer font-light dark:font-extralight duration-300 dark:text-white ${
            active === item.name
              ? "text-black dark:text-white"
              : "hover:text-green500 dark:hover:text-white"
          }`}
        >
          <Icon size={18} className="inline-block mr-2" /> {/* fixed */}
          {item.name}
          {/* {item.name} */}
        </button>
        {/* underline */}
        <span
          className={`absolute left-0 -bottom-1 h-[1px] bg-black dark:bg-white transition-all duration-300 ${
            active === item.name ? "w-full" : "w-0"
          }`}
        />
      </li>
    );
  });

  return (
    <header
      className={`fixed  top-0 left-0 w-full z-[100] transition-all duration-500 ${
        isSticky ? "py-2" : "py-6"
      }`}
    >
      <Container>
        <nav
          className={`w-full back-drop-b backdrop-blur-sm flex justify-between items-center border border-gray-300 rounded-xl p-3 transition-all duration-500 ${
            isSticky ? "back-drop-b shadow-lg" : "bgtransparent"
          }`}
        >
          {/* Logo */}
          <img
            src={navImg}
            alt="logo"
            onClick={() => handleNavClick("#profile", "Profile")}
            className="h-12 w-12 cursor-pointer object-cover rounded-xl hover:scale-110 transition"
          />

          {/* Desktop */}
          <ul className="hidden lg:flex gap-8 items-center">{links}</ul>

          {/* Mobile */}
          <ul
            className={`lg:hidden absolute left-0 w-full bg-primary dark:bg-primary-dark backdrop-blur-2xl border rounded-xl transition-all duration-500 ${
              open
                ? "top-21.25 opacity-100 visible"
                : "-top-125 opacity-0 invisible"
            }`}
            style={{ height: "350px" }}
          >
            <div className="h-full flex flex-col justify-evenly items-center">
              {links}
            </div>
          </ul>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <DarkModeToggle />
            <button
              onClick={() => handleNavClick("#contact", "Contact")}
              className="hidden lg:flex bg-black dark:bg-white text-white dark:text-black px-5 py-2 rounded-lg hover:scale-105 transition"
            >
              Get in Touch
            </button>
            {/* Mobile toggle */}
            <button
              onClick={() => setOpen(!open)}
              className={`lg:hidden p-2.5 rounded-lg transition ${
                open ? "bg-red-900 rotate-90" : "back-drop-b"
              }`}
            >
              {open ? (
                <VscChromeClose size={26} className="text-white" />
              ) : (
                <CgMenuRight size={26} className="text-black dark:text-white" />
              )}
            </button>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
