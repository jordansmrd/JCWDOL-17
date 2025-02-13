/** @format */
"use client";
import { useFormik } from "formik";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Facebook from "@/../public/facebook.png";
import Google from "@/../public/google.png";
import { googleLogin, login } from "@/app/action/auth";
import { useRouter } from "next/navigation";
import Snackbar from "@mui/material/Snackbar";
import { Alert } from "@mui/material";

export default function Page() {
  const { push } = useRouter();
  const [open, setOpen] = React.useState(false);
  const [errMessage, setErrMessage] = React.useState("");

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      setErrMessage("");
      await login(values).then((res) => {
        if (res?.error) {
          setErrMessage(res.error);
        } else {
          setOpen(true);
          push("/");
        }
      });
    },
  });

  return (
    <div className=" w-full max-w-[450px]">
      <div className="mb-4">
        <h4 className=" text-[21px] font-bold mb-1">Login</h4>
        <h5 className="mb-2">
          {"Don't have an account? "}
          <Link href={"/register"} className="green font-semibold">
            Sign up here
          </Link>
        </h5>
      </div>
      <form className="w-full" onSubmit={formik.handleSubmit}>
        <input
          type="email"
          required
          className="w-full p-4 mb-4 border rounded-md"
          placeholder="Email Address"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />

        <input
          type="password"
          className="w-full p-4 mb-4 border rounded-md"
          placeholder="Password"
          name="password"
          required
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        <p className="text-sm capitalize text-red-600 mb-4 ">{errMessage}</p>
        <button
          className={`${
            formik.isSubmitting
              ? "bg-gray-300 text-gray-400"
              : "bg-[#159953] text-white"
          }  font-semibold p-4 w-full rounded-[50px] mb-6`}
          disabled={formik.isSubmitting}
        >
          {formik.isSubmitting ? "Processing..." : "Login"}
        </button>
      </form>
      <Snackbar
        open={open}
        autoHideDuration={1500}
        onClose={() => setOpen(false)}
        message="Login Success"
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert severity="success" variant="filled" sx={{ width: "100%" }}>
          Login Success
        </Alert>
      </Snackbar>
      <center>
        <Link href={"#"} className="green font-bold ">
          Forgot password?
        </Link>
        <h5 className="mt-6 mb-2">Login instantly using your social media</h5>

        <div className="flex justify-between">
          <div className="border p-6 w-full mx-[5] my-[10] rounded-md cursor-pointer">
            <Image
              alt=""
              src={Facebook}
              width={16}
              height={8}
              className="h-4 w-2"
            />
          </div>

          <div
            className="border p-6 w-full mx-[5] my-[10] rounded-md cursor-pointer"
            onClick={googleLogin}
          >
            <Image
              alt=""
              src={Google}
              width={15}
              height={15}
              className="h-[15] w-[15]"
            />
          </div>
        </div>
      </center>
    </div>
  );
}
