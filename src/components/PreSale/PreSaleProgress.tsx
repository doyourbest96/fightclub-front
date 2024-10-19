const PreSaleProgress = ({
  hardcap,
  fundsRaised,
}: {
  hardcap: number;
  fundsRaised: number;
}) => {
  return (
    <>
      <div className="px-2 mb-6 items-center">
        <div className="w-full bg-[#787871] border-[#824B3D] border-2 rounded-lg h-8">
          <div
            className="relative bg-[#824B3D] h-7 rounded-l-lg flex justify-end"
            style={{ width: `${(fundsRaised / hardcap) * 100}%` }}
          >
            <div className="absolute top-10 transform translate-x-1/2">
              <div className="relative inline-block bg-[#e8e6d9] py-1 px-2 rounded">
                <div className="absolute left-1/2 -top-1 w-2 h-2 bg-[#e8e6d9] transform -translate-x-1/2 rotate-45"></div>
                <span className="text-base text-[#824B3D] font-bold font-revoluti">
                  {"$" + fundsRaised.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-3 ">
          <span className="text-base font-bold font-revoluti text-[#dbdbcf]">
            ${hardcap.toLocaleString()}
          </span>
        </div>
      </div>
    </>
  );
};

export default PreSaleProgress;
