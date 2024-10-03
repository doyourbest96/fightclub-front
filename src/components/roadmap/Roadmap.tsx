import TrackImg from "../trackImg";
import RoadmapItem from "./RoadmapItem";
import Image from "next/image";

const roadmapData = [
  {
    index: "Phase 1",
    period: "Q2 2024",
    title: "Foundation",
    contents: [
      "• Research phase, partnerships, whitepaper",
      "• Website and social media channel launch",
      "• Initial smart contract development ",
      "• Token launch, pre-sale",
      "• Setup legal entitity",
      "• Start platform development",
      "• Community building initiatives, ambassador partnerships, marketing.",
      "• First public sale and dex listing",
    ],
    up: true,
    done: 3,
  },
  {
    index: "Phase 2",
    period: "Q1/Q2 2025",
    title: "Beta launch",
    contents: [
      "• Increase team size",
      "• Fight club development progress",
      "• Communitity incentive program launch",
      "• Fight club beta launch without match and store function",
      "• Merchandise store integration ",
      "• Community building initiatives, ambassador partnerships, marketing",
      "• Second public sale",
    ],
    up: true,
    done: 0,
  },
  {
    index: "Phase 3",
    period: "Q3/Q4 2025",
    title: "Global rollout",
    contents: [
      "• Increase team size",
      "• Platform global rollout",
      "• Further rollout incentive program",
      "• Fight club development progress",
      "• Introduction of decentralized governance",
      "• Partnerships with talents, brands and other facilitators",
      "• Match integration",
      "• Campus research",
    ],
    up: false,
    done: 0,
  },
  {
    index: "Phase 4",
    period: "Q1> 2026",
    title: "Expansion",
    contents: [
      "• Global marketing initiatives",
      "• Launch of IRONWILL clothing & attribute line",
      "• Fight club development progress",
      "• Focus on long-term sustainability",
      "• Development bootcamp campuses",
      "• Third public sale",
      "• First operational profits",
      "• Introduction FIght Club intern scout program",
      "• First IRONWILL worldchampions ",
    ],
    up: false,
    done: 0,
  },
];

const Roadmap = () => {
  return (
    <div className="flex flex-col lg:gap-6 rounded-md font-helvetica relative">
      <div className="relative flex items-center justify-between w-full h-[15vh] lg:h-full overflow-visible">
        <div className="text-lg font-revoluti -z-10 text-[#dbdbcf]">
          <span className="relative uppercase">
            Roadmap
            <TrackImg className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-24 -z-10  w-[240px] h-[240px]" />
          </span>
        </div>
        <div className="lg:hidden absolute top-0 right-0 w-1/2 h-full">
          <Image
            src={"/assets/images/smart.png"}
            alt="smart"
            layout="fill"
            objectFit="cover"
            className="object-top" // To ensure the top part of the image is shown
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
            className="w-full h-auto"
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
