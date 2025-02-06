import Planta from "@/components/Plantas/Item";
import { PrismaClient } from "@prisma/client";
import { Suspense } from "react";
const prisma = new PrismaClient();

async function PaginaPlanta({params, searchParams}) {
    const {id} = await params

  return (
    <div>
        <h1>Planta {id}</h1>
        <Suspense fallback={"Cargando..."} >
            {/* <Lista id={id} /> */}
            <Planta id={id} />
        </Suspense>
    </div>
  )

}

export default PaginaPlanta;

