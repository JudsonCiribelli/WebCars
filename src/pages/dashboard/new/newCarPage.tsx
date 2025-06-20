import { zodResolver } from "@hookform/resolvers/zod";
import { addDoc, collection } from "firebase/firestore";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from "firebase/storage";
import { type ChangeEvent, useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FiTrash, FiUpload } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { v4 as uuidV4 } from "uuid";
import z from "zod";

import InputComponent from "../../../components/Input-Component/inputComponent";
import { AppContext } from "../../../context/AppContext";
import { db, storage } from "../../../services/firebaseConection";
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
interface ImageUrlProps {
  name: string;
  preview: string;
  uid: string;
  url: string;
}
const NewCarPage = () => {
  const [carImages, setCarImages] = useState<ImageUrlProps[]>([]);
  const { user } = useContext(AppContext);
  const navigate = useNavigate();
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
    if (carImages.length === 0) {
      alert("Adicione alguma imagem");
      return;
    }

    const carListImages = carImages.map((car) => {
      return {
        uid: car.uid,
        name: car.name,
        url: car.url,
      };
    });

    addDoc(collection(db, "cars"), {
      name: data.name,
      model: data.model,
      year: data.year,
      km: data.km,
      price: data.price,
      description: data.description,
      created: new Date(),
      owner: user?.name,
      uid: user?.uid,
      images: carListImages,
    })
      .then(() => {
        reset();
        setCarImages([]);
        console.log("Cadastrado com sucesso");
      })
      .catch((error) => {
        console.log(error);
        alert("Error ao cadastrar no banco");
      });

    console.log(data);
  };

  const handleAddFile = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const image = e.target.files[0];
      if (image.type === "image/jpeg" || image.type === "image/png") {
        await handleUploadImage(image);
      } else {
        alert("Envie uma imagem no formato JPEG/PNG");
        return;
      }
    }
  };

  const handleUploadImage = async (image: File) => {
    if (!user?.uid) {
      navigate("/login", { replace: true });
      return;
    }

    const currentId = user?.uid;
    const uidImage = uuidV4();

    const uploadRef = ref(storage, `images/${currentId}/${uidImage}`);
    uploadBytes(uploadRef, image).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((downloadUrl) => {
        console.log("Url: " + downloadUrl);
        const imageItems = {
          name: uidImage,
          uid: currentId,
          preview: URL.createObjectURL(image),
          url: downloadUrl,
        };
        setCarImages((images) => [...images, imageItems]);
      });
    });
  };

  const handleDeleteImage = async (item: ImageUrlProps) => {
    const imagePath = `images/${item.uid}/${item.name}`;
    const imageRef = ref(storage, imagePath);

    try {
      await deleteObject(imageRef);
      setCarImages(carImages.filter((cars) => cars.url !== item.url));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="m-10">
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
              onChange={handleAddFile}
            />
          </div>
        </button>

        {carImages.map((item) => (
          <div
            key={item.uid}
            className="w-full h-32 flex items-center justify-center relative"
          >
            <button
              className="absolute cursor-pointer"
              onClick={() => handleDeleteImage(item)}
            >
              <FiTrash size={28} color="#fff" />
            </button>
            <img
              src={item.preview}
              className="rounded-lg h-32  w-full object-cover"
              alt={item.name}
            />
          </div>
        ))}
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
