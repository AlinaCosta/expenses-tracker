//A component in React is just a Javascript function
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2019, 7, 14),
  },
  { id: "e2", title: "Notebook", amount: 700, date: new Date(2020, 2, 12) },
  {
    id: "e3",
    title: "KitchenAid",
    amount: 299.97,
    date: new Date(2020, 9, 12),
  },
  {
    id: "e4",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2020, 2, 28),
  },
  {
    id: "e5",
    title: "New Desk",
    amount: 450,
    date: new Date(2020, 5, 12),
  },
  {
    id: "e6",
    title: "Books",
    amount: 45,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e7",
    title: "PS4",
    amount: 467,
    date: new Date(2021, 8, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className="container">
      <h1 className="heading">Expenses Tracker</h1>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
