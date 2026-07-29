export default function Navbar() {
  return (
    <nav className="w-full bg-white py-5 px-10 md:px-32 flex items-center justify-between shadow-sm fixed top-0 z-50">
      <h1 className="text-2xl md:text-3xl font-bold text-cyan-600">Habli Islamy</h1>

      <ul className="flex space-x-8 text-lg font-medium text-gray-800">
        <li>
          <a href="#" className="hover:text-cyan-600 transition">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-cyan-600 transition">
            About Me
          </a>
        </li>
        <li>
          <a href="#showcase" className="hover:text-cyan-600 transition">
            Project
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-cyan-600 transition">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
