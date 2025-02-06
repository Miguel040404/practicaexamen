'use server'
import { revalidatePath } from 'next/cache'

import prisma from '@/lib/prisma'

export async function insertarPlanta(formData) {
    const nombre = formData.get('nombre')
    const jefePlanta = formData.get('jefePlanta')

    await prisma.planta.create({
        data: {
            nombre: nombre,
            jefePlanta: jefePlanta,
        }
    })

    revalidatePath('/plantas')
}

export async function modificarPlanta(formData) {
    const id = Number(formData.get('id'))
    const nombre = formData.get('nombre')
    const jefePlanta = formData.get('jefePlanta')

    await prisma.planta.update({
        where: {
            id
        },
        data: {
            nombre: nombre,
            jefePlanta: jefePlanta,
        }
    })
    revalidatePath('/plantas')
}

export async function eliminarPlanta(formData) {
    const id = Number(formData.get('id'))

    await prisma.planta.delete({
        where: { id }
    })
    revalidatePath('/plantas')
}

//___________________________pacientes____________________________

export async function insertarPaciente(formData) {
    const nombre = formData.get('nombre')
    const fechaNacimiento = formData.get('fechaNacimiento')
    const plantaId = Number(formData.get('plantaId'))

    const fechaNacimientoDate = new Date(fechaNacimiento);

    await prisma.paciente.create({
        data: {
            nombre: nombre,
            fechaNacimiento: fechaNacimientoDate,
            plantaId: plantaId,
        },
    });

    revalidatePath('/pacientes')
}

export async function modificarPaciente(formData) {
    const id = Number(formData.get('id'))
    const nombre = formData.get('nombre')
    const fechaNacimiento = formData.get('fechaNacimiento')
    const plantaId = Number(formData.get('plantaId'))

    const fechaNacimientoDate = new Date(fechaNacimiento);
    if (isNaN(fechaNacimientoDate)) {
        throw new Error("El formato de 'fechaNacimiento' no es válido. Debe ser una fecha.");
    }

    await prisma.paciente.update({
        where: {
            id
        },
        data: {
            nombre: nombre,
            fechaNacimiento: fechaNacimientoDate,
            plantaId: plantaId,
        }           
    })
    revalidatePath('/pacientes')
}

export async function eliminarPaciente(formData) {
    const id = Number(formData.get('id'))

    await prisma.paciente.delete({
        where: { id }
    })
    revalidatePath('/pacientes')
}

//___________________________medicinas____________________________

export async function insertarMedicina(formData) {
    const nombre = formData.get('nombre')
    const via = formData.get('via')

    await prisma.medicina.create({
        data: {
            nombre: nombre,
            via: via,
        }
    })

    revalidatePath('/medicinas')
}

export async function modificarMedicina(formData) {
    const id = Number(formData.get('id'))
    const nombre = formData.get('nombre')
    const via = formData.get('via')

    await prisma.medicina.update({
        where: {
            id
        },
        data: {
            nombre: nombre,
            via: via,
        }
    })
    revalidatePath('/medicinas')
}

export async function eliminarMedicina(formData) {
    const id = Number(formData.get('id'))

    await prisma.medicina.delete({
        where: { id }
    })
    revalidatePath('/medicinas')
}
