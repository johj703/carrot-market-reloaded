import Link from "next/link"

export default function CreateAccount() {
    return(
        <div className="flex flex-col gap-10 px-6 py-8">
            <div className="flex flex-col gap-2 *:font-medium">
                <h1 className="text-2xl">안녕하세요!</h1>
                <h2 className="text-xl">Fill in the form below to join!</h2>
            </div>
            <form className="flex flex-col gap-3">
                <div className="flex flex-col gap-2">
                    <input className="w-full h-10 bg-transparent border-none rounded-md focus:outline-none ring-1 focus:ring-2 ring-neutral-200 focus:ring-orange-500 placeholder:text-neutral-400" type="text" placeholder="Username" required />
                    <span>Input error</span>
                </div>
                <button>Create account</button>
            </form>
            <div />
            <div>
                <Link href="/sms">
                    <span>icon</span>
                    <span>Sign up with SMS</span>
                </Link>
            </div>
        </div>
    );
}