import StageItem from "@/components/StageItem/StageItem";

const stageData = [
  {
    id: 1,
    type: "pre",
    value: "10,000,000,000",
    maxPrice: "$0.00010",
    softcap: "$1000,000",
    hardcap: "$1,000,000",
    period: "12-0-24 to 23-22-23",
    status: "open",
    running: true,
  },
  {
    id: 2,
    type: "public",
    value: "15,000,000,000",
    maxPrice: "$0.0004",
    softcap: "tba",
    hardcap: "tba",
    period: "tba",
    status: "soon",
    running: false,
  },
  {
    id: 3,
    type: `public`,
    value: "15,000,000,000",
    maxPrice: "tba",
    softcap: "tba",
    hardcap: "tba",
    period: "tba",
    status: "soon",
    running: false,
  },
  {
    id: 4,
    type: "public",
    value: "5,000,000,000",
    maxPrice: "tba",
    softcap: "tba",
    hardcap: "tba",
    period: "tba",
    status: "soon",
    running: false,
  },
];

const Stage = () => {
  return (
    <>
      <div className="w-full flex gap-4">
        {stageData.map((item, id) => (
          <StageItem key={id} data={item} />
        ))}
      </div>
    </>
  );
};

export default Stage;
