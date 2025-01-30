/** @format */
import * as Yup from "yup";

export const registerSchema = Yup.object({
  first_name: Yup.string().min(4).required("Name is required"),
  last_name: Yup.string().min(4).required("Name is required"),
  email: Yup.string().email().required("Email is required"),
  password: Yup.string()
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Password must contain at least 8 characters, one uppercase, one number and one special case character"
    )
    .required("Password is required"),
});
