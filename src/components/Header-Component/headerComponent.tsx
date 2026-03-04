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

  const { signed, loadingAuth } = useContext(AppContext);

  return (
    <header className="flex w-screen items-center justify-around h-20 bg-white xl:w-full">
      <Link to={"/"}>
        <div className="bg-red-500 rounded-xl p-3 m-10">
          <h1 className="text-2xl font-bold">
            Sport<span className="text-2xl font-bold text-white">Carros</span>
          </h1>
        </div>
      </Link>

      {!loadingAuth && signed && (
        <Link to="/dashboard">
          <div className="border-2 rounded-full p-1 border-gray-900">
            <FaUser size={25} />
          </div>
        </Link>
      )}

      {loadingAuth && !signed && (
        <Link to="/login">
          <button onClick={handleSignOutUser}>
            <div className="border-2 rounded-full p-1 border-gray-900">
              <IoIosLogOut size={25} />
            </div>
          </button>
        </Link>
      )}
    </header>
  );
};

export default HeaderComponent;
