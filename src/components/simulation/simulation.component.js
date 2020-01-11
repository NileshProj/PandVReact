import React, { Component } from 'react';
import Slider from 'react-rangeslider'
import '../../range.css';

class Simulation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state = {
      value: 0
    }
  }

  handleOnChange = (value) => {
    this.setState({
      volume: value
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

  handleChangeComplete = () => {
    console.log('Change event completed')
  };
  render() {
    const { value } = this.state
    return (
      <div>
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
                    className="fa fa-plus-circle fa-2x m-l-10 m-t-5 text-red"
                    aria-hidden="true"
                  />
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
                                    type="text"
                                    className="form-control "
                                    defaultValue="55,000"
                                    id="one"
                                    disabled
                                  />
                                </div>
                              </div>
                              <div className="col-lg-3">
                                <div className="input-group-append">
                                  <span className="info-icon-simulation">ⓘ</span>
                                </div>
                              </div>
                              {/* <div className="col-lg-3">
                              <i className="fa fa-info-circle fa-2x m-t-30" />
                            </div> */}
                            </div>
                            <div className="row">
                              <div className="col-lg-9 p-r-0">
                                <div className="form-group">
                                  <label className="label-color" htmlFor="one">Yearly Gross Salary</label>
                                  <input
                                    type="text"
                                    className="form-control "
                                    defaultValue="200,000"
                                    id="one"
                                    disabled
                                  />
                                </div>
                              </div>
                              <div className="col-lg-3">
                                <div className="input-group-append">
                                  <span className="info-icon-simulation">ⓘ</span>
                                </div>
                              </div>
                              {/* <div className="col-lg-3">
                                <i className="fa fa-info-circle fa-2x m-t-30" />
                              </div> */}
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
                                    disabled
                                  />
                                </div>
                              </div>
                              {/* <div className="col-lg-3">
                              <i className="fa fa-info-circle fa-2x m-t-30" />
                            </div> */}
                              <div className="col-lg-3">
                                <div className="input-group-append">
                                  <span className="info-icon-simulation">ⓘ</span>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-lg-9 p-r-0">
                                <div className="form-group">
                                  <label className="label-color" htmlFor="one">Estimated Legal Pension</label>
                                  <input
                                    type="text"
                                    className="form-control "
                                    defaultValue="42,400"
                                    id="one"
                                    disabled
                                  />
                                </div>
                              </div>
                              {/* <div className="col-lg-3">
                              <i className="fa fa-info-circle fa-2x m-t-30" />
                            </div> */}
                              <div className="col-lg-3">
                                <div className="input-group-append">
                                  <span className="info-icon-simulation">ⓘ</span>
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
                                    disabled
                                  />
                                </div>
                              </div>
                              {/* <div className="col-lg-3">
                              <i className="fa fa-info-circle fa-2x m-t-30" />
                            </div> */}
                              <div className="col-lg-3">
                                <div className="input-group-append">
                                  <span className="info-icon-simulation">ⓘ</span>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                      <div className="col-lg-6 ">
                        <div className="card-body simulation-second-column" style={{height: '100%'}}>
                          <h5 className="card-title text-red">Fiscal Optimizer</h5>
                          <div className="row">
                            <div className="col-lg-10 m-t-10">
                              <Slider
                                min={0}
                                max={100}
                                value={value}
                                onChangeStart={this.handleChangeStart}
                                onChange={this.handleChange}
                                onChangeComplete={this.handleChangeComplete}
                              />
                            </div>
                            <div className="col-lg-2 p-l-0">
                              <input type="number" className="form-control input-range-slider"
                                placeholder="0" id="input-demo" value={this.state.value} disabled></input>
                            </div>
                            </div>
                            <div className="row">
                              <div className="col-lg-10 m-t-20">
                                <input
                                  type="text"
                                  defaultValue="24,548.56"
                                  className="form-control"
                                  id="myRange"
                                  disabled
                                />
                              </div>
                              <div className="col-lg-3"></div>
                            </div>
                            <br />
                            <div className="row">
                              <div className="col-lg-6 m-t-10">
                                <h5 className="card-title text-red">
                                  Review VAPZ and IPT
                        </h5>
                              </div>
                            </div>
                            <div className="row m-t-20">
                              <div className="col-lg-3">
                                <span>VAPZ</span>
                                <br />
                                <strong className="fiscal-values">200,000</strong>&nbsp;
                              <div className="col-lg-3">
                                  <div className="input-group-append">
                                    <span className="info-icon-fiscal-first">ⓘ</span>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-3 ipt-margin">
                                <span>IPT</span>
                                <br />
                                <strong className="fiscal-values">21,2,19.80</strong>&nbsp;
                              <div className="col-lg-3">
                                  <div className="input-group-append">
                                    <span className="info-icon-fiscal-second">ⓘ</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-lg-6">
                                <br />
                                <a href="#" className="btn btn-red white full-width save-btn">
                                  SAVE
                        </a>
                              </div>
                              <div className="col-lg-6">
                                <br />
                                <a href="#" className="btn btn-red white full-width">
                                  Done
                        </a>
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
          </div>
        </div>
        )
      }
    }
    
export default Simulation;