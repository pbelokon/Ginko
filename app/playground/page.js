import PageHeader from "@/components/PageHeader";
import BaseTrend from "@/components/BaseTrend";
import TransactionItem from "@/components/TransactionItem";
import TransactionSummary from "@/components/TransactionSummary";
import Button from "@/components/Button";
import Input from "@/components/inputs/Input";
import Label from "@/components/inputs/Label";
import Select from "@/components/inputs/Select";
import Separator from "@/components/Separator";
import Skeleton from "@/components/Skeleton";

export default function Page() {
  return (
    <main className="space-y-8 mb-44 dark:text-white">
      <h1 className="text-4xl mt-8">Playground</h1>

      <div>
        <h2 className="mb-4 text-lg font-mono">PageHeader</h2>
        <Separator />
        <div>
          <PageHeader />
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-lg font-mono">Trend</h2>
        <Separator />

        <div className="flex space-x-8">
          <BaseTrend type="Income" amount={1000} prevAmount={900} />
          <BaseTrend type="Expense" amount={12000} prevAmount={10000} />
          <BaseTrend type="Investment" amount={7000} prevAmount={11100} />
          <BaseTrend type="Saving" amount={500} prevAmount={950} />
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-lg font-mono">TransactionItem</h2>
        <Separator />

        <div className="space-y-4">
          <TransactionItem type="Income" description="Salary" amount={2000} />
          <TransactionItem
            type="Expense"
            category="Food"
            description="Going out to eat"
            amount={29}
          />
          <TransactionItem
            type="Saving"
            description="For children"
            amount={500}
          />
          <TransactionItem
            type="Investment"
            description="In Microsoft"
            amount={9000}
          />
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-lg font-mono">
          TransactionSummaryItem + TransactionItem
        </h2>
        <Separator />

        <div className="space-y-4">
          <TransactionSummary date="2024-05-01" amount={3500} />
          <Separator />

          <TransactionItem type="Income" description="Salary" amount={2000} />
          <TransactionItem
            type="Expense"
            category="Food"
            description="Going out to eat"
            amount={29}
          />
          <TransactionItem
            type="Saving"
            description="For children"
            amount={500}
          />
          <TransactionItem
            type="Investment"
            description="In Microsoft"
            amount={9000}
          />
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-lg font-mono">Buttons</h2>
        <Separator />

        <div className="space-x-4">
          <Button>Hello</Button>
          <Button variant="outline">Hello</Button>
          <Button variant="ghost">Hello</Button>

          <Button size="xs">Hello</Button>
          <Button size="sm">Hello</Button>
          <Button size="lg">Hello</Button>
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-lg font-mono">Forms</h2>
        <Separator />

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label className="mb-1">Your name</Label>
            <Input type="text" placeholder="Type something in here..." />
          </div>

          <div>
            <Label className="mb-1">City</Label>
            <Select>
              <option>Warsaw</option>
              <option>Berlin</option>
              <option>London</option>
            </Select>
          </div>

          <div className="flex items-center">
            <Input type="checkbox" id="terms" />
            <Label className="ml-2" htmlFor="terms">
              Accept terms
            </Label>
          </div>
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-lg font-mono">Loading</h2>
        <Separator />

        <div className="space-y-8">
          <div className="flex space-x-4">
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </div>

          <div className="space-y-4">
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </div>
        </div>
      </div>
    </main>
  );
}
