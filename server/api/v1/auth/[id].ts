import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, 'id');

    const temp = await prisma.auth.findFirst({where: { userid: id}})
    if(!temp?.duration){
        return false;
    }
    if(((new Date(Date.now()).getTime() - temp?.duration.getTime()) / 1000 / 60) <= 0){
        const response:AuthState = {
            status: "Invalid"
        }

        return response
    }

    const response:AuthState = {
        status: "Valid",
        token: temp.token
    }

    return response
})