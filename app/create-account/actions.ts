"use server";
import { z } from "zod";

function checkUsername(username: string){
  return(
    !username.includes("potato")
  );
}

const formSchema = z.object({
  username: z.string({
    invalid_type_error: "Username must be a string!",
    required_error: "Where is my username???"
  })
  .min(3, "Way too short!!")
  .max(10, "That is too long!")
  .refine(checkUsername , "No potatoes allowed!"),
  email: z.string().email(),
  password: z.string().min(10),
  confirm_password: z.string().min(10),
})

export async function createAccount(prevState: any, formData: FormData) {
  const data = {
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirm_password: formData.get("confirm_password"),
  };
  const result = formSchema.safeParse(data);
  if(!result.success) {
    return result.error.flatten();
  }
}
