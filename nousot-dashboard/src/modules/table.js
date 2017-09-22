var React = require('react');


export class TableRow extends React.Component{ 

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
	          <span className="table-text">{rental_rate}</span>
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
    );
  }
}


export class Table extends React.Component {

	render() {
		const dataRows = this.props.data;
		const renderRows = []

		dataRows.forEach(function(dataPoint, index) {
			renderRows.push(<TableRow key={index} date={dataPoint.real_estate_date} rental_rate={dataPoint.rental_rate} />);
		})

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
	    	
	    	{renderRows}

	    </div>

	  </div>

	</section>
		)
	}
}