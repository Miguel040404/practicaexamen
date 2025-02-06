import { obtenerPlanta } from "@/lib/data";

export default async function Planta({ id }) {

    const planta = await obtenerPlanta(id)

    return (
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col items-center">
            <p className="text-lg font-bold text-center"> {planta.nombre} </p>
            <p className="text-gray-600 text-center"> Jefe de planta: {planta.jefePlanta} </p>
        </div>

    );
}

