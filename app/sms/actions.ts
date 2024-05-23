"use server";

import { z } from "zod";
import validator from "validator";

const phoneSchema = z.string().trim().refine(validator.isMobilePhone);

const tokenSchema = z.coerce.number();

export async function smsLogin(prevState: any, formData: FormData) {
  console.log(typeof formData.get("token"));
}
