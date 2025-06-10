import { useState } from 'react';
import axios from 'axios';

export default function Cachorros() {
  const [imagem, setImagem] = useState("");

  const buscarCachorro = async () => {
    try {
      const resposta = await axios.get("https://dog.ceo/api/breeds/image/random");
      setImagem(resposta.data.message);
    } catch (erro) {
      console.error("Erro ao buscar imagem de cachorro", erro);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <h2 className="text-2xl md:text-3xl font-semibold">Veja um cachorro aleatório!</h2>
      <button
        onClick={buscarCachorro}
        className="mt-4 bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
      >
        Mostrar Cachorro 🐾
      </button>

    {imagem && (
      <div className="mt-6">
        <img
          src={imagem}
          alt="Cachorro"
          className="w-[300px] h-[300px] object-cover rounded shadow-lg mx-auto"
        />
      </div>
    )}

    </div>
  );
}
