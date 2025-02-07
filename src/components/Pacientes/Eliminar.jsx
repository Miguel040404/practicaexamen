import { eliminarPaciente } from "@/lib/actions";

function PacienteEliminar({ paciente }) {
    return (
        <>
            <h1 className="text-2xl text-red-600">¿Desea eliminar los siguientes datos</h1>
            <p>PACIENTE: {paciente.nombre}</p>
            <p>FECHA DE NACIMIENTO: {new Date(paciente.fechaNacimiento).toISOString().split('T')[0]}</p>
            <form action={eliminarPaciente}>
                <input type="hidden" name="id" defaultValue={paciente.id} />
                <button className="border-2 border-black">Eliminar</button>
            </form>
        </>
    );
}

export default PacienteEliminar;

