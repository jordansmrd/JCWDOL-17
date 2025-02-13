/** @format */
"use client";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { api } from "@/helpers/handlers/api";
import { useSession } from "next-auth/react";
import { ICartResponse } from "@/interfaces/cart.interface";
import { Button } from "@mui/material";
import Link from "next/link";

export const CartTable = () => {
  const [carts, setCarts] = useState<Array<ICartResponse>>([]);
  const { data: session } = useSession();
  const fetchCart = useCallback(async () => {
    const { data } = await api("/carts", "GET", {}, session?.user.access_token);
    setCarts(data);
  }, [session]);

  const deleteCart = useCallback(
    async (productId: number) => {
      await api(
        "/carts/" + productId,
        "DELETE",
        {},
        session?.user.access_token
      );

      fetchCart();
    },
    [session, fetchCart]
  );

  useEffect(() => {
    if (session?.user.access_token) fetchCart();
  }, [session, fetchCart]);

  return (
    <div className="p-6">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <b>Product</b>
              </TableCell>
              <TableCell></TableCell>
              <TableCell align="center">
                <b>Action</b>
              </TableCell>
              <TableCell align="right">
                <b>Price</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {carts.map((row) => (
              <TableRow
                key={row.Product.product_name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">
                  <Link href={"/products/" + row.Product.slug}>
                    <Image
                      src={row.Product.img_src}
                      alt=""
                      width={200}
                      height={200}
                      className="m-auto"
                    />
                  </Link>
                </TableCell>
                <TableCell scope="row" className="max-w-60">
                  <div className="font-bold"> {row.Product.product_name}</div>
                  <p className=" text-xs">
                    If you are unsure about your size, please click the size
                    chart button and browse through the chart to find your
                    correct measurements. Our company policy does not accept
                    refunds or returns for sizing-related issues. For more
                    details, kindly contact our Customer Service to consult
                  </p>
                </TableCell>
                <TableCell align="center">
                  <button onClick={() => deleteCart(row.Product.id)}>
                    <DeleteIcon />
                  </button>
                </TableCell>
                <TableCell align="right">
                  <span className="font-bold">
                    Rp {row.Product.price.toLocaleString("id-ID")}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <div className="flex justify-end mt-3">
        <Button>
          <span className="font-bold text-xl">checkout</span>
        </Button>
      </div>
    </div>
  );
};
