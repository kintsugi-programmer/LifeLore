// auth backend
// lifelore\app\api\auth\[...nextauth]\route.js
// here we can use providers like google auth
// backend endpoints
// 1;19;00

import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";


const handler = NextAuth({
    providers: [
      GoogleProvider({
        clientId: "",
        clientSecret: ""
      })
    ],
    callbacks: {
      async session({ session }) {
      },
      async signIn({ profile, }) {
      },
    }
  })
  
  export { handler as GET, handler as POST }
  
