import React from 'react';
import { Link } from 'react-router-dom';

class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { active: 1, popup: false};
    }

    
    setActive(index) {
        this.setState({ active: index });
    }

    render() {
        return (
            
                    <nav className="col-lg-2 d-none d-md-block bg-brown sidebar">
                        <div className="sidebar-sticky ">
                            <ul className="nav flex-column list-group  list-group-flush">
                                <li className={"nav-item list-group-item bg-brown p-l-0 " + (this.state.active === 1 ? 'active' : '')}>
                                    <Link className={"nav-link " + (this.state.active === 1 ? 'active' : '')} onClick={() => this.setState({ active: 1 })} to="/profile/details/0">
                                        <span data-feather="home" />
                                        <i className="fa fa-user-circle fa-lg m-r-10"
                                            aria-hidden="true" />
                                        Profile <span className="sr-only">(current)</span>
                                        <i className={"fa fa-arrow-left  white m-t-5 fa-lg float-right " + (this.state.active === 1 ? '' : 'hide')}
                                            aria-hidden="true" />
                                    </Link>
                                </li>
                                <li className={"nav-item list-group-item bg-brown p-l-0 " + (this.state.active === 2 ? 'active' : '')}>
                                    <Link className={"nav-link " + (this.state.active === 2 ? 'active' : '')} 
                                    onMouseEnter={()=>this.setState({popup: true})}
                                    // onMouseLeave={()=>this.setState({popup: false})}
                                    onClick={() => this.setState({ active: 2 })} to="/profile/simulation">
                                        <span data-feather="file" />
                                        <i className="fa fa-dashboard fa-lg m-r-10" aria-hidden="true" />
                                        Simulations
                                    <i className={"fa fa-arrow-left  white m-t-5 fa-lg float-right " + (this.state.active === 2 ? '' : 'hide')}
                                            aria-hidden="true" />
                                    </Link>
                                </li>
                                <li className={"nav-item list-group-item bg-brown p-l-0 " + (this.state.active === 3 ? 'active' : '')}>
                                    <Link className={"nav-link " + (this.state.active === 3 ? 'active' : '')} onClick={() => this.setState({ active: 3 })} to="/profile/need-analysis">
                                        <span data-feather="file" />
                                        <i className="fa fa-dashboard fa-lg m-r-10" aria-hidden="true" />
                                        Need Analysis
                                    <i className={"fa fa-arrow-left  white m-t-5 fa-lg float-right " + (this.state.active === 3 ? '' : 'hide')}
                                            aria-hidden="true" />
                                    </Link>
                                </li>
                                <li className={"nav-item list-group-item bg-brown p-l-0 " + (this.state.active === 4 ? 'active' : '')}>
                                    <Link className={"nav-link " + (this.state.active === 4 ? 'active' : '')} onClick={() => this.setState({ active: 4 })} to="/profile/mifid">
                                        <span data-feather="file" />
                                        <i className="fa fa-dashboard fa-lg m-r-10" aria-hidden="true" />
                                        MIFID
                                    <i className={"fa fa-arrow-left  white m-t-5 fa-lg float-right " + (this.state.active === 4 ? '' : 'hide')}
                                            aria-hidden="true" />
                                    </Link>
                                </li>
                                <li className={"nav-item list-group-item bg-brown p-l-0 " + (this.state.active === 5 ? 'active' : '')}>
                                    <Link className={"nav-link " + (this.state.active === 5 ? 'active' : '')} onClick={() => this.setState({ active: 5 })} to="/profile/product-selection">
                                        <span data-feather="file" />
                                        <i className="fa fa-dashboard fa-lg m-r-10" aria-hidden="true" />
                                        Product Selection
                                    <i className={"fa fa-arrow-left  white m-t-5 fa-lg float-right " + (this.state.active === 5 ? '' : 'hide')}
                                            aria-hidden="true" />
                                    </Link>
                                </li>
                                <li className={"nav-item list-group-item bg-brown p-l-0 " + (this.state.active === 6 ? 'active' : '')}>
                                    <Link className={"nav-link " + (this.state.active === 6 ? 'active' : '')} onClick={() => this.setState({ active: 6 })} to="/profile/offers">
                                        <span data-feather="file" />
                                        <i className="fa fa-dashboard fa-lg m-r-10" aria-hidden="true" />
                                        Offers &amp; Proposals
                                    <i className={"fa fa-arrow-left  white m-t-5 fa-lg float-right " + (this.state.active === 6 ? '' : 'hide')}
                                            aria-hidden="true" />
                                    </Link>
                                </li>
                                <li className={"nav-item list-group-item bg-brown p-l-0 " + (this.state.active === 7 ? 'active' : '')}>
                                    <Link className={"nav-link " + (this.state.active === 7 ? 'active' : '')} onClick={() => this.setState({ active: 7 })} to="/profile/documents">
                                        <span data-feather="file" />
                                        <i className="fa fa-dashboard fa-lg m-r-10 " aria-hidden="true" />
                                        Documents
                                    <i className={"fa fa-arrow-left  white m-t-5 fa-lg float-right " + (this.state.active === 7 ? '' : 'hide')}
                                            aria-hidden="true" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className={"custom-popup "+(this.state.popup ? '': 'hide')} onMouseLeave={()=>this.setState({popup: false})}>
                        <div className="row m-t-10 custom-popover popover bs-popover-right">
                            <div className="arrow" />
                            <div className="row">
                                <div className="col-lg-3 p-r-0">
                                <ul className="nav list-group list-group-flush simulation-menu">
                                    <li className="nav-item list-group-item">
                                    <a className="nav-link" href="#">
                                        Fiscal Optimization
                                    </a>
                                    </li>
                                    <li className="nav-item list-group-item bg-light">
                                    <a className="nav-link" href="#">
                                        80% Simulation
                                    </a>
                                    </li>
                                    <li className="nav-item list-group-item">
                                    <a className="nav-link" href="#">
                                        General Pension
                                    </a>
                                    </li>
                                    <li className="nav-item list-group-item">
                                    <a className="nav-link" href="#">
                                        Risk Capital
                                    </a>
                                    </li>
                                    <li className="nav-item list-group-item">
                                    <a className="nav-link" href="#">
                                        Investment
                                    </a>
                                    </li>
                                    <li className="nav-item list-group-item">
                                    <a className="nav-link" href="#">
                                        Target Savings
                                    </a>
                                    </li>
                                </ul>
                                </div>
                                <div className="col-lg-9 p-l-0">
                                <div className="bg-light p-l-20 p-t-10" style={{ height: "100%" }}>
                                    <h5 className="text-red">80% Simulation</h5>
                                    <p>
                                    The 80% rule for self-employed company directors in your Individual Pension Agreement for company directors
                                    The premiums for the Individual Pension Agreement and for the Group Insurance for company directors count as 
                                    deductible business expenses for your company. However, in order to benefit from this tax advantage, 
                                    you need to comply with the so-called 80% rule.
                                    </p>
                                    <p>
                                    The 80% rule states that the statutory pension and the extra-legal pension taken together may not amount to more 
                                    than 80% of the 'normal' gross salary during the previous year. If this limit is exceeded, the company 
                                    will be unable to deduct the portion of the premium that exceeded the 80% rule as a professional expense.
                                    <strong><br></br>The 80% rule is defined as follows:<br></br>
                                    Extra-legal pension ≤ (80% of the 'normal' gross salary – statutory pension)<br></br>X (n/D) x (coefficient) – other additional capital sums
                                    </strong>
                                    </p>
                                    <h5 className="text-red">Recent Simulations</h5>
                                    <div className="m-t-10">
                                        <span>Charl Robert #281475</span>
                                    </div>
                                    <div className="m-t-10">
                                        <span>Lisa Nyugen #173164</span>
                                    </div>
                                    <div className="m-t-10">
                                        <span>Amanda Degrref #154724</span>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>

                        </div>
                    </nav>
                    )
    }

}

export default SideBar;