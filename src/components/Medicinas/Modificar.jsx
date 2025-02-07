import { modificarMedicina } from "@/lib/actions";

function MedicinaModificar({ medicina }) {

    return (
        <form action={modificarMedicina}>
            <input type="hidden" name="id" defaultValue={medicina.id} />
            <input name='nombre' defaultValue={medicina.nombre} />
            <input name='via' defaultValue={medicina.via} />
            {/* <select name="via" defaultValue={medicina.via}>
                <option value="">-- Seleccione una vía de administración --</option>
                <option value="Oral">Oral</option>
                <option value="Intravenosa">Intravenosa</option>
                <option value="Anal">Anal</option>
            </select> */}

            <button className="border-2 border-black">Modificar</button>
        </form>
    );
}

export default MedicinaModificar;
