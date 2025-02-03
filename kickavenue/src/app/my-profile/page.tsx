/** @format */

import { auth } from "@/auth";
import ProfileComponent from "@/components/profile.component";
import React from "react";

export default async function Page() {
  const session = await auth();
  return <ProfileComponent {...session?.user} />;
}
