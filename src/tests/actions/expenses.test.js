import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { addExpense, editExpense, removeExpense, startAddExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase'
const createMockStore = configureMockStore([thunk]);

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
    const result = addExpense(expenses[2]);
    expect(result).toEqual(
        {
            type: 'ADD_EXPENSE',
            expense: expenses[2]
        }
    );
});

// test('should add expenses to database and store', (done) => {
//    // jest.setTimeout(30000);
//    jasmine.DEFAULT_TIMEOUT_INTERVAL = 5000;
//     const store = createMockStore({});
//     const expenseData = {
//         description: 'Mouse',
//         amount: 200000,
//         note: 'This is a test note',
//         createdAt: 100000
//     }
//     store.dispatch(startAddExpense(expenseData)).then(() => {
//         const action = store.getActions();
//         expect(action[0]).toEqual({
//             type: 'ADD_EXPENSE',
//             expense: {
//                 id: expect.any(String), 
//                 ...expenseData
//             }
//         });
//         return database.ref(`expenses/${action[0].expense.id}`).once('value')
//     }).then(snapshot => {
//         expect(snapshot.val()).toBe(expenseData);
//         done();
//     });; 
// });

// test('should set up add expense action object with no parameters', () => {
//     const result = addExpense();
//     expect(result).toEqual({
//         type: 'ADD_EXPENSE',
//         expense: {
//             description: '',
//             amount: 0,
//             createdAt: 0,
//             note: '',
//             id: expect.any(String)
//         }
//     })
// });