import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, currency, dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const { expenses } = useContext(AppContext);


    const handleBudgetChange = (e) => {
        const totalExpenses = expenses.reduce((total, item) => {
            return (total += item.cost);
        }, 0);
        if (parseInt(e.target.value) < totalExpenses) {
            alert('Budget cannot be lower than expenses');
        } else {
            setNewBudget(parseInt(e.target.value));
        }
    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input type='number' max='20000' step='10' value={newBudget} onChange={handleBudgetChange} />
        </div>
    );
};

export default Budget;