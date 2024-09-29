const StageItem = ({
  data,
}: {
  data: {
    id: number;
    type: string;
    value: string;
    maxPrice: string;
    softcap: string;
    hardcap: string;
    period: string;
    status: string;
    running: boolean;
  };
}) => {
  const {
    id,
    type,
    value,
    maxPrice,
    softcap,
    hardcap,
    period,
    status,
    running,
  } = data;
  return (
    <>
      <div className="relative  w-full min-w-[180px]">
        <div className="absolute left-0 top-0 -z-10 rotate-3 w-full h-48 bg-[#787871]" />
        <div className="w-full max-w-sm mx-auto text-center bg-[#131511] text-[#787871] font-mono rounded-lg shadow-lg">
          <div className="p-3">
            <div
              className={`text-xl font-black italic mb-4 ${
                running && "text-orange-900"
              }`}
            >
              {type === "public" ? <p>PUBLIC</p> : <p>PRE</p>} <p>SALE</p>
              <p className="text-3xl not-italic">{id}</p>
            </div>
            <div className="text-xs font-bold mb-2">{value}</div>
            {maxPrice === "tba" ? (
              <div className="text-xs mb-1 uppercase">{maxPrice}</div>
            ) : (
              <div className="text-xs mb-1">Max price: {maxPrice}</div>
            )}
            <div className="text-xs mb-1">
              Softcap: <span className="uppercase">{softcap}</span>
            </div>
            <div className="text-xs mb-2">
              Hardcap: <span className="uppercase">{hardcap}</span>
            </div>
            <p className="text-xs font-bold uppercase">{period}</p>
          </div>
          <div
            className={`py-2 flex items-center justify-center text-2xl font-bold uppercase italic bg-[linear-gradient(to_right,_#131511,_#333333,_#131511)] ${
              running && "text-orange-900"
            }`}
          >
            {status}
          </div>
        </div>
      </div>
    </>
  );
};

export default StageItem;
