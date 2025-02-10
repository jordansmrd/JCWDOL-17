/** @format */
"use server";
import { api } from "./api";
import { cookies } from "next/headers";
import { decode } from "next-auth/jwt";
import { auth_secret } from "../config";

export const login = async (credentials: Partial<Record<string, unknown>>) => {
  const res = await api("/auth", "POST", {
    body: credentials,
    contentType: "application/json",
  });

  return {
    access_token: res.data.access_token,
    refresh_token: res.data.refresh_token,
  };
};

export const register = async (newUser: {
  email: string;
  first_name: string;
  last_name: string;
  password: string;
}) => {
  await api("/auth/new", "POST", {
    body: newUser,
    contentType: "application/json",
  });
  return "New user has been registered";
};

export const refreshToken = async () => {
  const cookie = cookies();
  const ftoken = (await cookie).get("authjs.session-token")?.value;
  const { refresh_token } = (await decode({
    token: String(ftoken),
    secret: auth_secret,
    salt: "authjs.session-token",
  })) as { refresh_token: string };

  const res = await api("/auth/token", "POST", {}, refresh_token);

  return {
    access_token: res.data.access_token,
    refresh_token: res.data.refresh_token,
  };
};

export const updateUser = async (
  data: {
    first_name: string;
    last_name: string;
  },
  token: string
) => {
  await api(
    "/auth",
    "PATCH",
    {
      body: data,
      contentType: "application/json",
    },
    token
  );
};
