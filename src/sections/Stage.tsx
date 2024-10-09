import { classNames } from "@/utils/classNames";
import StageItem from "@/components/StageItem/StageItem";
import { useEffect, useRef, useState } from "react";
import { stageData } from "@/data/stage.data";

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
