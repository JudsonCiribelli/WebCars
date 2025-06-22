import { collection, getDocs, query, where } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { FiTrash2 } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

import { AppContext } from "../../context/AppContext";
import { db } from "../../services/firebaseConection";
// import ContainerComponent from "../home/components/Container-Component/containerComponent";
import PainelHeader from "./components/Painel-Header/painelHeader";
interface CarsProps {
  id: string;
  name: string;
  year: string;
  uid: string;
  price: string | number;
  city: string;
  km: string;
  images: CarImage[];
}

interface CarImage {
  name: string;
  uid: string;
  url: string;
}

const DashboardPage = () => {
  const [cars, setCars] = useState<CarsProps[]>([]);
  const { user } = useContext(AppContext);
  const navigate = useNavigate();
  useEffect(() => {
    const loadCars = () => {
      if (!user?.uid) {
        navigate("/login", { replace: true });
        return;
      }
      const carRefs = collection(db, "cars");
      const queryRef = query(carRefs, where("uid", "==", user.uid));

      getDocs(queryRef).then((snapshot) => {
        const listCars = [] as CarsProps[];
        snapshot.forEach((doc) => {
          listCars.push({
            id: doc.id,
            name: doc.data().name,
            year: doc.data().year,
            km: doc.data().km,
            city: doc.data().city,
            price: doc.data().price,
            images: doc.data().images,
            uid: doc.data().uid,
          });
        });

        setCars(listCars);
        console.log(listCars);
      });
    };

    loadCars();
  }, []);
  return (
    <div className="m-10">
      <PainelHeader />

      <main className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 ">
        {cars.map((car) => (
          <div className="w-full bg-white rounded-lg relative" key={car.id}>
            <button
              onClick={() => {}}
              className="absolute bg-white w-14 h-14 rounded-full flex items-center justify-center left-2 drop-shadow-2xl"
            >
              <FiTrash2 size={28} color="#000" />
            </button>

            <img
              src={car.images[0].url}
              className="w-full rounded-lg mb-2 max-w-70"
            />
            <p className="font-bold mt-1 px-2 mb-2">{car.name}</p>

            <div className="flex flex-col px-2">
              <span className="text-zinc-700">
                {car.year}| {car.km}
              </span>
              <strong className="text-black font-bold mt-4">
                R$:{car.price}
              </strong>
            </div>
            <div className="w-full h-px bg-slate 200 my-2"></div>
            <div className="px-2 pb-2">
              <span className="text-black">{car.city}</span>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default DashboardPage;
