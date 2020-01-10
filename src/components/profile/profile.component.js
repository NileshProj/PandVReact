import React from 'react';
import { Router, Link, Switch, Route } from 'react-router-dom';
import Details from '../details/details.component';
import Simulation from '../simulation/simulation';
import Offers from '../offer/offer';

function Profile() {
    return (
        <div>
            <div className="row">
                <nav className="col-lg-2 d-none d-md-block bg-brown sidebar">
                    <div className="sidebar-sticky ">
                        <ul className="nav flex-column list-group  list-group-flush">
                            <li className="nav-item list-group-item bg-brown active">
                                <Link className="nav-link active" to="/profile/details">
                                    <span data-feather="home" />
                                    <i
                                        className="fa fa-user-circle fa-lg m-r-10"
                                        aria-hidden="true"
                                    />
                                    Profile <span className="sr-only">(current)</span>
                                    <i
                                        className="fa fa-arrow-left  white m-t-5 fa-lg float-right"
                                        aria-hidden="true"
                                    />
                                </Link>
                            </li>
                            <li className="nav-item list-group-item bg-brown">
                                <Link className="nav-link" to="/profile/simulation">
                                    <span data-feather="file" />
                                    <i className="fa fa-dashboard fa-lg m-r-10" aria-hidden="true" />
                                    Simulations
            </Link>
                            </li>
                            <li className="nav-item list-group-item bg-brown">
                                <a className="nav-link" href="need-analysis.html">
                                    <span data-feather="file" />
                                    <i className="fa fa-dashboard fa-lg m-r-10" aria-hidden="true" />
                                    Need Analysis
            </a>
                            </li>
                            <li className="nav-item list-group-item bg-brown">
                                <a className="nav-link" href="mifid.html">
                                    <span data-feather="file" />
                                    <i className="fa fa-dashboard fa-lg m-r-10" aria-hidden="true" />
                                    MIFID
            </a>
                            </li>
                            <li className="nav-item list-group-item bg-brown">
                                <a className="nav-link" href="product-selection.html">
                                    <span data-feather="file" />
                                    <i className="fa fa-dashboard fa-lg m-r-10" aria-hidden="true" />
                                    Product Selection
            </a>
                            </li>
                            <li className="nav-item list-group-item bg-brown">
                                <Link className="nav-link" to="/profile/Offers">
                                    <span data-feather="file" />
                                    <i className="fa fa-dashboard fa-lg m-r-10" aria-hidden="true" />
                                    Offers &amp; Proposals
            </Link>
                            </li>
                            <li className="nav-item list-group-item bg-brown">
                                <a className="nav-link" href="documents.html">
                                    <span data-feather="file" />
                                    <i className="fa fa-dashboard fa-lg m-r-10" aria-hidden="true" />
                                    Documents
            </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div className="row m-t-100">
                <div className="col-lg-1" />
                <div className="col-lg-11">
                <Route path="/profile/details">
                    <Details></Details>
                </Route> 
                <Route path="/profile/simulation">
                    <Simulation/>
                </Route>    
                <Route path="/profile/Offers">
                    <Offers/>
                </Route>   
                </div>
            </div>
            
        </div>


    )
}

export default Profile;