import { modificarMedicina } from "@/lib/actions";

function MedicinaModificar({ medicina, pacientes }) {

    return (
        <form action={modificarMedicina}>
            <input type="hidden" name="id" defaultValue={medicina.id} />
            <input name='nombre' defaultValue={medicina.nombre} />
            <input name='via' defaultValue={medicina.via} />

            {/* <select name="pacienteId" defaultValue={medicina.pacienteId}>
                <option value="">-- Seleccione un paciente --</option>
                {pacientes.map(paciente => (
                    <option key={paciente.id} value={paciente.id}>
                        {paciente.nombre}
                    </option>
                ))}
            </select> */}
            {/* <input type="checkbox" name="pacienteId" defaultValue={medicina.pacienteId} /> */}
            {
                pacientes.map(paciente =>
                    <label key={paciente.id}>
                        <input
                            type="checkbox" 
                            name={`paciente${paciente.id}`}
                            value={paciente.nombre}/>

                        {paciente.nombre}

                    </label>
                )
            }

            <button className="border-2 border-black">Modificar</button>
        </form>
    );
}

export default MedicinaModificar;
