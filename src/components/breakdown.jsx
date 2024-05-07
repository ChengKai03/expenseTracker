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
		'rgb(255, 205, 86)'
	  ],
	  hoverOffset: 4
	}]
  };
  


export default function Breakdown(){

	const [chartData, setChartData] = useState(data)

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
		})
	}
	
	useEffect(getMonthSummary, [])

	ipcRenderer.on('signal-month-summary', (event, message) =>{
		getMonthSummary()
	})

	return(
		<>
			<Pie data={chartData}/>

			<span id="total-cost" className="heading">Total: $</span>
		</>
	)
		
}