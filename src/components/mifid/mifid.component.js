import React, { createRef } from 'react';
import { Link } from 'react-router-dom';

class MIFID extends React.Component {
    constructor(props) {
        super(props);
        this.state = { questions: [], active: 1 , a1: '', a2: '', a3: '',a31: '', a4: '', a5: '', a6 :'', a7: ''};
        
        this.setActive = this.setActive.bind(this);
        this.saveData = this.saveData.bind(this);
        this.myRef = createRef();
    }

    componentDidMount() {
        let savedData = JSON.parse(sessionStorage.getItem('mifid'));
        if(savedData) {
            this.setState({...savedData});
        }
    }

    saveData() {
        sessionStorage.setItem('mifid', JSON.stringify(this.state));
    }

    setActive(index) {
        this.setState({ active: index });
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
                            Charl Robert &gt; mifid
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
                        <Link className="fa fa-chevron-left fa-lg float-right black top m-r-50" title="Previous" to="/profile/need-analysis" style={{cursor: 'pointer'}}></Link>
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
                                                <li className={"nav-item list-group-item " + (this.state.active === 1 ? 'bg-light' : '')} onClick={() => this.setActive(1)}>
                                                    <div className="row">
                                                        <div className="col-lg-1 p-r-0"><strong>1)</strong></div>
                                                        <div className="col-lg-11 p-l-0">Did you acquire knowledge of financial
                                                            products via your job or education?</div>
                                                    </div>
                                                </li>
                                                <li className={"nav-item list-group-item " + (this.state.active === 2 ? 'bg-light' : '')} onClick={() => this.setActive(2)}>
                                                    <div className="row">
                                                        <div className="col-lg-1 p-r-0"><strong>2)</strong></div>
                                                        <div className="col-lg-11 p-l-0"> How did you keep informed on
                                                        Financial-economic world?</div>
                                                    </div>
                                                </li>
                                                <li className={"nav-item list-group-item " + (this.state.active === 3 ? 'bg-light' : '')} onClick={() => this.setActive(3)}>
                                                    <div className="row">
                                                        <div className="col-lg-1 p-r-0"><strong>3)</strong></div>
                                                        <div className="col-lg-11 p-l-0"> Do you possess Real Estate?</div>
                                                    </div>
                                                </li>
                                                <li className={"nav-item list-group-item " + (this.state.active === 3.1 ? 'bg-light' : ((this.state.a3 === 1 || this.state.a3 === 2) ? '':'hide'))} onClick={() => this.setActive(3.1)}>
                                                    <div className="row">
                                                        <div className="col-lg-1"></div>
                                                        <div className="col-lg-1 p-r-0"><strong>3.1)</strong></div>
                                                        <div className="col-lg-10 p-l-0">  What is the approximate value of your Property?</div>
                                                    </div>
                                                </li>
                                                <li className={"nav-item list-group-item " + (this.state.active === 4 ? 'bg-light' : '')} onClick={() => this.setActive(4)}>
                                                    <div className="row">
                                                        <div className="col-lg-1 p-r-0"><strong>4)</strong></div>
                                                        <div className="col-lg-11 p-l-0"> How much all your wealth (financial assets, real estates, movables, etc.)?</div>
                                                    </div>
                                                </li>
                                                <li className={"nav-item list-group-item " + (this.state.active === 5 ? 'bg-light' : '')} onClick={() => this.setActive(5)}>
                                                    <div className="row">
                                                        <div className="col-lg-1 p-r-0"><strong>5)</strong></div>
                                                        <div className="col-lg-11 p-l-0">How much are you able to save on
                                                        monthly basis taking into account your regular expenses?</div>
                                                    </div>
                                                </li>
                                                <li className={"nav-item list-group-item " + (this.state.active === 6 ? 'bg-light' : '')} onClick={() => this.setActive(6)}>
                                                    <div className="row">
                                                        <div className="col-lg-1 p-r-0"><strong>6)</strong></div>
                                                        <div className="col-lg-11 p-l-0">How do you expect your financial
                                                        simulation to evolve in the short term(5 years)?</div>
                                                    </div>
                                                </li>
                                            </ul>
                                            <br></br>
                                            <br></br>
                                            <br></br>
                                        </div>
                                        <div className="col-lg-6 p-l-0">
                                            <div
                                                className="bg-light p-l-20 p-t-20"
                                                style={{ height: "100%", fontSize: '15px' }}>
                                                <div className={this.state.active === 1 ? 'col-lg-3': 'hide'}>
                                                    <div><strong>1)</strong> <span className={this.state.a1 === 1 ? "btn-red white p-l-10 p-r-10": ''} onClick={()=>this.setState({a1:1})}>Yes</span></div>
                                                    <div><strong>2)</strong> <span className={this.state.a1 === 2 ? "btn-red white p-l-10 p-r-10": ''} onClick={()=>this.setState({a1:2})}>No</span></div>
                                                </div>
                                                <div className={this.state.active === 2 ? '': 'hide'}>
                                                    <div><strong>1)</strong> <span className={this.state.a2 === 1 ? "btn-red white p-l-10 p-r-10": ''} onClick={()=>this.setState({a2:1})}>News Papers</span></div>
                                                    <div><strong>2)</strong> <span className={this.state.a2 === 2 ? "btn-red white p-l-10 p-r-10": ''} onClick={()=>this.setState({a2:2})}>TV</span></div>
                                                    <div><strong>3)</strong> <span className={this.state.a2 === 3 ? "btn-red white p-l-10 p-r-10": ''} onClick={()=>this.setState({a2:3})}>Internet</span></div>
                                                </div>
                                                <div className={this.state.active === 3 ? '': 'hide'}>
                                                    <div><strong>1)</strong> <span className={this.state.a3 === 1 ? "btn-red white p-l-10 p-r-10": ''} onClick={()=>{this.setState({a3:1});this.setState({active: 3.1})}}>Yes (One Property)</span></div>
                                                    <div><strong>2)</strong> <span className={this.state.a3 === 2 ? "btn-red white p-l-10 p-r-10": ''} onClick={()=>{this.setState({a3:2});this.setState({active: 3.1})}}>Yes (More than One Property)</span></div>
                                                    <div><strong>3)</strong> <span className={this.state.a3 === 3 ? "btn-red white p-l-10 p-r-10": ''} onClick={()=>this.setState({a3:3})}>No</span></div>
                                                    
                                                </div>
                                                <div className={this.state.active === 3.1 ? '': 'hide'}>
                                                    <div><strong>1)</strong> <span className={this.state.a31 === 1 ? "btn-red white p-l-10 p-r-10": ''} onClick={()=>this.setState({a31:1})}>Below 250K EUR</span></div>
                                                    <div><strong>2)</strong> <span className={this.state.a31 === 2 ? "btn-red white p-l-10 p-r-10": ''} onClick={()=>this.setState({a31:2})}>Between 250K - 1M EUR</span></div>
                                                    <div><strong>3)</strong> <span className={this.state.a31 === 3 ? "btn-red white p-l-10 p-r-10": ''} onClick={()=>this.setState({a31:3})}>Above 1M EUR</span></div>
                                                    
                                                </div>
                                                <div className={this.state.active === 4 ? '': 'hide'}>
                                                    <div><strong>1)</strong> <span className={this.state.a4 === 1 ? "btn-red white p-l-10 p-r-10": ''} onClick={()=>this.setState({a4:1})}>Below 20 Million EUR</span></div>
                                                    <div><strong>2)</strong> <span className={this.state.a4 === 2 ? "btn-red white p-l-10 p-r-10": ''} onClick={()=>this.setState({a4:2})}>Between EUR 20 and 70 Million</span></div>
                                                    <div><strong>3)</strong> <span className={this.state.a4 === 3 ? "btn-red white p-l-10 p-r-10": ''} onClick={()=>this.setState({a4:3})}>Over EUR 70 Million</span></div>
                                                    
                                                </div>
                                                <div className={this.state.active === 5 ? '': 'hide'}>
                                                    <div><strong>1)</strong> <span className={this.state.a5 === 1 ? "btn-red white p-l-10 p-r-10": ''} onClick={()=>this.setState({a5:1})}>Below 10 Million EUR</span></div>
                                                    <div><strong>2)</strong> <span className={this.state.a5 === 2 ? "btn-red white p-l-10 p-r-10": ''} onClick={()=>this.setState({a5:2})}>Between 10 to 30 Million EUR</span></div>
                                                    <div><strong>3)</strong> <span className={this.state.a5 === 3 ? "btn-red white p-l-10 p-r-10": ''} onClick={()=>this.setState({a5:3})}>Above 30 Million EUR</span></div>
                                                </div>
                                                <div className={this.state.active === 6 ? '': 'hide'}>
                                                    <div><strong>1)</strong> <span className={this.state.a6 === 1 ? "btn-red white p-l-10 p-r-10": ''} onClick={()=>this.setState({a6:1})}>Should Cover Financial Goal</span></div>
                                                    <div><strong>2)</strong> <span className={this.state.a6 === 2 ? "btn-red white p-l-10 p-r-10": ''} onClick={()=>this.setState({a6:2})}>Get good returns</span></div>
                                                    <div><strong>3)</strong> <span className={this.state.a6 === 3 ? "btn-red white p-l-10 p-r-10": ''} onClick={()=>this.setState({a6:3})}>Enough for retirement plan</span></div>
                                                    
                                                </div>
                                                
                                                <button className="btn btn-red full-width white" data-toggle="modal" onClick={this.saveData} data-target=".bd-example-modal-lg"
                                                    style={{ position: "absolute", width: '97%', bottom: 0, left: 0 }}>Complete Questionnaire</button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" style={{ top: '12%' }}>
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <button className="hide" ref={this.myRef} data-dismiss="modal"></button>
                            <div className="row" style={{ height: '500px', padding: '0 20px' }}>
                                <div className="col-lg-12">
                                    <div style={{ padding: '20px', paddingTop: '30px' }}>
                                        <div>
                                            <img
                                                src="/images/user1.png"
                                                height={60}
                                                width={60}
                                                className="profile-pic"
                                                alt="Name"
                                                style={{marginLeft: 0}}
                                            />
                                        </div>
                                        <h5 className="text-red ">MiFID questionnaire completed!</h5>
                                        <div style={{ fontSize: '15px' }}>
                                            Charl’s responses have beeen saved. This questionnaire may have to be filled again if a investment profile or other information is changed
                                        </div>
                                        <br></br>
                                        <br></br>
                                        <h5>Charl, Would you like to sign this document now?</h5>
                                        <div style={{ fontSize: '15px' }}>
                                            You can get the questionnaire digitally signed off now, or send it as a part of the offer later.</div>
                                        <br></br>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <textarea rows="3" cols="50" placeholder="Your Signature"></textarea>
                                            </div>
                                            <div className="col-lg-6">
                                                <textarea rows="3" cols="50" placeholder="Intermediary Signature"></textarea>
                                            </div>
                                        </div>
                                        <br></br>
                                        <div>
                                            <Link className="btn btn-red full-width white" to="/profile/product-selection" 
                                            onClick={()=>this.myRef.current.click()}
                                            style={{ width: '50%' }}>Proceed to Product Selection</Link>
                                        </div>

                                        <br></br>
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