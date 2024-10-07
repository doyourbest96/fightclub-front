import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

interface TeamMember {
  name: string;
  title: string;
  description: string;
  imageSrc: string;
  socialLink: string;
  href: string;
}

interface Placeholder {
  title: string;
  description: string;
  iconSrc: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Andy Souwer",
    title: "Co-founder",
    description:
      "Former world champion kickboxing, owner of Andy Souwer Kickboxing University and WKS.",
    imageSrc: "/assets/avatars/Andy.jpg",
    socialLink: "Instagram",
    href: "/",
  },
  {
    name: "Niels Strijbos",
    title: "Co-founder",
    description:
      "Creator of consumer brands, former co-owner at Bos Group Suant and Dutch Etail Network",
    imageSrc: "/assets/avatars/Niels.png",
    socialLink: "Instagram",
    href: "/",
  },
  {
    name: "Steven Piao",
    title: "Co-founder",
    description:
      "Hebei university of technology, Former full stack developer at DESO, RubyExchange and Freebit.",
    imageSrc: "/assets/avatars/Steven.jpg",
    socialLink: "Linkedin",
    href: "/",
  },
  {
    name: "Jonathan Ruiz",
    title: "Co-founder",
    description:
      "World renowned mma & muay thai fight instructor, team USA coach - WMO & WAKO, owner of WKS and Striking 101.",
    imageSrc: "/assets/avatars/Jonathan.png",
    socialLink: "Instagram",
    href: "/",
  },
];

const placeholders: Placeholder[] = [
  {
    title: "Advisor",
    description: "Soon to be announced",
    iconSrc: "/assets/avatars/default.png",
  },
  {
    title: "Ambassador",
    description: "Soon to be announced",
    iconSrc: "/assets/avatars/default.png",
  },
];

export default function DesktopMembers() {
  return (
    <div className="text-[#dbdbcf] p-8 max-w-6xl">
      <div className="mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="rounded-lg overflow-hidden">
              <div className="flex justify-center items-end">
                <Image
                  src={member.imageSrc}
                  alt="avatar"
                  width={140}
                  height={140}
                  className="rounded-full"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center">
                  <h2 className="text-xl text-[#dbdbcf] font-bold mr-2">
                    {member.name}
                  </h2>
                  <Link href={member.href}>
                    {member.socialLink == "Instagram" ? (
                      <FaInstagram className="w-6 h-6 stroke-[#dbdbcf]" />
                    ) : (
                      <CiLinkedin className="w-7 h-7 stroke-[#dbdbcf]" />
                    )}
                  </Link>
                </div>
                <p className="text-[#dbdbcf]">{member.title}</p>
                <p className="mt-2 text-sm text-[#dbdbcf]">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
          {placeholders.map((placeholder, index) => (
            <div key={index} className="rounded-lg overflow-hidden">
              <div className="flex justify-center items-end">
                <Image
                  src={placeholder.iconSrc}
                  alt="avatar"
                  width={140}
                  height={140}
                  className="rounded-full"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-bold text-[#dbdbcf]">
                  {placeholder.title}
                </h2>
                <p className="text-[#dbdbcf]">{placeholder.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
