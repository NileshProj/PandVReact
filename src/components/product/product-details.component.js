import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-rangeslider';
import '../../range.css';
import { PieChart } from 'react-d3-components';

class ProductDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 100,
            value1: 100,
            active:1,
            d3: ''
        }
        this.setActive = this.setActive.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    setActive(index) {
        this.setState({active: index});
    }

    handleOnChange = (value) => {
        this.setState({
            volume: value
        })
    }

    handleOnChange1 = (value) => {
        this.setState({
            volume1: value
        })
    }

    handleChangeStart = () => {
        console.log('Change event started')
    };

    handleChange = value => {
        this.setState({
            value: value
        })
    };

    handleChange1 = value => {
        this.setState({
            value1: value
        })
    };

    handleChangeComplete = () => {
        console.log('Change event completed')
    };

    render() {
        var data = {
            label: 'B21',
            values: [{x: 'B21', y: 60}, {x: 'B23', y: 40}]
    };
        
        var sort = null;
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
                            Charl Robert &gt; Top Hat Plus Plan
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
                                    <h5 className="text-red m-t-30">Risk and Investment Profile</h5>
                                    <br></br>
                                    <strong>Risk Profile: </strong>
                                    <span className="text-orange">
                                        <span className={this.state.active === 1 ? "bold": ''} onClick={()=>this.setActive(1)} >Defensive</span> |
                                         <span className={this.state.active === 2 ? "bold": ''} onClick={()=>this.setActive(2)} >Neutral</span> | 
                                         <span className={this.state.active === 3 ? "bold": ''} onClick={()=>this.setActive(3)} >Dynamic</span>
                                    </span>
                                    <br></br>
                                    <br></br>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <h5>B21%</h5>
                                            <div className="row simulation-second-column" style={{ backgroundColor: '#fff' }}>
                                                <div className="col-lg-6">
                                                    <Slider
                                                        min={0}
                                                        max={100}
                                                        value={this.state.value}
                                                        onChangeStart={this.handleChangeStart}
                                                        onChange={this.handleChange}
                                                        onChangeComplete={this.handleChangeComplete}
                                                    />
                                                </div>
                                                <div className="col-lg-2">
                                                    <input type="number" style={{visibility: 'hidden'}} className=" form-control input-range-slider" onChange={() => { }}
                                                        placeholder="0" id="input-demo" value={this.state.value} ></input>
                                                </div>
                                            </div>
                                            <div className="col-lg-2 p-l-0">
                                                <input type="number" className="form-control" onChange={() => { }}
                                                    placeholder="0" id="input-demo" value={this.state.value} ></input>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="m-l-50">Sales</div>
                                            <br></br>
                                            <div className="pie"></div>
                                            {/* <PieChart
                                                data={data}
                                                width={600}
                                                height={400}
                                                margin={{top: 10, bottom: 10, left: 100, right: 100}}
                                                sort={sort}
                                                /> */}
                                            
                                            <br></br>
                                            <div>
                                                <span>
                                                    <i className="fa fa-square brown"></i> B21
                                            </span>
                                                <span className="m-l-10">
                                                    <i className="fa fa-square lightbrown"></i> B23
                                            </span>
                                            </div>
                                        </div>
                                    </div>
                                    <br></br>

                                    <div className="row">
                                        <div className="col-lg-6">
                                            <h5 className="text-red">Fund Information</h5>
                                            <div className="float-left">
                                                <strong>B21 with Profit Sharing</strong><br></br>
                                                <span >Equities</span>
                                                <span className=" btn-red white m-r-10">Monetary</span>
                                                <span className="text-red float-right">|</span>
                                            </div>
                                            <div className="float-left m-l-10">
                                                <strong>B23 with no Profit Sharing</strong><br></br>
                                                <span className="btn-red white m-r-10">Equities</span>
                                                <span>Monetary</span>
                                                <span className="text-red float-right">|</span>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <h5 className="text-red">Rider</h5>
                                            <div className="float-left">
                                                <strong>Death</strong><br></br>
                                                <span className=" btn-red white m-r-10">Yes</span>
                                                <span>No</span>
                                                <span className="text-red float-right">|</span>
                                            </div>
                                            <div className="float-left m-l-10">
                                                <strong>Death by accident</strong><br></br>
                                                <span className="btn-red white m-r-10">Yes</span>
                                                <span>No</span>
                                                <span className="text-red float-right">|</span>
                                            </div>
                                            <div className="float-left m-l-10">
                                                <strong>Incapacity</strong><br></br>
                                                <span className="btn-red white m-r-10">Yes</span>
                                                <span>No</span>
                                                <span className="text-red float-right">|</span>
                                            </div>
                                            <div className="float-left m-l-10">
                                                <strong>Waiver of Premium</strong><br></br>
                                                <span className="btn-red white m-r-10">Yes</span>
                                                <span>No</span>
                                                <span className="text-red float-right">|</span>
                                            </div>
                                        </div>
                                    </div>
                                    <br></br>
                                    <br></br>
                                    <h5 className="text-red">Cover Data</h5>
                                    <br></br>
                                    <div className="row">
                                        <div className="col-lg-3">
                                            <span>Death Capital</span>
                                            <input type="text" className="form-control" defaultValue="250,000" ></input>
                                        </div>
                                        <div className="col-lg-3">
                                            <span>Incapacity Capital</span>
                                            <input type="text" className="form-control" defaultValue="250,000"></input>
                                        </div>
                                        <div className="col-lg-6">
                                            <strong>Commission</strong>
                                            <div className="row simulation-second-column" style={{ backgroundColor: '#fff', width: '93%' }}>
                                                <div className="col-lg-6">
                                                    <Slider
                                                        min={0}
                                                        max={100}
                                                        value={this.state.value1}
                                                        onChangeStart={this.handleChangeStart}
                                                        onChange={this.handleChange1}
                                                        onChangeComplete={this.handleChangeComplete}
                                                    />
                                                </div>
                                                <div className="col-lg-3 p-l-">
                                                    <input type="number" className="form-control input-range-slider" onChange={() => { }}
                                                        placeholder="0" id="input-demo" value={this.state.value1} ></input>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <br></br>
                                    <h5 className="text-red">Mandatory Insured Data</h5>
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <div className="row">
                                                <div className="col-lg-4">
                                                    <img
                                                        src="/images/user1.png"
                                                        height={80}
                                                        width={80}
                                                        className="profile-pic"
                                                        alt="Name"
                                                    />
                                                </div>
                                                <div className="col-lg-8">
                                                    <div className="card-body m-t-50">
                                                        <h5 className="card-title">Charl Robert</h5>
                                                        <div className="card-text">
                                                            22/03/1977<br></br>
                                                            Male<br></br>
                                                            Company Owner
                                                </div>

                                                    </div>
                                                </div>
                                            </div>
                                            <br>
                                            </br>
                                            <Link className="btn btn-red full-width white " to="/profile/offers">Proceed to Offer</Link>
                                        </div>
                                        <div className="col-lg-6">
                                        <div className="row">
                                            <div className="col-lg-3">
                                                <span>Height</span>
                                                <input type="text" className="form-control" defaultValue="176cms"></input>
                                            </div>
                                            <div className="col-lg-3">
                                                <span>Weight</span>
                                                <input type="text" className="form-control" defaultValue="94Kg"></input>
                                            </div>
                                            <div className="col-lg-3">
                                                <div>Smoker</div>
                                                <div
                                                    className="btn-group btn-group-sm"
                                                    role="group"
                                                    aria-label
                                                >
                                                    <button type="button"  className="btn btn-red white">
                                                        Yes
                                                    </button>
                                                    <button type="button" className="btn btn-light">
                                                        No
                                                    </button>
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
export default ProductDetails;