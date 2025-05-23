import { Suspense } from "react";
import TransactionList from "./components/TransactionList";
import TransactionFallBack from "./components/TransactionFallBack";
import Trend from "./components/Trend";
import TrendsFallBack from "./components/TrendsFallBack";
export default function Page() {
  return (
    <>
      <section className="mb-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
        <Suspense fallback={<TrendsFallBack />}>
          <Trend type="Income" />
        </Suspense>

        <Suspense fallback={<TrendsFallBack />}>
          <Trend type="Expense" />
        </Suspense>

        <Suspense fallback={<TrendsFallBack />}>
          <Trend type="Saving" />
        </Suspense>

        <Suspense fallback={<TrendsFallBack />}>
          <Trend type="Investment" />
        </Suspense>
      </section>
      <Suspense fallback={<TransactionFallBack />}>
        <TransactionList />
      </Suspense>
    </>
  );
}
