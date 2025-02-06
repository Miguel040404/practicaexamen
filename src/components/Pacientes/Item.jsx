import { obtenerPaciente } from "@/lib/data";

export default async function Paciente({ id }) {

    const paciente = await obtenerPaciente(id)

    return (
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col items-center">
            <p className="text-lg font-bold text-center"> {paciente.nombre} </p>
            <p className="text-gray-600 text-center"> Fecha de nacimiento: {paciente.fechaNacimiento.to} </p>
            <p className="text-gray-600 text-center">{new Date(paciente.fechaNacimiento).toISOString().split('T')[0]}</p>
            <p className="text-gray-600 text-center"> Id de la planta: {paciente.plantaId} </p>
        </div>

    );
}


