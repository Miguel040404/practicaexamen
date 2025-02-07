import { insertarPlanta } from "@/lib/actions";

function PlantaInsertar() {
    return (
        <form action={insertarPlanta}>
            <input name="nombre" placeholder="Nombre" />
            <input name="jefePlanta" placeholder="Jefe de planta" />

            <button className="border-2 border-black disabled:bg-gray-200">
                insertar
            </button>
        </form>
    );
}

export default PlantaInsertar;


