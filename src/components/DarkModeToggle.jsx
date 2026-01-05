import { MoonStar, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const DarkModeToggle = () => {
  const [darkMode, SetDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "ligth");
    }
  }, [darkMode]);

  return (
    <div>
      <button
        onClick={() => SetDarkMode((prev) => !prev)}
        className="p-1.5 rounded-md text-black dark:text-white cursor-pointer shadow back-drop-b"
      >
        {darkMode ? <Sun size={18} /> : <MoonStar size={18} />}
      </button>
    </div>
  );
};
export default DarkModeToggle;
