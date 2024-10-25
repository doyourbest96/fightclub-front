import { ethers } from "ethers";
import { toast } from "react-toastify";

const ERC20_ABI = [
  "function balanceOf(address owner) view returns (uint256)",
  "function decimals() view returns (uint8)",
  "function symbol() view returns (string)",
];

export const TOKENS = {
  // USDT: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
  // USDC: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
  // DAI: "0x6B175474E89094C44Da98b954EedeAC495271d0F",

  // sepolia
  USDT: "0xaA8E23Fb1079EA71e0a56F48a2aA51851D8433D0",
  USDC: "0x94a9D9AC8a22534E3FaCa9F4e7F2E2cf85d5E4C8",
  DAI: "0xFF34B3d4Aee8ddCd6F9AFFFB6Fe49bD371b8a357",
  FICCO: "0x4d32e926e6F9EAfcDEe2dbA577ed5b0c3B22FE6a",
};

export async function getBalances(
  address: string
): Promise<{ [key: string]: string }> {
  const provider = new ethers.JsonRpcProvider(
    process.env.NEXT_PUBLIC_INFURA_URL
  );

  const balances: { [key: string]: string } = {};

  try {
    // Get ETH balance
    const ethBalance = await provider.getBalance(address);
    balances.ETH = ethers.formatEther(ethBalance);

    // Get token balances
    for (const [symbol, tokenAddress] of Object.entries(TOKENS)) {
      const contract = new ethers.Contract(tokenAddress, ERC20_ABI, provider);
      const balance = await contract.balanceOf(address);
      const decimals = await contract.decimals();
      balances[symbol] = ethers.formatUnits(balance, decimals);
    }

    return balances;
  } catch (error) {
    console.error("Error fetching balances:", error);
    toast.error("Error fetching balances");
    return {};
  }
}
