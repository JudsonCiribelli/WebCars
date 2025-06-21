interface ContainerComponentProps {
  imgUrl: string;
  name: string;
  year: number | string;
  value: string | number;
  city: string;
  km: string;
}

const ContainerComponent = ({
  name,
  year,
  value,
  city,
  km,
  imgUrl,
}: ContainerComponentProps) => {
  return (
    <div className="bg-white w-full rounded-lg hover:scale-105 transition-all">
      <img className="w-full max-h-72 rounded-t-lg " src={imgUrl} />
      <p className="font-bold mt-1 mb-2 px-2">{name}</p>

      <div className="flex flex-col px-2">
        <span className="text-zinc-700 mb-4">
          Ano: {year} | {km} km
        </span>
        <strong className="text-black font-medium text-xl">R$: {value}</strong>
      </div>
      <div className="w-full h-px bg-slate-200 my-2"></div>
      <div className="px-2 pb-2">
        <span className="text-zinc-700 mb-4">{city}</span>
      </div>
    </div>
  );
};

export default ContainerComponent;
