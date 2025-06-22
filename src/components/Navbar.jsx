import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="w-full bg-gray-100 text-gray-900 p-4 flex justify-between items-center shadow-md">
      <Link to="/" className="hover:underline hover:text-blue-600 transition">
        Início
      </Link>
      <Link to="/cachorros" className="hover:underline hover:text-blue-600 transition">
        Cachorros
      </Link>
    </nav>
  );
}
