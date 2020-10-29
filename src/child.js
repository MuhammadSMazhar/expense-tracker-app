import React, { useContext, useState } from "react";
import { TransactionContext } from "./transContext";


function Child() {

  const { transactions, addTransaction } = useContext(TransactionContext);

  // let [transactions, setTransaction] = useState(transactions);
  let [newDesc, setNewDesc] = useState('');
  let [newAmount, setNewAmount] = useState(0);

  const handleSubmit = (event) => {
      event.preventDefault();
      addTransaction({ amount: Number(newAmount), desc: newDesc })
  }

  const getIncome = () => {
      let income = 0;
      for (var i = 0; i < transactions.length; i++) {
          if (transactions[i].amount > 0)
              income += transactions[i].amount
      }
      return income;
  }

  const getExpense = () => {
      let expense = 0;
      for (var i = 0; i < transactions.length; i++) {
          if (transactions[i].amount < 0)
              expense += transactions[i].amount
      }
      return expense;
  }

  return (
      <div className="container">
          <h1 className="text-center">Expense Tracker</h1>
          <h3>Your balance <br /> {getIncome() + getExpense()} </h3>

          <div className="total-expense-container">
              <h3>Income <br /> {getIncome()} </h3>
              <h3>Expense <br /> {getExpense()}</h3>
          </div>

          <h4>History</h4>
          <hr />

          <ul className="expense-list">
              {transactions.map((transaction, ind) => {
                  return (
                      <li key={ind}>
                          <span> {transaction.desc} </span>
                          <span> {transaction.amount} </span>
                      </li>
                  )
              })}
          </ul>

          <h4>Add New Transaction</h4>
          <hr />

          <form className="transaction-form" onSubmit={handleSubmit}>
              <label>
                  Enter Description: <br />
                  <input type="text" required onChange={(e) => setNewDesc(e.target.value)} />
              </label>

              <br />

              <label>
                  Enter Amount: <br />
                  <input type="number" required onChange={(e) => setNewAmount(e.target.value)} />
              </label>

              <br /> <br />

              <input type="submit" value="Add Transaction" />

          </form>
      </div>
  );
}

export default Child;

// const Child = () => {
//   let { transaction, addTransaction } = useContext(TransactionContext);
//   // let {transaction} = React.useContext(TransactionContext);
//   // console.log(transaction[0].amount,"transaction" );
//   let [Newdesc, setDesc] = useState("");
//   let [Newamount, setAmount] = useState(0);

//   const handleAddition = (event) =>{
//     event.preventDefualt();
//     console.log(Newdesc,Newamount)
//     if (Number(Newamount) === 0) {
//       alert("Please enter correct Value");
//       return false;
//     }
//     addTransaction({
//       amount: Number(Newamount),
//       desc: Newdesc,
//     });
//   }
//   const getIncome = () => {
//     let income = 0;
//     for (var i = 0; i < transaction.length; i++) {
//       if (transaction[i].amount > 0) income += transaction[i].amount;
//     }
//     return income;
//   };
//   const getExpense = () => {
//     let expense = 0;
//     for (var i = 0; i < transaction.length; i++) {
//       if (transaction[i].amount < 0) expense += transaction[i].amount;
//     }
//     return expense;
//   };
//   return (
//     <div className="container">
//       <h1 className="text-center">Expense Tracker </h1>
//       <h3>
//         YOUR BALANCE
//         <br />
//         {getIncome() + getExpense()}
//       </h3>
//       <div className="expense-container">
//         <h3>
//           AMOUNT
//           <br />
//           {getIncome()}
//         </h3>
//         <h3>
//           EXPENSE
//           <br />
//           {getExpense()}
//         </h3>
//       </div>
//       <h3>HISTORY</h3>
//       <hr />
//       <ul className="transaction-list">
//         {transaction.map((transObj, ind) => {
//           return (
//             <li key={ind}>
//               <span>{transObj.desc}</span>
//               <span>{transObj.amount}</span>
//             </li>
//           );
//         })}
//       </ul>
//       <h3>Add New Transaction</h3>
//       <hr />
//       <form className="transaction-form" onSubmit={handleAddition}>
//         <label>
//           Enter Description
//           <br />
//           <input
//             type="text"
//             onChange={(ev) => setDesc(ev.target.value)}
//             value={Newdesc}
//             required
//           />
//         </label>
//         <br />
//         <label>
//           Enter Amount
//           <br />
//           <input
//             type="number"
//             onChange={(ev) => setAmount(ev.target.value)}
//             value={Newamount}
//             required
//           />
//         </label>
//         <br />
//         <input type="submit" value="Add Transaction" />
//       </form>
//     </div>
//   );
// };
// export default Child;
