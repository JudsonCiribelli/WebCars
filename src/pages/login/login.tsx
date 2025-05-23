import type { FormEvent } from "react";

const LoginPage = () => {
  const handleSubmitUser = (e: FormEvent) => {
    e.preventDefault();
    console.log("Usuario logado");
  };
  return (
    <div className="w-full flex flex-col h-screen justify-center items-center">
      {/* Logo */}
      <div className="flex items-center justify-center w-[350px] h-12  bg-red-500 p-12 rounded-xl m-10 ">
        <h1 className="text-6xl flex font-bold">
          Web <span className="text-white font-bold">Carros</span>
        </h1>
      </div>
      {/* Formularios */}
      <div>
        <form
          className="w-full max-w-2xl flex flex-col bg-white p-10 rounded-2xl"
          onSubmit={handleSubmitUser}
        >
          <input
            type="email"
            className="w-xl border-1 border-gray-500 h-9 rounded-md outline-none px-2 mb-3"
            placeholder="Digite seu email..."
          />
          <input
            type="password"
            className=" w-xl border-1 border-gray-500 h-9 rounded-md outline-none px-2 mb-3"
            placeholder="Digite sua senha..."
          />
          <button
            type="submit"
            className="bg-black text-white rounded-xl py-2 font-medium cursor-pointer"
          >
            Acessar
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
