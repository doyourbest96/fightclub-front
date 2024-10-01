import Image from "next/image";

export default function BackImage() {
  return (
    <>
      <Image
        src={"/assets/images/bg-connect.png"}
        alt="bg-connect"
        width={24}
        height={24}
      />
    </>
  )
}