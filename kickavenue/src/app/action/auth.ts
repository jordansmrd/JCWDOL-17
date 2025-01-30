/** @format */

"use server";

import { signIn, signOut } from "@/auth";

export const login = async (credentials: {
  email: string;
  password: string;
}) => {
  await signIn("credentials", {
    ...credentials,
    redirect: false,
  });
};

export const googleLogin = async () => {
  await signIn("google", {
    redirectTo: "/",
  });
};

export const logout = async () => {
  await signOut();
};
