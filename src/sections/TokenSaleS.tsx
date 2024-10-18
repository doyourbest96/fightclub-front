import Link from "next/link";
import dynamic from "next/dynamic";
import Stage from "./Stage";

const TrackImg = dynamic(() => import("@/components/trackImg"), {
  ssr: false,
});

const TokenSaleS = () => {
  return (
    <div className="flex flex-col gap-2 items-center lg:items-start w-full overflow-visible text-center lg:text-left">
      <div className="max-w-60 font-revoluti text-[#dbdbcf]">
        <span className="relative leading-loose">
          FICCO coin SaleS planning
          <TrackImg className="absolute top-1/2 translate-x-1/3 -translate-y-1/2 -z-10  w-[240px] h-[240px]" />
        </span>
      </div>
      <div className="py-6 w-full">
        <Stage />
      </div>
      <p className="stretched-font-stretch font-helvetica font-light text-base scale-x-90 scale-y-105 lg:-mx-10">
        IRONWILL&apos;s native coin, FICCO, is set to launch with a total
        maximum supply of 100 billion coins. In the first public sale
        10,000,000,000 FICCO coins will be sold, of which 3,000,000,000 with a
        starting price of $0.00008 per FICCO. During the first public sale, the
        price of FICCO coins will gradually increase to eventually $0.00014 in
        fourth stage. The total duration of the public sale is set at 30 days or
        until all FICCO coins sell out. FICCO coins bought during the first
        public sale can be claimed after TGE which will take place after
        conducting the second public sale. Unsold coins will be distributed
        pro-rata to all participants of the public sale. Minimum purchase amount
        per wallet: $100.
      </p>
      <Link
        href={"/assets/documents/whitepaper.pdf"}
        className="font-helvetica font-light text-base text-[#824b3d] hover:text-[#dbdbcf]"
        target="_blank"
        rel="noopener noreferrer"
        download
      >
        Read more, download whitepaper
      </Link>
    </div>
  );
};

export default TokenSaleS;
