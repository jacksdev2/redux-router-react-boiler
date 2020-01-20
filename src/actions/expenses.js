
import uuid from 'uuid';
import database from '../firebase/firebase';

// ADD_EXPENCE
export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense: expense
});


export const startAddExpense = (expenseData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      description,
      note,
      amount,
      createdAt
    } = expenseData

    const expense = { description, note, amount, createdAt }

    database.ref(`users/${uid}/expenses`).push(expense).then((ref) => {
      dispatch(addExpense({
        id: ref.key,
        ...expense
      }))
    })
  }
}

//REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

export const startRemoveExpense = ({ id } = {}) => {
  return (dispatch, getState) => {

    const uid = getState().auth.uid;

    return database.ref(`users/${uid}/expenses/${id}`).remove().then(() => {
      dispatch(removeExpense({ id }))
    })
  }
}

//EDIT_EXPENSE
export const editExpense = (id , updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
})

export const startEditExpenses = (id, updates) => {
  return (dispatch, getState) => {

    const uid = getState().auth.uid;

    return database.ref(`users/${uid}/expenses/${id}`).update(updates).then(() => {
      dispatch(editExpense(id, updates))
    })
  }
}



export const setExpenses = (expenses) => ({
  type: 'SET_EXPENSES',
  expenses
})



export const startSetExpenses = () => {
  return (dispatch, getState) => {

    const uid = getState().auth.uid;

    return database.ref(`users/${uid}/expenses`).once('value').then((snapshot) => {
      const expenses = [];

      snapshot.forEach((childSnapShot) => {
        expenses.push({
          id: childSnapShot.key,
          ...childSnapShot.val()
        })
      })

      dispatch(setExpenses(expenses))
    })
  }
}
