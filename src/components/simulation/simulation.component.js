import React, { Component } from 'react';
import Slider from 'react-rangeslider'
import '../../range.css';
import { Link } from 'react-router-dom';

class Simulation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state = {
      value: 100,
      fiscalinput: 0,
      vapz: 3256.87,
      ipt: 21291.80,
      iptbackservice: 0,
      onepercentage: 0,
      vapzpopup: false,
      updatedVapz:0,
      updatedIpt: 0,
    }
    this.myRef = React.createRef();
    this.myRef1 = React.createRef();
    this.saveData = this.saveData.bind(this);
  }
  componentDidMount() {
    let savedState =JSON.parse(sessionStorage.getItem('simulation'));
    if(savedState) {
      this.setState({
        fiscalinput: this.state.vapz + this.state.ipt, value: savedState.value 
      });  
    } else {
      this.setState({
        fiscalinput: this.state.vapz + this.state.ipt 
      });
    }
    
    this.setState({onepercentage: parseFloat((this.state.vapz + this.state.ipt)/100).toFixed(2)});
    this.saveData();
  }

  handleChangeStart = () => {
    console.log('Change event started')
  };

  handleChange = value => {
    this.setState({
      value: value
    });
  };

  handleChangeComplete = () => {
    console.log('Change event completed')
    this.saveData();
  };

  onTodoChange(value) {
    this.setState({
      iptbackservice: value,
    }, () => this.setState({
      fiscalinput: Number(this.state.vapz) + Number(this.state.ipt)
    }));
  }

  saveData() {
    let vapz = this.state.ipt-(this.state.onepercentage*(100-this.state.value)) < 0 ? 
    ((this.state.vapz + (this.state.ipt-(this.state.onepercentage*(100-this.state.value)))).toFixed(2) < 0 ? '0':
    (this.state.vapz + (this.state.ipt-(this.state.onepercentage*(100-this.state.value)))).toFixed(2))
    : this.state.vapz;
    
    let ipt = this.state.ipt-(this.state.onepercentage*(100-this.state.value)) < 0 ? 
    "0": (this.state.ipt-(this.state.onepercentage*(100-this.state.value))).toFixed(2);

    this.setState({updatedVapz: vapz, updatedIpt: ipt});
    sessionStorage.setItem('simulation', JSON.stringify(this.state));
  }

  render() {
    const { value } = this.state;
    return (
      <div className="container-fluid">
        <div className="row ">
          <div className="col-lg-12">
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
                  Charl Robert &gt; 80% simulation
            </a>
                <i
                  className="fa fa-plus-circle fa-2x m-l-10 m-t-5 text-red hide"
                  aria-hidden="true"
                />
              </div>
              <div>
                  <i className="fa fa-save text-red fa-lg float-right black top m-r-10" title="Save" onClick={this.saveData} style={{cursor: 'pointer'}}></i>
                  <Link className="fa fa-chevron-left fa-lg float-right black top m-r-50" title="Previous" to="/profile/details/0" style={{cursor: 'pointer'}}></Link>
              </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
              <div
                className="tab-pane fade show active"
                id="nav-home"
                role="tabpanel"
                aria-labelledby="nav-home-tab"
              >
                <div className="card">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="card-body">
                        <h5 className="card-title text-red">
                          Information needed to get started
                    </h5>
                        <form>
                          <div className="row">
                            <div className="col-lg-9 p-r-0">
                              <div className="form-group">
                                <label className="label-color" htmlFor="one">Yearly Net Salary</label>
                                <input
                                  type="number"
                                  className="form-control "
                                  defaultValue="55000"
                                  id="one"

                                />
                              </div>
                            </div>
                            <div className="col-lg-3">
                              <div className="input-group-append">
                                <span className="info-icon-simulation" data-toggle="tooltip"
                                  data-placement="top" title="Yearly Net Salary">ⓘ</span>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-9 p-r-0">
                              <div className="form-group">
                                <label className="label-color" htmlFor="one">Yearly Gross Salary</label>
                                <input
                                  type="number"
                                  className="form-control "
                                  defaultValue="200000"
                                  id="one"

                                />
                              </div>
                            </div>
                            <div className="col-lg-3">
                              <div className="input-group-append">
                                <span className="info-icon-simulation" data-toggle="tooltip"
                                  data-placement="top" title="Yearly Gross Salary">ⓘ</span>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-9 p-r-0">
                              <div className="form-group">
                                <label className="label-color" htmlFor="one">Employment Date</label>
                                <input
                                  type="text"
                                  className="form-control "
                                  defaultValue="23/05/2019"
                                  id="one"

                                />
                              </div>
                            </div>
                            <div className="col-lg-3">
                              <div className="input-group-append">
                                <span className="info-icon-simulation" data-toggle="tooltip"
                                  data-placement="top" title="Employment Date">ⓘ</span>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-9 p-r-0">
                              <div className="form-group">
                                <label className="label-color" htmlFor="one">Career Start Date</label>
                                <input
                                  type="text"
                                  className="form-control "
                                  defaultValue="01/03/2006"
                                  id="one"

                                />
                              </div>
                            </div>
                            <div className="col-lg-3">
                              <div className="input-group-append">
                                <span className="info-icon-simulation" data-toggle="tooltip"
                                  data-placement="top" title="Career Start Date">ⓘ</span>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-9 p-r-0">
                              <div className="form-group">
                                <label className="label-color" htmlFor="one">Estimated Legal Pension</label>
                                <input
                                  type="number"
                                  className="form-control "
                                  defaultValue="42400"
                                  id="one"

                                />
                              </div>
                            </div>
                            <div className="col-lg-3">
                              <div className="input-group-append">
                                <span className="info-icon-simulation" data-toggle="tooltip"
                                  data-placement="top" title="Estimated Legal Pension">ⓘ</span>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-9 p-r-0">
                              <div className="form-group">
                                <label className="label-color" htmlFor="one">Capital from other contracts</label>
                                <input
                                  type="text"
                                  className="form-control "
                                  defaultValue="58,500"
                                  id="one"

                                />
                              </div>
                            </div>
                            <div className="col-lg-3">
                              <div className="input-group-append">
                                <span className="info-icon-simulation" data-toggle="tooltip"
                                  data-placement="top" title="Employment Date">ⓘ</span>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-9 p-r-0">
                              <div className="form-group">
                                <label className="label-color" htmlFor="one">Pension age</label>
                                <input
                                  type="number"
                                  className="form-control "
                                  defaultValue="67"
                                  id="one"

                                />
                              </div>
                            </div>
                            <div className="col-lg-3">
                              <div className="input-group-append">
                                <span className="info-icon-simulation" data-toggle="tooltip"
                                  data-placement="top" title="Pension age">ⓘ</span>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="col-lg-6 ">
                      <div className="card-body simulation-second-column" style={{ height: '100%' }}>
                        <h5 className="card-title text-red">Fiscal Optimizer</h5>
                        <div className="row">
                          <div className="col-lg-9 m-t-10">
                            <Slider
                              min={0}
                              max={100}
                              value={value}
                              onChangeStart={this.handleChangeStart}
                              onChange={this.handleChange}
                              onChangeComplete={this.handleChangeComplete}
                            />
                          </div>
                          <div className="col-lg-3">
                            <input type="number" className="form-control input-range-slider" onChange={() => { }}
                              placeholder="0" id="input-demo" value={this.state.value} ></input>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-3 m-t-20 m-l-10">
                            <input
                              type="number"
                              // value={this.state.fiscalinput}
                              value={parseFloat(this.state.fiscalinput * (this.state.value) / 100).toFixed(2)}
                              className="form-control range-input"
                              id="myRange"
                              disabled
                            />
                          </div>
                          <div className="col-lg-9"></div>
                        </div>

                        <br />
                        <div className="row">
                          <div className="col-lg-6 m-t-10 m-l-10">
                            <h5 className="card-title text-red">
                              Review VAPZ and IPT</h5>
                          </div>
                        </div>
                        <div className="row m-t-20 m-l-10">
                          <div className="col-lg-4">
                            <span>VAPZ</span>
                            <br />
                            <strong className="fiscal-values">
                            {this.state.ipt-(this.state.onepercentage*(100-this.state.value)) < 0 ? 
                            ((this.state.vapz + (this.state.ipt-(this.state.onepercentage*(100-this.state.value)))).toFixed(2) < 0 ? '0':
                            (this.state.vapz + (this.state.ipt-(this.state.onepercentage*(100-this.state.value)))).toFixed(2))
                            : this.state.vapz}
                              </strong>&nbsp;
                                {/* <strong className="fiscal-values">{this.state.vapz}</strong>&nbsp; */}

                            <div className="input-group-append">
                              <span className="info-icon-fiscal-first"
                                onMouseEnter={()=>this.setState({vapzpopup: true})}
                                onMouseLeave={()=>this.setState({vapzpopup: false})}>ⓘ</span>
                            </div>
                            <div className={"border "+(this.state.vapzpopup ? '':'hide')} style={{position: 'absolute', padding: '20px', backgroundColor: '#fff', zIndex: 1, width: '400px',}}>
                              <div><strong>What is the maximum deductible VAPZ premium?</strong></div>
                              <div className="m-t-10">For a regular VAPZ, a self-employed person may deposit 8.17% of his net taxable income, 
                                but for 2019 a maximum of 3,256.87 euros.<br></br>The maximum net taxable income for an ordinary VAPZ is 39,863.72 euros.</div>
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <span>IPT</span>
                            <br />
                            {/* <strong className="fiscal-values">{ this.state.ipt}</strong>&nbsp; */}

                          <strong className="fiscal-values">{this.state.ipt-(this.state.onepercentage*(100-this.state.value)) < 0 ? 
                          "0": (this.state.ipt-(this.state.onepercentage*(100-this.state.value))).toFixed(2)}</strong>&nbsp;
                                <div className="input-group-append">
                              <span className="info-icon-fiscal-second" data-toggle="tooltip"
                                data-placement="top" title="IPT">ⓘ</span>
                            </div>
                          </div>
                        </div>
                        <div className="form-group row m-t-10">
                          <label className="col-lg-8 col-form-label">IPT backservice premium (max 63,590):</label>
                          <div className="col-lg-4">
                            <input
                              type="number"
                              className="form-control "
                              placeholder="Amount"
                              onChange={e => this.onTodoChange(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-6">
                            <br />
                            <button className="btn btn-red white full-width save-btn" onClick={this.saveData} data-toggle="modal" data-target=".bd-example-modal-lg1">
                              Save as Draft
                                </button>
                          </div>
                          <div className="col-lg-6">
                            <br />
                            <button className="btn btn-red white full-width" onClick={this.saveData} data-toggle="modal" data-target=".bd-example-modal-lg">
                              Done
                                </button>
                          </div>
                        </div>
                        <div className="slidecontainer hide">
                          <p>
                            Value: <span id="demo" />
                          </p>
                        </div>
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
              <div className="row" style={{ height: '500px' }}>
                <div className="col-lg-6 bg-light">
                  <div style={{ padding: '20px', paddingTop: '20px' }}>
                    <div className="text-center">
                      <img
                        src="/images/user1.png"
                        height={150}
                        width={150}
                        className="profile-pic"
                        alt="Name"
                        style={{ marginLeft: 0 }}
                      />
                      <h5 className="text-red ">80% Simulation #173753 created!</h5>
                    </div>
                    <br></br>
                    <h4>Summary</h4>
                    <div className="row" stylw={{ fontSize: '15px' }}>
                      <div className="col-lg-7">
                        <div>Estimated Legel Pension:</div>
                        <div>Fiscal Optimization:</div>
                        <div>VAPZ:</div>
                        <div>IPT: </div>
                      </div>
                      <div className="col-lg-5">
                        <div>€ 42,400</div>
                        <div>€ {parseFloat(this.state.fiscalinput * (this.state.value) / 100).toFixed(2)} ({this.state.value}%)</div>
                        <div>€ {this.state.updatedVapz}</div>
                        <div>€ {this.state.updatedIpt}</div>
                      </div>
                    </div>
                    <br></br>
                    <div className="row">
                      <div className="col-lg-6">
                        <i className="fa fa-print fa-2x"></i>
                        <h5>Print Simulation</h5>
                      </div>
                      <div className="col-lg-6">
                        <i className="fa fa-envelope-o fa-2x"></i>
                        <h5>Email Simulation</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="m-t-50 m-l-50">
                    <h5 className="text-red">Would you like to?</h5>
                    <br></br>
                    <div style={{ fontSize: '15px', marginBottom: '10px' }}>
                      <Link to="/profile/offera" style={{ color: '#000' }} onClick={() => { this.myRef.current.click() }}>Make this simulation an Offer</Link>
                    </div>
                    <div style={{ fontSize: '15px', marginBottom: '10px' }}>
                      <Link to="/profile/offers" style={{ color: '#000' }} onClick={() => { this.myRef.current.click() }}>Make this simulation a Proposal</Link>
                    </div>
                    <div style={{ fontSize: '15px', marginBottom: '10px' }} >
                      <Link to="/profile/need-analysis" style={{ color: '#000' }} onClick={() => { this.myRef.current.click() }}>Perform Need Analysis</Link>
                    </div>
                    <div style={{ fontSize: '15px', marginBottom: '10px' }}>
                      <Link to="/profile/details/0" style={{ color: '#000' }} onClick={() => { this.myRef.current.click() }}>Go back to Charl’s Profile</Link>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className="modal fade bd-example-modal-lg1" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" style={{ top: '12%' }}>
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <button className="hide" ref={this.myRef1} data-dismiss="modal"></button>
              <div className="row" style={{ height: '500px' }}>
                <div className="col-lg-6 bg-light">
                  <div style={{ padding: '20px', paddingTop: '20px' }}>
                    <div className="text-center">
                      <img
                        src="/images/user1.png"
                        height={150}
                        width={150}
                        className="profile-pic"
                        alt="Name"
                        style={{ marginLeft: 0 }}
                      />
                      <h5 className="text-red ">80% Simulation #173753 Draft was saved!</h5>
                    </div>
                    <br></br>
                    <h4>Summary</h4>
                    <div className="row" stylw={{ fontSize: '15px' }}>
                      <div className="col-lg-7">
                        <div>Estimated Legel Pension:</div>
                        <div>Fiscal Optimization:</div>
                        <div>VAPZ:</div>
                        <div>IPT: </div>
                      </div>
                      <div className="col-lg-5">
                        <div>€ 42,400</div>
                        <div>€ {parseFloat(this.state.fiscalinput * (this.state.value) / 100).toFixed(2)} ({this.state.value}%)</div>
                        <div>€ {this.state.updatedVapz}</div>
                        <div>€ {this.state.updatedIpt}</div>
                      </div>
                    </div>
                    <br></br>
                    <div className="row hide">
                      <div className="col-lg-6">
                        <i className="fa fa-print fa-2x"></i>
                        <h5>Print Simulation</h5>
                      </div>
                      <div className="col-lg-6">
                        <i className="fa fa-envelope-o fa-2x"></i>
                        <h5>Email Simulation</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="m-t-50 m-l-50">
                    <h5 className="text-red">Would you like to?</h5>
                    <br></br>
                    <div style={{ fontSize: '15px', marginBottom: '10px' }}>
                      <a style={{ color: '#000', cursor: 'pointer' }} onClick={() => { this.myRef1.current.click() }}>Continue making changes</a>
                    </div>
                    <div style={{ fontSize: '15px', marginBottom: '10px' }}>
                      <Link to="/profile/details/0" style={{ color: '#000', textDecoration: 'none'}} onClick={() => { this.myRef1.current.click() }}>Go back to Charl’s Profile</Link>
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

export default Simulation;