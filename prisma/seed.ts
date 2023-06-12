//NextAuth doesn't provide a built-in way to handle user registration, as this is unnecessary for certain authentication methods such as magic links, email login, or oAuth. However, when using credential authentication, it's necessary to create a user account first, usually through a registration page. 


import { PrismaClient } from "@prisma/client";
import {hash} from 'bcryptjs'

const prisma = new PrismaClient();

async function main(){
    const password = await hash("password123", 12);
    const user = await prisma.user.upsert({
        where: {email: "admin@email.com"},
        update: {},
        create: {
            email: "admin@email.com",
            name: "Admin",
            password
        }
    });
    console.log({user});
}
main()
    .then(()=>prisma.$disonnect())
    .catch(async(e)=>{
        console.error(e);
        await prisma.$disonnect();
        process.exit(1)
    })