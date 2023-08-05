import { addUser } from "@/service/user";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_OAUTH_ID || "",
      clientSecret: process.env.GOOGLE_OAUTH_SECRET_ID || "",
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      const { id, email, image, name } = user;
      if (!email) {
        return false;
      }
      addUser({
        email,
        username: email.split("@")[0],
        image,
        id,
        name: name || "",
      });
      return true;
    },
    async session({ session }) {
      const user = session?.user;
      if (user) {
        session.user = {
          ...user,
          username: user.email?.split("@")[0] || "",
        };
      }
      return session;
    },
  },
  pages: {
    signIn: "/auth/signin",
  },
};
const handler = NextAuth(authOptions);
export { authOptions, handler as GET, handler as POST };
