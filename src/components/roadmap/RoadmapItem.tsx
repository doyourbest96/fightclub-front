import { RoadmapItemProps } from "@/types";

const RoadmapItem = ({ item }: { item: RoadmapItemProps }) => {
  return (
    <div className="flex flex-col">
      {item.up && (
        <div
          className={`mx-4 px-4 flex flex-row gap-4 text-base font-roboto-bold text-[#dbdbcf] font-bold ${item.up ? "rounded-t-md" : "rounded-b-md"
            } bg-[#7b4134]`}
        >
          <span className="py-3">{item.index}</span>
          <span className="w-px h-full border-r border-[#030303] -skew-x-[20deg]"></span>
          <span className="py-3">{item.period}</span>
          <span className="w-px h-full border-r border-[#030303] -skew-x-[20deg]"></span>
          <span className="py-3">{item.title}</span>
        </div>
      )}
      <ul className="p-4 flex flex-col rounded-md text-[#dbdbcf] bg-[#151312]">
        {item.contents.map((content, idx) => (
          <li key={idx}>{idx < item.done ? <span className="text-[#7b4134]">{content}</span> : <span>{content}</span>}</li>
        ))}
      </ul>
      {!item.up && (
        <div
          className={`mx-4 px-4 flex flex-row gap-4 text-base font-roboto-bold text-[#dbdbcf] font-bold ${item.up ? "rounded-t-md" : "rounded-b-md"
            } bg-[#7b4134]`}
        >
          <span className="py-3">{item.index}</span>
          <span className="w-px h-full border-r border-[#030303] -skew-x-[20deg]"></span>
          <span className="py-3">{item.period}</span>
          <span className="w-px h-full border-r border-[#030303] -skew-x-[20deg]"></span>
          <span className="py-3">{item.title}</span>
        </div>
      )}
    </div>
  );
};

export default RoadmapItem;