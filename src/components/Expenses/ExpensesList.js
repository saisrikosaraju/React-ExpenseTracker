import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

//conditionally checking if there are any expenses present for currently selected year

const ExpensesList = (props)=>{
    
    if(props.items.length === 0){
        return <h2 className="expenses-list__fallback">No Expense Found</h2>
        
    }
    return <ul className="expenses-list">
        {props.items.map((expense) =>(
            <ExpenseItem 
            key = {expense.id}
            title = {expense.title}
            amount = {expense.amount}
            date = {expense.date}
            />  
        ))};   
    </ul>
}
export default ExpensesList;
