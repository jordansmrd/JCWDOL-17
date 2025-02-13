/** @format */
"use client";
import { api } from "@/helpers/handlers/api";
import { ICard } from "@/interfaces/card.interface";
import { Session } from "next-auth";
import { useState } from "react";
import { Alert, Snackbar } from "@mui/material";

const ButtonAddToCart = (props: {
  product: ICard;
  session: Session | null;
}) => {
  const { product, session } = props;
  const [open, setOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<{
    message: string;
    error: boolean;
  }>({
    message: "",
    error: false,
  });

  const addToCart = () =>
    api(
      "/carts",
      "POST",
      {
        body: {
          product_id: product.id,
        },
        contentType: "application/json",
      },
      session?.user.access_token
    )
      .then(({ message }) => setToastMessage((_) => ({ ..._, message })))
      .catch((error) => {
        if (error instanceof Error) {
          setToastMessage((_) => ({
            ..._,
            message: error.message,
            error: true,
          }));
        }
      })
      .finally(() => {
        setOpen(true);
      });

  return (
    <>
      <button
        className="w-full h-12 rounded bg-black font-bold flex justify-center items-center"
        onClick={addToCart}
      >
        Add to Cart
      </button>
      <div>
        <Snackbar
          open={open}
          autoHideDuration={1500}
          onClose={() => setOpen(false)}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert
            severity={toastMessage.error ? "error" : "success"}
            variant="filled"
            sx={{ width: "100%" }}
          >
            {toastMessage.message}
          </Alert>
        </Snackbar>
      </div>
    </>
  );
};
export default ButtonAddToCart;
