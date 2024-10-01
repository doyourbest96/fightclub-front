interface RoadmapItemProps {
  index: string;
  period: string;
  title: string;
  contents: string[];
  up: boolean;
  done: number;
}

const RoadmapItem = ({ item }: { item: RoadmapItemProps }) => {
  return (
    <div className="flex flex-col">
      {item.up && (
        <div
          className={`mx-4 px-4 flex flex-row gap-4 text-base font-roboto-bold text-[#dbdbcf] font-bold ${item.up ? "rounded-t-md" : "rounded-b-md"
            } bg-[#814b3d]`}
        >
          <span className="py-3">{item.index}</span>
          <span className="w-px h-full border border-black -skew-x-[20deg]"></span>
          <span className="py-3">{item.period}</span>
          <span className="w-px h-full border border-black -skew-x-[20deg]"></span>
          <span className="py-3">{item.title}</span>
        </div>
      )}
      <ul className="p-4 flex flex-col gap-2 rounded-md text-[#dbdbcf] bg-[#151312]">
        {item.contents.map((content, idx) => (
          <li key={idx}>{idx < item.done ? <span className="text-[#7f4236]">{content}</span> : <span>{content}</span>}</li>
        ))}
      </ul>
      {!item.up && (
        <div
          className={`mx-4 px-4 flex flex-row gap-4 text-base font-roboto-bold text-[#dbdbcf] font-bold ${item.up ? "rounded-t-md" : "rounded-b-md"
            } bg-[#814b3d]`}
        >
          <span className="py-3">{item.index}</span>
          <span className="w-px h-full border border-black -skew-x-[20deg]"></span>
          <span className="py-3">{item.period}</span>
          <span className="w-px h-full border border-black -skew-x-[20deg]"></span>
          <span className="py-3">{item.title}</span>
        </div>
      )}
    </div>
  );
};

export default RoadmapItem;