"use client";

import React, { useState, useEffect, useCallback } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";
import { ethers, isAddress } from "ethers";
import { ToastContainer, toast } from "react-toastify";

import useWeb3 from "@/hooks/useWeb3";
import { classNames } from "@/utils/classNames";
import { getBalances, TOKENS } from "../utils/ethUtils";
import { toBigInt } from "@/utils/toBigInt";
import PreSaleProgress from "@/components/PreSale/PreSaleProgress";
import TimeLeft from "@/components/PreSale/TimeLeft";
import PhaseDisplay from "@/components/PreSale/PhaseDisplay";
import PaymentTypeSelector from "@/components/PreSale/PaymentTypeSelector";
import PreSaleFooter from "@/components/PreSale/PreSaleFooter";

enum PreSaleStage {
  Ready,
  Running,
  Ended,
  Claimable,
}

const PreSale: React.FC = () => {
  const { presaleContract, account } = useWeb3();
  const [balances, setBalances] = useState<{ [key: string]: string }>({});
  const [claimablePICCOBalance, setClaimableFICCOBalance] =
    useState<string>("0");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState<number>(0);

  const [walletAddress, setWalletAddress] = useState<string>("");
  const [isSettingWallet, setIsSettingWallet] = useState(false);
  const [walletSetSuccess, setWalletSetSuccess] = useState(false);
  const [owner, setOwner] = useState<string>("");
  const [ownerAddress, setOwnerAddress] = useState<string>("");
  const [isSettingOwnerAddress, setIsSettingOwnerAddress] = useState(false);
  const [ownerAddressSetSuccess, setOwnerAddressSetSuccess] = useState(false);
  const [claimTime, setClaimTime] = useState<number>(Date.now());
  const [isSettingClaimTime, setIsSettingClaimTime] = useState(false);
  const [claimTimeSetSuccess, setClaimTimeSetSuccess] = useState(false);

  const [preSaleStartTime, setPreSaleStartTime] = useState<number>(-1);
  const [preSaleRemainingTime, setPreSaleRemainingTime] = useState<number>(-1);
  const [preSaleClaimTime, setPreSaleClaimTime] = useState<number>(-1);
  const [preSaleStage, setPreSaleStage] = useState<PreSaleStage>(
    PreSaleStage.Ready
  );

  const [fundsRaised, setFundsRaised] = useState<number>(0);
  const [tokensAvailable, setTokensAvailable] = useState<number>(1e10);
  const [phaseIndex, setPhaseIndex] = useState<number>(0);
  const [hardcap] = useState<number>(1020000);
  const [payAmount, setPayAmount] = useState<number>(0);
  const [tokenAmount, setTokenAmount] = useState<number>(0);
  const [min, setMin] = useState<number>(0.05);
  const [ETHFor100USDT, setETHFor100USDT] = useState<number>(0.05);
  const [paymentType, setPaymentType] = useState<string>("ETH");

  const fetchBalances = useCallback(async () => {
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
  }, [account]);

  useEffect(() => {
    async function fetchPresaleContract() {
      if (presaleContract && presaleContract.methods && presaleContract._address) {
        const fetchedOwner = await presaleContract.methods.getOwner().call();
        const fetchedPreSaleStartTime = await presaleContract.methods
          .getPresaleStartTime()
          .call();
        const fetchedPreSaleRemainingTime = await presaleContract.methods
          .getRemainingTime()
          .call();
        const fetchedPreSaleClaimTime = await presaleContract.methods
          .claimTime()
          .call();
        const tempTokenCount = await presaleContract.methods
          .estimatedTokenAmountAvailableWithCoin(
            ethers.parseUnits("100", 6).toString(),
            TOKENS["USDT" as keyof typeof TOKENS]
          )
          .call();
        const tokenAmountFor100USDT = ethers.formatUnits(tempTokenCount, 18);
        const tempETHFor100USDT = await presaleContract.methods
          .estimatedEthAmountForTokenAmount(
            ethers.parseUnits(tokenAmountFor100USDT, 18)
          )
          .call();
        const expectedPayAmount = ethers.formatUnits(tempETHFor100USDT, 18);
        const tempFundsRaised = await presaleContract.methods
          .getFundsRaised()
          .call();
        const tempTokensAvailable = await presaleContract.methods
          .tokensAvailable()
          .call();
        const formattedTokensAvailable = parseFloat(
          ethers.formatUnits(tempTokensAvailable, 18)
        ).toFixed(0);
        if (account) {
          const balance = await presaleContract.methods
            .getTokenAmountForInvestor(account)
            .call();
          const formattedBalance = ethers.formatUnits(balance, 18);
          setClaimableFICCOBalance(formattedBalance);
        }

        setOwner(fetchedOwner);
        setPreSaleStartTime(parseFloat(fetchedPreSaleStartTime));
        setPreSaleRemainingTime(parseFloat(fetchedPreSaleRemainingTime));
        setPreSaleClaimTime(parseFloat(fetchedPreSaleClaimTime));
        setETHFor100USDT(
          parseFloat((parseFloat(expectedPayAmount) + 5e-7).toFixed(6))
        );
        setFundsRaised(parseFloat(tempFundsRaised) / 1e6);
        setTokensAvailable(parseFloat(formattedTokensAvailable));
        fetchBalances();
      }
    }
    fetchPresaleContract();
  }, [account, presaleContract, fetchBalances]);

  useEffect(() => {
    if (tokensAvailable > 7e9) {
      setPhaseIndex(0);
    } else if (tokensAvailable > 3e9) {
      setPhaseIndex(1);
    } else if (tokensAvailable > 1e9) {
      setPhaseIndex(2);
    } else if (tokensAvailable > 0) {
      setPhaseIndex(3);
    } else {
      setPreSaleStage(PreSaleStage.Ended);
    }
  }, [tokensAvailable]);

  useEffect(() => {
    if (
      preSaleStartTime === -1 ||
      preSaleRemainingTime === -1 ||
      preSaleClaimTime === -1
    )
      return;

    switch (preSaleStage) {
      case PreSaleStage.Ready:
        if (preSaleStartTime < new Date().getTime() / 1000)
          setPreSaleStage(PreSaleStage.Running);
        setTimeLeft(preSaleStartTime - new Date().getTime() / 1000);
        break;
      case PreSaleStage.Running:
        if (preSaleRemainingTime === 0) setPreSaleStage(PreSaleStage.Ended);
        setTimeLeft(preSaleRemainingTime);
        break;
      case PreSaleStage.Ended:
        if (preSaleClaimTime < new Date().getTime() / 1000)
          setPreSaleStage(PreSaleStage.Claimable);
        setTimeLeft(preSaleClaimTime - new Date().getTime() / 1000);
        break;
      default:
        break;
    }
    // console.log("preSaleStage:", preSaleStage);
    // console.log("preSaleStartTime:", preSaleStartTime);
  }, [preSaleStage, preSaleStartTime, preSaleRemainingTime, preSaleClaimTime]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((preValue) => {
        if (preValue < 1 && preSaleStage !== PreSaleStage.Claimable) {
          return 0;
        }
        return preValue - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [preSaleStage]);

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
    if (preSaleStage !== PreSaleStage.Running) return;

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
    if (preSaleStage !== PreSaleStage.Running) return;

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

      const balance = await presaleContract.methods
        .getTokenAmountForInvestor(account)
        .call();
      const formattedBalance = ethers.formatUnits(balance, 18);
      const tempFundsRaised = await presaleContract.methods
        .getFundsRaised()
        .call();
      const tempTokensAvailable = await presaleContract.methods
        .tokensAvailable()
        .call();
      const formattedTokensAvailable = parseFloat(
        ethers.formatUnits(tempTokensAvailable, 18)
      ).toFixed(0);

      fetchBalances();
      setFundsRaised(parseFloat(tempFundsRaised) / 1e6);
      setTokensAvailable(parseFloat(formattedTokensAvailable));
      setClaimableFICCOBalance(formattedBalance);
    } catch (error) {
      console.error("Error during transaction:", error);
      setError("Transaction failed. Please try again.");
    }
  };

  const handleClaim = async () => {
    try {
      const tx = await presaleContract.methods
        .claim(account)
        .send({ from: account });
      console.log("tx =>>>>>>>>>>", tx);

      const balance = await presaleContract.methods
        .getTokenAmountForInvestor(account)
        .call();
      const formattedBalance = ethers.formatUnits(balance, 18);
      setClaimableFICCOBalance(formattedBalance);
    } catch (error) {
      console.error("Error during transaction:", error);
      setError("Transaction failed. Please try again.");
    }
  };

  const handleSetWalletAddress = async () => {
    if (!isAddress(walletAddress)) {
      toast.error("Invalid wallet address");
      return;
    }
    setIsSettingWallet(true);
    setWalletSetSuccess(false);
    try {
      const tx = await presaleContract.methods
        .setWallet(walletAddress)
        .send({ from: account });

      const events = tx.events;
      if (events && events.WalletUpdated) {
        toast.success(
          "Wallet address updated successfully:",
          events.WalletUpdated.returnValues.newWallet
        );
        setWalletSetSuccess(true);
      }
    } catch (error) {
      console.error("Error during set wallet address:", error);
    } finally {
      setIsSettingWallet(false);
    }
  };

  const handleTransferOwnership = async () => {
    if (!isAddress(ownerAddress)) {
      toast.error("This address is not valid");
      return;
    }
    setIsSettingOwnerAddress(true);
    setOwnerAddressSetSuccess(false);
    try {
      const tx = await presaleContract.methods
        .transferOwnership(ownerAddress)
        .send({ from: account });

      const events = tx.events;
      if (events.OwnershipTransferred) {
        toast.success(
          "Ownership transferred successfully:",
          events.OwnershipTransferred.returnValues.newOwner
        );
        setOwner(ownerAddress);
        setOwnerAddressSetSuccess(true);
      }
    } catch (error) {
      console.error("Error during set owner address:", error);
    } finally {
      setOwnerAddressSetSuccess(false);
    }
  };

  const handleSetClaimTime = async () => {
    setIsSettingClaimTime(true);
    setClaimTimeSetSuccess(false);
    try {
      const tx = await presaleContract.methods
        .setClaimTime(Math.floor(claimTime / 1e3))
        .send({ from: account });
      const events = tx.events;
      if (events.ClaimTimeUpdated) {
        toast.success(
          "Claim Time set successfully:",
          events.ClaimTimeUpdated.returnValues.newClaimTime
        );
        setClaimTimeSetSuccess(true);
      }
    } catch (error) {
      console.error("Error during set claim time:", error);
    } finally {
      setClaimTimeSetSuccess(false);
    }
  };

  const handleWithdraw = async () => {
    try {
      await presaleContract.methods.withdraw().send({ from: account });
    } catch (error) {
      console.error("Error during withdraw:", error);
    }
  };

  const handleRefund = async () => {
    try {
      await presaleContract.methods.refund().send({ from: account });
    } catch (error) {
      console.error("Error during refund:", error);
    }
  };

  const handlePaymentTypeChange = (type: string) => {
    if (preSaleStage !== PreSaleStage.Running) {
      toast.error("Invalid time for buying the token.");
      return;
    }
    setPaymentType(type);
  };

  return (
    <div className="text-[#dbdbcf] flex items-center justify-center sm:px-8 md:px-12 lg:px-0 max-w-lg min-w-lg">
      <div className="border border-[#824B3D] rounded-lg shadow-lg w-full">
        <div className="w-full bg-[#131511] rounded-lg text-center py-6">
          <h1 className="text-2xl font-revoluti font-bold mb-6">PRE SALE 1</h1>
          <PreSaleProgress hardcap={hardcap} fundsRaised={fundsRaised} />
          <TimeLeft preSaleStage={preSaleStage} timeLeft={timeLeft} />
          <PhaseDisplay
            phaseIndex={phaseIndex}
            tokensAvailable={tokensAvailable}
          />

          {account === owner ? (
            <>
              <h1 className="text-lg font-revoluti font-bold mb-6">
                ----- WELCOME OWNER -----
              </h1>

              <div className="px-4 grid grid-cols-2 gap-4 mb-4">
                <button
                  onClick={handleWithdraw}
                  className="p-2 justify-center rounded-md flex items-center text-sm font-bold bg-[#353535] border-2 border-gray-600 hover:border-orange-900 disabled:cursor-not-allowed"
                  disabled={preSaleStage < PreSaleStage.Ended}
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
                  onClick={handleRefund}
                  className="p-2 justify-center rounded-md flex items-center text-sm font-bold bg-[#353535] border-2 border-gray-600 hover:border-orange-900 disabled:cursor-not-allowed"
                  disabled={preSaleStage < PreSaleStage.Ended}
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
                    className="p-2 rounded-md flex items-center text-sm font-bold bg-[#353535] border-2 border-gray-600 hover:border-orange-900 disabled:cursor-not-allowed"
                    onClick={handleSetWalletAddress}
                    disabled={
                      isSettingWallet || preSaleStage < PreSaleStage.Ended
                    }
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

              <div className="w-full px-4 mb-4 text-left">
                <label className="flex-1 text-sm sm:font-bold">
                  Set Claim Time(UTC):
                </label>
                <div className="w-full flex flex-row justify-center gap-2">
                  <input
                    type="datetime-local"
                    min={new Date().toISOString().slice(0, -8)}
                    value={new Date(claimTime).toISOString().slice(0, 16)}
                    className="bg-[#353535] rounded p-2 text-[#dbdbcf] w-full"
                    onChange={(e) => {
                      if (e.target.value) {
                        setClaimTime(new Date(e.target.value).getTime());
                      }
                    }}
                  />
                  <button
                    className="p-2 rounded-md flex items-center text-sm font-bold bg-[#353535] border-2 border-gray-600 hover:border-orange-900 disabled:cursor-not-allowed"
                    onClick={handleSetClaimTime}
                    disabled={isSettingClaimTime}
                  >
                    <Image
                      src={
                        claimTimeSetSuccess
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
                    className="p-2 rounded-md flex items-center text-sm font-bold bg-[#353535] border-2 border-gray-600 hover:border-orange-900 disabled:cursor-not-allowed"
                    onClick={handleTransferOwnership}
                    disabled={isSettingOwnerAddress}
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
              <PaymentTypeSelector
                paymentType={paymentType}
                handlePaymentTypeChange={handlePaymentTypeChange}
              />

              <div className="px-4 grid grid-cols-2 gap-4 mb-6">
                <div className="text-left">
                  <label className="flex flex-row justify-between text-sm mb-1 sm:font-bold">
                    <span>AMOUNT({paymentType})</span>
                    {preSaleStage === PreSaleStage.Running && (
                      <span
                        className={classNames(
                          "text-right cursor-pointer hover:underline",
                          account === undefined ? "hidden" : ""
                        )}
                        onClick={handleMin}
                      >
                        MIN
                      </span>
                    )}
                  </label>
                  <input
                    type={"number"}
                    value={payAmount.toString()}
                    min={0}
                    // max={max}
                    step={paymentType === "ETH" ? 0.1 : 1}
                    onChange={handlePayAmountChange}
                    className="bg-[#353535] rounded p-2 text-[#dbdbcf] w-full"
                    disabled={preSaleStage !== PreSaleStage.Running}
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
                    disabled={preSaleStage !== PreSaleStage.Running}
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
                              preSaleStage === PreSaleStage.Ready ||
                              preSaleStage === PreSaleStage.Ended ||
                              (preSaleStage === PreSaleStage.Running &&
                                (payAmount < min ||
                                  payAmount >
                                    parseFloat(balances[paymentType]))) ||
                              (preSaleStage === PreSaleStage.Claimable &&
                                parseFloat(claimablePICCOBalance) < 1)
                            }
                            onClick={
                              preSaleStage !== PreSaleStage.Claimable
                                ? handleBuy
                                : handleClaim
                            }
                          >
                            {preSaleStage < PreSaleStage.Ended
                              ? "BUY"
                              : "CLAIM"}
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
                          <p className="text-sm font-bold">
                            Claimable FICCO Balance
                          </p>
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

        <PreSaleFooter />
        <ToastContainer />
      </div>
    </div>
  );
};

export default PreSale;
