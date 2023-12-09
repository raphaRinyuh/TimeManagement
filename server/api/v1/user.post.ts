import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    const body = await readBody(event) satisfies Required<dbUser>
    try {
        
        const data = await prisma.user.create({
            data:{
                name: body.name,
                email: body.email,
                password: {
                    create: {
                        password: body.password.password ? body.password.password : "Nischt"
                    }
                }
            }
        })

        const response: ApiState = {
            status: "Successfull",
            response: data
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
