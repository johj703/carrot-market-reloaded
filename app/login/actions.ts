"use server";

export async function login(prevState: any, formData: FormData) {
  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };
  return {
    errors: ["wrong password", "password too short"],
  };
}
