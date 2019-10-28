import React from 'react';
import numeral from 'numeral';
import { Link } from 'react-router-dom';
import getVisibleExpenese from '../selectors/expenses';
import getTotalExpense from '../selectors/expense-total';
import { connect } from 'react-redux';

export class ExpenseSummary extends React.Component {

    render() {
        return (
            <div className="page-header">
                <div className="content-container">
                    <h1 className="page-header__title">Viewing <span>{this.props.expenseCount}</span> {this.props.expenseCount === 1 ? 'expense' : 'expenses'} totalling <span>{numeral(this.props.expenseTotal / 100).format('$0,00.00')}</span></h1>
                    <div className="page_header__actions">
                        <Link className="button" to="/create">Add Expense</Link>
                    </div>
                </div>
            </div>
        );
    }
};

const mapStatetoProps = ({ expenses, filters }) => {
    const visibleExpenese = getVisibleExpenese(expenses, filters);
    const expenseCount = visibleExpenese.length;
    const expenseTotal = getTotalExpense(visibleExpenese);
    return {
        expenseCount,
        expenseTotal
    };
};

export default connect(mapStatetoProps)(ExpenseSummary);