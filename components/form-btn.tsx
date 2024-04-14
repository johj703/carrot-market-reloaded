interface FormButtonPRops {
  loading: boolean;
  text: string;
}

export default function FormButton({ loading, text }: FormButtonPRops) {
  return (
    <button
      disabled={loading}
      className="h-10 primary-btn disabled:bg-neutral-400 disabled:text-neutral-300"
    >
      {loading ? "Loading!" : text}
    </button>
  );
}
