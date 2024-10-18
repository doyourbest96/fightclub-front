import dynamic from "next/dynamic";
import Link from "next/link";

const TrackImg = dynamic(() => import("@/components/trackImg"), {
  ssr: false,
});

const FuelRevolution = () => {
  return (
    <div className="flex flex-col gap-6 font-helvetica w-full pr-8">
      <div className="text-base font-revoluti text-[#dbdbcf]">
        <span className="relative">
          FUEL THE REVOLUTION
          <TrackImg className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 -z-10  w-[240px] h-[240px]" />
        </span>
      </div>
      <p className="font-roboto-thin text-base text-[#dbdbcf]">
        <span className="font-lg font-roboto-bold text-[#dbdbcf] scale-x-90 scale-y-105">
          Ownership and Empowerment:
        </span>{" "}
        Purchasing FICCO coins grants you a stake in the IRONWILL ecosystem. You
        become an integral part of a movement that empowers martial artists by
        providing them direct control over their careers and earning potential.
      </p>
      <p className="font-roboto-thin text-base text-[#dbdbcf]">
        <span className="font-lg font-roboto-bold text-[#dbdbcf] scale-x-90 scale-y-105">
          Fueling the Ecosystem:
        </span>{" "}
        FICCO coins power every transaction within the platform. By using FICCO,
        you directly contribute to the growth and sustainability of the IRONWILL
        community, fostering a vibrant space where talent thrives and
        opportunities flourish.
      </p>
      <div className="font-roboto-thin">
        <p className="text-base text-[#dbdbcf]">
          <span className="font-lg font-roboto-bold text-[#dbdbcf] scale-x-90 scale-y-105">
            Access and Rewards:
          </span>{" "}
          Owning FICCO unlocks exclusive benefits within the ecosystem. This
          includes early access to events, voting rights on platform decisions,
          participation in exclusive experiences and potential rewards based on
          the platform&apos;s success.
        </p>
        <Link
          href={"/assets/documents/whitepaper.pdf"}
          className="font-helvetica font-thin text-md text-[#824b3d] hover:text-[#dbdbcf]"
          target="_blank"
          rel="noopener noreferrer"
          download
        >
          Learn more about $FICCO
        </Link>
      </div>
    </div>
  );
};

export default FuelRevolution;
