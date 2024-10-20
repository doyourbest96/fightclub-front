import dynamic from "next/dynamic";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { teamMemberData, placeholderData } from "@/data/member.data";

const DynamicImage = dynamic(() => import("next/image"), { ssr: false });

export default function DesktopMembers() {
  return (
    <div className="text-[#dbdbcf] p-8 max-w-6xl">
      <div className="mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {teamMemberData.map((member, index) => (
            <div key={index} className="rounded-lg overflow-hidden">
              <div className="flex justify-center items-end">
                <DynamicImage
                  src={member.imageSrc}
                  alt="avatar"
                  width={160}
                  height={160}
                  className="rounded-full h-auto"
                />
              </div>
              <div className="px-12 py-4">
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
          {placeholderData.map((placeholder, index) => (
            <div key={index} className="rounded-lg overflow-hidden">
              <div className="flex justify-center items-end">
                <DynamicImage
                  src={placeholder.iconSrc}
                  alt="avatar"
                  width={160}
                  height={160}
                  className="rounded-full h-auto"
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
