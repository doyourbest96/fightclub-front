import { ContractRunner } from "ethers";
import { Address } from "viem";

export type GloryItemProps = {
  title: string;
  comment: string;
  description: string;
  features: {
    title: string;
    desc: string;
  }[];
};

export type MemberCardProps = {
  avatar: string;
  name: string;
  title?: string;
  note?: string;
};

export type TeamMember = {
  name: string;
  title: string;
  description: string;
  imageSrc: string;
  socialLink: string;
  href: string;
};

export type Placeholder = {
  title: string;
  description: string;
  iconSrc: string;
};

export type CoFounder = {
  name: string;
  title: string;
  description: string;
  imageSrc: string;
  socialLink: string;
  href: string;
};

export type Advisor = {
  title: string;
  description: string;
  iconSrc: string;
};

export type Ambassador = {
  title: string;
  description: string;
  iconSrc: string;
};

export type RoadmapItemProps = {
  index: string;
  period: string;
  title: string;
  contents: string[];
  up: boolean;
  done: number;
};

export type HowtoItemProps = {
  icon: string;
  title: string;
  content: string;
};

export type TimeDifference = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export type Step = {
  title: string;
  description: string;
  icon: string;
};

export type FAQItemProps = {
  question: string;
  answer: string;
};

export type Web3ContextType = {
  account?: Address;
  chainId?: number;
  isConnected?: boolean;
  library?: ContractRunner;
  ficcoTokenContract: any;
  presaleContract: any;
  piccoTokenAddress: string;
  web3: any;
};
