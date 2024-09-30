import RoadmapItem from "@/components/roadmap/RoadmapItem";
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
  },
  {
    index: "Phase 4",
    period: "Q1> 2026",
    title: "Expansion",
    contents: [
      "• Global marketing initiatives",
      "• Launch of Fight Club clothing & attribute line",
      "• Fight club development progress",
      "• Focus on long-term sustainability",
      "• Development bootcamp campuses",
      "• Third public sale",
      "• First operational profits",
      "• Introduction FIght Club intern scout program",
      "• First Fight Club worldchampions ",
    ],
    up: false,
  },
];

const Roadmap = () => {
  return (
    <div className="flex flex-col lg:gap-6 rounded-md">
      <div className="relative flex items-center justify-between top-0 right-0 w-full h-[15vh] lg:h-full overflow-hidden">
        <p className="text-3xl font-black italic z-10">Roadmap</p>
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
        <div className="h-20 bg-slate-600"></div>
        <RoadmapItem item={roadmapData[2]} />
        <RoadmapItem item={roadmapData[3]} />
      </div>
    </div>
  );
};

export default Roadmap;
