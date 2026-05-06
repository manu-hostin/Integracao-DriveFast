import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (

    <div className="bg-blue-400 min-h-screen">

      <div className="relative w-full h-[900px]">
        <Image
          src="/carro.jpg"
          alt="Carro"
          fill
        ></Image>
 
        {/* Degradê */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-400"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">

          <h1 className="text-5xl text-white justify-self-center pt-6">DriveFast</h1>
          <h2 className="text-xl justify-self-center max-inline-340 text-center">DriveFast é um sistema para gerenciamento de locação de veículos. Nesta
          aplicação, é possível cadastrar clientes, cadastrar veículos e registrar locações
          consumindo dados de uma API backend.</h2>
        </div>
      </div>

      <div className="flex justify-center">
        <nav className="text-xl mt-6 flex gap-4 flex-row text-white">
          <Link href="/clientes" className="bg-blue-500 rounded-xs text-center px-8 py-3">
            <button>Clientes</button>
          </Link>
          
          <Link href="/veiculos" className="bg-blue-500 rounded-xs text-center px-8 py-3">
            <button>Veículos</button>
          </Link>

          <Link href="/locacoes" className="bg-blue-500 rounded-xs text-center px-8 py-3">
            <button>Locações</button>
          </Link>
        </nav>
      </div>

   </div>
  );
}
