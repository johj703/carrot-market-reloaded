import { getIronSession } from "iron-session";
import { cookies } from "next/headers";

export default function getSession() {
  return getIronSession(cookies(), {
    cookieName: "delicious-carrot",
    password: process.env.COOKIE_PASSWORD!,
  });
}
