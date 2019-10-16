import { ExpenseSummary } from '../../components/ExpenseSummary';
import { shallow } from 'enzyme'; 
import React from 'react';

test('should render ExpenseSummary with single expense', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={1} expenseTotal={120}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseSummary with multiple expenses', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={2} expenseTotal={12030.0}/>);
    expect(wrapper).toMatchSnapshot();
});
