import Link from "next/link";

export default function PageHeader({ className }) {
  return (
    <header className={`flex justify-between items-center ${className}`}>
      <Link
        href="/dashboard"
        className="text-xl hover:underline underline-offset-8 decoration-2"
      >
        Finance App
      </Link>

      <div className="flex items-center space-x-4">
        <div>Toggle</div>
        <div>User Drop Down</div>
      </div>
    </header>
  );
}
