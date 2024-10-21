"use client";

import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import Web3 from "web3";
import { useAccount, useChainId } from "wagmi";
import { Contract, ContractRunner, ethers } from "ethers";

import FiccoTokenContractABI from "@/abis/FiccoTokenContractABI.json";
import PresaleContractABI from "@/abis/PresaleContractABI.json";
import { useEthersProvider, useEthersSigner } from "@/utils/web3Providers";
import {
  defaultRPC,
  FiccoTokenContractAddress,
  PresaleContractAddress,
} from "@/data/constants";
import { Web3ContextType } from "@/types";

declare let window: any;

let web3: any;

const Web3Context = createContext<Web3ContextType | null>(null);

export const Web3Provider = ({ children }: { children: React.ReactNode }) => {
  const { address, isConnected } = useAccount();
  const chainId = useChainId();
  const signer = useEthersSigner();
  const ethersProvider = useEthersProvider();
  let defaultProvider: any;
  if (chainId === 1) {
    defaultProvider = new ethers.JsonRpcProvider(defaultRPC.mainnet);
  } else if (chainId === 11155111) {
    defaultProvider = new ethers.JsonRpcProvider(defaultRPC.sepolia);
  }

  const [provider, setProvider] = useState<ContractRunner>(defaultProvider);
  const [ficcoTokenContract, setFiccoTokenContract] = useState<Contract>(
    {} as Contract
  );
  const [presaleContract, setPresaleContract] = useState<Contract>(
    {} as Contract
  );
  const [piccoTokenAddress, setPiccoTokenAddress] = useState<string>("");

  const init = useCallback(async () => {
    try {
      if (typeof window !== "undefined") {
        web3 = new Web3(window.ethereum);
      }
      if (!isConnected || !ethersProvider) {
        // console.log("Not connected wallet");
      } else {
        setProvider(ethersProvider);
        // console.log("Connected wallet");
      }

      if (chainId === 1) {
        const _ficcoTokenContractWeb3: any = new web3.eth.Contract(
          FiccoTokenContractABI,
          FiccoTokenContractAddress.mainnet
        );
        const _presaleContractWeb3: any = new web3.eth.Contract(
          PresaleContractABI,
          PresaleContractAddress.mainnet
        );
        setFiccoTokenContract(_ficcoTokenContractWeb3);
        setPresaleContract(_presaleContractWeb3);
        setPiccoTokenAddress(FiccoTokenContractAddress.mainnet);
      } else if (chainId === 11155111) {
        const _ficcoTokenContractWeb3: any = new web3.eth.Contract(
          FiccoTokenContractABI,
          FiccoTokenContractAddress.sepolia
        );
        const _presaleContractWeb3: any = new web3.eth.Contract(
          PresaleContractABI,
          PresaleContractAddress.sepolia
        );
        setFiccoTokenContract(_ficcoTokenContractWeb3);
        setPresaleContract(_presaleContractWeb3);
        setPiccoTokenAddress(FiccoTokenContractAddress.sepolia);
      }
    } catch (err) {
      console.log(err);
    }
  }, [isConnected, ethersProvider, chainId]);

  useEffect(() => {
    init();
  }, [init]);

  const value = useMemo(
    () => ({
      account: address,
      chainId,
      isConnected,
      library: provider ?? signer,
      ficcoTokenContract,
      presaleContract,
      piccoTokenAddress,
      web3,
    }),
    [
      address,
      chainId,
      isConnected,
      provider,
      signer,
      ficcoTokenContract,
      presaleContract,
      piccoTokenAddress,
    ]
  );

  return <Web3Context.Provider value={value}>{children}</Web3Context.Provider>;
};

export default Web3Context;
