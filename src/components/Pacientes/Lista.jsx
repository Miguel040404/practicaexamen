//------------------------------------------- componente servidor

import { obtenerPacientes } from "@/lib/data";
// import Link from "next/link";
// import Modal from "../modal";
// import PacienteModificar from "./Modificar";
// import PacienteEliminar from "./Eliminar";
// import PacienteInsertar from "./Insertar";

export default async function ListaPacientes() {

    const pacientes = await obtenerPacientes();

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* <Modal texto="Insertar" className="bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md cursor-pointer transition-colors duration-300 ease-in-out">
                <PacienteInsertar />
            </Modal> */}

            {
                pacientes.map(paciente =>
                    <li key={paciente.id} className="bg-white shadow-md rounded p-4">
                        <div className="flex flex-col items-start space-y-2">
                            <p className="text-2xl font-semibold">Nombre: <span className="font-normal">{paciente.nombre}</span></p>
                            <p className="text-gray-600 text-center">{new Date(paciente.fechaNacimiento).toISOString().split('T')[0]}</p>
                            <p className="text-lg font-semibold">Id de la planta: <span className="font-normal">{paciente.plantaId}</span></p>
                            {/* <p className="text-lg font-semibold">Vía de administración: <span className="font-normal">{paciente.via}</span></p> */}
                        </div>
                        <div>
                            {/* <Link href={`/pacientes/${paciente.id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Ver</Link> */}
                            {/* 
                            <Modal texto="Eliminar" className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md cursor-pointer transition-colors duration-300 ease-in-out">
                               <PacienteEliminar paciente={paciente}/>
                            </Modal>

                            <Modal texto="Modificar" className="bg-yellow-500 hover:bg-yellow-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md cursor-pointer transition-colors duration-300 ease-in-out">
                               <PacienteModificar paciente={paciente}/>
                            </Modal> */}
                        </div>
                    </li>
                )
            }
        </div>
    );
}