import React from 'react';

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
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
                            Charl Robert &gt; Product Selection
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
                                <a className="dropdown-item" href="#">
                                    Contracts
          </a>
                                <a className="dropdown-item" href="#">
                                    Proposals
          </a>
                                <a className="dropdown-item" href="#">
                                    Documents
          </a>
                            </div>
                        </div>
                        {/* <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Profile</a>
      <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Contact</a> */}
                    </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                    <div
                        className="tab-pane fade show active"
                        id="nav-home"
                        role="tabpanel"
                        aria-labelledby="nav-home-tab"
                    >
                        <div className="row">
                            <div className="col-lg-12">
                                <div
                                    className="card box-shadow hide"
                                    style={{ width: 300, margin: 20 }}
                                >
                                    <div className="row no-gutters">
                                        <div className="col-md-5">
                                            <img
                                                src="images/user1.png"
                                                height={100}
                                                width={100}
                                                className="profile-pic"
                                                alt="Name"
                                            />
                                        </div>
                                        <div className="col-md-7 m-t-50">
                                            <div className="card-body">
                                                <h5 className="card-title">Jhon carlos</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-1" />
                                        <div className="col-lg-8">
                                            <br />
                                            <ul className="nav flex-column mb-2">
                                                <li className="nav-item">
                                                    <strong>Status: </strong>Client Alteration Review
                  </li>
                                                <li className="nav-item">
                                                    <strong>Due Date: </strong>03/03/2020
                  </li>
                                            </ul>
                                            <br />
                                        </div>
                                        <div className="col-lg-3" />
                                        <div className="col-lg-12">
                                            <a href="#" className="btn btn-red white full-width">
                                                View Offer
                </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="border">
                            <div className="row">
                                <div className="col-lg-12 m-l-50">
                                    <h5 className="text-red m-t-30">Advised Products</h5>
                                    <br />
                                    <strong>Filter By: </strong>{" "}
                                    <span className="text-orange">
                                        {" "}
                                        Death | <strong>Accident</strong> | Sickness and Incapacity
            </span>
                                    <br />
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <div
                                                className="card box-shadow m-t-30"
                                                style={{ width: 350, height: "auto" }}
                                            >
                                                <div className="row">
                                                    <div className="col-lg-1" />
                                                    <div className="col-lg-8 m-t-10">
                                                        <h5>Top-Hat Plus Plan(IPT)</h5>
                                                        <br />
                                                        <span>Pension Savings</span>
                                                        <br />
                                                        <span>Pension and Investment</span>
                                                        <br />
                                                        <span>Annuity</span>
                                                        <br />
                                                    </div>
                                                    <div className="col-lg-3" />
                                                    <div className="col-lg-12">
                                                        <br />
                                                        <a href="#" className="btn btn-red white full-width">
                                                            Details
                      </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div
                                                className="card box-shadow m-t-30"
                                                style={{ width: 350, height: "auto" }}
                                            >
                                                <div className="row">
                                                    <div className="col-lg-1" />
                                                    <div className="col-lg-8 m-t-10">
                                                        <h5>Capi 21 VAPZ</h5>
                                                        <br />
                                                        <span>Pension Savings</span>
                                                        <br />
                                                        <span>Pension and Investment</span>
                                                        <br />
                                                        <span>Annuity</span>
                                                        <br />
                                                    </div>
                                                    <div className="col-lg-3" />
                                                    <div className="col-lg-12">
                                                        <br />
                                                        <a href="#" className="btn btn-red white full-width">
                                                            Details
                      </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                    <h5 className="text-red m-t-30">Non-Advised Products</h5>
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <div
                                                className="card box-shadow m-t-30"
                                                style={{ width: 350, height: "auto" }}
                                            >
                                                <div className="row">
                                                    <div className="col-lg-1" />
                                                    <div className="col-lg-8 m-t-10">
                                                        <h5>CAPI 23 Dynamic Fund</h5>
                                                        <br />
                                                        <span>Pension Savings</span>
                                                        <br />
                                                        <span>Pension and Investment</span>
                                                        <br />
                                                        <span>Annuity</span>
                                                        <br />
                                                    </div>
                                                    <div className="col-lg-3" />
                                                    <div className="col-lg-12">
                                                        <br />
                                                        <a href="#" className="btn btn-red white full-width">
                                                            Details
                      </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div
                                                className="card box-shadow m-t-30"
                                                style={{ width: 350, height: "auto" }}
                                            >
                                                <div className="row">
                                                    <div className="col-lg-1" />
                                                    <div className="col-lg-8 m-t-10">
                                                        <h5>CAPI 23 Aggressive Fund</h5>
                                                        <br />
                                                        <span>Pension Savings</span>
                                                        <br />
                                                        <span>Pension and Investment</span>
                                                        <br />
                                                        <span>Annuity</span>
                                                        <br />
                                                    </div>
                                                    <div className="col-lg-3" />
                                                    <div className="col-lg-12">
                                                        <br />
                                                        <a href="#" className="btn btn-red white full-width">
                                                            Details
                      </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Product;