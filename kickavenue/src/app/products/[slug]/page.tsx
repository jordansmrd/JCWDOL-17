/** @format */

import { getProduct } from "@/app/helpers/api";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params }: Props) {
  const slug = (await params).slug;
  const product = await getProduct(slug);

  return (
    <div className="flex justify-center">
      <div className="max-w-screen-xl w-full mt-14">
        <div className="flex gap-2 mb-2 mx-3">
          <Link href="/">Sneakers</Link>
          <span className="grey">{"/"}</span>
          <Link href="#">{product.product_name}</Link>
        </div>
        <div className="flex p-3 md:border md:shadow-md rounded-md  flex-col md:flex-row">
          <div className="w-full flex justify-center items-center">
            <Image src={product.img_src} alt="img" width={350} height={249} />
          </div>
          <div className="w-full">
            <div className="p-6">
              <h1 className="font-bold text-xl mb-5">{product.product_name}</h1>
              <p className="w-full">start from</p>
              <div className="flex justify-between mb-4">
                <h1 className="font-bold text-xl ">
                  IDR {product.price.toLocaleString()}
                </h1>
                <button className="underline">Size Chart</button>
              </div>
              <div className="flex justify-between mb-6 text-white gap-3">
                <div className="w-full h-12 rounded bg-black font-bold flex justify-center items-center">
                  Brand New
                </div>
                <div className="w-full h-12 rounded bg-[#F2F2F2] font-bold grey flex justify-center items-center">
                  Used
                </div>
                <div className="w-full h-12 rounded bg-black font-bold flex justify-center items-center">
                  Pre-Order
                </div>
              </div>

              <div className="py-2 px-5">
                <div className="mb-6">
                  <h2 className="font-bold mb-2">
                    Please Make Sure The Size Fits You.
                  </h2>
                  <p className="mt-2">
                    If you are unsure about your size, please click the size
                    chart button and browse through the chart to find your
                    correct measurements. Our company policy does not accept
                    refunds or returns for sizing-related issues. For more
                    details, kindly contact our Customer Service to consult
                    further
                  </p>
                </div>

                <div className="mb-6">
                  <h2 className="font-bold mb-2">Authentic. Guaranteed.</h2>
                  <p className="mt-2">
                    {`We thoroughly check every purchase you make and applies our
                    company's guarantee to the product's legitimacy. The
                    guarantee is valid for 2 days after receiving the product
                    from the delivery service. Should you have any concern about
                    the product you purchase, kindly reach out to our Customer
                    Service and Specialist on Monday - Saturday 10.00 - 21.00
                    (GMT+7 / WIB).`}
                  </p>
                </div>

                <div className="mb-6">
                  <h2 className="font-bold mb-4">
                    Share this product to your friends!
                  </h2>
                  <div className="mt-2 flex gap-6">
                    <button>
                      <Image
                        width={24}
                        height={24}
                        alt=""
                        src={
                          "https://www.kickavenue.com/static/media/instagram30.00ab54c2.png"
                        }
                      />
                    </button>
                    <button>
                      <Image
                        width={24}
                        height={24}
                        alt=""
                        src={
                          "https://www.kickavenue.com/static/media/facebook30.6532adef.png"
                        }
                      />
                    </button>
                    <button>
                      <Image
                        width={24}
                        height={24}
                        alt=""
                        src={
                          "https://www.kickavenue.com/static/media/twitter30.a04dbd22.png"
                        }
                      />
                    </button>
                    <button>
                      <Image
                        width={24}
                        height={24}
                        alt=""
                        src={
                          "https://www.kickavenue.com/static/media/mail30.76ff49e5.png"
                        }
                      />
                    </button>
                    <button>
                      <Image
                        width={24}
                        height={24}
                        alt=""
                        src={
                          "https://www.kickavenue.com/static/media/copy30.84ed7d37.png"
                        }
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
