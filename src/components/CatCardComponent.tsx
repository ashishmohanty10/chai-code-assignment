import { CatData } from "../types/type";

interface CatCardComponentProps {
  data: CatData;
}

const CatCardComponent: React.FC<CatCardComponentProps> = ({ data }) => {
  return (
    <div className="w-[375px] h-[643px] rounded-3xl bg-white text-black ">
      <div className="rounded-t-2xl overflow-hidden">
        <img
          src={data.image}
          alt={data.name}
          className="object-cover overflow-hidden h-[325px] w-[375px]"
        />
      </div>

      <div className="px-3 flex flex-col gap-0.5 justify-evenly ">
        <h2 className="text-[28px] font-medium">{data.name}</h2>
        <p className="text-sm tracking-tighter text-black ">
          {data.description}
        </p>
        <p className="w-full grid grid-cols-2 items-start text-black">
          <span className="italic text-sm font-medium">ORIGIN</span>
          <span className="text-sm">{data.origin}</span>
        </p>
        <div className="space-y-2">
          <p className="text-sm w-fit py-1 italic font-medium">Temperament</p>
          <div className="flex items-center gap-1 flex-wrap">
            {data.temperament.split(",").map((temperament, idx) => (
              <p
                key={idx}
                className="text-xs rounded-lg w-[81px] h-[18px] flex items-center justify-center p-0.5 bg-[#EFEFEF]"
              >
                {temperament}
              </p>
            ))}
          </div>
          <div className="grid grid-cols-2 items-start">
            <p className="text-sm font-medium italic h-4">Life span</p>
            <p className="text-sm font-normal h-4">{data.life_span}</p>
          </div>
          {data.wikipedia_url && (
            <a href={data.wikipedia_url} className="text-[#7D99E2] text-sm">
              Learn More
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default CatCardComponent;
