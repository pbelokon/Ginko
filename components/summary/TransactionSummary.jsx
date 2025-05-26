import useCurrencyFormat from "@/hooks/useCurrencyFormat";
import styles from "./transactionSummary.module.css";

export default function TransactionSummary({ date, amount }) {
  const formattedAmount = useCurrencyFormat(amount);

  return (
    <div className={styles.container}>
      <div className={styles.date}>{date}</div>
      <div className={styles.amount}>{formattedAmount}</div>
      <div className={styles.spacer}></div>
    </div>
  );
}
