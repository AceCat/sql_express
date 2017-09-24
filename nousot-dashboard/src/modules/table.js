var React = require('react');


export class ActualRow extends React.Component{ 

  render() {
  	let date = this.props.date;
  	let rental_rate = this.props.rental_rate;
    return (
 	      <div className="forecast-table__row table__row">

	        <div className="forecast-table__col table__col">
	          <span className="table-text table-text__year">{date}</span>
	          <span className="table-text table-text__month"></span>
	        </div>

	        <div className="forecast-table__col table__col">
	          <span className="table-text">{parseFloat(Math.round(rental_rate * 100)/100).toFixed(2)}</span>
	        </div>

	        <div className="forecast-table__col forecast-table__col-set table__col-set">

	        </div>

	      </div>
    );
  }
}

export class ForecastRow extends React.Component{ 

  render() {
  	const convertToPercent = function(decimal){
  		const convertedValue = (decimal * 100) + '%';
  		return convertedValue
  	}

  	let date = this.props.date;
  	let rental_rate = this.props.rental_rate;
  	let confidence_6 = convertToPercent(this.props.confidence_6)
  	let confidence_12 = convertToPercent(this.props.confidence_12)
  	let confidence_18 = convertToPercent(this.props.confidence_18);

    return (
      <div className="forecast-table__row forecast-table__row-prediction table__row">

        <div className="forecast-table__col table__col">
          <span className="table-text table-text__year">{date}</span>
          <span className="table-text table-text__month"></span>
        </div>

        <div className="forecast-table__col table__col">
          <span className="table-text">{parseFloat(Math.round(rental_rate * 100)/100).toFixed(2)}</span>
        </div>



        <div className="forecast-table__col forecast-table__col-set table__col-set">

          <div className="col-set">
            <div className="col-set__item">
              <span className="table-text">{confidence_6}</span>
            </div>
            <div className="col-set__item">
              <span className="table-text">{confidence_12}</span>
            </div>
            <div className="col-set__item">
              <span className="table-text">{confidence_18}</span>
            </div>
          </div>

        </div>

      </div>
    );
  }
}


export class Table extends React.Component {

	render() {
		const dataRows = this.props.data;
		const renderRows = []
		const forecastData = this.props.forecastData
		const forecastRows = []

		dataRows.forEach(function(dataPoint, index) {
			renderRows.push(<ActualRow key={index} date={dataPoint.real_estate_date} rental_rate={dataPoint.rental_rate} />);
		})

		forecastData.forEach(function(dataPoint, index) {
			forecastRows.push(<ForecastRow key={index} date={dataPoint.real_estate_date} rental_rate={dataPoint.rental_rate} confidence_6={dataPoint.confidence_6} confidence_12={dataPoint.confidence_12} confidence_18={dataPoint.confidence_18}/>);
		})



		const finalActualRows = renderRows.reverse()
		const finalForecastRows = forecastRows.reverse()

		return (
	
	<section className="forecast-data">

	  <div className="forecast-table table">

	    <div className="forecast-table__head table__head">
	      <div className="forecast-table__head-row table__head-row">

	        <div className="forecast-table__head-col table__head-col">
	          <span className="table-label">Time Period</span>
	          <a href="" className="tooltip" title="Markets are broken up into 12 defined targets">
	            <svg className="icon-info">
	              <use xlinkHref="#icon-info"></use>
	            </svg>
	          </a>
	        </div>

	        <div className="forecast-table__head-col table__head-col">
	          <span className="table-label">Effective Rental Rate</span>
	          <a href="" className="tooltip" title="Markets are broken up into 12 defined targets">
	            <svg className="icon-info">
	              <use xlinkHref="#icon-info"></use>
	            </svg>
	          </a>
	        </div>

	        <div className="forecast-table__head-col-set table__head-col table__head-col-set">

	          <div className="col-set__label">
	            <span className="table-label">Confidence</span>
	            <a href="" className="tooltip" title="Markets are broken up into 12 defined targets">
	              <svg className="icon-info">
	                <use xlinkHref="#icon-info"></use>
	              </svg>
	            </a>
	          </div>

	          <div className="col-set">
	            <div className="col-set__item">
	              <span className="table-label">6 Mos</span>
	            </div>
	            <div className="col-set__item">
	              <span className="table-label">12 Mos</span>
	            </div>
	            <div className="col-set__item">
	              <span className="table-label">18 Mos</span>
	            </div>
	          </div>

	        </div>

	      </div>
	    </div>

	    <div className="forecast-table__body">
	    	{finalForecastRows}
	    	{finalActualRows}
	    </div>

	  </div>

	</section>
		)
	}
}