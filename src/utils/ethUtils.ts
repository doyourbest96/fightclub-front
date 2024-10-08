import { ethers } from "ethers";

const ERC20_ABI = [
  "function balanceOf(address owner) view returns (uint256)",
  "function decimals() view returns (uint8)",
  "function symbol() view returns (string)",
];

const TOKENS = {
  USDT: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
  USDC: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
  DAI: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
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
    return {};
  }
}
