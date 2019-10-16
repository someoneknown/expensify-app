import React from 'react';
import numeral from 'numeral';
import getVisibleExpenese from '../selectors/expenses';
import getTotalExpense from '../selectors/expense-total';
import { connect } from 'react-redux';

export class ExpenseSummary extends React.Component {

    render() {
        return (
            <div>
                <p>Viewing {this.props.expenseCount} {this.props.expenseCount === 1 ? 'expense' : 'expenses'} totatling {numeral(this.props.expenseTotal / 100).format('$0,00.00')}</p>
            </div>
        );
    }
};

const mapStatetoProps = ({ expenses, filters }) => {
    const visibleExpenese = getVisibleExpenese(expenses, filters);
    const expenseCount = visibleExpenese.length;
    const expenseToatal = getTotalExpense(visibleExpenese);
    return {
        expenseCount,
        expenseTotal
    };
};

export default connect(mapStatetoProps)(ExpenseSummary);