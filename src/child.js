import React, { useContext, useState } from 'react';
import { TransactionContext } from './transContext';

const Child = () => {
    let { transactions, addTransaction } = useContext(TransactionContext);
    // let transactions = React.useContext(TransactionContext);
    // console.log(transactions);
    let [desc, setDesc] = useState("");
    let [amount, setAmount] = useState(0);

    function handleAddition(event) {
        event.preventDefualt();
        if (Number(amount) === 0) {
            alert("Please enter correct Value");
            return false;
        }
        addTransaction({
            amount: Number(amount),
            desc: desc
        })
    }
    const getIncome = () => {
        let income = 0;
        for (var i = 0; i < transactions.length; i++) {
            if (transactions.amount[i] > 0) {
                income += transactions.amount[i];
            }
            return income;
        }
    }

    const getExpense = () => {
        let expense = 0;
        for (var i = 0; i < transactions.length; i++) {
            if (transactions.amount[i] < 0) {
                expense += transactions.amount[i];
            }
            return expense;
        }
    }
    // console.log(transactions)
    return (
        <div className="container">

            <h1 className='text-center'>Expense Tracker </h1>
            <h3>YOUR BALANCE<br />{getIncome() + getExpense()}</h3>

            <div className="expense-container">
                <h3>AMOUNT<br />{getIncome()}</h3>
                <h3>EXPENSE<br />{getExpense()}</h3>
            </div>
            <h3>HISTORY</h3><hr />

            <ul className="transaction-list">
                {transactions.map((transObj, ind) => {
                    return (
                        <li key={ind}>
                            <span>{transObj.desc}</span>
                            <span>{transObj.amount}</span>
                        </li>
                    )
                })}
            </ul>

            <h3>Add New Transaction</h3><hr />
            <form className="transaction-form" onSubmit={handleAddition}>
                <label>
                    Enter Description<br />
                    <input type="text"
                     onChange={(ev) => setDesc(ev.target.value)} 
                     value={desc}
                     required />
                </label><br />

                <label>
                    Enter Amount<br />
                    <input type="number" 
                    onChange={(ev) => setAmount(ev.target.value)} 
                    value={amount}
                    required />
                </label><br />

                <input type="submit" value="Add Transaction" />

            </form>

        </div>
    )
}
export default Child;