/** @format */

import React from "react";

import { CartTable } from "@/components/cart.component";

export default function Page() {
  return (
    <div className="flex justify-center">
      <div className="max-w-screen-xl w-full mt-14">
        <div className="flex p-3 md:border md:shadow-md rounded-md  flex-col md:flex-row">
          <div className="w-full">
            <CartTable />
          </div>
        </div>
      </div>
    </div>
  );
}
