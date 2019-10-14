import React from 'react';
import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters';

const ExpenseDashboardPage = _ => (
    <div>
        <ExpenseListFilters />
        <ExpenseList />
    </div>
);

export default ExpenseDashboardPage;