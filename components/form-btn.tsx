interface FormButtonPRops {
  loading: boolean;
  text: string;
}

export default function FormButton({ loading, text }: FormButtonPRops) {
  return (
    <button disabled={loading} className="h-10 primary-btn">
      {loading ? "Loading!" : text}
    </button>
  );
}
