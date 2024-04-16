export default function SocialLogin() {
  return (
    <>
      <div className="w-full h-px bg-neutral-500" />
      <div>
        <Link
          className="flex items-center justify-center h-10 gap-2 primary-btn"
          href="/sms"
        >
          <span>
            <ChatBubbleOvalLeftEllipsisIcon className="w-6 h-6" />
          </span>
          <span>Sign up with SMS</span>
        </Link>
      </div>
    </>
  );
}
