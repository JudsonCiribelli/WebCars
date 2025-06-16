import InputComponent from "../../components/Input-Component/inputComponent";

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
          <InputComponent
            type="text"
            placeholder="Digite seu nome completo..."
            name="name"
          />
          <InputComponent
            type="email"
            placeholder="Digite seu email..."
            name="email"
          />
          <InputComponent
            type="password"
            placeholder="*********"
            name="password"
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
