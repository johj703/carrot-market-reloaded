import Button from "@/components/button";
import Input from "@/components/input";
import SocialLogin from "@/components/social-login";

export default function SMSLogin() {
  return (
    <div className="flex flex-col gap-10 px-6 py-8">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">SMS Login</h1>
        <h2 className="text-xl">Verify your phone number.</h2>
      </div>
      <form className="flex flex-col gap-3">
        <Input type="number" placeholder="Phone number" required errors={[]} />
        <Input
          type="number"
          placeholder="Verification code"
          required
          errors={[]}
        />
        <Button loading={false} text="Verify" />
      </form>
    </div>
  );
}
