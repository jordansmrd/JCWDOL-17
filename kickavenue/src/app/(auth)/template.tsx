/** @format */

import Image from "next/image";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function template({ children }: Props) {
  return (
    <div className="min-h-screen flex items-center justify-center -mt-24">
      <div className="flex justify-between items-center max-w-screen-xl w-full">
        <div className=" justify-center w-full hidden md:flex">
          <center className="flex flex-col gap-2">
            <div>
              <Image
                src={
                  "https://www.kickavenue.com/static/media/register-left.ae5efdee.png"
                }
                width={450}
                height={341}
                alt=""
              />
              <b className="">What are you waiting for?</b>
            </div>
            <p className="">immerse yourself in the latest trend in fashion</p>
          </center>
        </div>
        <div className="flex justify-center w-full p-4">{children}</div>
      </div>
    </div>
  );
}
