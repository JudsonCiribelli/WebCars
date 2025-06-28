import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { db } from "../../services/firebaseConection";

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
  const [loadImages, setLoadImages] = useState<string[]>([]);
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
      where("name", ">=", InputValue.toUpperCase()),
      where("name", "<=", InputValue.toUpperCase() + "\uf8ff")
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

  const handleImageLoad = (id: string) => {
    setLoadImages((prevImageLoads) => [...prevImageLoads, id]);
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
            <div className="bg-white w-full rounded-lg hover:scale-105 transition-all">
              <div
                className="w-full h-72 rounded-lg bg-slate-200"
                style={{
                  display: loadImages.includes(car.id) ? "none" : "block",
                }}
              ></div>
              <img
                className="w-full max-h-72 rounded-t-lg "
                src={car.images[0].url}
                onLoad={() => handleImageLoad(car.id)}
                style={{
                  display: loadImages.includes(car.id) ? "block" : "none",
                }}
              />
              <p className="font-bold mt-1 mb-2 px-2">{car.name}</p>

              <div className="flex flex-col px-2">
                <span className="text-zinc-700 mb-4">
                  Ano: {car.year} | {car.km} km
                </span>
                <strong className="text-black font-medium text-xl">
                  R$: {car.price}
                </strong>
              </div>
              <div className="w-full h-px bg-slate-200 my-2"></div>
              <div className="px-2 pb-2">
                <span className="text-zinc-700 mb-4">{car.city}</span>
              </div>
            </div>
          </Link>
        ))}
      </main>
    </section>
  );
};

export default HomePage;
