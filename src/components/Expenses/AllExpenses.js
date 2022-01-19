import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";

import "./AllExpenses.css";

const  AllExpenses = (props)=>{

    const [yearFiltered,setYearFiltered] = useState("2021");
      
    const changeHandler = yearSelected =>{
        setYearFiltered(yearSelected);
    }
    
    //expenses are filtered based on selected year

    const filteredExpenses = props.items.filter(expense =>{
        return expense.date.getFullYear().toString() === yearFiltered;
    });

    return(
      <li>
        <Card className="expenses">
        <ExpenseFilter selected={yearFiltered} onChangeFilter={changeHandler}/>
        <ExpensesChart expenses={filteredExpenses}/>
         <ExpensesList items={filteredExpenses}/>
        </Card>
      </li>
    );
}
export default AllExpenses;
