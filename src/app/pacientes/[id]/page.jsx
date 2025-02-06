import Paciente from "@/components/Pacientes/Item";
import { PrismaClient } from "@prisma/client";
import { Suspense } from "react";
const prisma = new PrismaClient();

async function PaginaPaciente({params, searchParams}) {
    const {id} = await params

  return (
    <div>
        <h1>Paciente {id}</h1>
        <Suspense fallback={"Cargando..."} >
            {/* <Lista id={id} /> */}
            <Paciente id={id} />
        </Suspense>
    </div>
  )

}

export default PaginaPaciente;

