import { useEffect, useContext } from "react";
import { DarkModeContext } from "./DarkModeContext";

export default function DarkModeWrapper({ children }) {
  const { darkMode } = useContext(DarkModeContext);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return children;
}
