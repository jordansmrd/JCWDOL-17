/** @format */

import { api } from "./api";

export const uploadAvatar = async (formData: FormData, token: string) =>
  await api(
    "/auth/image",
    "POST",
    {
      body: formData,
    },
    token
  );
