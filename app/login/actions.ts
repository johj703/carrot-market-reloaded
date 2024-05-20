"use server";

import { PASSWORD_MIN_LENGTH, PASSWORD_REGEX } from "@/lib/constants";
import { z } from "zod";

const formSchema = z.object({
  email: z.string().email().toLowerCase(),
  password: z.string().min(PASSWORD_MIN_LENGTH).regex(PASSWORD_REGEX),
});

export async function login(prevState: any, formData: FormData) {
  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };
  return {
    errors: ["wrong password", "password too short"],
  };
}
