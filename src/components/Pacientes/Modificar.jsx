import { modificarPaciente } from "@/lib/actions";

function PacienteModificar({paciente, plantas}) {

    return (
        <form action={modificarPaciente}>
            <input type="hidden" name="id" defaultValue={paciente.id} />
            <input name='nombre' defaultValue={paciente.nombre} />
            <input type="date" name='fechaNacimiento' defaultValue={paciente.fechaNacimiento.toISOString().split('T')[0]} />

            <select name="plantaId" defaultValue={paciente.plantaId}>
                <option value="">-- Seleccione una planta --</option>
                {plantas.map(plantas => (
                    <option key={plantas.id} value={plantas.id}>
                        {plantas.nombre}
                    </option>
                ))}
            </select>

            <button className="border-2 border-black">Modificar</button>
        </form>
    );
}

export default PacienteModificar;

