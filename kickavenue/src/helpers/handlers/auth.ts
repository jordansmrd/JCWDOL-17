/** @format */
"use server";
import { api } from "./api";

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

export const refreshToken = async (token: string) => {
  const res = await api("/auth/token", "POST", {}, token);

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
