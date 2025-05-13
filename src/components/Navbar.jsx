import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white flex gap-4">
      <Link to="/" className="hover:underline">Início</Link>
      <Link to="/cachorros" className="hover:underline">Cachorros</Link>
    </nav>
  );
}
