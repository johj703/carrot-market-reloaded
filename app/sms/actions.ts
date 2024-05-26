"use server";

import { z } from "zod";
import validator from "validator";

const phoneSchema = z
  .string()
  .trim()
  .refine((phone) => validator.isMobilePhone(phone, "ko-KR"));

const tokenSchema = z.coerce.number().min(100000).max(999999);

interface ActionState {
  token: boolean;
}

export async function smsLogin(prevState: ActionState, formData: FormData) {
  const phone = formData.get("phone");
  const token = formData.get("token");
  if (!prevState.token) {
    const result = phoneSchema.safeParse(phone);
    if (!result.success) {
      return {
        token: false,
      };
    } else {
      return {
        token: true,
      };
    }
  }
}
