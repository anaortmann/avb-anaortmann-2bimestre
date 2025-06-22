import { useFavorites } from "../../context/FavoritesContext";
import FavoriteItem from "../../components/FavoriteItem";

export default function FavoritesPage() {
  const { favorites } = useFavorites();

  return (
    <div className="p-4 bg-pink-50 min-h-screen">
      <h2 className="text-3xl font-bold text-pink-700 mb-16 text-center">❤️ Meus Favoritos</h2>

      {favorites.length === 0 ? (
        <p className="text-center text-gray-600">Você ainda não tem cachorros favoritos.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-2 gap-y-4 mt-6">
          {favorites.map((item) =>
            item && item.image && item.breed ? (
              <FavoriteItem key={item.id} item={item} />
            ) : null
          )}
        </div>
      )}
    </div>
  );
}
