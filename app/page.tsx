import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen p-6">
      <div className="my-auto flex flex-col items-center gap-2 *:font-medium">
        <span className="text-9xl">🥕</span>
        <h1 className="text-4xcl">당근</h1>
        <h2 className="text-2xl">당근 마켓에 어서오세요!</h2>
      </div>
      <div className="flex flex-col items-center w-full gap-3">
        <Link href="/create-account"
        className="w-full text-lg font-medium text-white bg-orange-500 py-2.5 rounded-md text-center hover:bg-orange-400 transition-colors">시작하기</Link>
      </div>
      <span>이미 계정이 있나요?</span>
      <Link href="/login">로그인</Link>
    </div>
  );
}
