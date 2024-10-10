import { diffTimeFromNow } from "@/utils/diffTimeFromNow";

const StageItem = ({
  data,
}: {
  data: {
    id: number;
    type: string;
    subtype: string;
    value: string;
    minPrice: string;
    maxPrice: string;
    goal: string;
    period: string;
    status: string;
    running: boolean;
  };
}) => {
  const {
    id,
    type,
    subtype,
    value,
    minPrice,
    maxPrice,
    goal,
    period,
    status,
    running,
  } = data;
  return (
    <>
      <div className="relative w-full min-w-32 max-w-[132px] mx-2 pt-4">
        <div className="absolute left-0 top-0 -z-10 w-full rotate-[3deg] translate-y-4 h-56 bg-[#787871]" />
        <div className="w-full max-w-sm mx-auto text-center bg-[#131511] text-[#787871] shadow-lg">
          <div className="tracking-tighter py-3">
            <div
              className={`font-revoluti text-sm ${running && "text-[#824b3d]"}`}
            >
              <p>{type}</p> <p>{subtype}</p>
              <p className="text-4xl font-helvetica font-medium">{id}</p>
            </div>
            <div className={`text-sm ${running && "text-[#dbdbcf]"}`}>
              {value}
            </div>
            {maxPrice === "tba" ? (
              <div
                className={`text-sm mb-8 uppercase ${
                  running && "text-[#dbdbcf]"
                }`}
              >
                Price: {maxPrice}
              </div>
            ) : (
              <>
                <div className={`text-sm ${running && "text-[#dbdbcf]"}`}>
                  Min price: {minPrice}
                </div>
                <div className={`text-sm ${running && "text-[#dbdbcf]"}`}>
                  Max price: {maxPrice}
                </div>
              </>
            )}
            <div className={`text-sm my-3 ${running && "text-[#dbdbcf]"}`}>
              Goal: <span className="uppercase">{goal}</span>
            </div>
            <p className={`text-sm font-bold ${running && "text-[#dbdbcf]"}`}>
              {period}
            </p>
          </div>
          <div
            className={`py-2 flex items-center justify-center text-base font-revoluti uppercase bg-[linear-gradient(to_right,_#131511,_#333333,_#131511)] ${
              running && "text-[#824b3d]"
            }`}
          >
            {id !== 1
              ? status
              : diffTimeFromNow(new Date("2024-10-22T12:00:00Z")).days === -1
              ? "open"
              : status}
          </div>
        </div>
      </div>
    </>
  );
};

export default StageItem;
