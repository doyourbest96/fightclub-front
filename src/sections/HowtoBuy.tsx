import DesktopPurchaseGuide from "@/components/HowToBuy/DesktopPurchaseGuide";
import MobilePurchaseGuide from "@/components/HowToBuy/MobilePurchaseGuide";

const HowtoBuy = () => {
  return (
    <div>
      <div className="hidden lg:block">
        <DesktopPurchaseGuide />
      </div>
      <div className="block lg:hidden">
        <MobilePurchaseGuide />
      </div>
    </div>
  );
};

export default HowtoBuy;
