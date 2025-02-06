import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 h-screen">
      <h1 className="text-6xl font-bold">Bienvenido</h1>
      <div className="flex space-x-4">
        <Link 
          href="/medicinas" 
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded shadow-lg"
        >
          MEDICINAS
        </Link>
        <Link 
          href="/pacientes" 
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded shadow-lg"
        >
          PACIENTES
        </Link>
        <Link 
          href="/plantas" 
          className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded shadow-lg"
        >
          PLANTAS
        </Link>
      </div>

    </div>
  );
}

