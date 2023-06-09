import React from 'react';
import TransactionHistory from '../transactionHistory'

const Transaction = ({transactions}) => {
    return (
        <div>
            <TransactionHistory transactions={transactions}/>
        </div>
    )
}

export default Transaction;