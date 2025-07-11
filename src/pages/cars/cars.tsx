import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import { db } from "../../services/firebaseConection";
interface CarProps {
  id: string;
  name: string;
  model: string;
  city: string;
  year: string;
  km: string;
  description: string;
  created: string;
  price: string | number;
  owner: string;
  uid?: string;
  whatsapp: string;
  images: ImageCarProps[];
}

interface ImageCarProps {
  uid: string;
  name: string;
  url: string;
}

const CarsPage = () => {
  const [car, setCar] = useState<CarProps>();
  const [sliderPreview, setSliderPreview] = useState<number>(2);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadCars = async () => {
      if (!id) {
        return;
      }
      const docRef = doc(db, "cars", id);
      getDoc(docRef)
        .then((snapshot) => {
          if (!snapshot.data()) {
            navigate("/");
          }
          setCar({
            id: snapshot.id,
            name: snapshot.data()?.name,
            model: snapshot.data()?.model,
            year: snapshot.data()?.year,
            city: snapshot.data()?.city,
            km: snapshot.data()?.km,
            description: snapshot.data()?.description,
            created: snapshot.data()?.created,
            whatsapp: snapshot.data()?.whatsapp,
            price: snapshot.data()?.price,
            owner: snapshot.data()?.owner,
            images: snapshot.data()?.images,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    };
    loadCars();
  }, [id]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 720) {
        setSliderPreview(1);
      } else {
        setSliderPreview(2);
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="m-10">
      {car && (
        <Swiper
          slidesPerView={sliderPreview}
          pagination={{ clickable: true }}
          navigation
        >
          {car?.images.map((image) => (
            <SwiperSlide>
              <img src={image.url} className="w-full h-96 object-cover " />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
      {car && (
        <main className="w-full bg-white rounded-lg p-6 my-4">
          <div className="flex flex-col sm:flex-row mb-4 items-center justify-between">
            <h1 className="font-bold text-3xl text-black">{car?.name}</h1>
            <h1 className="font-bold text-3xl text-black">
              R$: {car?.price},00
            </h1>
          </div>
          <p>{car?.model}</p>
          <div className="flex w-full gap-6 my-4">
            <div className="flex flex-col gap-4">
              <div>
                <p>Cidade</p>
                <strong>{car?.city}</strong>
              </div>
              <div>
                <p>Ano</p>
                <strong>{car?.year}</strong>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <p>Km</p>
                <strong>{car?.km}</strong>
              </div>
            </div>
          </div>
          <strong>Descrição</strong>
          <p className="mb-4">{car?.description}</p>
          <strong>Telefone / Whatsapp</strong>
          <p>{car?.whatsapp}</p>
          <a
            href={`https://api.whatsapp.com/send?phone=${car?.whatsapp}&text='Olá vi esse ${car?.name} no site WebCarros e fiquei interessado'`}
            target="_blank"
            className="bg-green-500 w-full text-white flex items-center justify-center my-6 gap-2 h-11 text-xl rounded-lg font-medium cursor-pointer"
          >
            Conversar com Vendedor <FaWhatsapp size={26} color="#fff" />
          </a>
        </main>
      )}
    </div>
  );
};

export default CarsPage;
