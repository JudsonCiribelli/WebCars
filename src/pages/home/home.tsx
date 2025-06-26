import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { db } from "../../services/firebaseConection";
import ContainerComponent from "./components/Container-Component/containerComponent";

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

const HomePage = () => {
  const [cars, setCars] = useState<CarsProps[]>([]);
  const [InputValue, setInputValue] = useState("");

  useEffect(() => {
    loadCars();
  }, []);

  const loadCars = () => {
    const carRefs = collection(db, "cars");
    const queryRef = query(carRefs, orderBy("created", "desc"));

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
    });
  };

  const handleSearchCar = async () => {
    if (InputValue === "") {
      loadCars();
      return;
    }

    setCars([]);

    const q = query(
      collection(db, "cars"),
      where("name", ">=", InputValue),
      where("name", "<=", InputValue + "\uf8ff")
    );

    const querySnapshot = await getDocs(q);

    const listCars = [] as CarsProps[];
    querySnapshot.forEach((doc) => {
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
  };

  return (
    <section className="flex flex-col h-screen items-center my-10 gap-10">
      {/* Input */}
      <div className="bg-white p-4 rounded-xl">
        <input
          className="w-xl border-1 border-gray-500 h-9 rounded-md outline-none px-2 mb-3"
          placeholder="Digite o nome do carro..."
          value={InputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className="border rounded-xl p-2 bg-red-500 text-white mx-1 cursor-pointer"
          onClick={handleSearchCar}
        >
          Buscar
        </button>
      </div>
      {/* Cards */}

      <h1 className="text-black font-semibold text-2xl mt-6 mb-4">
        Carros novos e usados em todo Brasil
      </h1>
      <main className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {cars.map((car) => (
          <Link key={car.id} to={`/car/${car.id}`}>
            <ContainerComponent
              imgUrl={car.images[0].url}
              name={car.name}
              km={car.km}
              year={car.year}
              value={car.price}
              city={car.city}
            />
          </Link>
        ))}
      </main>
    </section>
  );
};

export default HomePage;
