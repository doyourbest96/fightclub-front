import TrackImg from "@/components/trackImg";

const FuelRevolution = () => {
  return (
    <div className="flex flex-col gap-6 font-helvetica sm:px-8 md:px-12 lg:px-4 w-full">
      <p className="text-lg font-revoluti text-[#dbdbcf]">
        <span className="relative">
          FUEL THE REVOLUTION
          <TrackImg className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 -z-10  w-[240px] h-[240px]" />
        </span>
      </p>
      <p className="font-thin text-lg text-[#dbdbcf]">
        <span className="font-bold text-[#dbdbcf]">
          Ownership and Empowerment:
        </span>{" "}
        Purchasing FICCO coins grants you a stake in the Fight Club ecosystem.
        You become an integral part of a movement that empowers martial artists
        by providing them direct control over their careers and earning
        potential.
      </p>
      <p className="font-thin text-lg text-[#dbdbcf]">
        <span className="font-bold text-[#dbdbcf]">Fueling the Ecosystem:</span>{" "}
        FICCO coins power every transaction within the platform. By using FICCO,
        you directly contribute to the growth and sustainability of the Fight
        Club community, fostering a vibrant space where talent thrives and
        opportunities flourish.
      </p>
      <div className="font-thin">
        <p className="text-lg text-[#dbdbcf]">
          <span className="font-bold text-[#dbdbcf]">Access and Rewards:</span>{" "}
          {`Owning FICCO unlocks
              exclusive benefits within the ecosystem. This includes early
              access to events, voting rights on platform decisions,
              participation in exclusive experiences and potential rewards based
              on the platform's success.`}
        </p>
        <p className="text-[#824b3d]">Learn more about $FICCO</p>
      </div>
    </div>
  );
};

export default FuelRevolution;
