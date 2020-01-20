import moment from 'moment'


export default (expenses , { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {

    const createdAtMoment = moment(expense.createdAt)
    const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
    const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;

    const textMatch = text? expense.description.toLowerCase().includes(text.toLowerCase()) : true;

    return startDateMatch && endDateMatch && textMatch;
    
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt - b.createdAt;
    }else if (sortBy === 'amount') {
      return b.amount - a.amount;
    }
  });
}
