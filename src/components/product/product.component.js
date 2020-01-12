import React from 'react';
import { Link } from 'react-router-dom';

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
                                    Contracts</a>
                                <a className="dropdown-item" href="#">
                                    Proposals</a>
                                <a className="dropdown-item" href="#">
                                    Documents</a>
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
                                        <div className="col-lg-5">
                                            <div
                                                className="card box-shadow m-t-30"
                                                style={{ width: 350, height: "auto" }}
                                            >
                                                <div className="row">
                                                    <div className="col-lg-1" />
                                                    <div className="col-lg-9 m-t-10">
                                                        <h5>Top-Hat Plus Plan(IPT)</h5>
                                                        <br />
                                                        <span>Pension Savings</span>
                                                        <br />
                                                        <span>Pension and Investment</span>
                                                        <br />
                                                        <span>Annuity</span>
                                                        <br />
                                                    </div>
                                                    <div className="col-lg-2" />
                                                    <div className="col-lg-12">
                                                        <br />
                                                        <Link className="btn btn-red white full-width" to="/profile/product-details">
                                                            Details
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-5">
                                            <div
                                                className="card box-shadow m-t-30"
                                                style={{ width: 350, height: "auto" }}
                                            >
                                                <div className="row">
                                                    <div className="col-lg-1" />
                                                    <div className="col-lg-9 m-t-10">
                                                        <h5>Capi 21 VAPZ</h5>
                                                        <br />
                                                        <span>Pension Savings</span>
                                                        <br />
                                                        <span>Pension and Investment</span>
                                                        <br />
                                                        <span>Annuity</span>
                                                        <br />
                                                    </div>
                                                    <div className="col-lg-2" />
                                                    <div className="col-lg-12">
                                                        <br />
                                                        <Link className="btn btn-red white full-width" to="/profile/product-details">
                                                            Details
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                    <h5 className="text-red m-t-30">Non-Advised Products</h5>
                                    <div className="row">
                                        <div className="col-lg-5">
                                            <div
                                                className="card box-shadow m-t-30"
                                                style={{ width: 350, height: "auto" }}
                                            >
                                                <div className="row">
                                                    <div className="col-lg-1" />
                                                    <div className="col-lg-9 m-t-10">
                                                        <h5>CAPI 23 Dynamic Fund</h5>
                                                        <br />
                                                        <span>Pension Savings</span>
                                                        <br />
                                                        <span>Pension and Investment</span>
                                                        <br />
                                                        <span>Annuity</span>
                                                        <br />
                                                    </div>
                                                    <div className="col-lg-2" />
                                                    <div className="col-lg-12">
                                                        <br />
                                                        <Link className="btn btn-red white full-width" to="/profile/product-details">
                                                            Details
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-5">
                                            <div
                                                className="card box-shadow m-t-30"
                                                style={{ width: 350, height: "auto" }}
                                            >
                                                <div className="row">
                                                    <div className="col-lg-1" />
                                                    <div className="col-lg-9 m-t-10">
                                                        <h5>CAPI 23 Aggressive Fund</h5>
                                                        <br />
                                                        <span>Pension Savings</span>
                                                        <br />
                                                        <span>Pension and Investment</span>
                                                        <br />
                                                        <span>Annuity</span>
                                                        <br />
                                                    </div>
                                                    <div className="col-lg-2" />
                                                    <div className="col-lg-12">
                                                        <br />
                                                        <Link className="btn btn-red white full-width" to="/profile/product-details">
                                                            Details
                                                        </Link>
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