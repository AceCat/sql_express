import { Bar, Line } from 'react-chartjs-2'; 
var React = require('react');

export class Chart extends React.Component{ 

	constructor(props) {
		super(props);
	}


	render(){



		const chartData = {
			labels: this.props.chartDates,
			datasets:[
			{
				label: "Actual",
				data: this.props.chartValues,
				pointRadius: 1
			}, 
			{
				label: "Forecast",
				data: this.props.forecastValues,
				backgroundColor: '#e3e550',
				spanGaps: true,
				pointRadius: 1
			}]
		}
			

		return(
			<div className='chart'>
				<Line
				data={chartData}
   options={{
       legend: {
         display: false
       },
       showXLabels: 10,
       scales: {
         xAxes: [{
           ticks: {
           	autoskip: true
            }
           }]
         }
     }}
				/>
			<br />
			</div>
		)
	}
}



