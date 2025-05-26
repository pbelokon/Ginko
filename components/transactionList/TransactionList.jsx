import styles from "./transactionList.module.css";
import groupAndSum from "@/helpers/groupAndSum";

import Separator from "../separator/Separator";
import TransactionItem from "../transaction/TransactionItem";
import TransactionSummary from "../summary/TransactionSummary";

export default async function TransactionList() {
  const response = await fetch("http://localhost:3100/transactions");
  const transactions = await response.json();
  const grouped = groupAndSum(transactions);

  return (
    <div className={styles.container}>
      {Object.entries(grouped).map(([date, { transactions, amount }]) => (
        <div key={date} className={styles.group}>
          <TransactionSummary date={date} amount={amount} />
          <Separator />
          <section className={styles.transactions}>
            {transactions.map((transaction) => (
              <div key={transaction.id}>
                <TransactionItem {...transaction} />
              </div>
            ))}
          </section>
        </div>
      ))}
    </div>
  );
}
