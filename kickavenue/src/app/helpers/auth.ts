/** @format */
"use server";
import { User } from "next-auth";
import { cookies } from "next/headers";

const url = process.env.AUTH_API_URL || "";

export const login = async (credentials: Partial<Record<string, unknown>>) => {
  const response = await fetch(
    url +
      "/auth/login?email=" +
      credentials.email +
      "&password=" +
      credentials.password,
    {
      method: "POST",
      next: {
        revalidate: 0,
      },
    }
  );

  const token = await response.json();

  const cookieStore = await cookies();
  cookieStore.set("auth", token.authToken);
  return token.authToken;
};

export const getUser = async (token: string) => {
  const res = await fetch(url + "/auth/me", {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    method: "GET",
  });

  return (await res.json()) as User;
};

export const register = async ({
  email,
  name,
  password,
}: {
  email: string;
  name: string;
  password: string;
}) => {
  const response = await fetch(
    url +
      "/auth/login?email=" +
      email +
      "&password=" +
      password +
      "&name=" +
      name,
    {
      method: "POST",
      next: {
        revalidate: 0,
      },
    }
  );

  await response.json();
  return "New user has been registered";
};
