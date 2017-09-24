import { Line } from 'react-chartjs-2'; 
var React = require('react');

export class Chart extends React.Component{ 


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
				backgroundColor: 'rgba(255,255,0,.1)',
				spanGaps: true,
				pointRadius: 1
			}]
		}
			

		return(
			<div className='chart'>
				<Line
				data={chartData}
				/>
			<br />
			</div>
		)
	}
}



