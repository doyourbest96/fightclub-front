import DesktopMembers from "@/components/Member/DesktopMembers";
import MobileMembers from "@/components/Member/MobileMembers";

const Members = () => {
  return (
    <div className="flex flex-col gap-6 rounded-md">
      <p className="text-lg font-revoluti">Founders | Advisors | Ambassadors</p>
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
