import React from 'react';
import './header.component.css'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-maroon p-3">
          <img src="images/pnv logo.jpg" height={50} alt=""/>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse m-l-250" id="navbarCollapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Portfolio</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/profile">Customers</Link>
              </li>
              
            </ul>
            <form className="form-inline mt-2 mt-md-0">
              <input className="mr-sm-2 search" type="text" placeholder="Search by Customer Id or email id" aria-label="Search" />
              <a href="search-result.html" > <i className="fa fa-search fa-lg search-icon" aria-hidden="true" /></a>
              <ul className="navbar-nav mr-auto">
                <li className="nav-item  m-r-50 ">
                  <i className="fa fa-bell fa-lg m-t-10 white" aria-hidden="true" />
                </li>
                <li className="nav-item border-left p-l-10">
                  <span>
                    <i className="fa fa-user-circle-o fa-2x m-t-5 m-l-10" aria-hidden="true" />
                  </span>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/profile">Rune Celik</Link>
                </li>
              </ul>
            </form>
          </div>
        </nav>
      </header>
      
    )
}

export default Header;