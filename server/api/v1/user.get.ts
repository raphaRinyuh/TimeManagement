import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    try {
        const users = await prisma.user.findMany();

        const response: ApiState = {
            status: "Successfull",
            response: users
        }

        return response
    } catch (e) {
        const response: ApiState = {
            status: "Error",
            error: e

        }
        return response
    }


})
