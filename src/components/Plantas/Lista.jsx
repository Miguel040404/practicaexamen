//------------------------------------------- componente servidor

import { obtenerPlantas } from "@/lib/data";
// import Link from "next/link";
import Modal from "@/components/Modal";
import PlantaModificar from "./Modificar";
import PlantaEliminar from "./Eliminar";
import PlantaInsertar from "./Insertar";

export default async function ListaPlantas() {

    const plantas = await obtenerPlantas();

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Modal texto="Insertar" className="bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md cursor-pointer transition-colors duration-300 ease-in-out">
                <PlantaInsertar />
            </Modal>

            {
                plantas.map(planta =>
                    <li key={planta.id} className="bg-white shadow-md rounded p-4">
                        <div className="flex flex-col items-start space-y-2">
                            <p className="text-2xl font-semibold">Nombre: <span className="font-normal">{planta.nombre}</span></p>
                            <p className="text-lg font-semibold">Jefe de planta: <span className="font-normal">{planta.jefePlanta}</span></p>
                        </div>
                        <div>
                            {/* <Link href={`/plantas/${planta.id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Ver</Link> */}
                          
                            <Modal texto="Modificar" className="bg-yellow-500 hover:bg-yellow-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md cursor-pointer transition-colors duration-300 ease-in-out">
                               <PlantaModificar planta={planta}/>
                            </Modal>

                            <Modal texto="Eliminar" className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md cursor-pointer transition-colors duration-300 ease-in-out">
                               <PlantaEliminar planta={planta}/>
                            </Modal>

                        </div>
                    </li>
                )
            }
        </div>
    );
}