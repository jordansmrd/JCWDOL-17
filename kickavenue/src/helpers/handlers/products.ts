/** @format */
import { ICard } from "@/interfaces/card.interface";
import { api_url } from "../config";

export const getProducts = async (productName: string) => {
  const res = await fetch(api_url + "/products?search=" + productName);
  const { data } = await res.json();
  return data;
};

export const getProduct = async (slug: string) => {
  const res = await fetch(api_url + "/products/" + slug);
  const { data } = await res.json();
  if (!data) throw Error("no Data");

  return data as ICard;
};
