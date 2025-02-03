/** @format */

import { User } from "next-auth";

export const registerInit = {
  email: "",
  first_name: "",
  last_name: "",
  password: "",
  confirmPassword: "",
};

export const updateProfileInit = (user: User) => {
  return {
    first_name: user.first_name || "",
    last_name: user.last_name || "",
    image: null,
    img_src: user.img_src || "",
  };
};
