import { tokenomicsTableData } from "@/data/tokenomics.table";

const TokenomicsTable = () => {
  return (
    <>
      <div className="mt-10 font-helvetica font-thin text-[#dbdbcf] rounded-md bg-[#353731] overflow-hidden lg:w-[420px] lg:mr-4 xl:w-[500px]">
        <table >
          <thead className="w-full text-[#dbdbcf]">
            <tr className="text-left bg-[#814b3d]">
              <th className="px-2 py-3 lg:text-sm xl:text-base scale-x-90 scale-y-110">Structure</th>
              <th className="px-2 lg:text-sm xl:text-base scale-x-90 scale-y-110">%</th>
              <th className="lg:text-sm xl:text-base scale-x-75 scale-y-110 w-[150px] -ml-3">Token Allocation</th>
              <th className="px-2 lg:text-sm xl:text-base scale-x-90 scale-y-110">Vesting schedule</th>
            </tr>
          </thead>
          <tbody className="w-full ">
            {tokenomicsTableData.map((row, idx) => (
              <tr key={idx}>
                <td className="px-3 py-2 lg:text-sm xl:text-base scale-x-90 scale-y-110" style={{ color: row.color }}>
                  {row.structure}
                </td>
                <td className="px-2 py-2 lg:text-sm xl:text-base scale-x-90 scale-y-110">{row.percent}</td>
                <td className="px-2 py-2 lg:text-sm xl:text-base scale-x-90 scale-y-110">{row.allocation}</td>
                <td className="px-2 py-2 lg:text-sm xl:text-base scale-x-90 scale-y-110">{row.schedule}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="px-4 py-6 lg:text-sm xl:text-base scale-x-90 scale-y-110 -ml-5 text-[#dbdbcf]">
          FICCO coins are held secure in multi-signature wallets, requiring
          multiple approvals for any transaction, ensuring robust protection
          against unauthorized access and fraud. For more information please
          download the whitepaper.
        </p>
      </div>
    </>
  );
};

export default TokenomicsTable;
