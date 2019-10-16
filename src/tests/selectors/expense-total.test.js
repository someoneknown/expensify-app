import getTotalExpense from '../../selectors/expense-total';
import expenses from '../fixtures/expenses';

test('should calculate total expense when list is empty', () => {
    const result = getTotalExpense([]);
    expect(result).toBe(0);
});

test('should calculate total expense for a single entry', () => {
    const result = getTotalExpense([expenses[0]]);
    expect(result).toBe(expenses[0].amount);
});

test('should calculate total expense for multiple entries', () => {
    const result = getTotalExpense(expenses);
    expect(result).toBe(114195);
});