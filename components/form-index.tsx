interface FormInputProps {
  type: string;
  placeholder: string;
  required: boolean;
  errors: string[];
}

export default function FormInput({
  type,
  placeholder,
  required,
  errors,
}: FormInputProps) {
  return (
    <div className="flex flex-col gap-2">
      <input
        className="w-full h-10 bg-transparent border-none rounded-md focus:outline-none ring-1 focus:ring-2 ring-neutral-200 focus:ring-orange-500 placeholder:text-neutral-400"
        type={type}
        placeholder={placeholder}
        required={required}
      />
      {errors.map((error, index) => (
        <span key={index} className="font-medium text-red-500">
          {errors}
        </span>
      ))}
    </div>
  );
}
