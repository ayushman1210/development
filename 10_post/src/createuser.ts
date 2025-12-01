import {PrismaClient} from "@prisma/client";

const prisma =PrismaClient();

async function main(){
await prisma.user
}

main().then(
    async ()=>{
        await prisma.$disconnect();
    })
    .catch(async (e)=>{
        console.error(e);
        prisma.$disconnect();
    })