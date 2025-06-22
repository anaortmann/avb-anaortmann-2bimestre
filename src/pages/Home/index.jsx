import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  const irParaCachorros = () => {
    navigate('/cachorros');
  };

  const irParaFavoritos = () => {
    navigate('/favoritos');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-pink-50">
      <h1 className="text-4xl font-bold text-pink-700 mb-4">🌸 Bem-vinda (o) ao DogApp! 🐶</h1>

      <p className="text-gray-700 mb-2 text-lg">
        Aqui você vai encontrar muitos cachorros lindos pra alegrar seu dia! 💕
      </p>

      <p className="text-gray-600 mb-6">
        Escolha se quer ver um novo amiguinho ou rever os que já estão no seu coração. ❤️
      </p>

      <div className="flex flex-col md:flex-row gap-4">
        <button
          onClick={irParaCachorros}
          className="bg-pink-300 text-pink-900 px-6 py-3 rounded-full hover:bg-pink-400 transition"
        >
          🎲 Ver um cachorro aleatório
        </button>

        <button
          onClick={irParaFavoritos}
          className="bg-pink-100 text-pink-700 px-6 py-3 rounded-full hover:bg-pink-200 transition"
        >
          ❤️ Meus Favoritos
        </button>
      </div>

      <p className="mt-8 text-sm text-gray-500">
        ✨ Cada clique pode te apresentar um novo sorriso de quatro patas!
      </p>
    </div>
  );
}
