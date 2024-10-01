const Supply = () => {
  return (
    <div className="max-w-[400px] mx-auto sm:px-2 md:px-12 lg:px-4 flex justify-center">
      <div className="px-2 py-2 flex flex-row text-center rounded-md border bg-[#d3d3c9]">
        <div className="pr-2 md:pr-6 flex flex-col border-r border-gray-500">
          <p className="text-base font-revoluti text-[#824b3d]">FICCO</p>
          <p className="text-xs font-helvetica font-semibold text-black">
            Native Coin
          </p>
        </div>
        <div className="pl-2 md:pl-6 flex flex-col">
          <p className="text-base font-revoluti text-[#824b3d]">
            1000000000000
          </p>
          <p className="text-xs font-helvetica font-semibold text-black">
            Max supply
          </p>
        </div>
      </div>
    </div>
  );
};

export default Supply;
