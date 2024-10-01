import DesktopMembers from "@/components/Member/DesktopMembers";
import MobileMembers from "@/components/Member/MobileMembers";

const Members = () => {
  return (
    <div id="founders" className="flex flex-col gap-6 rounded-md">
      <p className="flex flex-row items-center gap-4 text-lg font-revoluti text-[#dbdbcf]">
        Founders <span className="w-1.5 h-4 border" /> Advisors
        <span className="w-1.5 h-4 border" /> Ambassadors
      </p>
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
