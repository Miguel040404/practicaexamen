import { insertarMedicina } from "@/lib/actions";

function MedicinaInsertar({ medicinas }) {
    return (
        <form action={insertarMedicina}>
            <input name="nombre" placeholder="Nombre" />
            <input name="via" placeholder="Via" />
            {/* <select name="via">
                <option value="">-- Seleccione una medicina --</option>
                <option value="Oral">Oral</option>
                <option value="Intravenosa">Intravenosa</option>
                <option value="Anal">Anal</option>
            </select> */}

            <button className="border-2 border-black disabled:bg-gray-200">
                insertar
            </button>
        </form>
    );


}

export default MedicinaInsertar;
