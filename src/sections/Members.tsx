import DesktopMembers from "@/components/Member/DesktopMembers";
import MobileMembers from "@/components/Member/MobileMembers";
import TrackImg from "@/components/trackImg";

const Members = () => {
  return (
    <div id="founders" className="flex flex-col gap-6 rounded-md">
      <div className="flex flex-row items-center gap-4 text-lg font-revoluti text-[#dbdbcf]">
        <span className="relative">
          Founders <span className="w-1.5 h-4 border" /> Advisors
          <span className="w-1.5 h-4 border" /> Ambassadors
          <TrackImg className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 -z-10  w-[240px] h-[240px]" />
        </span>
      </div>
      <div className="hidden lg:block">
        <DesktopMembers />
      </div>
      <div className="block lg:hidden">
        <MobileMembers />
      </div>
    </div>
  );
};

export default Members;
