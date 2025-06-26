import { signOut } from "firebase/auth";
import { useContext } from "react";
import { FaUser } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { Link } from "react-router-dom";

import { AppContext } from "../../context/AppContext";
import { auth } from "../../services/firebaseConection";

const HeaderComponent = () => {
  const handleSignOutUser = async () => {
    await signOut(auth);
  };
  const { signed } = useContext(AppContext);
  return (
    <header className="flex items-center justify-around h-20 bg-white">
      <div className="bg-red-500 rounded-xl p-3 m-10">
        <Link to={"/"}>
          <h1 className="text-2xl font-bold">
            Sport<span className="text-2xl font-bold text-white">Carros</span>
          </h1>
        </Link>
      </div>
      <div className="flex border-2 p-2 rounded-full cursor-pointer">
        <button className="cursor-pointer" onClick={handleSignOutUser}>
          {signed ? <IoIosLogOut size={25} /> : <FaUser size={25} />}
        </button>
      </div>
    </header>
  );
};

export default HeaderComponent;
