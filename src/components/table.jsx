import Button from "./button";
import { useState } from "react";
const { ipcRenderer } = window.require('electron');

function createData(date, cost, description) {
  return { date, cost, description };
}

const expenses = [
	createData(1, 40, "grocery"),
	createData(2, 50, "resteraunt"),
	createData(3, 40, "grocery"),
	createData(4, 50, "resteraunt"),
	createData(5, 40, "grocery"),
	createData(9, 50, "resteraunt"),
	createData(10, 40, "grocery"),
	createData(14, 50, "resteraunt"),
	createData(15, 40, "grocery"),
	createData(17, 50, "resteraunt"),
	createData(19, 40, "grocery"),
	createData(20, 50, "resteraunt"),
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
	let newYear = year;
	if (month === 0){
		newYear = year - 1
		setYear(newYear)
	}

	const newMonth = (((month - 1) % 12) + 12) % 12
	const newMonthString = months[newMonth]
	setMonth(newMonth)
	setMonthString(newMonthString)
	// alert("clicked")
  }

  function addMonth() {
	let newYear = year;
	if (month === 11){
		newYear = year + 1
		setYear(newYear)
	}
	const newMonth = (((month + 1) % 12) + 12) % 12
	const newMonthString = months[newMonth]
	setMonth(newMonth)
	setMonthString(newMonthString)

	ipcRenderer.invoke('get-data', newMonth, newYear).then((result) => {
		alert(result)
	})


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
				<thead>
					<tr>
						<th>Date</th>
						<th>Cost</th>
						<th>Description</th>
					</tr>
				</thead>
				<tbody>

		
					{expenses.map((expense) =>(
						<tr>
						<td>{ expense.date }</td>
						<td>${ expense.cost} </td>
						<td>{ expense.description }</td>
						</tr>
					))}
				</tbody>
			</table>
			
			</div>
		</>
		
		

		)
}
