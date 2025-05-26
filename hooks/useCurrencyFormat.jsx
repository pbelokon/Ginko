import { useMemo } from "react";

export default function useCurrencyFormat(amount) {
  const currencyFormat = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "CND",
    }).format(amount);
  };

  return useMemo(() => currencyFormat(amount), [amount]);
}
