import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="w-full bg-blue-600 text-white p-4 flex flex-wrap justify-between items-center">
      <Link to="/" className="hover:underline">Início</Link>
      <Link to="/cachorros" className="hover:underline">Cachorros</Link>
    </nav>
  );
}
