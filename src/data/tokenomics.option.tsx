export const tokenomicsOption = {
  plugins: {
    legend: {
      display: false,
    },
    datalabels: {
      color: "#787871",
      font: {
        size: 16,
      },
      formatter: (value: string) => (value !== null ? value + "%" : ""),
    },
  },
};
