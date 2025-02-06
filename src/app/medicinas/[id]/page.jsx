import Medicina from "@/components/Medicinas/Item";
import { PrismaClient } from "@prisma/client";
import { Suspense } from "react";
const prisma = new PrismaClient();

async function PaginaMedicina({params, searchParams}) {
    const {id} = await params

  return (
    <div>
        <h1>Medicina {id}</h1>
        <Suspense fallback={"Cargando..."} >
            {/* <Lista id={id} /> */}
            <Medicina id={id} />
        </Suspense>
    </div>
  )

}

export default PaginaMedicina;

