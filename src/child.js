import React from 'react';

function Child() {
    return (
        <div className="container">

            <h1 className="text-center">Expense Tracker</h1>
            <h3>YOUR BALANCE <br /> $260</h3>

            <div className="expensecontainer">
                <h3>INCOME <br /> $500</h3>
                <h3>EXPENSE <br /> $240</h3>
            </div>
            <h3>History</h3>
            <hr />

            <ul className="transaction-list">
                <li>
                    <span>cash</span>
                    <span>+500</span>
                </li>
                <li>
                    <span>cash</span>
                    <span>+500</span>
                </li>
                <li>
                    <span>cash</span>
                    <span>+500</span>
                </li>
            </ul>

            <h3>Add A New Transaction</h3>
            <hr />

            <form className="transaction-form" >
                <label>Enter Description<br />
                    <input type="text" required />
                </label><br />
                <label>Enter Amount<br />
                    <input type="number" required />
                </label><br />

                <input type="submit" value="Add Transaction" />

            </form>
        </div>
    );
}

export default Child;