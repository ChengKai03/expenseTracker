import { useEffect, useState } from "react";
const { ipcRenderer } = window.require('electron');

function createData(date, cost, description) {
  return { date, cost, description };
}


export default function ExpenseTable(){
  const months =  ["January", "February", "March", "April", "May", "June", 
  "July", "August", "September", "October", "November", "December" ]

  let date = new Date()
//   let month = date.getMonth() % 12
//   let year = date.getFullYear() 




  const [month, setMonth] = useState(date.getMonth())
  const [year, setYear] = useState(date.getFullYear())
  const [monthString, setMonthString] = useState(months[month])
  const [expenses, setExpenses] = useState([])
 
  useEffect(() => {
	ipcRenderer.invoke('get-data', month, year).then((result) => {
		let expensesArray = []
			result.forEach(element => {
				let expense = createData(element.purchase_date, element.cost, element.description)
				expensesArray.push(expense)
			});
		setExpenses(expensesArray)
	})
  }, [month, year])
	



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
	ipcRenderer.invoke('get-data', newMonth, newYear).then((result) => {
		let expensesArray = []
		result.forEach(element => {
			let expense = createData(element.purchase_date, element.cost, element.description)
			expensesArray.push(expense)
		});

		console.log(expensesArray)
		setExpenses(expensesArray)
	})
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
		let expensesArray = []
		result.forEach(element => {
			let expense = createData(element.purchase_date, element.cost, element.description)
			expensesArray.push(expense)
		});

		console.log(expensesArray)
		setExpenses(expensesArray)
	})


  }

  return(
		<>
			<div id="table-info">
			<button className="arrow" onClick={ subtractMonth }>-</button>
			<span id="date" className="heading">{ monthString } { year }</span>
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
						<td>${ (Math.round(expense.cost * 100) / 100).toFixed(2) } </td>
						<td>{ expense.description.charAt(0).toUpperCase() + expense.description.slice(1) }</td>
						</tr>
					))}
				</tbody>
			</table>
			
			</div>
		</>
		
		

		)
}
