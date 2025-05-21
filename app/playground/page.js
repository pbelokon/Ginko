import PageHeader from "@/components/PageHeader";
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
          <Trend type="Income" amount={30000000} />
          <Trend type="Investment" amount={100000} />
          <Trend type="Expense" amount={1000} />
          <Trend type="Saving" amount={7000} />
        </div>
      </div>
    </main>
  );
}
