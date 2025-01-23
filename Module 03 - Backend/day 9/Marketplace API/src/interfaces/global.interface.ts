/** @format */

import { UserLogin } from "./user.interface";

declare global {
  namespace Express {
    export interface Request {
      user?: UserLogin;
    }
  }
}
