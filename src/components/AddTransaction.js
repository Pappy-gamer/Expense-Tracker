import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
  const { addTransaction } = useContext(GlobalContext);
  const { transactions } = useContext(GlobalContext);
  const [text, setText] = useState("");
  const [price, setPrice] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(transactions);

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      name: text,
      price: +price,
    };
    addTransaction(newTransaction);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label className="label">Text</label>
      <input
        type="text"
        value={text}
        placeholder="Enter text"
        required
        onChange={(e) => setText(e.target.value)}
      />
      <label className="label">Amount</label>
      <small>(negative - expense, positve - income)</small>
      <input
        type="number"
        value={price}
        placeholder="Enter amount"
        required
        onChange={(e) => setPrice(e.target.value)}
      />
      <center>
        <button className="submit">Add</button>
      </center>
    </form>
  );
};

export default AddTransaction;
