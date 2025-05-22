import { useCurrencyFormat } from "@/hooks/useCurrencyFormat";
import React from "react";

export default function TransactionSummary({ date, amount }) {
  const formattedAmount = useCurrencyFormat(amount);
  return (
    <div className="flex text-gray-400 dark:text-gray-200 font-semibold">
      <div className="grow">{date}</div>
      <div className="min-w-[70px] text-right font-semibold">
        {formattedAmount}
      </div>
      <div className="min-w-[50px]"></div>
    </div>
  );
}
