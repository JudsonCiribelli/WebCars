const RegisterPage = () => {
  return (
    <div className="w-full flex flex-col h-screen justify-center items-center text-center">
      {/* Logo */}
      <div className="flex items-center justify-center w-[350px] h-12  bg-red-500 p-12 rounded-xl m-10 ">
        <h1 className="text-6xl flex font-bold">
          Web <span className="text-white font-bold">Carros</span>
        </h1>
      </div>
      {/* Formularios */}
      <div>
        <form className="w-full max-w-2xl flex flex-col bg-white p-8 rounded-2xl">
          <input
            type="text"
            className="w-xl border-1 border-gray-500 h-9 rounded-md outline-none px-2 mb-3"
            placeholder="Digite seu nome completo..."
          />
          <input
            type="email"
            className=" w-xl border-1 border-gray-500 h-9 rounded-md outline-none px-2 mb-3"
            placeholder="Digite seu email..."
          />
          <input
            type="password"
            className=" w-xl border-1 border-gray-500 h-9 rounded-md outline-none px-2 mb-3"
            placeholder="*********"
          />
          <button
            type="submit"
            className="bg-black text-white rounded-xl py-2 font-medium cursor-pointer"
          >
            Cadastrar
          </button>
        </form>
        <p className="my-2 text-lg font-medium">
          já possui uma conta ?{" "}
          <a href="/login" className="text-lg text-red-500 font-bold">
            Faça login
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
