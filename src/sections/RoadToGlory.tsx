import { useState } from "react";
import dynamic from "next/dynamic";
import { MinusIcon, PlusIcon } from "@heroicons/react/20/solid";
import { gloryData } from "@/data/glory.data";
import GloryItem from "@/components/RoadToGlory/GloryItem";

const DynamicImage = dynamic(() => import("next/image"), { ssr: false });
const TrackImg = dynamic(() => import("@/components/trackImg"), {
  ssr: false,
});

export default function RoadToGlory() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="roadtoglory" className="w-full flex flex-col gap-10">
      <div className="text-center lg:text-left">
        <span className="relative text-lg font-revoluti text-[#dbdbcf] uppercase">
          Road to Glory
          <TrackImg className="absolute top-1/2 right-0 -z-10 translate-x-1/2 -translate-y-24 w-[240px] h-[240px]" />
        </span>
      </div>
      {/* For Desktop */}
      <div className="hidden lg:flex flex-col gap-10">
        <div className="flex px-10 flex-row justify-center gap-12">
          <GloryItem item={gloryData[0]} />
          <GloryItem item={gloryData[1]} />
        </div>
        <div className="flex flex-row justify-center items-center gap-2">
          <GloryItem item={gloryData[2]} />
          <div className="relative max-w-64 w-full h-64 flex justify-center">
            <DynamicImage
              src={"/assets/images/glory.png"}
              alt="glory"
              width={280}
              height={280}
            />
            <div className="absolute -left-1/4 -right-1/4 -top-1/2 -bottom-1/2 -z-20">
              <div className="w-full h-full flex flex-col border-[#dbdbcf]">
                <div className="w-full h-full flex flex-row border-b">
                  <span className="w-full h-full border-r"></span>
                  <span className="w-full h-full border-r"></span>
                  <span className="w-full h-full"></span>
                </div>
                <div className="w-full h-full flex flex-row">
                  <span className="w-full h-full border-r"></span>
                  <span className="w-full h-full border-r"></span>
                  <span className="w-full h-full"></span>
                </div>
              </div>
            </div>
          </div>
          <GloryItem item={gloryData[3]} />
        </div>
        <div className="px-12 flex flex-row justify-center gap-16">
          <GloryItem item={gloryData[4]} />
          <GloryItem item={gloryData[5]} />
        </div>
      </div>
      {/* For Mobile */}
      <div className="lg:hidden font-roboto-bold border-y-2 border-[#dbdbcf] divide-y-2 divide-[#dbdbcf]">
        {gloryData.map((item, index) => (
          <div key={index} className="px-2 py-4">
            <button
              className="flex justify-between items-center w-full text-left focus:outline-none group"
              onClick={() => toggleItem(index)}
              aria-expanded={openIndex === index}
            >
              <span className="text-xl font-roboto-bold font-black pr-8">
                {item.title}
              </span>
              <span className="text-[#dbdbcf] transition-transform duration-200 ease-in-out group-hover:text-white">
                {openIndex === index ? (
                  <MinusIcon className="w-6 h-6" />
                ) : (
                  <PlusIcon className="w-6 h-6" />
                )}
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? "h-auto" : "max-h-0"
              }`}
            >
              <p className="font-roboto-thin">{item.comment}</p>
              <p className="py-4 font-helvetica leading-none">
                {item.description}
              </p>
              {item.features.map((feature, idx) => (
                <p key={idx}>
                  <span className="font-roboto-bold">{feature.title}</span>
                  <span className="font-helvetica">{" " + feature.desc}</span>
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
