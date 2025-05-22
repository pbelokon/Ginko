import { useMemo } from "react";

export const useCurrencyFormat = (amount) => {
  const currencyFormat = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "CND",
    }).format(amount);
  };

  return useMemo(() => currencyFormat(amount), [amount]);
};
