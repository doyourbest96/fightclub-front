import Image from "next/image";

const TrackImg = ({ ...others }) => {
  return (
    <>
      <div {...others}>
        <Image
          className="w-full h-full"
          src={"/assets/images/track.png"}
          width={180}
          height={180}
          alt="track image"
        />
      </div>
    </>
  );
};

export default TrackImg;
