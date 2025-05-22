"use client";

import useDarkMode from "@/hooks/useDarkMode";
import Sun from "@/icons/Sun";
import Moon from "@/icons/Moon";
import Button from "./Button";

export default function DarkModeToggle({ defaultMode = "dark" }) {
  const { theme, toggleTheme } = useDarkMode(defaultMode);

  return (
    <Button variant="ghost" size="sm" onClick={toggleTheme}>
      {theme === "light" && <Moon className="w-4 h-4" />}

      {theme === "dark" && <Sun className="w-4 h-4" />}
    </Button>
  );
}
