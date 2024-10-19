"use client";

import React, { useState, useEffect } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";
import { ethers, isAddress } from "ethers";

import useWeb3 from "@/hooks/useWeb3";
import { classNames } from "@/utils/classNames";
import { getBalances, TOKENS } from "../utils/ethUtils";
import { diffTimeFromNow } from "@/utils/diffTimeFromNow";
import { toBigInt } from "@/utils/toBigInt";
import { stageData } from "@/data/stage.data";
import { TimeDifference } from "@/types";
import PreSaleProgress from "@/components/PreSale/PreSaleProgress";
import TimeLeft from "@/components/PreSale/TimeLeft";
import PhaseDisplay from "@/components/PreSale/PhaseDisplay";

const PreSale: React.FC = () => {
  const { presaleContract, account } = useWeb3();
  const [balances, setBalances] = useState<{ [key: string]: string }>({});
  const [claimablePICCOBalance, setClaimableFICCOBalance] =
    useState<string>("0");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState<TimeDifference>({
    days: 29,
    hours: 23,
    minutes: 59,
    seconds: 59,
  });

  const [walletAddress, setWalletAddress] = useState<string>("");
  const [isSettingWallet, setIsSettingWallet] = useState(false);
  const [walletSetSuccess, setWalletSetSuccess] = useState(false);
  const [ownerAddress, setOwnerAddress] = useState<string>("");
  const [isSettingOwnerAddress, setIsSettingOwnerAddress] = useState(false);
  const [ownerAddressSetSuccess, setOwnerAddressSetSuccess] = useState(false);

  const [fundsRaised, setFundsRaised] = useState<number>(0);
  const [tokensAvailable, setTokensAvailable] = useState<number>(1e10);
  const [phaseIndex, setPhaseIndex] = useState<number>(0);
  const [hardcap] = useState<number>(1020000);
  const [payAmount, setPayAmount] = useState<number>(0);
  const [tokenAmount, setTokenAmount] = useState<number>(0);
  const [min, setMin] = useState<number>(0.05);
  const [ETHFor100USDT, setETHFor100USDT] = useState<number>(0.05);
  const [paymentType, setPaymentType] = useState<string>("ETH");
  const [stageIndex, setStageIndex] = useState<number>(0);
  const [targetDate, setTargetDate] = useState<Date>(
    new Date(stageData[stageIndex].endDate)
  );

  const OWNER_ADDRESS = process.env.NEXT_PUBLIC_OWNER_ADDRESS;

  const fetchETHFor100USDT = async () => {
    if (presaleContract && presaleContract.methods) {
      try {
        const tempTokenCount = await presaleContract.methods
          .estimatedTokenAmountAvailableWithCoin(
            ethers.parseUnits("100", 6).toString(),
            TOKENS["USDT" as keyof typeof TOKENS]
          )
          .call();
        // console.log("tempTokenCount:", tempTokenCount);
        const tokenAmountFor100USDT = ethers.formatUnits(tempTokenCount, 18);
        // console.log("tokenAmountFor100USDT:", tokenAmountFor100USDT);
        const tempETHFor100USDT = await presaleContract.methods
          .estimatedEthAmountForTokenAmount(
            ethers.parseUnits(tokenAmountFor100USDT, 18)
          )
          .call();
        // console.log("tempETHFor100USDT:", tempETHFor100USDT);
        const expectedPayAmount = ethers.formatUnits(tempETHFor100USDT, 18);
        // console.log("expectedPayAmount:", expectedPayAmount);
        setETHFor100USDT(
          parseFloat((parseFloat(expectedPayAmount) + 5e-7).toFixed(6))
        );
      } catch (error) {
        console.error("Error fetching ETH price:", error);
      }
    }
  };

  const fetchFundsRaised = async () => {
    if (presaleContract && presaleContract.methods) {
      try {
        const tempFundsRaised = await presaleContract.methods
          .getFundsRaised()
          .call();
        setFundsRaised(parseFloat(tempFundsRaised));
        // console.log("Funds Raised:", tempFundsRaised);
      } catch (error) {
        console.error("Error fetching funds raised:", error);
      }
    }
  };

  const fetchTokensAvailable = async () => {
    if (presaleContract && presaleContract.methods) {
      try {
        const tempTokensAvailable = await presaleContract.methods
          .tokensAvailable()
          .call();
        const formattedTokensAvailable = parseFloat(
          ethers.formatUnits(tempTokensAvailable, 18)
        ).toFixed(0);
        setTokensAvailable(parseFloat(formattedTokensAvailable));
        console.log("Remaining Token Amount:", formattedTokensAvailable);
      } catch (error) {
        console.error("Error fetching remaining token amount:", error);
      }
    }
  };

  const fetchInformation = () => {
      fetchETHFor100USDT();
      fetchFundsRaised();
      fetchTokensAvailable();
  }

  useEffect(() => {
    if (presaleContract && presaleContract.methods) {
      fetchInformation();
    }
  });

  useEffect(() => {
    if (tokensAvailable > 7e9) {
      setPhaseIndex(0);
    } else if (tokensAvailable > 5e9) {
      setPhaseIndex(1);
    } else if (tokensAvailable > 3e9) {
      setPhaseIndex(2);
    } else if (tokensAvailable > 1e9) {
      setPhaseIndex(3);
    } else {
      setPhaseIndex(4);
    }
  }, [tokensAvailable]);

  useEffect(() => {
    async function fetchBalances() {
      if (account) {
        setIsLoading(true);
        setError(null);
        try {
          const fetchedBalances = await getBalances(account);
          setBalances(fetchedBalances);
        } catch (err) {
          setError(`Failed to fetch balances. Please try again. ${err}`);
        } finally {
          setIsLoading(false);
        }
      }
    }

    async function getClaimableBalance() {
      if (account && presaleContract) {
        try {
          const balance = await presaleContract.methods
            .getTokenAmountForInvestor(account)
            .call();
          // console.log("Claimable FICCO Balance:", balance);
          const formattedBalance = ethers.formatUnits(balance, 18);
          setClaimableFICCOBalance(formattedBalance);
        } catch (error) {
          console.error("Error fetching claimable balance:", error);
          setClaimableFICCOBalance("0");
        }
      }
    }

    fetchBalances();
    getClaimableBalance();
  }, [account, presaleContract]);

  useEffect(() => {
    setTargetDate(new Date(stageData[stageIndex].endDate)); // Specify your target date here
  }, [stageIndex]);

  useEffect(() => {
    const difference = diffTimeFromNow(targetDate);
    if (difference.days === -1) setStageIndex(stageIndex + 1);
    setTimeLeft(difference);
  }, [stageIndex, targetDate]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime.seconds > 0) {
          return { ...prevTime, seconds: prevTime.seconds - 1 };
        } else if (prevTime.minutes > 0) {
          return { ...prevTime, minutes: prevTime.minutes - 1, seconds: 59 };
        } else if (prevTime.hours > 0) {
          return {
            ...prevTime,
            hours: prevTime.hours - 1,
            minutes: 59,
            seconds: 59,
          };
        } else if (prevTime.days > 0) {
          return {
            ...prevTime,
            days: prevTime.days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59,
          };
        }
        return prevTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  useEffect(() => {
    if (paymentType === "ETH") {
      setMin(ETHFor100USDT);
    } else {
      setMin(100.0);
    }
    setPayAmount(0);
    setTokenAmount(0);
  }, [paymentType, ETHFor100USDT]);

  const handleMin = () => {
    setPayAmount(min);
    handlePayAmountChange({ target: { value: min.toString() } });
  };

  const formatBalance = (balance: string) => {
    const num = parseFloat(balance);
    return num.toLocaleString("en-US", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 6,
    });
  };

  const handlePayAmountChange = async (
    e: React.ChangeEvent<HTMLInputElement> | { target: { value: string } }
  ) => {
    const value = e.target.value;
    const regex = /^\d*\.?\d{0,6}$/;
    if (!regex.test(value)) {
      return;
    }

    if (value === "" || value === "0") {
      setPayAmount(0);
      setTokenAmount(0);
    } else {
      try {
        const newPayAmount = ethers.parseUnits(value, 6);
        setPayAmount(parseFloat(value));
        if (paymentType === "ETH") {
          const ethAmount = ethers.parseEther(value);
          const temp = await presaleContract.methods
            .estimatedTokenAmountAvailableWithETH(ethAmount.toString())
            .call();
          const expectedTokenAmount = ethers.formatUnits(temp, 18);
          setTokenAmount(parseFloat(expectedTokenAmount));
        } else {
          const temp = await presaleContract.methods
            .estimatedTokenAmountAvailableWithCoin(
              newPayAmount.toString(),
              TOKENS[paymentType as keyof typeof TOKENS]
            )
            .call();
          const expectedTokenAmount =
            paymentType === "DAI"
              ? ethers.formatUnits(temp, 6)
              : ethers.formatUnits(temp, 18);
          setTokenAmount(parseFloat(expectedTokenAmount));
        }
      } catch (error) {
        console.error("Error fetching token amount:", error);
        setTokenAmount(0);
      }
    }
  };

  const handleTokenAmountChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    const regex = /^\d*\.?\d{0,6}$/;
    if (!regex.test(value)) {
      return;
    }

    if (value === "" || value === "0") {
      setTokenAmount(0);
      setPayAmount(0);
    } else {
      try {
        const newTokenAmount = ethers.parseUnits(value, 18);
        setTokenAmount(parseFloat(value));
        if (paymentType === "ETH") {
          const temp = await presaleContract.methods
            .estimatedEthAmountForTokenAmount(newTokenAmount.toString())
            .call();
          const expectedPayAmount = ethers.formatUnits(temp, 18);
          setPayAmount(parseFloat(expectedPayAmount));
        } else {
          const temp = await presaleContract.methods
            .estimatedCoinAmountForTokenAmount(
              newTokenAmount.toString(),
              TOKENS[paymentType as keyof typeof TOKENS]
            )
            .call();
          const expectedPayAmount =
            paymentType === "DAI"
              ? ethers.formatUnits(temp, 18)
              : ethers.formatUnits(temp, 6);
          setPayAmount(parseFloat(expectedPayAmount));
        }
      } catch (error) {
        console.error("Error fetching pay amount:", error);
        setPayAmount(0);
      }
    }
  };

  const handleBuy = async () => {
    setPayAmount(0);
    setTokenAmount(0);
    try {
      switch (paymentType) {
        case "ETH":
          console.log("buy with eth");
          const ethAmount = ethers.parseEther(payAmount.toString());
          const txETH = await presaleContract.methods
            .buyWithETH()
            .send({ from: account, value: ethAmount.toString() });
          console.log("txETH =>>>>>>>>>>", txETH);
          break;
        case "USDT":
          console.log("buy with usdt");
          const txUSDT = await presaleContract.methods
            .buyWithUSDT(toBigInt(tokenAmount.toString()))
            .send({ from: account });
          console.log("txUSDT =>>>>>>>>>>", txUSDT);
          break;
        case "USDC":
          console.log("buy with usdc");
          const txUSDC = await presaleContract.methods
            .buyWithUSDC(toBigInt(tokenAmount.toString()))
            .send({ from: account });
          console.log("txUSDC =>>>>>>>>>>", txUSDC);
          break;
        case "DAI":
          console.log("buy with dai");
          const txDAI = await presaleContract.methods
            .buyWithDAI(toBigInt(tokenAmount.toString()))
            .send({ from: account });
          console.log("txDAI =>>>>>>>>>>", txDAI);
          break;
      }
      // Update balances after successful transaction
      if (account) {
        const fetchedBalances = await getBalances(account);
        setBalances(fetchedBalances);
      }
      fetchFundsRaised();
      fetchTokensAvailable();
    } catch (error) {
      console.error("Error during transaction:", error);
      setError("Transaction failed. Please try again.");
    }
  };

  const handleSetWalletAddress = async () => {
    setIsSettingWallet(true);
    setWalletSetSuccess(false);
    try {
      const tx = await presaleContract.methods
        .setWallet(walletAddress)
        .send({ from: account });

      // Listen for the WalletUpdated event
      const events = await tx.events;
      if (events.WalletUpdated) {
        console.log(
          "Wallet address updated successfully:",
          events.WalletUpdated.returnValues.wallet_
        );
        setWalletSetSuccess(true);
      }
    } catch (error) {
      console.error("Error during set wallet address:", error);
      // Handle the error (e.g., show an error message to the user)
    } finally {
      setIsSettingWallet(false);
    }
  };

  const handleTransferOwnership = async () => {
    setIsSettingOwnerAddress(true);
    setOwnerAddressSetSuccess(false);
    try {
      const tx = await presaleContract.methods
        .transferOwnership(ownerAddress)
        .send({ from: account });

      // Listen for the OwnershipTransferred event
      const events = await tx.events;
      if (events.OwnershipTransferred) {
        console.log(
          "Ownership transferred successfully:",
          events.OwnershipTransferred.returnValues.newOwner
        );
        setOwnerAddressSetSuccess(true);
      }
    } catch (error) {
      console.error("Error during set owner address:", error);
      // Handle the error (e.g., show an error message to the user)
    } finally {
      setOwnerAddressSetSuccess(false);
    }
  };

  return (
    <div className="text-[#dbdbcf] flex items-center justify-center sm:px-8 md:px-12 lg:px-0 max-w-lg min-w-lg">
      <div className="border border-[#824B3D] rounded-lg shadow-lg w-full">
        <div className="w-full bg-[#131511] rounded-lg text-center py-6">
          <h1 className="text-2xl font-revoluti font-bold mb-6">PRE SALE 1</h1>
          <PreSaleProgress hardcap={hardcap} fundsRaised={fundsRaised} />          
          <TimeLeft stageIndex={stageIndex} timeLeft={timeLeft} />
          <PhaseDisplay phaseIndex={phaseIndex} tokensAvailable={tokensAvailable} />
          
          {(OWNER_ADDRESS && account === OWNER_ADDRESS) ? (
            <>
              <h1 className="text-lg font-revoluti font-bold mb-6">
                ----- WELCOME OWNER -----
              </h1>

              <div className="px-4 grid grid-cols-2 gap-4 mb-4">
                <button
                  disabled
                  onClick={() => alert("Withdraw Button Clicked")}
                  className="p-1 sm:p-2 lg:p-2 justify-center rounded-md flex items-center text-sm font-bold bg-[#353535] border-2 border-gray-600 hover:border-orange-900"
                >
                  <Image
                    src={"/assets/icons/withdraw.svg"}
                    alt="icon"
                    width={24}
                    height={24}
                    className="mr-1.5"
                  />
                  WITHDRAW
                </button>
                <button
                  disabled
                  onClick={() => alert("Refund Button Clicked")}
                  className="p-1 sm:p-2 lg:p-2 justify-center rounded-md flex items-center text-sm font-bold bg-[#353535] border-2 border-gray-600 hover:border-orange-900"
                >
                  <Image
                    src={"/assets/icons/refund.svg"}
                    alt="icon"
                    width={24}
                    height={24}
                    className="mr-1.5"
                  />
                  REFUND
                </button>
              </div>

              <div className="w-full px-4 mb-4 text-left">
                <label className="text-sm mb-3 sm:font-bold">
                  Set Wallet Address:
                </label>
                <div className="w-full flex flex-row justify-center gap-2">
                  <input
                    type="text"
                    maxLength={42}
                    value={walletAddress}
                    placeholder="ex: 0x90...d000"
                    className="bg-[#353535] rounded p-2 text-[#dbdbcf] w-full"
                    onChange={(e) => setWalletAddress(e.target.value)}
                  />
                  <button
                    className="p-1 sm:p-2 lg:p-2 rounded-md flex items-center text-sm font-bold bg-[#353535] border-2 border-gray-600 hover:border-orange-900 disabled:cursor-not-allowed"
                    onClick={handleSetWalletAddress}
                    disabled={isSettingWallet || !isAddress(walletAddress)}
                  >
                    <Image
                      src={
                        walletSetSuccess
                          ? "/assets/icons/setting-verify.svg"
                          : "/assets/icons/setting.svg"
                      }
                      alt="icon"
                      width={24}
                      height={24}
                    />
                  </button>
                </div>
              </div>

              <div className="w-full px-4 flex flex-row items-center gap-2 mb-4 text-left">
                <label className="flex-1 text-sm sm:font-bold">
                  Set Claim Time:
                </label>
                <input
                  disabled
                  type="datetime-local"
                  defaultValue={new Date().toISOString().slice(0, 16)}
                  className="bg-[#353535] rounded p-2 text-[#dbdbcf]"
                />
              </div>

              <div className="w-full px-4 mb-4 text-left">
                <label className="text-sm mb-3 sm:font-bold">
                  Transfer OnwerShip:
                </label>
                <div className="w-full flex flex-row justify-center gap-2">
                  <input
                    type="text"
                    maxLength={42}
                    value={ownerAddress}
                    placeholder="ex: 0x90...d000"
                    className="bg-[#353535] rounded p-2 text-[#dbdbcf] w-full"
                    onChange={(e) => setOwnerAddress(e.target.value)}
                  />
                  <button
                    className="p-1 sm:p-2 lg:p-2 rounded-md flex items-center text-sm font-bold bg-[#353535] border-2 border-gray-600 hover:border-orange-900 disabled:cursor-not-allowed"
                    onClick={handleTransferOwnership}
                    disabled={isSettingOwnerAddress || !isAddress(ownerAddress)}
                  >
                    <Image
                      src={
                        ownerAddressSetSuccess
                          ? "/assets/icons/setting-verify.svg"
                          : "/assets/icons/setting.svg"
                      }
                      alt="icon"
                      width={24}
                      height={24}
                    />
                  </button>
                </div>
              </div>

              <ConnectButton.Custom>
                {({ account, openAccountModal }) => {
                  return (
                    <>
                      <button
                        className="w-[70%] px-4 bg-[#824B3D] p-3 rounded font-bold mb-4 hover:bg-orange-800 truncate"
                        onClick={openAccountModal}
                      >
                        {account ? account.displayName : "CONNECT WALLET"}
                      </button>
                    </>
                  );
                }}
              </ConnectButton.Custom>
            </>
          ) : (
            <>
              <div className="px-4 grid grid-cols-2 gap-x-8 gap-y-4 mb-10">
                <button
                  className={`bg-[#353535] border-2 ${
                    paymentType === "ETH"
                      ? "border-orange-900"
                      : "border-gray-600"
                  } p-1 sm:p-2 lg:p-2 justify-center rounded-md flex items-center text-sm font-bold`}
                  onClick={() => setPaymentType("ETH")}
                >
                  <Image
                    src={"/assets/icons/ethereum.svg"}
                    alt="icon"
                    width={24}
                    height={24}
                    className="mr-1.5"
                  />
                  Pay with ETH
                </button>
                <button
                  className={`bg-[#353535] border-2 ${
                    paymentType === "USDT"
                      ? "border-orange-900"
                      : "border-gray-600"
                  } p-1 sm:p-2 lg:p-2 justify-center rounded-md flex items-center text-sm font-bold`}
                  onClick={() => setPaymentType("USDT")}
                >
                  <Image
                    src={"/assets/icons/usdt.svg"}
                    alt="icon"
                    width={24}
                    height={24}
                    className="mr-1.5"
                  />
                  Pay with USDT
                </button>
                <button
                  className={`bg-[#353535] border-2 ${
                    paymentType === "DAI"
                      ? "border-orange-900"
                      : "border-gray-600"
                  }  p-1 sm:p-2 lg:p-2 justify-center rounded-md flex items-center text-sm font-bold`}
                  onClick={() => setPaymentType("DAI")}
                >
                  <Image
                    src={"/assets/icons/dai.svg"}
                    alt="icon"
                    width={24}
                    height={24}
                    className="mr-1.5"
                  />
                  Pay with DAI
                </button>
                <button
                  className={`bg-[#353535] border-2 ${
                    paymentType === "USDC"
                      ? "border-orange-900"
                      : "border-gray-600"
                  }  p-1 sm:p-2 lg:p-2 justify-center rounded-md flex items-center text-sm font-bold`}
                  onClick={() => setPaymentType("USDC")}
                >
                  <Image
                    src={"/assets/icons/usd-coin.svg"}
                    alt="icon"
                    width={24}
                    height={24}
                    className="mr-1.5"
                  />
                  Pay with USDC
                </button>
              </div>

              <div className="px-4 grid grid-cols-2 gap-4 mb-6">
                <div className="text-left">
                  <label className="flex flex-row justify-between text-sm mb-1 sm:font-bold">
                    <span>AMOUNT({paymentType})</span>
                    <span
                      className={classNames(
                        "text-right cursor-pointer hover:underline",
                        account === undefined ? "hidden" : ""
                      )}
                      onClick={handleMin}
                    >
                      MIN
                    </span>
                  </label>
                  <input
                    type={"number"}
                    value={payAmount.toString()}
                    min={0}
                    // max={max}
                    step={paymentType === "ETH" ? 0.1 : 1}
                    onChange={handlePayAmountChange}
                    className="bg-[#353535] rounded p-2 text-[#dbdbcf] w-full"
                  />
                </div>
                <div className="text-left">
                  <label className="block text-sm mb-1 sm:font-bold">
                    GET AMOUNT(FICCO)
                  </label>
                  <input
                    type="number"
                    value={tokenAmount.toString()}
                    min={0}
                    step={1000000}
                    onChange={handleTokenAmountChange}
                    className="bg-[#353535] rounded p-2 text-[#dbdbcf] w-full"
                  />
                </div>
              </div>

              <ConnectButton.Custom>
                {({ account, openAccountModal, openConnectModal }) => {
                  return (
                    <>
                      <div className="px-4 w-full flex flex-row justify-center gap-4">
                        <button
                          className="max-w-[70%] w-full bg-[#824B3D] p-3 rounded font-bold mb-4 hover:bg-orange-800 truncate"
                          onClick={
                            account ? openAccountModal : openConnectModal
                          }
                        >
                          {account ? account.displayName : "CONNECT WALLET"}
                        </button>
                        {account && (
                          <button
                            className="w-full bg-[#824B3D] p-3 rounded font-bold mb-4 hover:bg-orange-800 disabled:bg-[#333] disabled:cursor-not-allowed truncate"
                            disabled={
                              isLoading ||
                              payAmount < min ||
                              parseFloat(balances[paymentType]) == 0 ||
                              parseFloat(balances[paymentType]) < payAmount
                            }
                            onClick={handleBuy}
                          >
                            BUY
                          </button>
                        )}
                      </div>
                      {account && (
                        <>
                          <p className="text-sm font-bold">
                            Your current holdings:
                          </p>
                          {/* <p className="text-sm mb-2">{account.displayBalance}</p> */}
                          {isLoading ? (
                            <p className="text-sm mb-2">Loading...</p>
                          ) : (
                            <p className="text-sm mb-2">
                              {formatBalance(balances[paymentType]) +
                                " " +
                                paymentType}
                            </p>
                          )}
                          <p className="text-sm font-bold">Balance FICCO</p>
                          {isLoading ? (
                            <p className="text-sm mb-2">Loading...</p>
                          ) : (
                            <p className="text-sm mb-2">
                              {parseFloat(
                                parseFloat(claimablePICCOBalance).toFixed(0)
                              ).toLocaleString()}
                            </p>
                          )}
                          {error && <p className="text-red-500">{error}</p>}
                        </>
                      )}
                    </>
                  );
                }}
              </ConnectButton.Custom>
            </>
          )}
        </div>

        <div className="flex flex-col items-center justify-between bg-[#353535] border-t border-orange-900 p-2 rounded-b-lg">
          <span className="text-xs font-bold">Contract address:</span>
          <div className="flex items-center gap-2 mt-1 justify-center w-[90%]">
            <span className="text-xs">TBA</span>
            {/* <button
              className="px-2 py-0.5 text-xs rounded-md bg-[#824B3D] hover:focus:bg-orange-800"
              onClick={() =>
                copyToClipboard("0x5384545c3190474713bdc48c3371fdbccd2b8e9")
              }
            >
              COPY
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreSale;
