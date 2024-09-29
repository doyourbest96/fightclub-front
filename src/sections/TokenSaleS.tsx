import Stage from "./Stagge";

const TokenSaleS = () => {
  return (
    <div className="flex flex-col gap-2">
      <p className="w-1/2 text-xl font-black italic">
        Exclusive FICCO Token SaleS with Guaranteed AND MYSTERY ALLOCATION
      </p>
      <div className="py-4 flex justify-center items-center">
        <Stage />
      </div>
      <p>
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
      <p className="text-orange-900">More information</p>
    </div>
  );
};

export default TokenSaleS;
