import Button from "./button";
import { useState } from "react";


function createData(date, cost, description) {
  return { date, cost, description };
}

const expenses = [
	createData(28, 40, "grocery"),
	createData(39, 50, "resteraunt"),
	createData(28, 40, "grocery"),
	createData(39, 50, "resteraunt"),
	createData(28, 40, "grocery"),
	createData(39, 50, "resteraunt"),
	createData(28, 40, "grocery"),
	createData(39, 50, "resteraunt"),
	createData(28, 40, "grocery"),
	createData(39, 50, "resteraunt"),
	createData(28, 40, "grocery"),
	createData(39, 50, "resteraunt"),
]


export default function ExpenseTable(){
  const months =  ["January", "February", "March", "April", "May", "June", 
  "July", "August", "September", "October", "November", "December" ]

  let date = new Date()
//   let month = date.getMonth() % 12
//   let year = date.getFullYear() 

  const [month, setMonth] = useState(date.getMonth())
  const [year, setYear] = useState(date.getFullYear())
  const [monthString, setMonthString] = useState(months[month])

//   let dateObj = {month: month, year: year}

  function subtractMonth() {
	if (month === 0){
		const newYear = year - 1
		setYear(newYear)
	}

	const newMonth = (((month - 1) % 12) + 12) % 12
	const newMonthString = months[newMonth]
	setMonth(newMonth)
	setMonthString(newMonthString)
	// alert("clicked")
  }

  function addMonth() {
	if (month === 11){
		const newYear = year + 1
		setYear(newYear)
	}
	const newMonth = (((month + 1) % 12) + 12) % 12
	const newMonthString = months[newMonth]
	setMonth(newMonth)
	setMonthString(newMonthString)
  }

  return(
		<>
			<div id="table-info">
			<button className="arrow" onClick={ subtractMonth }>-</button>
			<span id="date">{ monthString } { year }</span>
			<button className="arrow" onClick={ addMonth }>+</button>
			</div>
			<div id="expense-div">
			<table>
				<tr>
				  <th>Date</th>
				  <th>Cost</th>
				  <th>Description</th>
				</tr>
	
				{expenses.map((expense) =>(
					<tr>
					  <td>{ expense.date }</td>
					  <td>${ expense.cost} </td>
					  <td>{ expense.description }</td>
					</tr>
				))}
			</table>
			
			</div>
		</>
		
		

		)
}
