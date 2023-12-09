import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    const id = getRouterParams(event).id

    try {
        const data = await prisma.user.findFirst({
            where: {
                id: id
            },
            include: {
                password: true
            }
        })

        const response:ApiState = {
            status: "Successfull",
            response: data ? data : {}
        }

        return response

    }catch(e){

        const response:ApiState = {
            status: "Error",
            error: (e as object).toString()
        }
        return response
    }

})