import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters'

export class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null
    }
    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    }
    onFocusChange = (focused) => {
        this.setState(() => ({ calendarFocused: focused}));
    }
    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value);
    }
    onSortChange = (e) => {
        e.target.value === 'date' ? this.props.sortByDate() : this.props.sortByAmount();
    }
    render() {
        return (
            <div className="content-container">
                <div className="input-group">
                    <div className="input-group__item">
                        <input
                        type = "text"
                        value = {this.props.filters.text}
                        placeholder="Search Expenses"
                        className="text-input"
                        onChange = {this.onTextChange}/>
                    </div>
                    <div className="input-group__item">
                        <select
                        value={this.props.filters.sortBy} onChange={this.onSortChange} className="select">
                        <option value='date'>Date</option>
                        <option value='amount'>Amount</option>
                        </select>
                    </div>
                    <div className="input-group__item">
                        <DateRangePicker 
                        startDate={this.props.filters.startDate}
                        endDate={this.props.filters.endDate}
                        onDatesChange={this.onDatesChange}
                        focusedInput={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                        showClearDates
                        displayFormat={'DD/MM/YYYY'}
                        />
                    </div>
                </div>
            </div>
        );
    }
}   

const mapStateToProps = (state) => (
    {
        filters: state.filters
    }
);

const mapDispatchToProps = dispatch => ({
    setTextFilter: value => {
        dispatch(setTextFilter(value));
    },
    sortByDate: _ => {
        dispatch(sortByDate());
    },
    sortByAmount: _ => {
        dispatch(sortByAmount());
    },
    setStartDate: startDate => {
        dispatch(setStartDate(startDate));
    },
    setEndDate: endDate => {
        dispatch(setEndDate(endDate ));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);