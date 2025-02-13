/** @format */
"use client";
import { register } from "@/helpers/handlers/auth";
import { registerInit } from "@/helpers/formik.init";
import { registerValidator } from "@/models/auth.model";
import { Alert, Snackbar } from "@mui/material";
import { useFormik } from "formik";
import Link from "next/link";
import React from "react";

export default function Page() {
  const [errMessage, setErrMessage] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const formik = useFormik({
    validationSchema: registerValidator,
    initialValues: registerInit,
    onSubmit: async (values) => {
      setErrMessage("");
      await register(values).then((res) => {
        if (res?.error) setErrMessage(res.error);
        else {
          setOpen(true);
          formik.resetForm();
        }
      });
    },
  });

  return (
    <div className=" w-full max-w-[450px]">
      <div className="mb-4">
        <h4 className=" text-[21px] font-bold mb-1">Register</h4>
        <h5 className="mb-2">
          {"Already have an account? "}
          <Link href={"/login"} className="green font-semibold">
            Sign in here
          </Link>
        </h5>
      </div>
      <form className="w-full" onSubmit={formik.handleSubmit}>
        <input
          type="email"
          required
          className="w-full p-4 mb-1  border rounded-md"
          placeholder="Email Address"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        <p className="mb-4 text-red-400">{formik.errors.email}</p>
        <input
          type="text"
          required
          className="w-full p-4 mb-1 border rounded-md"
          placeholder="Your First Name"
          name="first_name"
          value={formik.values.first_name}
          onChange={formik.handleChange}
        />
        <p className="mb-4 text-red-400">{formik.errors.first_name}</p>

        <input
          type="text"
          required
          className="w-full p-4 mb-1 border rounded-md"
          placeholder="Your Last Name"
          name="last_name"
          value={formik.values.last_name}
          onChange={formik.handleChange}
        />
        <p className="mb-4 text-red-400">{formik.errors.last_name}</p>

        <input
          type="password"
          className="w-full p-4 mb-1 border rounded-md"
          placeholder="Password"
          name="password"
          required
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        <p className="mb-4 text-red-400">{formik.errors.password}</p>

        <input
          type="password"
          className="w-full p-4 mb-1 border rounded-md"
          placeholder="Confirm Password"
          name="confirmPassword"
          required
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
        />
        <p className="mb-4 text-red-400">{formik.errors.confirmPassword}</p>

        <p className="text-xs mb-4">
          {"By registering, I agree to Kick Avenue's "}
          <span className="green">Terms and Conditions</span>
          {" and "}
          <span className="green">Privacy Policy</span>
        </p>
        <p className="mb-4 text-red-400">{errMessage}</p>

        <button
          className={`${
            !(formik.isValid && formik.dirty) || formik.isSubmitting
              ? "bg-gray-300 text-gray-400"
              : "bg-[#159953] text-white"
          }   font-semibold p-4 w-full rounded-[50px] mb-6`}
          disabled={!(formik.isValid && formik.dirty) || formik.isSubmitting}
        >
          {formik.isSubmitting ? "Processing..." : "Register"}
        </button>
        <center>{"Your data will be protected and will not be shared"}</center>
      </form>
      <Snackbar
        open={open}
        autoHideDuration={1500}
        onClose={() => setOpen(false)}
        message="Login Success"
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert severity="success" variant="filled" sx={{ width: "100%" }}>
          Register Success
        </Alert>
      </Snackbar>
    </div>
  );
}
