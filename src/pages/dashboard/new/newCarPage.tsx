import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FiUpload } from "react-icons/fi";
import z from "zod";

import InputComponent from "../../../components/Input-Component/inputComponent";
import PainelHeader from "../components/Painel-Header/painelHeader";

const schema = z.object({
  name: z.string().nonempty("O campo nome é obrigatório"),
  model: z.string().nonempty("O modelo é obrigatório"),
  year: z.string().nonempty("O Ano do carro é obrigatório"),
  km: z.string().nonempty("A quilometragem  é obrigatória"),
  price: z.string().nonempty("O preço do carro é obrigatório"),
  city: z.string().nonempty("A cidade é obrigatória"),
  whatsapp: z
    .string()
    .min(1, "Digite um telefone válido")
    .refine((value) => /^(\d{11,12})$/.test(value), {
      message: "Número de telefone inválido",
    }),
  description: z.string().nonempty("A descrição é obrigatória"),
});

type FormData = z.infer<typeof schema>;

const NewCarPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const handleSubmitCars = (data: FormData) => {
    console.log(data);
  };
  return (
    <div className="m-8">
      <PainelHeader />

      <div className="flex flex-col w-full bg-white p-3 rounded-lg sm:flex-row items-center gap-2">
        <button className="border-2 w-48 rounded-lg flex items-center justify-center border-gray-600 h-32 md:w-48">
          <div className="absolute cursor-pointer">
            <FiUpload size={30} color="#000" />
          </div>
          <div className="cursor-pointer">
            <input
              className="opacity-0 cursor-pointer"
              type="file"
              accept="image/*"
            />
          </div>
        </button>
      </div>

      <div className="w-full bg-white p-3 rounded-lg flex flex-col  sm:flex-row items-center gap-2 mt-2">
        <form className="w-full" onSubmit={handleSubmit(handleSubmitCars)}>
          <div className="mb-2">
            <p className="mb-2 font-medium">Nome do carro</p>
            <InputComponent
              type="text"
              register={register}
              name="name"
              placeholder="Digite o nome do carro"
              error={errors.name?.message}
            />
          </div>

          <div className="mb-2">
            <p className="mb-2 font-medium">Modelo do carro</p>
            <InputComponent
              type="text"
              register={register}
              name="model"
              placeholder="Digite o modelo do carro"
              error={errors.model?.message}
            />
          </div>

          <div className="w-full flex flex-row mb-3 items-center gap-3">
            <div className="w-full">
              <p className="mb-2 font-medium">Ano do carro</p>
              <InputComponent
                type="text"
                register={register}
                name="year"
                placeholder="Digite o ano do carro"
                error={errors.year?.message}
              />
            </div>
            <div className="w-full">
              <p className="mb-2 font-medium">KM do carro</p>
              <InputComponent
                type="text"
                register={register}
                name="km"
                placeholder="Digite a quilometragem do carro"
                error={errors.km?.message}
              />
            </div>
          </div>

          <div className="w-full flex flex-row mb-3 items-center gap-3">
            <div className="w-full">
              <p className="mb-2 font-medium">Telefone / Whatsapp</p>
              <InputComponent
                type="text"
                register={register}
                name="whatsapp"
                placeholder="Digite um número para contato"
                error={errors.whatsapp?.message}
              />
            </div>
            <div className="w-full">
              <p className="mb-2 font-medium">Cidade</p>
              <InputComponent
                type="text"
                register={register}
                name="city"
                placeholder="Digite a cidade"
                error={errors.city?.message}
              />
            </div>
          </div>
          <div className="mb-3">
            <p className="mb-2 font-medium">Preço</p>
            <InputComponent
              type="text"
              register={register}
              name="price"
              placeholder="Digite o preço do carro"
              error={errors.price?.message}
            />
          </div>
          <div className="w-full">
            <p className="mb-2 font-medium">Descrição</p>
            <textarea
              className="border-1 rounded-md w-full h-24 px-2"
              {...register("description")}
              name="description"
              id="description"
              placeholder="Digite a descrição completa sobre o carro"
            />
            {errors.description && (
              <p className="text-red-600 mb-2 font-semibold">
                {errors.description.message}
              </p>
            )}
          </div>

          <button
            className="items-center w-full bg-zinc-900 text-white my-1 p-3 rounded-md font-medium"
            type="submit"
          >
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewCarPage;
