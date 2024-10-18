import Image from "next/image";
import { MemberCardProps } from "@/types";

const MemberCard = ({ member }: { member: MemberCardProps }) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      <div className="h-52 flex justify-center items-end rounded-md bg-[#131511]">
        <Image src={member.avatar} alt="avatar" width={140} height={200} className="h-auto" priority />
      </div>
      <p className="px-4 font-bold">{member.name}</p>
      {member.title && <p className="px-4 text-sm">{member.title}</p>}
      {member.note && <p className="px-4 text-sm">{member.note}</p>}
    </div>
  );
};

export default MemberCard;
