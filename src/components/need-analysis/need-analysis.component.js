import React from 'react'

class NeedAnalysis extends React.Component {

    render() {
        return (
            <div className="col-lg-10">
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
                            Charl Robert &gt; Need Analysis
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
                                <div className="card">
                                    <div className="row">
                                        <div className="col-lg-6 m-t-20">
                                            <h5 className="card-title text-red p-l-10 p-t-10">
                                                Specification details for pension
                </h5>
                                            <div className="p-l-10">
                                                <form>
                                                    <div className="row">
                                                        <div className="col-lg-9 p-r-0">
                                                            <div className="form-group">
                                                                <label htmlFor="one">Required pension capital</label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control "
                                                                    defaultValue={'50,000'}
                                                                    id="one"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3">
                                                            <i className="fa fa-info-circle fa-2x m-t-30" />
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-9 p-r-0">
                                                            <div className="form-group">
                                                                <label htmlFor="two">Required death capital</label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control "
                                                                    defaultValue={'200,000'}
                                                                    id="two"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3">
                                                            <i className="fa fa-info-circle fa-2x m-t-30" />
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-9 p-r-0">
                                                            <div className="form-group">
                                                                <label htmlFor="two">Required death capital</label>
                                                                <br />
                                                                <div
                                                                    className="btn-group btn-group-sm"
                                                                    role="group"
                                                                    aria-label
                                                                >
                                                                    <button type="button" className="btn btn-red white">
                                                                        Yes
                            </button>
                                                                    <button type="button" className="btn btn-secondary">
                                                                        No
                            </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3">
                                                            <i className="fa fa-info-circle fa-2x m-t-30" />
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-9 p-r-0">
                                                            <div className="form-group">
                                                                <label htmlFor="two">
                                                                    Do you want to pay single premium?
                          </label>
                                                                <br />
                                                                <div
                                                                    className="btn-group btn-group-sm"
                                                                    role="group"
                                                                    aria-label
                                                                >
                                                                    <button type="button" className="btn btn-red white">
                                                                        Yes
                            </button>
                                                                    <button type="button" className="btn btn-secondary">
                                                                        No
                            </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3"></div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div
                                                className="bg-light p-l-20 p-t-20"
                                                style={{ height: "100%" }}
                                            >
                                                <h5 className="card-title text-red p-l-10 p-t-10">
                                                    Financial objective
                  </h5>
                                                <form>
                                                    <div className="row">
                                                        <div className="col-lg-9 p-r-0">
                                                            <div className="form-group">
                                                                <label htmlFor="two">Death Cover</label>
                                                                <br />
                                                                <div
                                                                    className="btn-group btn-group-sm"
                                                                    role="group"
                                                                    aria-label
                                                                >
                                                                    <button type="button" className="btn btn-red white">
                                                                        Yes
                            </button>
                                                                    <button type="button" className="btn btn-secondary">
                                                                        No
                            </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3"></div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-9 p-r-0">
                                                            <div className="form-group">
                                                                <label htmlFor="two">Invalidity Coverage</label>
                                                                <br />
                                                                <div
                                                                    className="btn-group btn-group-sm"
                                                                    role="group"
                                                                    aria-label
                                                                >
                                                                    <button type="button" className="btn btn-red white">
                                                                        Yes
                            </button>
                                                                    <button type="button" className="btn btn-secondary">
                                                                        No
                            </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3"></div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-9 p-r-0">
                                                            <div className="form-group">
                                                                <label htmlFor="two">Accidental Coverage</label>
                                                                <br />
                                                                <div
                                                                    className="btn-group btn-group-sm"
                                                                    role="group"
                                                                    aria-label
                                                                >
                                                                    <button type="button" className="btn btn-red white">
                                                                        Yes
                            </button>
                                                                    <button type="button" className="btn btn-secondary">
                                                                        No
                            </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3"></div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-9 p-r-0">
                                                            <div className="form-group">
                                                                <label htmlFor="two">Pension Coverage</label>
                                                                <br />
                                                                <div
                                                                    className="btn-group btn-group-sm"
                                                                    role="group"
                                                                    aria-label
                                                                >
                                                                    <button type="button" className="btn btn-red white">
                                                                        Yes
                            </button>
                                                                    <button type="button" className="btn btn-secondary">
                                                                        No
                            </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3"></div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-9 p-r-0">
                                                            <div className="form-group">
                                                                <label htmlFor="two">Savings and Investments</label>
                                                                <br />
                                                                <div
                                                                    className="btn-group btn-group-sm"
                                                                    role="group"
                                                                    aria-label
                                                                >
                                                                    <button type="button" className="btn btn-red white">
                                                                        Yes
                            </button>
                                                                    <button type="button" className="btn btn-secondary">
                                                                        No
                            </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3"></div>
                                                        <div className="col-lg-9 p-r-0">
                                                            <a href="#" className="btn btn-red white full-width">
                                                                Proceed to MIFID Quesionnaire
                        </a>
                                                        </div>
                                                    </div>
                                                </form>
                                                <br />
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

export default NeedAnalysis;