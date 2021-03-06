import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';


export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: props.expense? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString(): '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocus: false
        }
    }
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    }
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }));
    }
    onAmountChange = (e) => {
        const amount = e.target.value;
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }
    }
    onDateChange = (createdAt) => {
        if(createdAt) {
            this.setState(() => ({ createdAt }));
        }
    }
    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocus: focused}));
    }
    onSubmit = (e) => {
        e.preventDefault();
        if(!this.state.amount || !this.state.description) {
            this.setState(() => ({error: 'Please provide description and amount!'}));
        }
        else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            });
        }
    }
    render() {
        return (
                <form onSubmit={this.onSubmit} className="form">
                {this.state.error && <p className = "form__error">{this.state.error}</p>}
                    <input 
                    type='text'
                    placeholder='Description'
                    autoFocus
                    className="text-input"
                    value={this.state.description}
                    onChange={this.onDescriptionChange}
                    />
                    <input 
                        type='text'
                        placeholder='Amount'
                        value={this.state.amount}
                        className="text-input"
                        onChange={this.onAmountChange}
                    />
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocus}
                        onFocusChange={this.onFocusChange}
                        displayFormat='DD/MM/YYYY'
                        numberOfMonths={1}
                        isOutsideRange={() => {false}}
                    />
                    <textarea
                        placeholder='Add a note for your expense(optional)'
                        value={this.state.note}
                        onChange={this.onNoteChange}
                        className="textarea"
                    ></textarea>
                    <div>
                        <button className="button" >Save Expense</button>
                    </div>
                </form>
        );
    }
}