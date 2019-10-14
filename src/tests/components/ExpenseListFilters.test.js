import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';
import moment from 'moment';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(<ExpenseListFilters
        filters={filters}
        setTextFilter={setTextFilter}
        sortByDate={sortByDate}
        sortByAmount={sortByAmount}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        />);
});

test('should render ExpenseListFilters', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters with alt data ', () => {
    wrapper.setProps({
        filters: altFilters
    });
    expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
    const value = 'some text';
    wrapper.find('input').simulate('change', {
        target: { value}
    });
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('should handle sort by date change', () => {
    wrapper.find('select').simulate('change', {
        target: { value: 'date' }
    });
    expect(sortByDate).toHaveBeenCalled();
});

test('should handle sort by amount change', () => {
    wrapper.find('select').simulate('change', {
        target: { value: 'amount' }
    });
    expect(sortByAmount).toHaveBeenCalled();
});

test('should handle date change', () => {
    wrapper.find('DateRangePicker').prop('onDatesChange')({ startDate: moment(), endDate: moment(0)});
    expect(setStartDate).toHaveBeenCalledWith(moment());
    expect(setEndDate).toHaveBeenCalledWith(moment());
});

test('should handle focus change', () => {
    wrapper.find('DateRangePicker').prop('onFocusChange')('endDate');
    expect(wrapper.state('calendarFocused')).toBe('endDate');
});