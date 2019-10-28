import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, startEditExpense, startRemoveExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
        console.log('Expense Object is', this.props.expense);
        this.props.startEditExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    }
    onClick = (e) => {
        this.props.startRemoveExpense(this.props.expense);
        this.props.history.push('/');
    }
    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit Expense</h1>
                    </div>
                </div>
                <div className="content-container">
                    <ExpenseForm 
                    expense = {this.props.expense}
                    onSubmit = {this.onSubmit}
                    />
                    <button
                    className="button button--secondary"
                    onClick = { this.onClick }
                    >Remove Expense
                    </button>
                </div>
                
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    startRemoveExpense: id => {
        dispatch(startRemoveExpense(id));
    },
    startEditExpense: (id, updates) => {
        dispatch(startEditExpense(id, updates));
    }
});

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);