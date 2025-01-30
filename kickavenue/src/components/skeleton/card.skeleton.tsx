/** @format */
import React from "react";

export function CardSkeleton() {
  return (
    <span>
      <div className="w-full px-[15px] max-w-[308px]  ">
        <div className=" w-full py-5">
          <div>
            <div className="md:px-[15px] relative">
              <div className="  w-full h-[100px] animate-pulse bg-gray-200 rounded-md"></div>
            </div>
          </div>

          <div className="px-2 md:px-5 mt-4 flex flex-col ">
            <b className="h-8 md:h-5 mb-4 w-full overflow-hidden animate-pulse  bg-gray-200 rounded-md"></b>
            <b className="text-[#159953] overflow-hidden animate-pulse h-4  bg-gray-200 rounded-md"></b>
          </div>
        </div>
      </div>
    </span>
  );
}

export default function CardSkeletonList() {
  return [...new Array(8)].map((_, key) => <CardSkeleton key={key} />);
}
