import React from 'react';

class MIFID extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

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
                            Charl Robert &gt; mifid
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
                                        <div className="col-lg-6 p-r-0">
                                            <ul className="nav list-group list-group-flush simulation-menu m-t-20">
                                                <li className="nav-item list-group-item">
                                                    <span>
                                                        <strong>1.</strong> Did you acquire knowledge of financial
                                                        products via your job or education
                    </span>
                                                </li>
                                                <li className="nav-item list-group-item bg-light">
                                                    <span>
                                                        <strong>2.</strong> How did you keep informed on
                                                        Financial-economic world
                    </span>
                                                </li>
                                                <li className="nav-item list-group-item">
                                                    <span>
                                                        <strong>3.</strong> Do you possess Real Estate
                    </span>
                                                </li>
                                                <li className="nav-item list-group-item">
                                                    <span>
                                                        <strong>4.</strong> What is your monthly net income{" "}
                                                    </span>
                                                </li>
                                                <li className="nav-item list-group-item">
                                                    <span>
                                                        <strong>5.</strong> How much are you able to save on
                                                        monthly basis taking into account your regular expenses
                    </span>
                                                </li>
                                                <li className="nav-item list-group-item">
                                                    <span>
                                                        <strong>6.</strong> How do you expect your financial
                                                        simulation to evolve in the short term(5 years)
                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-6 p-l-0">
                                            <div
                                                className="bg-light p-l-20 p-t-20"
                                                style={{ height: "100%" }}
                                            >
                                                <span>
                                                    <strong>1.</strong> Answer1
                  </span>
                                                <br />
                                                <span>
                                                    <strong>2.</strong> Answer2
                  </span>
                                                <br />
                                                <span>
                                                    <strong>3.</strong> Answer3
                  </span>
                                                <br />
                                                <span>
                                                    <strong>4.</strong> Answer4
                  </span>
                                                <br />
                                                <button className="btn btn-red full-width white" style={{position: "absolute", width: '97%', bottom: 0, left: 0}}>Complete Questionnaire</button>
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

export default MIFID;