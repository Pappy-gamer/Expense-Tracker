import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
const IncomeExpense = () => {
  const { transactions } = useContext(GlobalContext);
  const amount = transactions.map((transaction) => {
    return transaction.price;
  });

  const income = amount
    .filter((item) => item > 0)
    .reduce((first, second) => {
      return first + second;
    }, 0);
  const expense =
    amount
      .filter((item) => item < 0)
      .reduce((first, second) => {
        return first + second;
      }, 0) * -1;

  return (
    <div className="income-expenses">
      <div className="income">
        <h2>Income</h2>
        <h3>+${income}</h3>
      </div>
      <div className="expenses">
        <h2>Expenses</h2>
        <h3>-${expense}</h3>
      </div>
    </div>
  );
};

export default IncomeExpense;
