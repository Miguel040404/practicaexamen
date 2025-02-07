import { modificarPaciente } from "@/lib/actions";

function PacienteModificar({ paciente }) {

    return (
        <form action={modificarPaciente}>
            <input type="hidden" name="id" defaultValue={paciente.id} />
            <input name='nombre' defaultValue={paciente.nombre} />
            <input type="date" name='fechaNacimiento' defaultValue={paciente.fechaNacimiento.toISOString().split('T')[0]} />
            <input name='plantaId' defaultValue={paciente.plantaId} />

            <button className="border-2 border-black">Modificar</button>
        </form>
    );
}

export default PacienteModificar;

