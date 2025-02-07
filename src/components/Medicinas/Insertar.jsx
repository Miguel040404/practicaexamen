import { insertarMedicina } from "@/lib/actions";

function MedicinaInsertar({ pacientes }) {
    return (
        <form action={insertarMedicina}>
            <input name="nombre" placeholder="Nombre" />
            <input name="via" placeholder="Via" />

            {/* <select name="pacienteId">
                <option value="">-- Seleccione un paciente --</option>
                {pacientes.map(paciente => (
                    <option key={paciente.id} value={paciente.id}>
                        {paciente.nombre}
                    </option>
                ))}
            </select> */}

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
            
            <button className="border-2 border-black disabled:bg-gray-200">
                insertar
            </button>
        </form>
    );


}

export default MedicinaInsertar;
