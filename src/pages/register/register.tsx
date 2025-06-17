import { zodResolver } from "@hookform/resolvers/zod";
import {
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import z from "zod";

import InputComponent from "../../components/Input-Component/inputComponent";
import { AppContext } from "../../context/AppContext";
import { auth } from "../../services/firebaseConection";

const schema = z.object({
  email: z
    .string()
    .email("Insira um email válido!")
    .nonempty("Este campo é obrigatório"),
  password: z
    .string()
    .min(6, "Mínimo 6 caracteres")
    .nonempty("Este campo é obrigatório"),
  name: z.string().nonempty("Preencha todos os campos!"),
});

type FormData = z.infer<typeof schema>;

const RegisterPage = () => {
  const { handleInfoUser } = useContext(AppContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  useEffect(() => {
    const handleSignOutUser = async () => {
      await signOut(auth);
    };
    handleSignOutUser();
  }, []);

  const handleRegisterUser = (data: FormData) => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then(async (user) => {
        await updateProfile(user.user, {
          displayName: data.name,
        });
        handleInfoUser({
          name: data.name,
          email: data.email,
          uid: user.user.uid,
        });
        console.log("Usuario cadastrado com sucesso");
        navigate("/dasboard", { replace: true });
      })
      .catch((error) => {
        console.log(error);
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
          className="w-full max-w-2xl flex flex-col bg-white p-8 rounded-2xl"
          onSubmit={handleSubmit(handleRegisterUser)}
        >
          <InputComponent
            register={register}
            error={errors.name?.message}
            type="text"
            placeholder="Digite seu nome completo..."
            name="name"
          />
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
