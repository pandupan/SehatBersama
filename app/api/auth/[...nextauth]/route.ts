import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"

const authOption: NextAuthOptions = {
    session : {
        strategy : "jwt"
    },
    secret : process.env.NEXTAUTH_SECRET,
    providers : [
        CredentialsProvider({
            type : "credentials",
            name : "Credentials",
            credentials:{
                fullname : {label : "Full Name", type : "text"},
                email : {label : "Email", type : "email"},
                password : {label : "Password", type : "password"}
            },
            async authorize(credentials : any ){
                const {email, password, fullname} = credentials as {
                    fullname : string;
                    email : string;
                    password : string;
                };
                const user : any = {
                    id : 1,
                    fullname : fullname,
                    email : email,
                    password : password
                };
                if(user){
                    // console.log(user);
                    return user;
                } else {
                    return null;
                }
            }
        })
    ],
    callbacks : {
        jwt({token,account, user} : any ) {
            if (account?.provider === "credentials") {
                // console.log({token, account, user})
                token.fullname = user.fullname
                token.email = user.email
            }
            return token
        },
        async session({session,token} : any){
            if("email" in token){
                session.user.email = token.email
            }
            if("fullname" in token){
                session.user.fullname = token.fullname
            }
            // console.log({session, token})
            return session
        }
    }
}

const handler = NextAuth(authOption)

export {
    handler as GET, handler as POST
};