import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Cachorros() {
  const [imagem, setImagem] = useState("");
  const [raca, setRaca] = useState("");

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

  // Executa ao entrar na página
  useEffect(() => {
    buscarCachorro();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <h2 className="text-2xl md:text-3xl font-semibold">Cachorro Aleatório 🐶</h2>

      <button
        onClick={buscarCachorro}
        className="mt-4 bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
      >
        Mostrar Outro
      </button>´

      {imagem && (
        <div className="mt-6">
          <img
            src={imagem}
            alt="Cachorro"
            className="max-w-[90vw] max-h-[400px] object-contain rounded shadow-lg mx-auto"
          />
          {raca && (
            <p className="mt-4 text-lg font-medium text-gray-700">
              Raça: <span className="capitalize">{raca}</span>
            </p>
          )}
        </div>
      )}

    </div>
  );
}
