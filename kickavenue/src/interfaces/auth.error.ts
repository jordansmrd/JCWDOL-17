/** @format */

import { AuthError } from "next-auth";

export class InvalidAuthError extends AuthError {
  public message: string;
  constructor(err: unknown) {
    super();
    this.message = err instanceof Error ? err.message : "Invalid Credential";
  }
}
