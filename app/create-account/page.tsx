import Link from "next/link"

export default function CreateAccount() {
    return(
        <div>
            <div>
                <h1>안녕하세요!</h1>
                <h2>Fill in the form below to join!</h2>
            </div>
            <form>
                <div>
                    <input type="text" placeholder="Username" required />
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