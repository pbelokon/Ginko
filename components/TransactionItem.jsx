import { useCurrencyFormat } from "@/hooks/useCurrencyFormat";
import Down from "@/icons/Down";
import Investment from "@/icons/Investment";
import Savings from "@/icons/Savings";
import Up from "@/icons/Up";

export default function TransactionItem({
  type,
  category,
  description,
  amount,
}) {
  const typeMap = {
    Income: {
      icon: Up,
      colors: "w-6 h-6 text-green-700 dark:text-green-300",
    },
    Expense: {
      icon: Down,
      colors: "w-6 h-6 text-red-700 dark:text-red-300",
    },
    Saving: {
      icon: Savings,
      colors: "w-6 h-6 text-yellow-700 dark:text-yellow-300",
    },
    Investment: {
      icon: Investment,
      colors: "w-6 h-6 text-indigo-700 dark:text-indigo-300",
    },
  };

  console.log(type, typeMap[type].icon);
  const IconComponent = typeMap[type].icon;
  const colors = typeMap[type].colors;
  const formattedAmount = useCurrencyFormat(amount);
  return (
    <div className="w-full flex items-center">
      <div className="flex items-center mr-4 grow">
        <IconComponent className={`${colors} mr-3 w-4 h-4 hidden sm:block`} />
        <span>{description}</span>
      </div>
      <div className="min-w-[150px] items-center hidden md:flex">
        {category && (
          <div className="rounded-md text-xs text-white bg-gray-500 dark:bg-gray-100 dark:text-black px-2 py-0.5">
            {category}
          </div>
        )}
      </div>
      <div className="min-w-[70px] text-right">{formattedAmount}</div>
      <div className="min-w-[50px] flex justify-end">...</div>
    </div>
  );
}
