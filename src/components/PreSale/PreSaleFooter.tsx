import { toast } from "react-toastify";
import { FiccoTokenContractAddress } from "@/data/constants";

const  copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text);
  toast.success("Contract address copied to clipboard");
};

const PreSaleFooter  = () => {
  return (
    <div className="flex flex-col items-center justify-between bg-[#353535] border-t border-orange-900 p-2 rounded-b-lg">
      <span className="text-xs font-bold">Contract address:</span>
      <div className="flex items-center gap-2 mt-1 justify-center w-[90%]">
        <span className="text-xs">{FiccoTokenContractAddress.sepolia}</span>
        <button
              className="px-2 py-0.5 text-xs rounded-md bg-[#824B3D] hover:bg-orange-800"
              onClick={() =>
                copyToClipboard("0x5384545c3190474713bdc48c3371fdbccd2b8e9")
              }
            >
              COPY
            </button>
      </div>
    </div>
  );
}

export default PreSaleFooter;