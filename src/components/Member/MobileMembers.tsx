"use client";
import { useState } from "react";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa6";
import Link from "next/link";
import { CiLinkedin } from "react-icons/ci";

interface CoFounder {
  name: string;
  title: string;
  description: string;
  imageSrc: string;
  socialLink: string;
  href: string;
}

interface Advisor {
  title: string;
  description: string;
  iconSrc: string;
}

interface Ambassador {
  title: string;
  description: string;
  iconSrc: string;
}

const coFounders: CoFounder[] = [
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
];

const advisors: Advisor[] = [
  {
    title: "Advisor",
    description: "Soon to be announced",
    iconSrc: "/assets/avatars/default.png",
  },
  {
    title: "Advisor",
    description: "Soon to be announced",
    iconSrc: "/assets/avatars/default.png",
  },
];

const ambassadors: Ambassador[] = [
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

function CoFounderShowCase() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const renderCard = (index: number) => {
    const member = coFounders[index];
    return (
      <div className="rounded-lg overflow-hidden">
        <div className="h-40 flex justify-center items-end">
          <Image
            src={member.imageSrc}
            alt="avatar"
            width={140}
            height={140}
            className="rounded-full"
          />
        </div>
        <div className="p-4">
          <div className="flex justify-center items-center text-[#dbdbcf]">
            <h2 className="text-xl font-bold mr-2">{member.name}</h2>
            <Link href={member.href}>
              {member.socialLink == "Instagram" ? (
                <FaInstagram className="w-6 h-6" />
              ) : (
                <CiLinkedin className="w-7 h-7 stroke-[#dbdbcf]" />
              )}
            </Link>
          </div>
          <p className="text-[#dbdbcf]">{member.title}</p>
          <p className="mt-2 text-sm text-[#dbdbcf]">{member.description}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="text-white p-4">
      <div className="max-w-sm mx-auto">
        {renderCard(currentIndex)}
        <div className="flex justify-center mt-4 space-x-2">
          {Array.from({ length: coFounders.length }).map((_, index) => (
            <button
              key={index}
              className={`w-5 h-5 rounded-full ${
                index === currentIndex ? "bg-white" : "bg-gray-600"
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function AdvisorShowCase() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const renderCard = (index: number) => {
    const member = advisors[index];
    return (
      <div className="rounded-lg overflow-hidden">
        <div className="h-40 flex justify-center items-end ">
          <Image
            src={member.iconSrc}
            alt="avatar"
            width={140}
            height={200}
            className="rounded-full"
          />
        </div>
        <div className="p-4">
          {/* <h2 className="text-xl font-bold">{member.name}</h2> */}
          <p className="text-[#dbdbcf]">{member.title}</p>
          <p className="mt-2 text-sm text-[#dbdbcf]">{member.description}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="text-[#dbdbcf] p-4">
      <div className="max-w-sm mx-auto">
        {renderCard(currentIndex)}
        <div className="flex justify-center mt-4 space-x-2">
          {Array.from({ length: advisors.length }).map((_, index) => (
            <button
              key={index}
              className={`w-5 h-5 rounded-full ${
                index === currentIndex ? "bg-white" : "bg-gray-600"
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function AmbassadorShowCase() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const renderCard = (index: number) => {
    const member = ambassadors[index];
    return (
      <div className="rounded-lg overflow-hidden text-[#dbdbcf]">
        <div className="h-40 flex justify-center items-end ">
          <Image
            src={member.iconSrc}
            alt="avatar"
            width={140}
            height={200}
            className="rounded-full"
          />
        </div>
        <div className="p-4">
          {/* <h2 className="text-xl font-bold">{member.name}</h2> */}
          <p className="text-[#dbdbcf]">{member.title}</p>
          <p className="mt-2 text-sm text-[#dbdbcf]">{member.description}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="text-white  p-4">
      <div className="max-w-sm mx-auto">
        {renderCard(currentIndex)}
        <div className="flex justify-center mt-4 space-x-2">
          {Array.from({ length: ambassadors.length }).map((_, index) => (
            <button
              key={index}
              className={`w-5 h-5 rounded-full ${
                index === currentIndex ? "bg-white" : "bg-gray-600"
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function MobileMembers() {
  return (
    <div className="text-center">
      <CoFounderShowCase />
      <AdvisorShowCase />
      <AmbassadorShowCase />
    </div>
  );
}
