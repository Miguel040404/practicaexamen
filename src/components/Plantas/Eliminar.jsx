import { eliminarPlanta } from "@/lib/actions";

function PlantaEliminar({ planta }) {
    return (
        <>
            {/* <h1 className="text-2xl text-red-600">¿Desea eliminar los siguientes datos</h1>
            <p>PLANTA: {planta.nombre}</p>
            <p>DIRECCIÓN: {planta.direccion}</p> */}
            <form action={eliminarPlanta}>
                <input type="hidden" name="id" defaultValue={planta.id} />
                <button className="border-2 border-black">Eliminar</button>
            </form>
        </>
    );
}

export default PlantaEliminar;

