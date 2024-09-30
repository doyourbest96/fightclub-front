import { tokenomicsTableData } from "@/data/tokenomics.table";

const TokenomicsTable = () => {
  return (
    <>
      <div className="font-helvetica font-thin rounded-md bg-[#353731] overflow-hidden w-[460px]">
        <table>
          <thead className="w-full">
            <tr className="text-left bg-[#814b3d]">
              <th className="px-2">Structure</th>
              <th className="px-2">%</th>
              <th className="px-2">Token Allocation</th>
              <th className="px-2">Vesting schedule</th>
            </tr>
          </thead>
          <tbody className="w-full">
            {tokenomicsTableData.map((row, idx) => (
              <tr key={idx}>
                <td className="px-3 py-4" style={{ color: row.color }}>
                  {row.structure}
                </td>
                <td className="px-2 py-4">{row.percent}</td>
                <td className="px-2 py-4">{row.allocation}</td>
                <td className="px-2 py-4">{row.schedule}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="px-4 py-6 text-sm">
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
