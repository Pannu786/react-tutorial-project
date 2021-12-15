import React, { useState } from 'react';

import ExpensesFilter from './ExpensesFilter';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

function Expenses(props) {
  const [filteredYr, setFilteredYr] = useState('2020');

  const filterChangeHandler = (seletedYr) => {
    setFilteredYr(seletedYr);
  };

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYr}
          onChangeFilter={filterChangeHandler}
        />
        {props.expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            id={expense.id}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
