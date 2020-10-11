import React from 'react';
import { createContext, useReducer } from 'react';
import TransactionReducer from "./transReducer";


const initialData = [
    { amount: 500, desc: "cash" },
    { amount: 60, desc: "balloon" },
    { amount: 500, desc: "Mobile" }
]

export const {TransactionContext} = createContext(initialData);
// alert(TransactionContext);

export const TransactionProvider = ({ children }) => {
    let [state, dispatch] = useReducer(TransactionReducer, initialData);
// alert(state);

    function addTransaction(transObj) {
        dispatch({
            type: "ADD_TRANSACTION",
            payload: {
                amount: transObj.amount,
                desc: transObj.desc
            }
        })
    }
    return (
        <TransactionContext.Provider value={{
            transactions: state,
            addTransaction
        }}>
            {children}
        </TransactionContext.Provider>
    )
}