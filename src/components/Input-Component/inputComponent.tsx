import type { RegisterOptions, UseFormRegister } from "react-hook-form";

interface InputComponentProps {
  name: string;
  type: string;
  placeholder: string;
  register: UseFormRegister<any>;
  error?: string;
  rules?: RegisterOptions;
}

const InputComponent = ({
  name,
  type,
  placeholder,
  register,
  rules,
  error,
}: InputComponentProps) => {
  return (
    <div>
      <input
        type={type}
        {...register(name, rules)}
        id={name}
        placeholder={placeholder}
        className="w-full border-1 border-gray-500 h-9 rounded-md outline-none px-2 mb-3"
      />
      {error && <p className="text-red-600 mb-2 font-semibold">{error}</p>}
    </div>
  );
};

export default InputComponent;
