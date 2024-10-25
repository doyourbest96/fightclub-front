const CLAIM_TIME_INIT_VALUE = 864000000000000;

interface TimeLeftProps {
  preSaleStage: number;
  timeLeft: number;
}

const TimeLeft: React.FC<TimeLeftProps> = ({ preSaleStage, timeLeft }) => {
  const getStatusText = () => {
    if (preSaleStage === 0) return "TIME UNTIL START";
    if (preSaleStage === 1) return "TIME LEFT";
    if (preSaleStage === 3) return "TIME TO CLAIM";
    return timeLeft === CLAIM_TIME_INIT_VALUE
      ? "CLAIM TIME NOT SET"
      : "TIME UNTIL CLAIM";
  };

  const getTimeValue = (divisor: number, modulus: number) => {
    if (preSaleStage === 3 || timeLeft === CLAIM_TIME_INIT_VALUE) return "-";
    return Math.floor(timeLeft / divisor) % modulus;
  };

  const timeUnits = [
    { divisor: 86400, modulus: 100, label: "days" },
    { divisor: 3600, modulus: 24, label: "hours" },
    { divisor: 60, modulus: 60, label: "minutes" },
    { divisor: 1, modulus: 60, label: "seconds" },
  ];

  return (
    <div>
      <div className="mb-6">
        <p className="font-bold font-revoluti text-xl text-[#dbdbcf]">
          {getStatusText()}
        </p>
      </div>
      <div className="px-10 grid grid-cols-4 gap-4 mb-6">
        {timeUnits.map(({ divisor, modulus, label }) => (
          <div
            key={label}
            className="bg-[#212121] border border-orange-900 p-1 rounded"
          >
            <div className="text-2xl font-revoluti">
              {getTimeValue(divisor, modulus)}
            </div>
            <div className="text-sm">{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeLeft;
