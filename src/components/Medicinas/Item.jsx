import { obtenerMedicina } from "@/lib/data";

export default async function Medicina({ id }) {

    const medicina = await obtenerMedicina(id)

    return (
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col items-center">
            <p className="text-lg font-bold text-center"> {medicina.nombre} </p>
            {/* <p className="text-gray-600 text-center"> </p> */}
            <p className="text-gray-600 text-center"> Vía de administración: {medicina.via} </p>
        </div>

    );
}
