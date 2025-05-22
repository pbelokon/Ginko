import Link from "next/link";
import DarkModeToggle from "./DarkModToggle";
import useServerDarkMode from "@/hooks/useServerDarkMode";

export default function PageHeader({ className }) {
  const theme = useServerDarkMode();
  return (
    <header className={`flex justify-between items-center ${className}`}>
      <Link
        href="/dashboard"
        className="text-xl hover:underline underline-offset-8 decoration-2"
      >
        Finance App
      </Link>

      <div className="flex items-center space-x-4">
        <DarkModeToggle theme={theme} />
        <div>User Drop Down</div>
      </div>
    </header>
  );
}
