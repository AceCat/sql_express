var React = require('react');


export class Aside extends React.Component{ 

  render() {
  	return (
    <aside className="left-sidebar">
      <nav className="main-nav">
        <a href="/">
          <svg className="icon-analysis main-nav--icon">
            <use xlinkHref="#icon-analysis"></use>
          </svg>
          <span className="main-nav--label">Summary</span>
        </a>
        <a href="forecast.html" className="main-nav--item">
          <svg className="icon-forecast main-nav--icon">
            <use xlinkHref="#icon-forecast"></use>
          </svg>
          <span className="main-nav--label">Forecast</span>
        </a>
        <a href="drivers.html" className="main-nav--item">
          <svg className="icon-drivers main-nav--icon">
            <use xlinkHref="#icon-drivers"></use>
          </svg>
          <span className="main-nav--label">Drivers</span>
        </a>
        <a href="scenario.html" className="main-nav--item">
          <svg className="icon-scenario-builder main-nav--icon">
            <use xlinkHref="#icon-scenario-builder"></use>
          </svg>
          <span className="main-nav--label">Scenario Builder</span>
        </a>
        <a href="performance.html" className="main-nav--item">
          <svg className="icon-performance main-nav--icon">
            <use xlinkHref="#icon-performance"></use>
          </svg>
          <span className="main-nav--label">Performance</span>
        </a>
        <a href="data.html" className="main-nav--item">
          <svg className="icon-view-data main-nav--icon">
            <use xlinkHref="#icon-view-data"></use>
          </svg>
          <span className="main-nav--label">View Data</span>
        </a>
        <a href="demo.html" className="main-nav--item">
          <svg className="icon-demo main-nav--icon">
            <use xlinkHref="#icon-demo"></use>
          </svg>
          <span className="main-nav--label">Market Demo</span>
        </a>
      </nav>

    </aside>
	)
  }
}