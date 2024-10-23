"use client"

import Image from "next/image";

const TrackImg = ({ ...others }) => {
  return (
    <>
      <div {...others}>
        <Image
          className="w-full h-full"
          src={"/assets/images/track.png"}
          alt="track image"
          width={180}
          height={180}
          priority
        />
      </div>
    </>
  );
};

export default TrackImg;
