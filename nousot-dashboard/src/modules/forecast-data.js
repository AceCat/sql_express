var React = require('react');

export class ForecastData extends React.Component{ 

	constructor(props) {
		super(props);
	}


  render() {
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

	      <div className="forecast-table__row forecast-table__row-prediction table__row">

	        <div className="forecast-table__col table__col">
	          <span className="table-text table-text__year">2018</span>
	          <span className="table-text table-text__month">March</span>
	        </div>

	        <div className="forecast-table__col table__col">
	          <span className="table-text">152.1513901</span>
	        </div>

	        <div className="forecast-table__col forecast-table__col-set table__col-set">

	          <div className="col-set">
	            <div className="col-set__item">
	              <span className="table-text">17%</span>
	            </div>
	            <div className="col-set__item">
	              <span className="table-text">55%</span>
	            </div>
	            <div className="col-set__item">
	              <span className="table-text">91%</span>
	            </div>
	          </div>

	        </div>

	      </div>

	      <div className="forecast-table__row table__row">

	        <div className="forecast-table__col table__col">
	          <span className="table-text table-text__year">2018</span>
	          <span className="table-text table-text__month">February</span>
	        </div>

	        <div className="forecast-table__col table__col">
	          <span className="table-text">152.1513901</span>
	        </div>

	        <div className="forecast-table__col forecast-table__col-set table__col-set">

	          <div className="col-set">
	            <div className="col-set__item">
	              <span className="table-text">17%</span>
	            </div>
	            <div className="col-set__item">
	              <span className="table-text">55%</span>
	            </div>
	            <div className="col-set__item">
	              <span className="table-text">91%</span>
	            </div>
	          </div>

	        </div>

	      </div>

	    </div>

	  </div>

</section>
	)
  }
}






