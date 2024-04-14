export default function FormInput() {
  return (
    <div className="flex flex-col gap-2">
      <input
        className="w-full h-10 bg-transparent border-none rounded-md focus:outline-none ring-1 focus:ring-2 ring-neutral-200 focus:ring-orange-500 placeholder:text-neutral-400"
        type="text"
        placeholder="Username"
        required
      />
      <span className="font-medium text-red-500">Input error</span>
    </div>
  );
}
