import { useMemo } from "react";
import Down from "@/icons/Down";
import Up from "@/icons/Up";

import { useCurrencyFormat } from "@/hooks/useCurrencyFormat";
export default function Trend({ type, amount, prevAmount }) {
  const colorClasses = {
    Income: "text-green-700 dark:text-green-300",
    Expense: "text-red-700 dark:text-red-300",
    Investment: "text-indigo-700 dark:text-indigo-300",
    Saving: "text-yellow-700 dark:text-yellow-300",
  };

  const calcChange = (amount, prevAmount) => {
    if (!prevAmount || !amount) return 0;

    return ((amount - prevAmount) / prevAmount) * 100;
  };

  const percentageChange = useMemo(
    () => calcChange(amount, prevAmount).toFixed(0),
    [amount, prevAmount]
  );

  const formattedAmount = useCurrencyFormat(amount);

  return (
    <div>
      <div className={`font-semibold ${colorClasses[type]}`}>{type}</div>
      <div className="text-2xl font-semibold text-black dark:text-white mb-2">
        {formattedAmount}
      </div>
      <div className="flex space-x-1 items-center text-sm">
        {percentageChange <= 0 && (
          <Down className="w-6 h-6 text-red-700 dark:text-red-300" />
        )}
        {percentageChange > 0 && (
          <Up className="w-6 h-6 text-green-700 dark:text-green-300" />
        )}
        <div>{percentageChange} % vs last period</div>
      </div>
    </div>
  );
}
