/** @format */

import Navbar from "@/components/navbar.component";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function Template({ children }: Props) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
