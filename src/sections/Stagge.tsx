import { classNames } from "@/app/page";
import StageItem from "@/components/StageItem/StageItem";
import { useEffect, useRef, useState } from "react";

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
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [selectedIntroView, setSelectedIntroView] = useState(1);

  const scrollToElement = (index: number) => {
    const element = scrollRef.current?.children[index] as HTMLElement;
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  };

  useEffect(() => {
    setSelectedIntroView(1);
  }, []);

  useEffect(() => {
    scrollToElement(selectedIntroView);
  }, [selectedIntroView]);

  return (
    <>
      <div className="flex flex-col justify-center gap-2 w-full">
        <div
          className="w-full flex  gap-4 overflow-x-hidden sm:px-8 md:px-46 lg:px-24 "
          ref={scrollRef}
        >
          <div className="min-w-24   h-2" />
          {stageData.map((item, id) => (
            <StageItem key={id} data={item} />
          ))}
          <div className="min-w-24 h-2" />
        </div>
        <div className="flex m-auto gap-4 ">
          {Array.from({ length: 4 }).map((item, id) => (
            <div
              key={id}
              className={classNames(
                "rounded-full w-6 h-6 hover:cursor-pointer hover:bg-gray-100",
                selectedIntroView === id + 1 ? "bg-gray-200" : "bg-gray-400 "
              )}
              onClick={() => {
                scrollToElement(id + 1);
                setSelectedIntroView(id + 1);
              }}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Stage;
