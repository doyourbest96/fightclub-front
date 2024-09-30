import { tokenomicsTableData } from "@/data/tokenomics.table";

const TokenomicsTable = () => {
  return (
    <>
      <div className="hidden lg:block font-thin rounded-md bg-[#353731] overflow-hidden">
        <table>
          <thead>
            <tr className="text-left bg-[#814b3d]">
              <th className="px-4">Structure</th>
              <th className="px-4">%</th>
              <th className="px-4">Token Allocation</th>
              <th className="px-4">Vesting schedule</th>
            </tr>
          </thead>
          <tbody>
            {tokenomicsTableData.map((row, idx) => (
              <tr key={idx}>
                <td className="px-4" style={{ color: row.color }}>
                  {row.structure}
                </td>
                <td className="px-4">{row.percent}</td>
                <td className="px-4">{row.allocation}</td>
                <td className="px-4">{row.schedule}</td>
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
