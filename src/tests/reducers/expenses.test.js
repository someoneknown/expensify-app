import expensesReducers from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should setup default state', () => {
    const state = expensesReducers(undefined, { type: '@@INIT'});
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducers(expenses, action);
    expect(state).toEqual([ expenses[0], expenses[2] ]);
});

test('should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducers(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add expense', () => {
    const expense = {
        description: 'new description',
        amount: 1000,
        createdAt: 100,
        note: 'new note',
        id: '12010'
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };
    const state = expensesReducers(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});

test('should edit expense by id', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            description: 'new description(updated)'
        }
    };
    const state = expensesReducers(expenses, action);
    expect(state[1].description).toBe('new description(updated)');
});

test('should not edit expense if id not found', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            description: 'new description(updated)'
        }
    };
    const state = expensesReducers(expenses, action);
    expect(state).toEqual(expenses);
});