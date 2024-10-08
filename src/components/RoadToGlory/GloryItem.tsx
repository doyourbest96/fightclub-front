import { GloryItemProps } from "@/types";

const GloryItem = ({ item }: { item: GloryItemProps }) => {
  return (
    <div className="max-w-[468px] max-h-[456px] min-h-96 w-full p-2 bg-[rgb(3,3,3)] text-[#dbdbcf] rounded-md border border-[#dbdbcf] leading-tight text-sm">
      <p className="font-roboto-bold text-lg">{item.title}</p>
      <p className="font-helvetica font-thin">{item.comment}</p>
      <p className="py-4 font-roboto-thin leading-none text-base">{item.description}</p>
      {item.features.map((feature, idx) => (
        <p key={idx}>
          <span className="font-roboto-bold text-base">{feature.title}</span>
          <span className="font-roboto-thin">{" " + feature.desc}</span>
        </p>
      ))}
    </div>
  );
};

export default GloryItem;
