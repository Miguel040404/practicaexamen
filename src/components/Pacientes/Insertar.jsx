import { insertarPaciente } from "@/lib/actions";

function PacienteInsertar({plantas}) {
    return (
        <form action={insertarPaciente}>
            <input name="nombre" placeholder="Nombre" />
            <input type="date" name="fechaNacimiento" />
           
            <select name="plantaId">
                <option value="">-- Seleccione una planta --</option>
                {plantas.map(planta => (
                    <option key={planta.id} value={planta.id}>
                        {planta.nombre}
                    </option>
                ))}
            </select>

            <button className="border-2 border-black disabled:bg-gray-200">
                insertar
            </button>
        </form>
    );
}

export default PacienteInsertar;

