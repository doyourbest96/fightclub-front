import MemberCard from "@/components/MemberCard/MemberCard";

const memberData = [
  {
    avatar: "/assets/avatars/Andy.png",
    name: "Andy Souwer",
    title: "Co-founder",
    note: "Press the connect button and choose one of the many supported wallets to connect to the website.",
  },
  {
    avatar: "/assets/avatars/Niels.png",
    name: "Niels Strijbos",
    title: "Co-founder",
    note: "Creator of consumer brands, former co-owner at Bos Group Suant and Dutch Etail Network",
  },
  {
    avatar: "/assets/avatars/Steven.png",
    name: "Steven Piao",
    title: "Co-founder",
    note: "Hebei university of technology, Former full stack developer at DESO, RubyExchange and Freebit.",
  },
  {
    avatar: "/assets/avatars/default.png",
    name: "Advisor",
    note: "Soon to be announced",
  },
  {
    avatar: "/assets/avatars/default.png",
    name: "Advisor",
    note: "Soon to be announced",
  },
  {
    avatar: "/assets/avatars/default.png",
    name: "Advisor",
    note: "Soon to be announced",
  },
];

const Members = () => {
  return (
    <div className="flex flex-col gap-6 rounded-md">
      <p className="text-xl font-black italic">
        Founders | Advisors | Ambarssadors
      </p>
      <div className="grid grid-cols-3 gap-x-28 gap-y-10">
        {memberData.map((member, idx) => (
          <div key={idx}>
            <MemberCard member={member} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Members;
