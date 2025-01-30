/** @format */
"use client";
import { getProducts } from "@/app/helpers/api";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ICard } from "@/interfaces/card.interface";
import CardSkeletonList from "./skeleton/card.skeleton";

export default function CardList() {
  const [products, setProducts] = useState<Array<ICard>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const searchParams = useSearchParams();

  const search = searchParams.get("search") || "";
  useEffect(() => {
    setIsLoading(true);
    getProducts(search)
      .then((res) => setProducts(res))
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  }, [search]);
  return (
    <div className="flex items-center flex-col max-w-screen-2xl m-auto my-6">
      <div className="grid grid-cols-2 text-xs md:text-sm md:grid-cols-3  lg:grid-cols-4 w-full px-6 gap-2  ">
        {isLoading ? (
          <CardSkeletonList />
        ) : (
          products.map((card, key) => <Card {...card} key={key} />)
        )}
      </div>
    </div>
  );
}

export function Card(props: ICard) {
  return (
    <Link href={"/products/" + props.slug}>
      <div className="w-full px-[15px] max-w-[308px]  ">
        <div className=" w-full py-5">
          <div>
            <div className="md:px-[15px] relative">
              <Image
                width={216}
                height={100}
                className=" max-w-[216px] w-full"
                src={props.img_src}
                alt=""
              />
              <Image
                width={18}
                height={22}
                alt=""
                className={`w-[18px] h-[22px] absolute right-[15%] top-0 ${
                  !props.hot_item ? "hidden" : "block"
                } `}
                src="data:image/png;base64,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"
              />
            </div>
          </div>

          <div className="px-2 md:px-5 mt-4 flex flex-col  ">
            <b className="h-8 md:h-10 mb-4 w-full overflow-hidden ">
              {props.product_name}
            </b>
            <b className="text-[#159953] overflow-hidden ">
              IDR {props.price.toLocaleString()}
            </b>
          </div>
        </div>
      </div>
    </Link>
  );
}
