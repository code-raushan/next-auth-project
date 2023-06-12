import NextAuth from 'next-auth';

import type {NextAuthOptions} from 'next-auth';

import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
    session: {
        strategy: 'jwt'
    },
    secret: process.env.AUTH_SECRET,
    providers: [
        CredentialsProvider({
            name: "your email",
            credentials:{
                email: {
                    label: "Email",
                    type: "email",
                    placeholder: "email@email.com",
                },
                password: {
                    label: "Password",
                    type: "password"
                },
                
            },
            async authorize(credentials){
                const user = {id: '1', name: 'Admin', email: 'admin@email.com'};
                return user;
            }
        })
    ]
}
const handler = NextAuth(authOptions);
export {handler as GET, handler as POST}

