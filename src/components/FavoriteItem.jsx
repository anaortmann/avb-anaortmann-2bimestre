import { useFavorites } from "../context/FavoritesContext";


export default function FavoriteItem({ item }) {
  const { favorites, toggleFavorite } = useFavorites();

  // ✅ Proteção extra:
  if (!item || !item.image || !item.breed) {
    return null;  // Não renderiza se o item estiver corrompido
  }

  const isFavorite = favorites.some(fav => fav.id === item.id);

  return (
    <div className="bg-white border border-pink-200 p-4 rounded-xl shadow-md text-center max-w-xs mx-auto hover:shadow-lg transition">
      <img
        src={item.image}
        alt={`Cachorro da raça ${item.breed}`}
        className="w-full h-52 object-cover rounded-lg mb-4 shadow-sm"
      />
      <p className="capitalize font-semibold text-pink-700 mb-2">{item.breed}</p>
      <button
        onClick={() => toggleFavorite(item)}
        className={`w-full px-4 py-2 rounded-full text-sm font-medium transition ${
          isFavorite
            ? "bg-pink-500 text-white hover:bg-pink-600"
            : "bg-pink-100 text-pink-700 hover:bg-pink-200"
        }`}
      >
        {isFavorite ? "❤️ Remover dos Favoritos" : "🤍 Adicionar aos Favoritos"}
      </button>
    </div>
  );
}
