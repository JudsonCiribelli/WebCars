import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";

import { auth } from "../../../../services/firebaseConection";

const PainelHeader = () => {
  const handleLogoutUser = async () => {
    await signOut(auth);
  };
  return (
    <div className="bg-red-500 p-4 rounded-xl flex items-center w-full text-white font-medium gap-4 mb-4">
      <Link to="/dasboard">Dasboard</Link>
      <Link to="/dasboard/new">Novo carro</Link>

      <button className="ml-auto cursor-pointer" onClick={handleLogoutUser}>
        Sair da conta
      </button>
    </div>
  );
};

export default PainelHeader;
