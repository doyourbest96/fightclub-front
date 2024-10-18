import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { mainnet, sepolia } from "wagmi/chains";

export const config = getDefaultConfig({
  appName: "IRONWILL",
  projectId: "68449b069bf507d7dc50e5c1bcb82c50", // Replace with your actual project ID
  chains: [mainnet, sepolia],
  ssr: true, // Enable server-side rendering support
});
