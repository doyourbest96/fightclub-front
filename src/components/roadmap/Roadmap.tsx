import TrackImg from "../trackImg";
import RoadmapItem from "./RoadmapItem";
import Image from "next/image";
import { roadmapData } from "@/data/roadmap.data";

const Roadmap = () => {
  return (
    <div
      id="roadmap"
      className="flex flex-col lg:gap-6 rounded-md font-helvetica relative"
    >
      <div className="relative flex items-center justify-between w-full h-[15vh] lg:h-full overflow-visible">
        <div className="text-lg font-revoluti -z-10 pl-8 lg:pr-0 text-[#dbdbcf]">
          <span className="relative uppercase">
            Roadmap
            <TrackImg className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-24 -z-10  w-[240px] h-[240px]" />
          </span>
        </div>
        <div className="lg:hidden absolute top-0 right-0 -z-10 w-1/2 h-full">
          <Image
            src={"/assets/images/smart.png"}
            alt="smart"
            width={239}
            height={360}
            // layout="fill"
            // objectFit="cover"
            className="w-full h-auto" // To ensure the top part of the image is shown
          />
        </div>
      </div>
      {/* desktop layout */}
      <div className="hidden lg:flex flex-row gap-10">
        <div className="w-2/5 flex flex-col gap-4">
          <RoadmapItem item={roadmapData[0]} />
          <RoadmapItem item={roadmapData[2]} />
        </div>
        <div className="w-1/4 flex justify-center items-center">
          <Image
            src={"/assets/images/smart.png"}
            alt="smart"
            width={239}
            height={360}
            className="h-auto"
          />
        </div>
        <div className="w-2/5 flex flex-col gap-4">
          <RoadmapItem item={roadmapData[1]} />
          <RoadmapItem item={roadmapData[3]} />
        </div>
      </div>
      <div className="lg:hidden flex flex-col max-w-lg mx-auto">
        {/* mobile layout */}

        <RoadmapItem item={roadmapData[0]} />
        <RoadmapItem item={roadmapData[1]} />
        <div className="h-20 bg-black flex flex-col items-center justify-center">
          <div className="h-4 w-full bg-[#AEA194] relative top-8"></div>
          <div className=" m-auto h-6 w-6 bg-[#AEA194] rotate-45 relative -top-1"></div>
          <div className="rounded-full w-2 h-2  relative -top-9 bg-black" />
        </div>
        <RoadmapItem item={roadmapData[2]} />
        <RoadmapItem item={roadmapData[3]} />
      </div>
    </div>
  );
};

export default Roadmap;
