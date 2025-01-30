/** @format */

import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { getUser, login } from "./app/helpers/auth";
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: {
    strategy: "jwt",
    maxAge: 60 * 60 * 3,
  },
  providers: [
    Credentials({
      async authorize(credentials) {
        try {
          const token = await login(credentials);
          if (!token) throw new Error("wrong email/password");
          const user = await getUser(token);

          return user;
        } catch (error) {
          throw error;
        }
      },
    }),
    Google({
      authorization: {
        prompt: "consent",
        access_type: "offline",
        response_type: "code",
      },
    }),
  ],
  callbacks: {
    signIn({ account, profile }) {
      if (account?.provider == "google") {
        return profile?.email_verified || false;
      }
      return true; // Do different verification for other providers that don't have `email_verified`
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.image = user.image;
      }
      return token;
    },

    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string;
        session.user.email = token.email as string;
        session.user.image = token.image as string;
        session.user.name = token.name as string;
      }

      return session;
    },
  },
});
