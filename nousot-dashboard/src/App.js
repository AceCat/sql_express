import React, { Component } from 'react';
import './App.css';
import { Header } from './modules/header.js';
import { Aside } from './modules/aside.js';
import { ForecastHeader} from './modules/forecast-header.js';
import { Chart } from './modules/line-graph.js';
import { Table } from './modules/table.js';
import {Pagination} from './modules/paginate.js';
const api = require('./modules/api.js');




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: [],
      forecastData: [],
      currentPage: 1,
      itemsPerPage: 12
    }
    this.changePage = this.changePage.bind(this);
  }

  changePage(pageNum) {
    this.setState({currentPage: pageNum});
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

    const currentPage = this.state.currentPage
    const itemsPerPage = this.state.itemsPerPage

    const chartDates = [];
    const forecastValues = [];
    const chartValues = [];

    for (var i = 0; i < chartSize; i++) {
      chartDates.push(this.state.chartData[i].real_estate_date)
      forecastValues.push(null)
    }
    for (var j = 0; j < forecastSize; j++) {
      chartDates.push(this.state.forecastData[j].real_estate_date)
    }
    for (var x = 0; x < chartSize; x++) {
      chartValues.push(this.state.chartData[x].rental_rate)
    }
    for (var y = 0; y < forecastSize; y++) {
      forecastValues.push(this.state.forecastData[y].rental_rate)
    }


    return (
      <div>
        <Header />
        <Aside />

        <main className="main" role="main">
          <ForecastHeader />
          <Chart chartDates={chartDates} chartValues={chartValues} forecastValues={forecastValues}/>
          <Table currentPage={currentPage} itemsPerPage={itemsPerPage} data={this.state.chartData} forecastData={this.state.forecastData} forecastValues={forecastValues}/>
          <Pagination
          data={chartDates}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          onPageChange={this.changePage}
          />
        </main>
          <script src="https://code.jquery.com/jquery-1.12.3.min.js"></script>
          <script src="/dist/js/jquery-ui.min.js"></script>
          <script src="/dist/js/main.js"></script>
      </div>
    );
  }
}

export default App;
