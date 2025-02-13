/** @format */
"use client";
import { Alert, Snackbar } from "@mui/material";
import { useFormik } from "formik";
import React, { useCallback, useRef } from "react";
import { User } from "next-auth";
import Image from "next/image";
import DefaultAvatar from "@/../public/profile-default.png";
import { uploadAvatar } from "@/helpers/handlers/upload";
import { useSession } from "next-auth/react";
import { updateUser } from "@/helpers/handlers/auth";
import { updateProfileValidator } from "@/models/auth.model";
import { updateProfileInit } from "@/helpers/formik.init";
export default function ProfileComponent(user: User) {
  const { data: session, update } = useSession();
  const [errMessage, setErrMessage] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const ref = useRef<HTMLInputElement>(null);

  const upload = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      setIsLoading(true);
      if (e.target.files?.length) {
        const image: File = e.target.files[0];
        formik.setFieldValue("image", image);
        const form = new FormData();
        form.append("image", image);
        await uploadAvatar(form, user.access_token!);
        await update();
      }
      setIsLoading(false);
    },
    [session]
  );

  const formik = useFormik({
    validationSchema: updateProfileValidator,
    initialValues: updateProfileInit(user),
    onSubmit: async (values) => {
      try {
        setErrMessage("");
        await updateUser(values, session?.user.access_token as string);
        await update();
        setOpen(true);
      } catch (error) {
        if (error instanceof Error) setErrMessage(error.message);
      }
    },
  });

  return (
    <div className=" flex items-center justify-center lg:mt-10 ">
      <div className="flex justify-between items-center max-w-screen-xl w-full">
        <div className="flex justify-center w-full p-4">
          <div className=" w-full max-w-[450px]">
            <div className="mb-4">
              <h4 className=" text-[21px] font-bold mb-1">Personal Profile</h4>
              <h5 className="mb-2">
                {"Set your profile, so we can give you better experience."}
              </h5>
            </div>
            <form className="w-full" onSubmit={formik.handleSubmit}>
              <center className=" my-10">
                <Image
                  width={500}
                  height={500}
                  className="rounded-full w-[250] h-[250] aspect-square object-cover"
                  src={session?.user.img_src || DefaultAvatar}
                  alt="avatar img"
                />
                <input
                  type="file"
                  hidden
                  ref={ref}
                  accept="image/png, image/gif, image/jpeg"
                  onChange={upload}
                />
                <input
                  className={`mt-2 font-bold text-xs cursor-pointer `}
                  onClick={() => ref.current?.click()}
                  type="button"
                  value={isLoading ? "Uploading..." : "Upload new Picture"}
                  disabled={isLoading}
                ></input>
              </center>

              <div>
                <label htmlFor="email" className="font-semibold text-xs">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="w-full p-4 my-1  border rounded-md"
                  disabled
                  placeholder="Email Address"
                  name="email"
                  value={user.email || ""}
                  onChange={formik.handleChange}
                />
                <p className="mb-4 text-red-400"></p>
              </div>

              <div>
                <label htmlFor="first_name" className="font-semibold text-xs">
                  First Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full p-4 my-1 border rounded-md"
                  placeholder="Your First Name"
                  name="first_name"
                  value={formik.values.first_name}
                  onChange={formik.handleChange}
                />
                <p className="mb-4 text-red-400">{formik.errors.first_name}</p>
              </div>

              <div>
                <label htmlFor="last_name" className="font-semibold text-xs">
                  Last Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full p-4 my-1 border rounded-md"
                  placeholder="Your Last Name"
                  name="last_name"
                  value={formik.values.last_name}
                  onChange={formik.handleChange}
                />
                <p className="mb-4 text-red-400">{formik.errors.last_name}</p>
              </div>

              <p className="mb-4 text-red-400">{errMessage}</p>

              <button
                className={`${
                  !formik.isValid || formik.isSubmitting
                    ? "bg-gray-300 text-gray-400"
                    : "bg-[#159953] text-white"
                }   font-semibold p-4 w-full rounded-[50px] mb-6`}
                disabled={!formik.isValid || formik.isSubmitting}
              >
                {formik.isSubmitting ? "Processing..." : "Update Profile"}
              </button>
              <center>
                {"Your data will be protected and will not be shared"}
              </center>
            </form>
            <Snackbar
              open={open}
              autoHideDuration={1500}
              onClose={() => setOpen(false)}
              message="Login Success"
              anchorOrigin={{ vertical: "top", horizontal: "center" }}
            >
              <Alert severity="success" variant="filled" sx={{ width: "100%" }}>
                User Updated Successfully
              </Alert>
            </Snackbar>
          </div>
        </div>
      </div>
    </div>
  );
}
