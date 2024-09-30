import Stage from "./Stage";

const TokenSaleS = () => {
  return (
    <div className="flex flex-col gap-2 items-center lg:items-start sm:px-8 md:px-12 lg:px-4 w-full overflow-auto">
      <p className="max-w-md text-lg font-revoluti text-center lg:text-left uppercase">
        Exclusive FICCO Token SaleS with Guaranteed AND MYSTERY ALLOCATION
      </p>
      <div className="py-4 w-full">
        <Stage />
      </div>
      <p className="font-helvetica font-thin text-lg">
        {`Fight Club's native token, FICCO, is set to launch with a total
              maximum supply of 100 billion tokens. The initial price for the
              pre sale of 10 billion tokens will be set at a maximum of 0.00010
              cent per token, offering an accessible entry point for early
              adopters and investors of the platform. But there's more: FICCO
              coins that are not sold before the end date has been reached will
              be distributed pro-rata to all participants. This means you can
              get more FICCO than you originally bought, potentially bringing
              the price per FICCO coin down while increasing the quantity you
              receive. Terms apply.`}
      </p>
      <p className="font-helvetica font-thin text-lg text-[#824b3d]">
        More information
      </p>
    </div>
  );
};

export default TokenSaleS;
