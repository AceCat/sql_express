var React = require('react');


export class Header extends React.Component{ 

  render() {
  	return (
	  <header className="header">
	      <a href="" className="header-logo"><img src="/dist/images/logo-nousot.svg" alt="Nousot" /></a>
	      <div className="header-period">
	        Period Analyzed: September 2017
	      </div>
	      <nav className="header-nav">
	        <ul>
	          <li><a href="">Results Archive</a></li>
	          <li><a href="">Upload Data</a></li>
	          <li className="header-nav__has-dropdown">
	            <a href="" className="dropdown-toggle">James</a>
	            <ul className="dropdown-menu">
	              <li><a href="settings.html">Settings</a></li>
	              <li><a href="users.html">Users</a></li>
	              <li><a href="">Log Out</a></li>
	            </ul>
	          </li>
	        </ul>

	      </nav>
	  </header>
	)
  }
}