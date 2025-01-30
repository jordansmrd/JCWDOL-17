/** @format */
import { ICard } from "@/interfaces/card.interface";

export const url = process.env.NEXT_PUBLIC_API_URL || "";
export const getProducts = async (productName: string) => {
  const res = await fetch(url + "/products?search=" + productName);
  const data = await res.json();
  return data;
};

export const getProduct = async (slug: string) => {
  const res = await fetch(url + "/products?slug=" + slug);
  const data = (await res.json()) as ICard[];
  if (!data.length) throw Error("no Data");
  return data[0];
};
