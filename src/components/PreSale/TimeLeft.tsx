import { TimeDifference } from "@/types";

const TimeLeft = ({
  stageIndex,
  timeLeft,
}: {
  stageIndex: number;
  timeLeft: TimeDifference;
}) => {
  return (
    <>
      <div className="mb-6">
        <p className="font-bold font-revoluti text-xl text-[#dbdbcf]">
          {stageIndex === 0 ? "TIME UNTIL START" : "TIME LEFT"}
        </p>
      </div>
      <div className="px-10 grid grid-cols-4 gap-4 mb-6">
        <div className="bg-[#212121] border border-orange-900 p-1 rounded">
          <div className="text-2xl font-revoluti">{timeLeft.days}</div>
          <div className="text-sm">days</div>
        </div>
        <div className="bg-[#212121] border border-orange-900 p-1 rounded">
          <div className="text-2xl font-revoluti">{timeLeft.hours}</div>
          <div className="text-sm">hours</div>
        </div>
        <div className="bg-[#212121] border border-orange-900 p-1 rounded">
          <div className="text-2xl font-revoluti">{timeLeft.minutes}</div>
          <div className="text-sm">minutes</div>
        </div>
        <div className="bg-[#212121] border border-orange-900 p-1 rounded">
          <div className="text-2xl font-revoluti">{timeLeft.seconds}</div>
          <div className="text-sm">seconds</div>
        </div>
      </div>
    </>
  );
};

export default TimeLeft;
