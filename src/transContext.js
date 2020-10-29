import React, { createContext, useReducer } from "react"
import TransactionReducer from "./transReducer";


const initialData = [
    { amount: 800, desc: "Cash" },
    { amount: 40, desc: "Book" },
    { amount: -200, desc: "Camera" }
]

export const TransactionContext = createContext(initialData);

export const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(TransactionReducer , initialData);

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }

    return (
        <TransactionContext.Provider value={
            {
                transactions: state,
                addTransaction
            }
        }>
            {children}
        </TransactionContext.Provider>
    );
}

// const initialTransaction = [
//     { amount: 500, desc: "cash" },
//     { amount: -100, desc: "book" },
//     { amount: 80, desc: "Deposit" },
//     { amount: -150, desc: "sugar" }
// ];

// export const TransactionContext = createContext(initialTransaction);


// export const TransactionProvider = ({children}) => {
//     let [state, dispatch] = useReducer(TransactionReducer, initialTransaction);

//     function addTransaction(transObj) {
        
//         dispatch({
//             type: "ADD_TRANSACTION",
//             payload: {
//                 amount: transObj.amount,
//                 desc: transObj.desc,
//             },
//         })
//     }
//     return (
//         <TransactionContext.Provider value={{
//             transaction: state,
//             addTransaction
//         }}>
//         {children}

//         </TransactionContext.Provider>
//     )}