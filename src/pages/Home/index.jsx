import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  const irParaCachorros = () => {
    navigate('/cachorros');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h2 className="text-3xl font-semibold mt-10">Bem-vindo ao DogApp!</h2>
      <p className="mt-2 text-gray-600">Clique abaixo para ver um cachorro aleatório 🐾</p>

      <button
        onClick={irParaCachorros}
        className="mt-6 bg-black text-white px-6 py-3 rounded hover:bg-gray-800"
      >
        Mostrar Cachorro
      </button>
    </div>
  );
}
