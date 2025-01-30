/** @format */

export interface ICard {
  id: number;
  img_src: string;
  product_name: string;
  price: number;
  hot_item?: boolean;
  slug: string;
}
