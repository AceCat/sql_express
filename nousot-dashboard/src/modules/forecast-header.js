var React = require('react');


export class ForecastHeader extends React.Component{ 

  render() {
    return (
      <header className="view-header">
        <div className="view-header--content">
          <h1 className="title__h2">Forecast for <span className="title-taget">Effective Rental Rate</span> in <span className="title-taget">Houston-The Woodlands-Sugarland</span></h1>
          <p>You can compare the forecasts for two separate series by selecting the targets below.</p>
        </div>
        <div className="view-header--actions">
          <button className="btn btn__download btn__outline">
            <span className="btn__label">Forecast Data</span>
            <svg className="icon-download btn__icon">
              <use xlinkHref="#icon-download"></use>
            </svg>
          </button>
        </div>
      </header>
  )
  }
}