import { insertarPaciente } from "@/lib/actions";

function PacienteInsertar({ plantas }) {
    return (
        <form action={insertarPaciente}>
            <input name="nombre" placeholder="Nombre" />
            <input type="date" name="fechaNacimiento" />
            <input name="plantaId" placeholder="Id de la planta" />

            <button className="border-2 border-black disabled:bg-gray-200">
                insertar
            </button>
        </form>
    );
}

export default PacienteInsertar;

