import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/solid";
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
                    <span className="font-medium text-red-500">Input error</span>
                </div>
                <button className="h-10 primary-btn">Create account</button>
            </form>
            <div className="w-full h-px bg-neutral-500" />
            <div>
                <Link className="flex items-center justify-center h-10 gap-2 primary-btn" href="/sms">
                    <span><ChatBubbleOvalLeftEllipsisIcon className="w-6 h-6" /></span>
                    <span>Sign up with SMS</span>
                </Link>
            </div>
        </div>
    );
}