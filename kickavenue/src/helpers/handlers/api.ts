/** @format */
import { ICard } from "@/interfaces/card.interface";
import { api_url, nox_url } from "../config";

export const api = async (
  path: string,
  method: "POST" | "GET" | "DELETE" | "PATCH",
  data?: {
    body?: Record<string, unknown> | FormData;
    contentType?: "application/json" | "application/x-www-form-urlencoded";
  },
  token?: string
) => {
  const headers: HeadersInit = {};
  if (data?.contentType) headers["Content-Type"] = data.contentType;
  if (token) headers["Authorization"] = "Bearer " + token;

  const res = await fetch(api_url + path, {
    method,
    body:
      data?.body instanceof FormData ? data.body : JSON.stringify(data?.body),
    headers,
  });

  const json = await res.json();
  if (res.status > 299) throw new Error(json.message);
  return json;
};

export const getProducts = async (productName: string) => {
  const res = await fetch(nox_url + "/products?search=" + productName);
  const data = await res.json();
  return data;
};

export const getProduct = async (slug: string) => {
  const res = await fetch(nox_url + "/products?slug=" + slug);
  const data = (await res.json()) as ICard[];
  if (!data.length) throw Error("no Data");
  return data[0];
};
