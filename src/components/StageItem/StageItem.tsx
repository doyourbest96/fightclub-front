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
      <div className="relative  w-full min-w-[124px] pt-4">
        <div className="absolute left-0 top-0 -z-10 w-full rotate-[5deg] translate-y-4 h-56 bg-[#787871]" />
        <div className="w-full max-w-sm mx-auto text-center bg-[#131511] text-[#787871] shadow-lg">
          <div className="tracking-tighter py-3">
            <div
              className={`font-revoluti text-md mb-4 ${
                running && "text-[#824b3d]"
              }`}
            >
              {type === "public" ? <p>PUBLIC</p> : <p>PRE</p>} <p>SALE</p>
              <p className="text-5xl font-helvetica font-medium">{id}</p>
            </div>
            <div className={`text-sm ${running && "text-[#c9c9bf]"}`}>
              {value}
            </div>
            {maxPrice === "tba" ? (
              <div
                className={`text-sm mb-3 uppercase ${
                  running && "text-[#c9c9bf]"
                }`}
              >
                {maxPrice}
              </div>
            ) : (
              <div className={`text-sm mb-3 ${running && "text-[#c9c9bf]"}`}>
                Max price: {maxPrice}
              </div>
            )}
            <div className={`text-sm ${running && "text-[#c9c9bf]"}`}>
              Softcap: <span className="uppercase">{softcap}</span>
            </div>
            <div className={`text-sm mb-3 ${running && "text-[#c9c9bf]"}`}>
              Hardcap: <span className="uppercase">{hardcap}</span>
            </div>
            <p className={`text-sm font-bold ${running && "text-[#c9c9bf]"}`}>
              {period}
            </p>
          </div>
          <div
            className={`py-2 flex items-center justify-center text-lg font-revoluti uppercase bg-[linear-gradient(to_right,_#131511,_#333333,_#131511)] ${
              running && "text-[#824b3d]"
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
