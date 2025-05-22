import PageHeader from "@/components/PageHeader";
import TransactionItem from "@/components/TransactionItem";
import TransactionSummary from "@/components/TransactionSummary";
import Trend from "@/components/Trend";

export default function page() {
  return (
    <main className="space-y-8">
      <h1 className="text-4xl mt-8">Playground</h1>

      <div>
        <h2 className="mb-4 text-lg font-mono">Page Header</h2>
        <hr className="mb-4 border-gray-200 dark:border-gray-800" />

        <div>
          <PageHeader />
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-lg font-mono">Trend</h2>
        <hr className="mb-4 border-gray-200 dark:border-gray-800" />

        <div className="flex space-x-8">
          <Trend type="Income" amount={30000000} prevAmount={200000} />
          <Trend type="Investment" amount={100000} prevAmount={100} />
          <Trend type="Expense" amount={1000} prevAmount={2000} />
          <Trend type="Saving" amount={7000} prevAmount={8000} />
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-lg font-mono">Transaction Summary</h2>
        <hr className="mb-4 border-gray-200 dark:border-gray-800" />

        <div className="space-y-4">
          <TransactionSummary date={"2025-5-21"} amount={800} />
        </div>
      </div>
    </main>
  );
}
