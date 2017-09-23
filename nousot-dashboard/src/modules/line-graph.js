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
				pointRadius: 0,
			}, 
			{
				label: "Forecast",
				data: this.props.forecastValues,
				pointRadius: 0,
				backgroundColor: '#e3e550'
			}]
		}

		return(
			<div className='chart'>
				<Line
				data={chartData}
				/>
			</div>)
	}
}



