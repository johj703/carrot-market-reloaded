"use server";

import { z } from "zod";
import validator from "validator";

const phoneSchema = z.string().trim().refine(validator.isMobilePhone);

export async function smsLogin(prevState: any, formData: FormData) {}
