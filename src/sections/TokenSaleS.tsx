import TrackImg from "@/components/trackImg";
import Stage from "./Stage";

const TokenSaleS = () => {
  return (
    <div className="flex flex-col gap-2 items-center lg:items-start sm:px-8 md:px-12 lg:px-4 w-full overflow-visible">
      <p className="max-w-md text-md font-revoluti text-center lg:text-left text-[#dbdbcf]">
        <span className="relative">
          Exclusive FICCO Token SaleS with Guaranteed AND MYSTERY ALLOCATION
          <TrackImg className="absolute top-0  overflow-auto translate-x-80 -translate-y-24 -z-10  w-[240px] h-[240px]" />
        </span>
      </p>
      <div className="py-4 w-full">
        <Stage />
      </div>
      <p className="font-helvetica font-thin text-sm scale-x-90 scale-y-105 -mx-3">
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
      <p className="font-helvetica font-thin text-md text-[#824b3d] px-5">
        More information
      </p>
    </div>
  );
};

export default TokenSaleS;
