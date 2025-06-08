import { useEffect, useState } from "react";

export const ThemeToggle = ({ onlyIcon }: { onlyIcon: boolean }) => {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode((prev) => !prev)}
      className="cursor-pointer p-0 sm:p-2 rounded-md transition flex sm:gap-2 sm:flex-row flex-col flex-wrap m-0"
    >
      <span>{darkMode ? "☀️" : "🌙"}</span>
      <span className="text-xs sm:text-base">
        {onlyIcon ? "" : darkMode ? "Light" : "Dark"}
      </span>
    </button>
  );
};
