const HomePage = () => {
  return (
    <div className="flex flex-col h-screen items-center my-10">
      {/* Input */}
      <div className="bg-white p-4 rounded-xl">
        <input
          className="w-xl border-1 border-gray-500 h-9 rounded-md outline-none px-2 mb-3"
          placeholder="Digite o nome do carro..."
          type="text"
        />
        <button className="border rounded-xl p-2 bg-red-500 text-white mx-1">
          Buscar
        </button>
      </div>
      {/* Cards */}
      <div></div>
    </div>
  );
};

export default HomePage;
