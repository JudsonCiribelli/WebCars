import { IoIosLogOut } from "react-icons/io";

const HeaderComponent = () => {
  return (
    <header className="flex items-center justify-around h-20 bg-white">
      <div className="bg-red-500 rounded-xl p-3 m-10">
        <h1 className="text-2xl font-bold">
          Web<span className="text-2xl font-bold text-white">Carros</span>
        </h1>
      </div>
      <div className="flex border p-2 rounded-full cursor-pointer">
        <IoIosLogOut size={25} />
      </div>
    </header>
  );
};

export default HeaderComponent;
