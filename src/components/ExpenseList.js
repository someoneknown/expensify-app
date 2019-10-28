import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectedExpenses from '../selectors/expenses';

export  const ExpenseList  = (props) => (
    <div className="content-container">
        <div className="list-header">
            <div className="show-for-mobile">Expenses</div>
            <div className="show-for-desktop">Expense</div>
            <div className="show-for-desktop">Amount</div>
        </div>
        <div className="list-body">
            {props.expenses.length ? (
                props.expenses.map((expense) =>
                <ExpenseListItem 
                    {...expense}
                    key = {expense.id} 
                />
            )
            ) : (
                <div className="list-item list-item--message">
                    <span>No Expenses</span>
                </div>
            )}
        </div>
    </div>
);
const mapStatetoProps = (state) => {
    return {
        expenses: selectedExpenses(state.expenses, state.filters)
    };
};
export default connect(mapStatetoProps)(ExpenseList);
 