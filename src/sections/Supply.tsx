const Supply = () => {
  return (
    <div className="max-w-[340px] mx-auto sm:px-2 md:px-12 lg:px-4 flex justify-center">
      <div className="px-6 py-2 flex flex-row text-center rounded-md border text-black bg-[#d3d3c9]">
        <div className="pr-6 flex flex-col border-r border-gray-500">
          <p className="text-lg font-black italic text-orange-900">FICCO</p>
          <p className="text-xs">Native Coin</p>
        </div>
        <div className="pl-6 flex flex-col">
          <p className="text-lg font-black italic text-orange-900">
            1000000000000
          </p>
          <p className="text-xs">Max supply</p>
        </div>
      </div>
    </div>
  );
};

export default Supply;
