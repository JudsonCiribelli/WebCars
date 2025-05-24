import { useContext } from "react";
import { FaUser } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";

import { AppContext } from "../../context/AppContext";

const HeaderComponent = () => {
  const { isLogin } = useContext(AppContext);
  return (
    <header className="flex items-center justify-around h-20 bg-white">
      <div className="bg-red-500 rounded-xl p-3 m-10">
        <h1 className="text-2xl font-bold">
          Web<span className="text-2xl font-bold text-white">Carros</span>
        </h1>
      </div>
      <div className="flex border-2 p-2 rounded-full cursor-pointer">
        {isLogin ? <IoIosLogOut size={25} /> : <FaUser size={25} />}
      </div>
    </header>
  );
};

export default HeaderComponent;
