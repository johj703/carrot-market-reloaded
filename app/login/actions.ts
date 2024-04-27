"use server";

import { redirect } from "next/navigation";

export async function handleForm(prevState: any, formData: FormData) {
  console.log(prevState);
  await new Promise((resolve) => setTimeout(resolve, 5000));
  redirect("/");
  if (pS === null) {
    // send sms
    return {
      sms: true,
    };
  }
  if (sms == true) {
    //check token
    return {
      ok: true,
    };
  }
  return {
    errors: ["wrong password", "password too short"],
  };
}
