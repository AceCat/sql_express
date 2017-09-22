import { Bar, Line } from 'react-chartjs-2'; 
var React = require('react');

export class Chart extends React.Component{ 

	constructor(props) {
		super(props);
		this.state = 
		{
			chartData:{
				labels: this.props.chartDates,
				datasets:[
				{
					data: this.props.chartValues
				}]
			}
		}
	}


	render(){

		const chartData = {
			labels:this.props.chartDates,
			datasets:[{
				data: this.props.chartValues
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


