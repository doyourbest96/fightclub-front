import React from "react";

interface PhaseInfo {
  price: string;
  totalTokens: number;
  phaseNumber: number;
}

interface PhaseDisplayProps {
  phaseIndex: number;
  tokensAvailable: number;
}

const phases: PhaseInfo[] = [
  { price: "0.00008", totalTokens: 7e9, phaseNumber: 1 },
  { price: "0.0001", totalTokens: 4e9, phaseNumber: 2 },
  { price: "0.00012", totalTokens: 2e9, phaseNumber: 3 },
  { price: "0.00014", totalTokens: 1e9, phaseNumber: 4 },
];

const PhaseDisplay: React.FC<PhaseDisplayProps> = ({
  phaseIndex,
  tokensAvailable,
}) => {
  return (
    <div className="mb-8">
      {phases.map((phase, index) => (
        <p
          key={index}
          className={
            phaseIndex === index ? "font-bold text-[#824b3d]" : "text-[#dbdbcf]"
          }
        >
          {phaseIndex === index
            ? `Current price $${phase.price} / ${(
                tokensAvailable - phase.totalTokens
              ).toLocaleString()} left`
            : phaseIndex < index
            ? `Phase ${phase.phaseNumber}: $${
                phase.price
              } / ${phase.totalTokens.toLocaleString()}`
            : `Phase ${phase.phaseNumber}: $${phase.price} / 0`}
        </p>
      ))}
    </div>
  );
};

export default PhaseDisplay;
