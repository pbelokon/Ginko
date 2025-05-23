import Separator from "@/components/Separator";
import TransactionItem from "@/components/TransactionItem";
import TransactionSummary from "@/components/TransactionSummary";
import React from "react";

const groupAndSum = (transactions) => {
  const grouped = {};

  for (const transaction of transactions) {
    const date = transaction.created_at.split("T")[0];
    if (!grouped[date]) grouped[date] = { transactions: [], amount: 0 };

    grouped[date].transactions.push(transaction);
    const amount =
      transaction.type === "Expense" ? -transaction.amount : transaction.amount;

    grouped[date].amount += amount;
  }

  return grouped;
};

export default async function TransactionList() {
  const response = await fetch("http://localhost:3100/transactions");

  const transactions = await response.json();
  const grouped = groupAndSum(transactions);
  // TODO: Add display toggle
  return (
    <div className="space-y-8">
      {Object.entries(grouped).map(([date, { transactions, amount }]) => (
        <div key={date}>
          <TransactionSummary date={date} amount={amount} />
          <Separator />
          <section className="space-y-4">
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
