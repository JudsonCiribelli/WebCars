import { zodResolver } from "@hookform/resolvers/zod";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

import InputComponent from "../../components/Input-Component/inputComponent";
import { auth } from "../../services/firebaseConection";

const schema = z.object({
  email: z
    .string()
    .email("Insira um email válido!")
    .nonempty("Este campo é obrigatório"),
  password: z.string().nonempty("Este campo é obrigatório"),
});

export type FormData = z.infer<typeof schema>;

const LoginPage = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const handleSubmitUser = (data: FormData) => {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then(() => {
        navigate("/dasboard", { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="w-full flex flex-col h-screen justify-center items-center ">
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
          onSubmit={handleSubmit(handleSubmitUser)}
        >
          <InputComponent
            register={register}
            error={errors.email?.message}
            type="email"
            placeholder="Digite seu email..."
            name="email"
          />
          <InputComponent
            register={register}
            error={errors.password?.message}
            type="password"
            name="password"
            placeholder="Digite sua senha..."
          />

          <button
            type="submit"
            className="bg-black text-white rounded-xl py-2 font-medium cursor-pointer"
          >
            Acessar
          </button>
        </form>
        <p className="my-2 text-lg font-medium text-center">
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
