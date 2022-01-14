import React,{ useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props)=>{
    const [addExpense,setAddExpense] = useState(false);

    const saveExpenseDataHandler= (enteredExpenseData)=>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setAddExpense(false);
    }

    const addNewExpenseHandler = ()=>{
        setAddExpense(true);
    }
    const cancleHandler = ()=>{
        setAddExpense(false);
    }
    return(
    <div className="new-expense">
      {addExpense === false ? (<button onClick={addNewExpenseHandler}>Add Expense</button>):(<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} cancle={cancleHandler}/>) }
    </div>
    );  
}

export default NewExpense;