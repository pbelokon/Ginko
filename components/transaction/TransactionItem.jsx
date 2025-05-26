import styles from "./transactionItem.module.css";
import {
  BanknoteArrowUp,
  BanknoteArrowDown,
  HandCoins,
  Landmark,
} from "lucide-react";

import useCurrencyFormat from "@/hooks/useCurrencyFormat";

const typeMap = {
  Income: {
    icon: BanknoteArrowUp,
    iconClass: styles.incomeIcon,
  },
  Expense: {
    icon: BanknoteArrowDown,
    iconClass: styles.expenseIcon,
  },
  Saving: {
    icon: HandCoins,
    iconClass: styles.savingIcon,
  },
  Investment: {
    icon: Landmark,
    iconClass: styles.investmentIcon,
  },
};

export default function TransactionItem({
  type,
  category,
  description,
  amount,
}) {
  const { icon: IconComponent, iconClass } = typeMap[type];
  const formattedAmount = useCurrencyFormat(amount);

  return (
    <div className={styles.container}>
      <div className={styles.descriptionContainer}>
        <IconComponent className={`${styles.icon} ${iconClass}`} />
        <span>{description}</span>
      </div>

      <div className={styles.categoryContainer}>
        {category && <div className={styles.categoryTag}>{category}</div>}
      </div>

      <div className={styles.amountContainer}>{formattedAmount}</div>

      <div className={styles.actionsContainer}>...</div>
    </div>
  );
}
