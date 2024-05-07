import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";

const { ipcRenderer } = window.require('electron');

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
	labels: [],
	datasets: [{
	  label: 'Month Summary',
	  data: [],
	  backgroundColor: [
		'rgb(255, 99, 132)',
		'rgb(54, 162, 235)',
		'rgb(255, 205, 86)',
		'rgb(118, 171, 174)'
		
	  ],
	  hoverOffset: 4
	}]
  };
  


export default function Breakdown(){

	const [chartData, setChartData] = useState(data)
	const [total, setTotal] = useState()
	const getMonthSummary = () => {
		let descriptions = []
		let sums = []
		ipcRenderer.invoke('month-summary').then((result) => {
			result.forEach(element => {
				console.log(element)
				descriptions.push(element.description)
				sums.push(element.sum)
			});
			const newData = {
				labels: descriptions,
				datasets: [{
				  ...data.datasets[0],
				  data: sums,
				  
				}]
			  };
			console.log(newData)
			setChartData(newData)
			let runningTotal = 0;
			sums.forEach(element => {
				// console.log("element" ,element)
				runningTotal += element
			})
			// console.log("total ",runningTotal)
			setTotal(Math.round(runningTotal * 100) / 100
)
		})
		
	}
	
	useEffect(getMonthSummary, [])

	ipcRenderer.once('signal-month-summary', (event, message) =>{
		getMonthSummary()
	})

	let pieContent;
	if(total != 0){
		pieContent = 
		<>
			<Pie data={chartData}/>
			<span id="total-cost" className="heading">Total: ${total}</span>
		</>
	}
	else{
		pieContent = <span className="heading"> No Expenses Yet</span>
	}
	
	// if (chartData == []){
	// 	pieContent = <span>hi</span>
	// }
	// else{
	// 	<span className="heading">No Expenses</span>
	// }

	return(
		<>
			{pieContent}

			
		</>
	)
		
}