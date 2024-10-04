import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import {
  arbitrum,
  base,
  mainnet,
  optimism,
  polygon,
  sepolia,
} from "wagmi/chains";

export const config = getDefaultConfig({
  appName: "IRONWILL",
  projectId: "YOUR_PROJECT_ID", // Replace with your actual project ID
  chains: [mainnet, polygon, optimism, arbitrum, base, sepolia],
  ssr: true, // Enable server-side rendering support
});
