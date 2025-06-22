import { useState, useEffect } from 'react';
import axios from 'axios';
import { useFavorites } from "../../context/FavoritesContext";

export default function Cachorros() {
  const [imagem, setImagem] = useState("");
  const [raca, setRaca] = useState("");
  const { favorites, toggleFavorite } = useFavorites();

  const buscarCachorro = async () => {
    try {
      const resposta = await axios.get("https://dog.ceo/api/breeds/image/random");
      const urlImagem = resposta.data.message;
      setImagem(urlImagem);

      const partes = urlImagem.split("/");
      const nomeRaca = partes[4];
      setRaca(nomeRaca.replace("-", " "));
    } catch (erro) {
      console.error("Erro ao buscar imagem de cachorro", erro);
    }
  };

  useEffect(() => {
    buscarCachorro();
  }, []);

  const cachorroAtual = {
    id: imagem,
    image: imagem,
    breed: raca,
  };

  const isFavorite = favorites.some(fav => fav.id === cachorroAtual.id);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center bg-pink-50">
      <h2 className="text-3xl font-bold text-pink-700 mb-4">🐾 Cachorro Aleatório</h2>

      <button
        onClick={buscarCachorro}
        className="bg-pink-300 text-pink-900 px-6 py-3 rounded-full hover:bg-pink-400 transition shadow-sm mb-6"
      >
        🎲 Mostrar Outro Cachorrinho
      </button>

      {imagem && (
        <div className="mt-4 p-6 bg-white rounded-xl shadow-lg max-w-xl w-full">
          <img
            src={imagem}
            alt="Cachorro"
            className="w-full h-96 object-cover rounded-md mb-4 shadow"
          />
          {raca && (
            <p className="text-xl font-semibold text-pink-700 capitalize mb-4">
              Raça: {raca}
            </p>
          )}
          <button
            onClick={() => toggleFavorite(cachorroAtual)}
            className={`w-full px-4 py-3 rounded-full text-lg font-medium transition ${
              isFavorite
                ? "bg-pink-500 text-white hover:bg-pink-600"
                : "bg-pink-100 text-pink-700 hover:bg-pink-200"
            }`}
          >
            {isFavorite ? "❤️ Remover dos Favoritos" : "🤍 Adicionar aos Favoritos"}
          </button>
        </div>
      )}
    </div>
  );
}
