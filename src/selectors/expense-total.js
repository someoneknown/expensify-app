// fucntion to return the sum of expenses

export default (expenses) => {
    return expenses.reduce((total, current) => total + current.amount, 0);
};