import React from 'react';
import { Link } from 'react-router-dom';

class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {active: 1};
    }

    setActive(index) {
        this.setState({active: index});
    }

    render() {
        return (
            <div className="row">
                <nav className="col-lg-2 d-none d-md-block bg-brown sidebar">
                    <div className="sidebar-sticky ">
                        <ul className="nav flex-column list-group  list-group-flush">
                            <li className={"nav-item list-group-item bg-brown "+(this.state.active === 1 ? 'active': '')}>
                                <Link className={"nav-link "+(this.state.active === 1 ? 'active': '')} onClick={()=>this.setState({active:1})} to="/profile/details">
                                    <span data-feather="home" />
                                    <i className="fa fa-user-circle fa-lg m-r-10"
                                        aria-hidden="true"/>
                                    Profile <span className="sr-only">(current)</span>
                                    <i className={"fa fa-arrow-left  white m-t-5 fa-lg float-right "+(this.state.active === 1 ? '': 'hide')}
                                        aria-hidden="true"/>
                                </Link>
                            </li>
                            <li className={"nav-item list-group-item bg-brown "+(this.state.active === 2 ? 'active': '')}>
                                <Link className={"nav-link "+(this.state.active === 2 ? 'active': '')} onClick={()=>this.setState({active:2})} to="/profile/simulation">
                                    <span data-feather="file" />
                                    <i className="fa fa-dashboard fa-lg m-r-10" aria-hidden="true" />
                                    Simulations
                                    <i className={"fa fa-arrow-left  white m-t-5 fa-lg float-right "+(this.state.active === 2 ? '': 'hide')}
                                        aria-hidden="true"/>
                                </Link>
                            </li>
                            <li className={"nav-item list-group-item bg-brown "+(this.state.active === 3 ? 'active': '')}>
                                <Link className={"nav-link "+(this.state.active === 3 ? 'active': '')} onClick={()=>this.setState({active:3})} to="/profile/need-analysis">
                                    <span data-feather="file" />
                                    <i className="fa fa-dashboard fa-lg m-r-10" aria-hidden="true" />
                                    Need Analysis
                                    <i className={"fa fa-arrow-left  white m-t-5 fa-lg float-right "+(this.state.active === 3 ? '': 'hide')}
                                        aria-hidden="true"/>
                                </Link>
                            </li>
                            <li className={"nav-item list-group-item bg-brown "+(this.state.active === 4 ? 'active': '')}>
                                <Link className={"nav-link "+(this.state.active === 4 ? 'active': '')} onClick={()=>this.setState({active:4})} to="/profile/mifid">
                                    <span data-feather="file" />
                                    <i className="fa fa-dashboard fa-lg m-r-10" aria-hidden="true" />
                                    MIFID
                                    <i className={"fa fa-arrow-left  white m-t-5 fa-lg float-right "+(this.state.active === 4 ? '': 'hide')}
                                        aria-hidden="true"/>
                                </Link>
                            </li>
                            <li className={"nav-item list-group-item bg-brown "+(this.state.active === 5 ? 'active': '')}>
                                <Link className={"nav-link "+(this.state.active === 5 ? 'active': '')} onClick={()=>this.setState({active:5})} to="/profile/product-selection">
                                    <span data-feather="file" />
                                    <i className="fa fa-dashboard fa-lg m-r-10" aria-hidden="true" />
                                    Product Selection
                                    <i className={"fa fa-arrow-left  white m-t-5 fa-lg float-right "+(this.state.active === 5 ? '': 'hide')}
                                        aria-hidden="true"/>
                                </Link>
                            </li>
                            <li className={"nav-item list-group-item bg-brown " +(this.state.active === 6 ? 'active': '')}>
                                <Link className={"nav-link "+(this.state.active === 6 ? 'active': '')} onClick={()=>this.setState({active:6})} to="/profile/offers">
                                    <span data-feather="file" />
                                    <i className="fa fa-dashboard fa-lg m-r-10" aria-hidden="true" />
                                    Offers &amp; Proposals
                                    <i className={"fa fa-arrow-left  white m-t-5 fa-lg float-right "+(this.state.active === 6 ? '': 'hide')}
                                        aria-hidden="true"/>
                                </Link>
                            </li>
                            <li className={"nav-item list-group-item bg-brown "+(this.state.active === 7 ? 'active': '')}>
                                <Link className={"nav-link "+(this.state.active === 7 ? 'active': '')} onClick={()=>this.setState({active:7})} to="/profile/documents">
                                    <span data-feather="file" />
                                    <i className="fa fa-dashboard fa-lg m-r-10" aria-hidden="true" />
                                    Documents
                                    <i className={"fa fa-arrow-left  white m-t-5 fa-lg float-right "+(this.state.active === 7 ? '': 'hide')}
                                        aria-hidden="true"/>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
    
}

export default SideBar;