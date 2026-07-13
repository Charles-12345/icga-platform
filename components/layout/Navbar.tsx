import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white shadow-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* ================= Logo ================= */}
        <Link href="/" className="flex items-center gap-3">

          <Image
            src="/images/icga-logo.jpg"
            alt="Impact Capacity Global Academy Logo"
            width={50}
            height={50}
            priority
          />

          <div>
            <h1 className="text-lg font-bold leading-tight text-blue-900">
              Impact Capacity Global Academy
            </h1>

            <p className="text-sm text-gray-600">
              Capacity for Change | Skills for Impact
            </p>
          </div>

        </Link>

        {/* ================= Navigation ================= */}
        <nav className="flex items-center gap-6">

          <Link href="/" className="font-medium text-gray-700 hover:text-blue-700 transition">
            Home
          </Link>

          <Link href="/about" className="font-medium text-gray-700 hover:text-blue-700 transition">
            About
          </Link>

          <Link href="/schools" className="font-medium text-gray-700 hover:text-blue-700 transition">
            Schools
          </Link>

          <Link href="/courses" className="font-medium text-gray-700 hover:text-blue-700 transition">
            Courses
          </Link>

          <Link href="/research" className="font-medium text-gray-700 hover:text-blue-700 transition">
            Research
          </Link>

          <Link href="/training" className="font-medium text-gray-700 hover:text-blue-700 transition">
            Corporate Training
          </Link>

          <Link href="/contact" className="font-medium text-gray-700 hover:text-blue-700 transition">
            Contact
          </Link>

        </nav>

        {/* ================= Right Buttons ================= */}
        <div className="flex items-center gap-3">

          <button className="rounded-lg border border-gray-300 px-4 py-2 hover:bg-gray-100 transition">
            🔍
          </button>

          <button className="rounded-lg border border-blue-700 px-5 py-2 text-blue-700 transition hover:bg-blue-50">
            Login
          </button>

          <button className="rounded-lg bg-blue-700 px-5 py-2 font-medium text-white transition hover:bg-blue-800">
            Register
          </button>

        </div>

      </div>
    </header>
  );
}