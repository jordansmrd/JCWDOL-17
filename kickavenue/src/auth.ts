/** @format */

import NextAuth, { User } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { login, refreshToken } from "./helpers/handlers/auth";
import Google from "next-auth/providers/google";
import { jwtDecode } from "jwt-decode";
import { InvalidAuthError } from "./interfaces/auth.error";

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: {
    strategy: "jwt",
    maxAge: 60 * 20,
  },
  providers: [
    Credentials({
      async authorize(credentials) {
        try {
          return await login(credentials);
        } catch (error: unknown) {
          throw new InvalidAuthError(error);
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
    async jwt({ token, user, trigger }) {
      if (user) {
        const { access_token, refresh_token } = user;
        return { access_token, refresh_token };
      } else if (token?.refresh_token || trigger == "update") {
        const newToken = await refreshToken(token.refresh_token!);

        return newToken;
      }
      return token;
    },

    async session({ session, token }) {
      if (token.access_token) {
        const user = jwtDecode(token.access_token!) as User;
        session.user.id = user.id as string;
        session.user.email = user.email as string;
        session.user.img_src = user.img_src as string;
        session.user.first_name = user.first_name as string;
        session.user.last_name = user.last_name as string;
        session.user.role = user.role as string;
        session.user.access_token = token.access_token as string;
      }

      return session;
    },
  },
});
