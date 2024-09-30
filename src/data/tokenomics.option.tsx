export const tokenomicsOption = {
  plugins: {
    legend: {
      display: false,
    },
    datalabels: {
      color: "#85827A",
      font: {
        size: 18,
        weight: 700,
      },
      formatter: (value: string) => (value !== null ? value + "%" : ""),
    },
  },
};
