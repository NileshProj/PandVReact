import React from 'react'
import { Link } from 'react-router-dom';

class NeedAnalysis extends React.Component {
    constructor(props) {
        super(props);
        this.state  = {
            deathCaptial: true,
            singlePrem: true,
            deathCover: true,
            invalidity: true,
            accidental: true,
            pension: true,
            saving: true,
            singlePremMode: 'M'
        }
        this.saveData = this.saveData.bind(this);
    }
    componentDidMount() {
        let saveData = JSON.parse(sessionStorage.getItem('needAnalysis'));
        if(saveData) {
            this.setState({...saveData});
        }
        this.props.setActive(3);
    }

    saveData() {
        sessionStorage.setItem('needAnalysis', JSON.stringify(this.state));
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
                            Charl Robert &gt; Need Analysis
      </a>
                        <div className="btn-group dropright">
                            <i
                                className="fa fa-plus-circle fa-2x m-l-10 m-t-5 text-red hide"
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
                    <div>
                        <i className="fa fa-save text-red fa-lg float-right black top m-r-10" title="Save" onClick={this.saveData} style={{cursor: 'pointer'}}></i>
                        <Link className="fa fa-chevron-left fa-lg float-right black top m-r-50" title="Previous" to="/profile/simulation" style={{cursor: 'pointer'}}></Link>
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
                                                                    defaultValue={'500,000'}
                                                                    id="one"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 m-t-30">
                                                        <span className="info-icon-simulation" data-toggle="tooltip" 
                                data-placement="top" title="Pension Capital">ⓘ</span>
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
                                                        <div className="col-lg-3 m-t-30">
                                                        <span className="info-icon-simulation" data-toggle="tooltip" 
                                data-placement="top" title="Death Capital">ⓘ</span>
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
                                                                    <button type="button"  className={"btn "+(this.state.deathCaptial ?  'btn-red white': 'btn-light')}
                                                                     onClick={()=>this.setState({deathCaptial: true})}>
                                                                        Yes
                                                                    </button>
                                                                    <button type="button" className={"btn "+(!this.state.deathCaptial ?  'btn-red white': 'btn-light')} 
                                                                    onClick={()=>this.setState({deathCaptial: false})}>
                                                                        No
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 m-t-10">
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-9 p-r-0">
                                                            <div className="form-group">
                                                                <label htmlFor="two">
                                                                    How would you like to pay your premium?
                                                                </label>
                                                                <br />
                                                                <div
                                                                    className="btn-group btn-group-sm"
                                                                    role="group"
                                                                    aria-label
                                                                >
                                                                    <button type="button"  className={"btn "+(this.state.singlePrem ?  'btn-red white': 'btn-light')}
                                                                     onClick={()=>this.setState({singlePrem: true})}>
                                                                        Single
                                                                    </button>
                                                                    <button type="button" className={"btn "+(!this.state.singlePrem ?  'btn-red white': 'btn-light')} 
                                                                    onClick={()=>this.setState({singlePrem: false})}>
                                                                        Regular
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3"></div>
                                                    </div>
                                                    <div className={"row "+(this.state.singlePrem ? 'hide': '')}>
                                                        <div className="col-lg-9 p-r-0">
                                                            <div className="form-group">
                                                                <label htmlFor="two">
                                                                    Select Mode of Regular Premium Payment?
                                                                </label>
                                                                <br />
                                                                <div
                                                                    className="btn-group btn-group-sm"
                                                                    role="group"
                                                                    aria-label
                                                                >
                                                                    <button type="button"  className={"btn "+(this.state.singlePremMode === 'M' ?  'btn-red white': 'btn-light')}
                                                                     onClick={()=>this.setState({singlePremMode: 'M'})}>
                                                                        Monthly
                                                                    </button>
                                                                    <button type="button" className={"btn "+(this.state.singlePremMode === 'Q' ?  'btn-red white': 'btn-light')} 
                                                                    onClick={()=>this.setState({singlePremMode: 'Q'})}>
                                                                        Quarterly
                                                                    </button>
                                                                    <button type="button" className={"btn "+(this.state.singlePremMode === 'S' ?  'btn-red white': 'btn-light')} 
                                                                    onClick={()=>this.setState({singlePremMode: 'S'})}>
                                                                        Semi-Annual
                                                                    </button>
                                                                    <button type="button" className={"btn "+(this.state.singlePremMode === 'A' ?  'btn-red white': 'btn-light')} 
                                                                    onClick={()=>this.setState({singlePremMode: 'A'})}>
                                                                        Annual
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
                                                className="p-l-20 p-t-20"
                                                style={{ height: "100%", backgroundColor:'#f7f4f4' }}
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
                                                                    <button type="button"  className={"btn "+(this.state.deathCover ?  'btn-red white': 'btn-light')}
                                                                     onClick={()=>this.setState({deathCover: true})}>
                                                                        Yes
                                                                    </button>
                                                                    <button type="button" className={"btn "+(!this.state.deathCover ?  'btn-red white': 'btn-light')} 
                                                                    onClick={()=>this.setState({deathCover: false})}>
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
                                                                    <button type="button"  className={"btn "+(this.state.invalidity ?  'btn-red white': 'btn-light')}
                                                                     onClick={()=>this.setState({invalidity: true})}>
                                                                        Yes
                                                                    </button>
                                                                    <button type="button" className={"btn "+(!this.state.invalidity ?  'btn-red white': 'btn-light')} 
                                                                    onClick={()=>this.setState({invalidity: false})}>
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
                                                                    <button type="button"  className={"btn "+(this.state.accidental ?  'btn-red white': 'btn-light')}
                                                                     onClick={()=>this.setState({accidental: true})}>
                                                                        Yes
                                                                    </button>
                                                                    <button type="button" className={"btn "+(!this.state.accidental ?  'btn-red white': 'btn-light')} 
                                                                    onClick={()=>this.setState({accidental: false})}>
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
                                                                    <button type="button"  className={"btn "+(this.state.pension ?  'btn-red white': 'btn-light')}
                                                                     onClick={()=>this.setState({pension: true})}>
                                                                        Yes
                                                                    </button>
                                                                    <button type="button" className={"btn "+(!this.state.pension ?  'btn-red white': 'btn-light')} 
                                                                    onClick={()=>this.setState({pension: false})}>
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
                                                                    <button type="button"  className={"btn "+(this.state.saving ?  'btn-red white': 'btn-light')}
                                                                     onClick={()=>this.setState({saving: true})}>
                                                                        Yes
                                                                    </button>
                                                                    <button type="button" className={"btn "+(!this.state.saving ?  'btn-red white': 'btn-light')} 
                                                                    onClick={()=>this.setState({saving: false})}>
                                                                        No
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3"></div>
                                                        <div className="col-lg-9 p-r-0">
                                                            <Link className="btn btn-red white full-width" onClick={this.saveData} to="/profile/mifid">
                                                                Proceed to MIFID Quesionnaire
                                                            </Link>
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