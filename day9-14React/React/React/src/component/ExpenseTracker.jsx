import React, { useState } from 'react';
import './ExpenseTracker.css';

const ExpenseTracker = () => {
    // State to hold the list of transactions
    const [transactions, setTransactions] = useState([]);

    // State to hold form inputs
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');

    // Function to add a new transaction
    const addTransaction = (e) => {
        e.preventDefault();

        if (text === '' || amount === '') {
            alert('Please add a description and amount');
            return;
        }

        const newTransaction = {
            id: Math.floor(Math.random() * 1000000),
            text: text,
            amount: parseFloat(amount)
        };

        setTransactions([...transactions, newTransaction]);

        // Clear the form
        setText('');
        setAmount('');
    };

    // Function to delete a transaction
    const deleteTransaction = (id) => {
        setTransactions(transactions.filter(t => t.id !== id));
    };

    // Calculate totals
    const amounts = transactions.map(t => t.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    const income = amounts
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);
    const expense = (
        amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1
    ).toFixed(2);

    return (
        <div className="tracker-body">
            <h2>Expense Tracker</h2>

            <div className="balance">
                <h4>Your Balance</h4>
                <h1>${total}</h1>
            </div>

            <div className="income-expense-container">
                <div>
                    <h4>Income</h4>
                    <p className="income">+${income}</p>
                </div>
                <div>
                    <h4>Expense</h4>
                    <p className="expense">-${expense}</p>
                </div>
            </div>

            <h3>History</h3>
            <ul className="list">
                {transactions.map(transaction => (
                    <li key={transaction.id} className={transaction.amount > 0 ? 'plus' : 'minus'}>
                        {transaction.text}
                        <span>
                            {transaction.amount > 0 ? '+' : ''}{transaction.amount}
                            <button
                                onClick={() => deleteTransaction(transaction.id)}
                                className="delete-btn"
                            >
                                x
                            </button>
                        </span>
                    </li>
                ))}
            </ul>

            <h3>Add New Transaction</h3>
            <form onSubmit={addTransaction}>
                <div className="form-control">
                    <label htmlFor="text">Description</label>
                    <input
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Enter description..."
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount (negative = expense, positive = income)</label>
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Enter amount..."
                    />
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </div>
    );
};

export default ExpenseTracker;
