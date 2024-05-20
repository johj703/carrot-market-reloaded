"use server";

export async function login(prevState: any, formData: FormData) {
  return {
    errors: ["wrong password", "password too short"],
  };
}
