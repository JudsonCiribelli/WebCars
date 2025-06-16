import { signInWithEmailAndPassword } from "firebase/auth";
import { type FormEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { AppContext } from "../../context/AppContext";
import { auth } from "../../services/firebaseConection";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setLogin } = useContext(AppContext);
  const navigate = useNavigate();

  const handleSubmitUser = (e: FormEvent) => {
    e.preventDefault();

    if (email === "" && password === "") {
      alert("Preencha todos os campos!");
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log("Usuario logado com sucesso");
        setLogin();
        navigate("/", { replace: true });
      })
      .catch((error) => {
        alert("Ocorreu algum error efetuar login");
        return error;
      });
  };

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
        <form
          className="w-full max-w-2xl flex flex-col bg-white p-10 rounded-2xl"
          onSubmit={handleSubmitUser}
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-xl border-1 border-gray-500 h-9 rounded-md outline-none px-2 mb-3"
            placeholder="Digite seu email..."
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
        <p className="my-2 text-lg font-medium">
          Ainda não possui conta ?{" "}
          <a href="/register" className="text-lg text-red-500 font-bold">
            Cadastre-se
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
