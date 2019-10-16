import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';
// load a locale
numeral.register('locale', 'in', {
    delimiters: {
        thousands: ',',
        decimal: '.'
    },
    abbreviations: {
        thousand: 'k',
        million: 'm',
        billion: 'b',
        trillion: 't'
    },
    ordinal : function (number) {
        return number === 1 ? 'rupee' : 'rupees';
    },
    currency: {
        symbol: 'Rs.'
    }
});

// switch between locales
numeral.locale('in');

export const ExpenseListItem = ({id, description, amount, createdAt}) => (
    <div>
        <Link to={'/edit/' + id}><h3>{description}</h3></Link>
        <p>{numeral(amount / 100).format('$0,0.00')}
        -
        {moment(createdAt).format('Do MMMM, YYYY')}
        </p>
    </div>
);

export default ExpenseListItem;