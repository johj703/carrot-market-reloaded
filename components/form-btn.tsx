"use client";
import { useFormStatus } from "react-dom";

interface FormButtonPRops {
  text: string;
}

export default function FormButton({ text }: FormButtonPRops) {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      className="h-10 primary-btn disabled:bg-neutral-400 disabled:text-neutral-300 disabled:cursor-not-allowed"
    >
      {pending ? "로딩 중" : text}
    </button>
  );
}
