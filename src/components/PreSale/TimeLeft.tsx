const TimeLeft = ({
  preSaleStage,
  timeLeft,
}: {
  preSaleStage: number;
  timeLeft: number;
}) => {
  return (
    <>
      <div className="mb-6">
        <p className="font-bold font-revoluti text-xl text-[#dbdbcf]">
          {preSaleStage === 0
            ? "TIME UNTIL START"
            : preSaleStage === 1
            ? "TIME LEFT"
            : preSaleStage === 2
            ? "TIME UNTIL CLAIM"
            : "TIME TO CLAIM"}
        </p>
      </div>
      <div className="px-10 grid grid-cols-4 gap-4 mb-6">
        <div className="bg-[#212121] border border-orange-900 p-1 rounded">
          <div className="text-2xl font-revoluti">
            {preSaleStage === 3 ? "-" : Math.floor(timeLeft / 86400) % 30}
          </div>
          <div className="text-sm">days</div>
        </div>
        <div className="bg-[#212121] border border-orange-900 p-1 rounded">
          <div className="text-2xl font-revoluti">
            {preSaleStage === 3 ? "-" : Math.floor(timeLeft / 3600) % 24}
          </div>
          <div className="text-sm">hours</div>
        </div>
        <div className="bg-[#212121] border border-orange-900 p-1 rounded">
          <div className="text-2xl font-revoluti">
            {preSaleStage === 3 ? "-" : Math.floor(timeLeft / 60) % 60}
          </div>
          <div className="text-sm">minutes</div>
        </div>
        <div className="bg-[#212121] border border-orange-900 p-1 rounded">
          <div className="text-2xl font-revoluti">
            {preSaleStage === 3 ? "-" : Math.floor(timeLeft) % 60}
          </div>
          <div className="text-sm">seconds</div>
        </div>
      </div>
    </>
  );
};

export default TimeLeft;
