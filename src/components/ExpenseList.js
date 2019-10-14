import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectedExpenses from '../selectors/expenses';

export  const ExpenseList  = (props) => (
    <div>
        {props.expenses.length ? (
            props.expenses.map((expense) =>
            <ExpenseListItem 
                {...expense}
                key = {expense.id} 
            />
        )
        ) : (
            <p>No Expenses</p>
        )}
    </div>
);
const mapStatetoProps = (state) => {
    return {
        expenses: selectedExpenses(state.expenses, state.filters)
    };
};
export default connect(mapStatetoProps)(ExpenseList);
 