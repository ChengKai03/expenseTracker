import Button from "./button";



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
  let date = new Date()
  let month = date.toLocaleString('default', { month: 'long' }) 
  let year = date.getFullYear() 

  let dateObj = {month: month, year: year}

  function handleClick(dateObj) {
	alert(dateObj.month);
  }

  return(
		<>
			<div id="table-info">
			<Button className="arrow" onClick={ () => handleClick(dateObj) }>-</Button>
			<span id="date">{ dateObj.month } { dateObj.year }</span>
			<Button className="arrow" onClick={ () => handleClick(dateObj) }>+</Button>
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
