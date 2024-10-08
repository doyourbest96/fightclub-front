import { GloryItemProps } from "@/types";

const GloryItem = ({ item }: { item: GloryItemProps }) => {
  return (
    <div className="max-w-[468px] max-h-[456px] min-h-96 w-full p-2 bg-[rgb(3,3,3)] text-[#dbdbcf] rounded-md border border-[#dbdbcf] leading-tight">
      <p className="font-roboto-bold text-lg">{item.title}</p>
      <p className="font-roboto-thin">{item.comment}</p>
      <p className="py-4 font-helvetica leading-none">{item.description}</p>
      {item.features.map((feature, idx) => (
        <p key={idx}>
          <span className="font-roboto-bold">{feature.title}</span>
          <span className="font-helvetica">{" " + feature.desc}</span>
        </p>
      ))}
    </div>
  );
};

export default GloryItem;
