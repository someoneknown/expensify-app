import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, startRemoveExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
        console.log('Expense Object is', this.props.expense);
        this.props.editExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    }
    onClick = (e) => {
        this.props.startRemoveExpense(this.props.expense);
        this.props.history.push('/');
    }
    render() {
        return (
            <div>
                <ExpenseForm 
                expense = {this.props.expense}
                onSubmit = {this.onSubmit}
                />
                <button
                onClick = { this.onClick }
                >Remove
                </button>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    startRemoveExpense: id => {
        dispatch(startRemoveExpense(id));
    },
    editExpense: (id, updates) => {
        dispatch(editExpense(id, updates));
    }
});

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);