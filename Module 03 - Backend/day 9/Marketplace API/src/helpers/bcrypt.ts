import { genSalt, hash } from "bcrypt";

export const hashedPassword = async (
  password: string,
  saltNumber: number = 10
) => {
  const salt = await genSalt(saltNumber);
  return await hash(password, salt);
};
