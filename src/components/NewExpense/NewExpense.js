import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseDa = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseDa)
  }

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
}

export default NewExpense
