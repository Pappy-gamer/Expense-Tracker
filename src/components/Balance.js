import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const total = transactions
    .map((transaction) => {
      return transaction.price;
    })
    .reduce((first, second) => {
      return first + second;
    }, 0)
    .toFixed(2);
  console.log(total, transactions);
  return (
    <div className="balance">
      <h3>Your Balance</h3>
      {total > 0 ? <h2>${total}</h2> : <h2>$0.00</h2>}
    </div>
  );
};

export default Balance;
