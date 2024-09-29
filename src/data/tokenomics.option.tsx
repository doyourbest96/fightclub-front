export const tokenomicsOption = {
  plugins: {
    legend: {
      display: false,
    },
    datalabels: {
      color: "#787871",
      font: {
        size: 20,
      },
      formatter: (value: string) => (value !== null ? value + "%" : ""),
    },
  },
};
