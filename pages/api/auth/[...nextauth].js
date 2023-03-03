import nextAuth from "next-auth";
import NextAuth from "next-auth";
import FacebookProvider from "next-auth/providers/facebook";

export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
