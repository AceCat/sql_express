import { Bar, Line } from 'react-chartjs-2'; 
var React = require('react');

export class Chart extends React.Component{ 

	constructor(props) {
		super(props);
		this.state = 
		{
			chartData:{
				labels: [this.props.chartDates, "2016-03-31"],
				datasets:[
				{
					data: this.props.chartValues,
					forecast: 854.130987754
				}]
			}
		}
	}


	render(){

		const chartData = {
			labels: this.props.chartDates,
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

// 2016-03-31,854.130987754,0.95,0.8,0.7
// 2016-04-30,862.0656874142,0.95,0.8,0.7
// 2016-05-31,863.0322815431,0.95,0.8,0.7
// 2016-06-30,859.2908168872,0.95,0.8,0.7
// 2016-07-31,861.7534636306,0.95,0.8,0.7
// 2016-08-31,900.2862137831,0.95,0.8,0.7
// 2016-09-30,862.7437011634,0.95,0.8,0.7
// 2016-10-31,875.9661100383,0.95,0.8,0.7
// 2016-11-30,867.4004992075,0.95,0.8,0.7
// 2016-12-31,866.3465430197,0.95,0.8,0.7
// 2017-01-31,895.9187964378,0.95,0.8,0.7
// 2017-02-28,880.2910483966,0.95,0.8,0.7
// 2017-03-31,888.112071243,0.95,0.8,0.7



