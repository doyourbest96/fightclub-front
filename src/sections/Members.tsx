import DesktopMembers from "@/components/Member/DesktopMembers";
import MobileMembers from "@/components/Member/MobileMembers";
import TrackImg from "@/components/trackImg";

const Members = () => {
  return (
    <div id="founders" className="flex flex-col gap-6 rounded-md">
      <div className="flex flex-col items-center gap-2 text-lg font-revoluti text-[#dbdbcf] uppercase">
        <p className="relative flex items-center gap-2">
          <span>Founders</span>
          <span className="w-1.5 h-4 border" />
          <span>Advisors</span>
          <span className="hidden md:block w-1.5 h-4 border" />
          <span className="hidden md:block">Ambassadors</span>
          <TrackImg className="absolute top-1/2 right-0 md:translate-x-1/2 -translate-y-1/2 -z-10  w-[240px] h-[240px]" />
        </p>
        <span className="md:hidden">Ambassadors</span>
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
