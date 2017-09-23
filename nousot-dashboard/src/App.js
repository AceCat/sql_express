import React, { Component } from 'react';
import './App.css';
import { Header } from './modules/header.js';
import { Aside } from './modules/aside.js';
import { ForecastData} from './modules/forecast-data.js';
import { ForecastHeader} from './modules/forecast-header.js';
import { Chart } from './modules/line-graph.js';
import { Table } from './modules/table.js';
const api = require('./modules/api.js');




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: [],
      forecastData: []
    }
  }

  componentDidMount() {
    api.makeAPICall('csvView')
      .then((response) => {
        this.setState({
          chartData: response
      });
    });
    api.makeAPICall('forecastView')
      .then((response) => {
        this.setState({
          forecastData: response
      });
    });
  } 


  render() {
    const chartSize = this.state.chartData.length;
    const forecastSize = this.state.forecastData.length;

    const forecastValues = [];
    const chartDates = [];
    for (var i = 0; i < chartSize; i++) {
      chartDates.push(this.state.chartData[i].real_estate_date)
      forecastValues.push(' ')
    }

    const chartValues = [];
    for (var x = 0; x < chartSize; x++) {
      chartValues.push(this.state.chartData[x].rental_rate)
    }

    for (var j = 0; j < forecastSize; j++) {
      chartDates.push(this.state.forecastData[j].real_estate_date)
    }

    for (var y = 0; y < forecastSize; y++) {
      forecastValues.push(this.state.forecastData[y].rental_rate)
    }

    console.log(forecastValues)

    return (
      <div>
        <Header />
        <Aside />

        <main className="main" role="main">
          <ForecastHeader />
          <Chart chartDates={chartDates} chartValues={chartValues} forecastValues={forecastValues}/>
          <Table data={this.state.chartData} forecastData={this.state.forecastData} forecastValues={forecastValues}/>
        </main>

          <script src="https://code.jquery.com/jquery-1.12.3.min.js"></script>
          <script src="/dist/js/jquery-ui.min.js"></script>
          <script src="/dist/js/main.js"></script>
      </div>
    );
  }
}

export default App;
