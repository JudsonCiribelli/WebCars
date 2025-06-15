import ContainerComponent from "./components/Container-Component/containerComponent";

const HomePage = () => {
  return (
    <section className="flex flex-col h-screen items-center my-10 gap-10">
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

      <h1 className="text-black font-semibold text-2xl mt-6 mb-4">
        Carros novos e usados em todo Brasil
      </h1>
      <main className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        <ContainerComponent
          imgUrl="https://www.webmotors.com.br/rbx/_next/image?url=https%3A%2F%2Fimage.webmotors.com.br%2F_fotos%2Fanunciousados%2Fgigante%2F2025%5C202506%5C20250605%5CAUDI-RS3-2.5-TFSI-GASOLINA-SPORTBACK-QUATTRO-STRONIC-wmimagem13594852611.jpg&w=640&q=75"
          name="Audi RS3"
          km="15.000"
          year={2020}
          value="269.900"
          city="São Paulo - SP"
        />
        <ContainerComponent
          imgUrl="https://image.webmotors.com.br/_fotos/anunciousados/gigante/2024/202410/20241017/nissan-gtr-3-8-premium-v6-24v-biturbo-gasolina-2p-automatico-wmimagem15075243340.webp?s=fill&w=552&h=414&q=60"
          name="NISSAN GT-R"
          km="6.730"
          year={2015}
          value="1.249.900"
          city="Criciúma - SC"
        />
        <ContainerComponent
          imgUrl="https://image.webmotors.com.br/_fotos/anunciousados/gigante/2025/202506/20250613/porsche-911-3-0-24v-h6-gasolina-carrera-gts-pdk-wmimagem13593226537.webp?s=fill&w=552&h=414&q=60"
          name="PORSCHE 911"
          km="1.000"
          year={2024}
          value="1.099.000"
          city="Rio de Janeiro - RJ"
        />
      </main>
    </section>
  );
};

export default HomePage;
