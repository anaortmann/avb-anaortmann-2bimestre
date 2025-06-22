import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="w-full bg-pink-100 text-gray-800 p-4 flex justify-center gap-6 shadow-md">
      <Link to="/" className="hover:text-pink-600 transition font-medium">
        Início
      </Link>
      <Link to="/cachorros" className="hover:text-pink-600 transition font-medium">
        Cachorros
      </Link>
      <Link to="/favoritos" className="hover:text-pink-600 transition font-medium">
        Favoritos ❤️
      </Link>
    </nav>
  );
}