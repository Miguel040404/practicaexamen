import ListaPlantas from "@/components/Plantas/Lista";
// import Modal from "@/components/modal";
// import { eliminarPlanta, insertarPlanta, modificarPlanta } from "@/lib/actions";
// import { obtenerPlanta, obtenerPlantas } from "@/lib/data";
import { PrismaClient } from "@prisma/client";
import Link from "next/link";
import { Suspense } from "react";
const prisma = new PrismaClient;

async function PaginaPlantas() {

    return (
        <div className="container mx-auto py-12">
            <Link href="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block mb-4">Volver</Link>

            <h1 className="text-4xl font-bold text-center mb-4">Lista de plantas</h1>

            <Suspense fallback={<div className="text-center">Cargando...</div>}>
                <ListaPlantas />
            </Suspense>
        </div>
    );
}

export default PaginaPlantas;
