import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

interface TeamMember {
  name: string;
  title: string;
  description: string;
  imageSrc: string;
  socialLink: string;
  href: string
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
    href: "/"
  },
  {
    name: "Niels Strijbos",
    title: "Co-founder",
    description:
      "Creator of consumer brands, former co-owner at Bos Group Suant and Dutch Etail Network",
    imageSrc: "/assets/avatars/Niels.png",
    socialLink: "Instagram",
    href: "/"
  },
  {
    name: "Steven Piao",
    title: "Co-founder",
    description:
      "Hebei university of technology, Former full stack developer at DESO, RubyExchange and Freebit.",
    imageSrc: "/assets/avatars/Steven.jpg",
    socialLink: "Linkedin",
    href: "/"
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
  {
    title: "Ambassador",
    description: "Soon to be announced",
    iconSrc: "/assets/avatars/default.png",
  },
];

export default function DesktopMembers() {
  return (
    <div className="text-white p-8 max-w-6xl">
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
                  <h2 className="text-xl font-bold mr-2">{member.name}</h2>
                  <Link href={member.href}>
                    {
                      member.socialLink == "Instagram" ? <FaInstagram className="w-6 h-6" /> : <FaLinkedinIn className="w-5 h-5" />
                    }
                  </Link>
                </div>
                <p className="text-gray-400">{member.title}</p>
                <p className="mt-2 text-sm">{member.description}</p>
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
                <h2 className="text-xl font-bold">{placeholder.title}</h2>
                <p className="text-gray-400">{placeholder.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
