


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
	return(
		<>
			<div id="table-info">
			<button className="arrow">-</button>
			<span id="date">April 2024</span>
			<button className="arrow">+</button>
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