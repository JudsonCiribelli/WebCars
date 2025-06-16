interface InputComponentProps {
  name: string;
  type: string;
  placeholder: string;
}

const InputComponent = ({ name, type, placeholder }: InputComponentProps) => {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      className="w-xl border-1 border-gray-500 h-9 rounded-md outline-none px-2 mb-3"
    />
  );
};

export default InputComponent;
