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

  // Scroll spy
  useEffect(() => {
    const handleSpy = () => {
      // Page-এর একদম top-এ থাকলে Profile active
      if (window.scrollY < 100) {
        setActive("Profile");
        return;
      }

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

  // BackToTopButton থেকে custom event শুনবে
  useEffect(() => {
    const handleReset = () => setActive("Profile");
    window.addEventListener("resetActiveNav", handleReset);
    return () => window.removeEventListener("resetActiveNav", handleReset);
  }, []);

  // Smooth scroll handler
  const handleNavClick = (link, name) => {
    setActive(name);
    setOpen(false);
    const target = document.querySelector(link);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const links = navItem.map((item, idx) => {
    const Icon = item.icon;

    return (
      <li key={idx} className="relative">
        <button
          onClick={() => handleNavClick(item.link, item.name)}
          className={`transition-all flex items-center cursor-pointer font-normal text-sm duration-300 dark:text-white ${
            active === item.name
              ? "text-black dark:text-white"
              : "dark:hover:text-white dark:text-white/70"
          }`}
        >
          <Icon size={18} className="inline-block mr-2" />
          {item.name}
        </button>
        {/* Underline / active border */}
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
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        isSticky ? "py-2" : "py-6"
      }`}
    >
      <Container>
        <nav
          className={`w-full back-drop-b backdrop-blur-sm flex justify-between items-center border border-gray-300 rounded-xl p-3 transition-all duration-500 ${
            isSticky ? "back-drop-b shadow-lg" : "bg-transparent"
          }`}
        >
          {/* Logo */}
          <img
            src={navImg}
            alt="logo"
            onClick={() => handleNavClick("#profile", "Profile")}
            className="h-12 w-12 cursor-pointer object-cover rounded-xl hover:scale-110 transition"
          />

          {/* Desktop links */}
          <ul className="hidden lg:flex gap-8 items-center">{links}</ul>

          {/* mobile menu */}

          <ul
            className={`lg:hidden absolute left-0 w-full bg-primary dark:bg-primary-dark backdrop-blur-2xl rounded-xl transition-all duration-500 ${
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
            <div
              onClick={() => handleNavClick("#contact", "Contact")}
              className="group hidden relative md:inline-flex transition-all hover:scale-105 items-center justify-center rounded-lg font-normal text-sm back-drop-b"
            >
              <button className="px-4 py-2.5 rounded-lg backdrop-b dark:text-white/90 cursor-pointer font-medium">
                Get in Touch
              </button>
            </div>
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
