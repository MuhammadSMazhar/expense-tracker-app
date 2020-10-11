import TransactionReducer from "./transReducer";
import React, { createContext } from "react"



const initialTransaction = [
    { amount: 500, desc: "cash" },
    { amount: -30, desc: "book" },
    { amount: -40, desc: "sugar" }
];

export const TransactionContext = createContext(initialTransaction);


export const TransactionProvider = ({children}) => {
    let [state, dispatch] = React.useReducer(TransactionReducer, initialTransaction);

    function addTransaction(transObj) {
        dispatch({
            type: "ADD_TRANSACTION",
            payload: {
                amount: transObj.amount,
                desc: transObj.desc
            },
        })
    }
    return (
        <TransactionContext.Provider value={{
            transaction: state,
            addTransaction
        }}>
        {children}

        </TransactionContext.Provider>
    )

}