export default function Navbar() {
  return (
    <nav className="flex items-center justify-between border-b border-gray-200 bg-white px-8 py-4">
      <div>
        <h1 className="text-2xl font-bold text-blue-700">
          ICGA
        </h1>
      </div>

      <ul className="hidden gap-8 font-medium text-gray-700 md:flex">
        <li><a href="#">Home</a></li>
        <li><a href="#">Schools</a></li>
        <li><a href="#">Courses</a></li>
        <li><a href="#">Research</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

      <button className="rounded-lg bg-blue-700 px-5 py-2 text-white hover:bg-blue-800">
        Login
      </button>
    </nav>
  );
}