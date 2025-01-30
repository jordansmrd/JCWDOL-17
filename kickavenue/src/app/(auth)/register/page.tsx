/** @format */
"use client";
import { register } from "@/app/helpers/auth";
import { useFormik } from "formik";
import Link from "next/link";
import React from "react";
import * as Yup from "yup";

export default function Page() {
  const formik = useFormik({
    validationSchema: Yup.object({
      name: Yup.string().min(4).required("Name is required"),
      email: Yup.string().email().required("Email is required"),
      password: Yup.string()
        .matches(
          /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
          "Password must contain at least 8 characters, one uppercase, one number and one special case character"
        )
        .required("Password is required"),
      confirmPassword: Yup.string()
        .required("Password Confirmation is required")
        .oneOf([Yup.ref("password")], "Passwords must match"),
    }),
    initialValues: {
      email: "",
      name: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: async (values) => {
      try {
        const message = await register(values);
        alert(message);
        formik.resetForm();
      } catch (error) {
        if (error instanceof Error) alert(error.message);
      }
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
          placeholder="Your Name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        <p className="mb-4 text-red-400">{formik.errors.name}</p>

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
    </div>
  );
}
