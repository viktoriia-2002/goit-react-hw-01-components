import React from 'react';
import TransactionHistory from '../transactionHistory'
import transactions from '../transactions.json';

const Transaction = () => {
    return (
        <div>
            <TransactionHistory data={transactions}/>
        </div>
    )
}

export default Transaction;