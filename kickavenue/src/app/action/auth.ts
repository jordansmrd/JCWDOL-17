/** @format */

"use server";

import { signIn, signOut } from "@/auth";

export const login = async (credentials: { email: string; password: string }) =>
  await signIn("credentials", {
    ...credentials,
    redirect: false,
  }).catch((err) => (err instanceof Error ? { error: err.message } : err));

export const googleLogin = async () => {
  // await signIn("google", {
  //   redirectTo: "/",
  // });
};

export const logout = async () => {
  await signOut();
};
