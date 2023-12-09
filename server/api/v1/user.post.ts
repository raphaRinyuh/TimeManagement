import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    const body = await readBody(event) satisfies Required<dbUser>
    try {
        if(!validateEmail(body.email)){
            const response:ApiState = {
                status: "Error",
                error: "The Email Address is invalid"
            }

            return response
        }

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
            error: (e as object).toString()

        }
        return response
    }


})

function validateEmail(email:string): boolean {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(email.match(validRegex)){
        return true
    }
    return false
}