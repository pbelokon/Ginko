import Link from "next/link";
import { Plus } from "lucide-react";
import Trend from "@/components/trend/Trend";
import TransactionList from "@/components/transactionList/TransactionList";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* Summary Section */}
        <section className={styles.section}>
          <h1 className={styles.title}>Summary</h1>
        </section>

        {/* Trends Grid */}
        <section className={styles.trendsGrid}>
          <Trend type="Income" />
          <Trend type="Expense" />
          <Trend type="Saving" />
          <Trend type="Investment" />
        </section>

        {/* Transactions Header */}
        <section className={styles.transactionsHeader}>
          <h2 className={styles.title}>Transactions</h2>
          <Link href="transactions/add" className={styles.addButton}>
            <Plus className={styles.addIcon} />
            <span>Add</span>
          </Link>
        </section>

        {/* Transaction List */}
        <TransactionList />
      </main>
    </div>
  );
}
