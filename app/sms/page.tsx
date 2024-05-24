"use client";

import Button from "@/components/button";
import Input from "@/components/input";
import SocialLogin from "@/components/social-login";
import { useFormState } from "react-dom";
import { smsLogin } from "./actions";

const initialState = {
  token: false,
}

export default function SMSLogin() {
  const [state, dispatch] = useFormState(smsLogin, initialState);
  return (
    <div className="flex flex-col gap-10 px-6 py-8">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">SMS Login</h1>
        <h2 className="text-xl">Verify your phone number.</h2>
      </div>
      <form action={dispatch} className="flex flex-col gap-3">
        <Input name="phone" type="text" placeholder="Phone number" required />
        {<Input
          name="token"
          type="number"
          placeholder="Verification code"
          required
          min={100000}
          max={999999}
        />}
        <Button text="Verify" />
      </form>
    </div>
  );
}
