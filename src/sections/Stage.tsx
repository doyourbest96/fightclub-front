import { classNames } from "@/utils/classNames";
import StageItem from "@/components/StageItem/StageItem";
import { useEffect, useRef, useState } from "react";

const stageData = [
  {
    id: 1,
    type: "pre",
    subtype: "sale",
    value: "10,000,000,000",
    maxPrice: "$0.00010",
    softcap: "$100,000",
    hardcap: "$1,000,000",
    period: "08-10-24 to 08-11-24",
    status: "soon",
    running: true,
  },
  {
    id: 2,
    type: "public",
    subtype: "sale",
    value: "15,000,000,000",
    maxPrice: "$0.0004",
    softcap: "tba",
    hardcap: "tba",
    period: "TBA",
    status: "soon",
    running: false,
  },
  {
    id: 3,
    type: `ieo`,
    subtype: `1`,
    value: "10,000,000,000",
    maxPrice: "tba",
    softcap: "tba",
    hardcap: "tba",
    period: "TBA",
    status: "soon",
    running: false,
  },
  {
    id: 4,
    type: "ieo",
    subtype: "2",
    value: "5,000,000,000",
    maxPrice: "tba",
    softcap: "tba",
    hardcap: "tba",
    period: "TBA",
    status: "soon",
    running: false,
  },
];

const Stage = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [selectedIntroView, setSelectedIntroView] = useState(-1);

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
    scrollToElement(selectedIntroView);
  }, [selectedIntroView]);

  return (
    <>
      <div className="flex flex-col justify-center gap-2 w-full">
        <div
          className="w-full flex overflow-x-hidden"
          ref={scrollRef}
        >
          <div className="min-w-24 h-2 lg:hidden" />
          {stageData.map((item, id) => (
            <StageItem key={id} data={item} />
          ))}
          <div className="min-w-24 h-2 lg:hidden" />
        </div>
        <div className="flex m-auto gap-4 lg:hidden">
          {Array.from({ length: 4 }).map((item, id) => (
            <div
              key={id}
              className={classNames(
                "rounded-full w-6 h-6 hover:cursor-pointer hover:bg-gray-100 ",
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
