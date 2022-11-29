import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  const { deleteTransaction } = useContext(GlobalContext);
  return (
    <div>
      <h3>History</h3>
      <hr />
      {transactions.map((transaction) => {
        const sign = transaction.price < 0 ? "-" : "+";
        return (
          <span key={transaction.id} className="transaction-list">
            <span key={transaction.id} className="transaction">
              <h4>{transaction.name}</h4>
              <h4>
                {sign}${Math.abs(transaction.price)}
              </h4>
            </span>
            <button
              className="del"
              onClick={() => deleteTransaction(transaction.id)}
            >
              X
            </button>
          </span>
        );
      })}
    </div>
  );
};

export default TransactionList;
