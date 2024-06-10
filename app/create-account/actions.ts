"use server";
import {
  PASSWORD_MIN_LENGTH,
  PASSWORD_REGEX,
  PASSWORD_REGEX_ERROR,
} from "@/lib/constants";
import db from "@/lib/db";
import { z } from "zod";

const checkUsername = (username: string) => !username.includes("potato");

const checkPasswords = ({
  password,
  confirm_password,
}: {
  password: string;
  confirm_password: string;
}) => password === confirm_password;

const checkUniqueUsername = async (username: string) => {
  const user = await db.user.findUnique({
    where: {
      username,
    },
    select: {
      id: true,
    },
  });
  // if (user) {
  //   return false;
  // } else {
  //   return true;
  // }
  return !Boolean(user);
};

const formSchema = z
  .object({
    username: z
      .string({
        invalid_type_error: "Username must be a string!",
        required_error: "Where is my username???",
      })
      .toLowerCase()
      .trim()
      //.transform((username) => `🔥${username}🔥`)
      .refine(checkUsername, "No potatoes allowed!")
      .refine(checkUniqueUsername, "This username is already taken"),
    email: z.string().email().toLowerCase(),
    password: z.string().min(PASSWORD_MIN_LENGTH),
    //.regex(PASSWORD_REGEX, PASSWORD_REGEX_ERROR),
    confirm_password: z.string().min(PASSWORD_MIN_LENGTH),
  })
  .refine(checkPasswords, {
    message: "Both passwords should be the same!",
    path: ["confirm_password"],
  });

export async function createAccount(prevState: any, formData: FormData) {
  const data = {
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirm_password: formData.get("confirm_password"),
  };
  const result = formSchema.safeParse(data);
  if (!result.success) {
    return result.error.flatten();
  } else {
    // check if username is taken
    const user = await db.user.findUnique({
      where: {
        username: result.data.username,
      },
      select: {
        id: true,
      },
    });
    if (user) {
      // show an error
    }
    const userEmail = await db.user.findUnique({
      where: {
        email: result.data.email,
      },
      select: {
        id: true,
      },
    });
    if (userEmail) {
      // show an error to the user
    }
    // check if the email is already used
    // hash password
    // save the user to db
    // log the user in
    // redirect "/home"
  }
}
