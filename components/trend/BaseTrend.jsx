import { useMemo } from "react";
import { ArrowDown, ArrowUp } from "lucide-react";
import useCurrencyFormat from "@/hooks/useCurrencyFormat";
import styles from "./baseTrend.module.css";

export default function BaseTrend({ type, amount, prevAmount }) {
  const calcChange = (amount, prevAmount) => {
    if (!prevAmount || !amount) return 0;
    return ((amount - prevAmount) / prevAmount) * 100;
  };

  const percentageChange = useMemo(
    () => calcChange(amount, prevAmount).toFixed(0),
    [amount, prevAmount]
  );

  const formattedAmount = useCurrencyFormat(amount);

  const typeColorClass = {
    Income: styles.income,
    Expense: styles.expense,
    Investment: styles.investment,
    Saving: styles.saving,
  }[type];

  return (
    <div className={styles.container}>
      <div className={`${styles.type} ${typeColorClass}`}>{type}</div>
      <div className={styles.amount}>{formattedAmount}</div>
      <div className={styles.trend}>
        {percentageChange <= 0 ? (
          <ArrowDown className={styles.downIcon} />
        ) : (
          <ArrowUp className={styles.upIcon} />
        )}
        <span>{percentageChange} % vs last period</span>
      </div>
    </div>
  );
}
