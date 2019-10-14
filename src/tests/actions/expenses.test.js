import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
   const result = removeExpense({ id: '143d3'});
   expect(result).toEqual({
       type: 'REMOVE_EXPENSE',
       id: '143d3'
   }); 
});

test('should setup edit expense action object', () => {
    const result = editExpense('123', {description: 'new description'});
    expect(result).toEqual({
        type: 'EDIT_EXPENSE',
        updates: {
            description: 'new description'
        },
        id: '123'
    });
});

test('should set up add expense action object with parameters', () => {
    const expenseData = {
        description: 'Rent',
        amount: 100000,
        createdAt: 1000,
        note: 'Last months rent'
    };
    const result = addExpense(expenseData);
    expect(result).toEqual(
        {
            type: 'ADD_EXPENSE',
            expense: {
                ...expenseData,
                id: expect.any(String)
            }
        }
    );
});

test('should set up add expense action object with no parameters', () => {
    const result = addExpense();
    expect(result).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '',
            amount: 0,
            createdAt: 0,
            note: '',
            id: expect.any(String)
        }
    })
});