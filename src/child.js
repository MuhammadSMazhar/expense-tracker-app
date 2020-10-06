import React from 'react';

function Child() {
    return (
        <div className="container">

            <h1 className="text-center">Expense Tracker</h1>
            <h3>YOUR BALANCE <br /> $260</h3>

            <div className="expensecontainer">
                <h3>YOUR BALANCE <br /> $260</h3>
                <h3>YOUR BALANCE <br /> $260</h3>
            </div>
            <h3>History</h3>
            <hr/>

            <h3>Add A New Transaction</h3>
            <hr/>
            <form>
                <label>Enter Description<br />
                    <input type="text" />
                </label><br />
                <label>Enter Description<br />
                    <input type="text" />
                </label><br />

                <input type="submit" value="Add Transaction" />

            </form>
        </div>
    );
}

export default Child;