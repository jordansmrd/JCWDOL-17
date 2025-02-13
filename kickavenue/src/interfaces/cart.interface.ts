/** @format */

export interface ICart {
  id: number;
  img_src: string;
  product_name: string;
  price: number;
  slug: string;
}

export interface ICartResponse {
  Product: ICart;
}
