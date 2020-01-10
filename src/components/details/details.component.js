import React from 'react';
import { Link } from 'react-router-dom';

function Details() {
    return (

        <div >
            <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <a
                        className="nav-item nav-link active tab-name"
                        id="nav-home-tab"
                        data-toggle="tab"
                        href="#nav-home"
                        role="tab"
                        aria-controls="nav-home"
                        aria-selected="true"
                    >
                        Charl Robert
          </a>
                    <div className="btn-group dropright">
                        <i
                            className="fa fa-plus-circle fa-2x m-l-10 m-t-5 text-red"
                            id="dropdownMenu"
                            data-toggle="dropdown"
                            data-reference="parent"
                        />
                        <div className="dropdown-menu" aria-labelledby="dropdownMenu">
                            <span className="dropdown-item-text">Offers</span>
                            <Link className="dropdown-item" href="#">
                                Contracts
              </Link>
                            <Link className="dropdown-item" href="#">
                                Proposals
              </Link>
                            <Link className="dropdown-item" href="#">
                                Documents
              </Link>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
                <div
                    className="tab-pane fade show active"
                    id="nav-home"
                    role="tabpanel"
                    aria-labelledby="nav-home-tab"
                >
                    <div className="row m-t-10">
                        <div className="col-lg-6">
                            <div className="card m-t-10">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <img
                                            src="/images/user1.png"
                                            height={150}
                                            width={150}
                                            className="profile-pic"
                                            alt="Name"
                                        />
                                    </div>
                                    <div className="col-lg-8">
                                        <div className="card-body m-t-50">
                                            <h5 className="card-title">Charl Robert</h5>
                                            <p className="card-text">
                                                123, Alex Appartment, Test West
                      </p>
                                            <i className="fa fa-star-o fa-2x top m-t-50 m-r-50 text-red" />
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className="row m-20">
                                    <div className="col-lg-12">
                                        <h5 className="card-title text-red">
                                            Contact &amp; Additional Details
                    </h5>
                                        <i
                                            className="fa fa-pencil-square-o float-right fa-2x top text-red"
                                            aria-hidden="true"
                                        />
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <h5>Charl Robert</h5>
                                                <ul className="nav flex-column mb-2">
                                                    <li className="nav-item">
                                                        <i
                                                            className="fa fa-mobile fa-lg m-r-10"
                                                            aria-hidden="true"
                                                        />{" "}
                                                        +01 9097 969 940
                          </li>
                                                    <li className="nav-item">
                                                        <i
                                                            className="fa fa-mobile fa-lg m-r-10"
                                                            aria-hidden="true"
                                                        />{" "}
                                                        +01 9097 969 940
                          </li>
                                                    <li className="nav-item">
                                                        <i
                                                            className="fa fa-envelope-o m-r-5"
                                                            aria-hidden="true"
                                                        />{" "}
                                                        not found
                          </li>
                                                </ul>
                                                <br />
                                                <br />
                                                <div>
                                                    <ul className="nav flex-column mb-2">
                                                        <li className="nav-item">
                                                            <strong>D.O.B: </strong>30/03/1989
                            </li>
                                                        <li className="nav-item">
                                                            <strong>Gender: </strong>Male
                            </li>
                                                        <li className="nav-item">
                                                            <strong>Profession: </strong> Designer
                            </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <h5>Seb Robert (2nd Contact)</h5>
                                                <ul className="nav flex-column mb-2">
                                                    <li className="nav-item">
                                                        <i
                                                            className="fa fa-mobile fa-lg m-r-10"
                                                            aria-hidden="true"
                                                        />{" "}
                                                        +01 9097 369 940
                          </li>
                                                    <li className="nav-item">
                                                        <i
                                                            className="fa fa-mobile fa-lg m-r-10"
                                                            aria-hidden="true"
                                                        />{" "}
                                                        +01 9097 969 940
                          </li>
                                                    <li className="nav-item">
                                                        <i
                                                            className="fa fa-envelope-o m-r-5"
                                                            aria-hidden="true"
                                                        />{" "}
                                                        abc@text.com
                          </li>
                                                </ul>
                                                <br />
                                                <br />
                                                <div>
                                                    <ul className="nav flex-column mb-2">
                                                        <li className="nav-item">
                                                            <strong>Marrital Status: </strong>Married
                            </li>
                                                        <li className="nav-item">
                                                            <strong>ID Card: </strong>DL
                            </li>
                                                        <li className="nav-item">
                                                            <strong>Valid Till: </strong> 12/2020
                            </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card m-t-10" style={{ height: 200 }}>
                                <h5 className="card-title text-red m-t-10 m-l-10">
                                    Recent Communication
                </h5>
                                <div>
                                    <br />
                                    <div className="border m-l-10 m-r-10">
                                        Proficiat met verjadrag 12/12/2018
                  </div>
                                    <div className="border m-l-10 m-t-10 m-r-10">
                                        Proficiat met verjadrag 12/12/2018
                  </div>
                                </div>
                            </div>
                            <div className="card m-t-10" style={{ height: 200 }}>
                                <h5 className="card-title text-red m-t-10 m-l-10">Relations</h5>
                                <div>
                                    <br />
                                    <div className="row">
                                        <div className="col-lg-2">
                                            <i
                                                className="fa fa-user fa-lg m-r-10 float-right"
                                                aria-hidden="true"
                                            />
                                        </div>
                                        <div className="col-lg-10">
                                            <h5>
                                                Andréke Robert
                        <br />
                                                Julia Robert
                        <br />
                                                Stephanie Robert
                      </h5>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-2">
                                            <i
                                                className="fa fa-folder fa-lg m-r-10 float-right"
                                                aria-hidden="true"
                                            />
                                        </div>
                                        <div className="col-lg-10">
                                            <h5>Pied Piper</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card m-t-10 hide">
                                <div className="card-body">
                                    <h5 className="card-title text-red">Existing Contracts</h5>
                                    <br />
                                    <div className="row">
                                        <div className="col-sm-6 p-r-0">
                                            <div className="card bg-dark-gray">
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-lg-3">
                                                            <i
                                                                className="fa fa-money fa-2x"
                                                                aria-hidden="true"
                                                            />
                                                        </div>
                                                        <div className="col-lg-9">
                                                            <h5>45454533-3040</h5>
                                                            <p className="card-text">Pension Savings</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 p-l-0">
                                            <div className="card bg-gray">
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-lg-3">
                                                            <i
                                                                className="fa fa-car fa-2x"
                                                                aria-hidden="true"
                                                            />
                                                        </div>
                                                        <div className="col-lg-9">
                                                            <h5>45454533-3040</h5>
                                                            <p className="card-text">Car</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <h5 className="card-title text-red">Offers and Proposals</h5>
                                    <a href="#" className="btn btn-red white full-width">
                                        Create New
                  </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Details;