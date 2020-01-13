import React from 'react';
import { Link } from 'react-router-dom';

class Offers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.myRef = React.createRef();

  }
  componentDidMount() {
    window.scrollTo(0, 0)
}
  render(){
    return (
      <div>
        <div className="container-fluid">
          <div className="row ">
            <div className="col-lg-12">
              <nav>
                <div className="nav nav-tabs offer-nav" id="nav-tab" role="tablist">
                  <a
                    className="nav-item nav-link active tab-name"
                    id="nav-home-tab"
                    data-toggle="tab"
                    href="#nav-home"
                    role="tab"
                    aria-controls="nav-home"
                    aria-selected="true"
                  >
                    Charl Robert &gt; Offer &amp; Proposal
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
                  <div className="card offer-card">
                    <div className="row m-t-10">
                      <div className="col-md-5">
                        <div className="card-body">
                          <h5 className="card-title text-red">Offer Details</h5>
                          <div className="card">
                            <div className="m-t-10">
                              <p className="offer-detail-card-heading">
                                Top-Hat Plus Plan (IPT)
                        </p>
                              <div className="row">
                                <div className="col-lg-1" />
                                <div className="col-lg-8">
                                  <br />
                                  <ul className="nav flex-column mb-2 card-content-ul">
                                    <li className="nav-item card-content-li">
                                      Pension Savings
                              </li>
                                    <li className="nav-item card-content-li">
                                      Pension and Investments
                              </li>
                                    <li className="nav-item card-content-li">
                                      Annuity
                              </li>
                                  </ul>
                                  <br />
                                </div>
                                <div className="col-lg-12">
                                  <button className="btn btn-red white full-width">
                                    Details
                            </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="card capi-card">
                            <div className="m-t-10">
                              <p className="offer-detail-card-heading">Capi 21 VAPZ</p>
                              <div className="row">
                                <div className="col-lg-1" />
                                <div className="col-lg-8">
                                  <br />
                                  <ul className="nav flex-column mb-2 card-content-ul">
                                    <li className="nav-item card-content-li">
                                      Pension Savings
                              </li>
                                  </ul>
                                  <br />
                                </div>
                                <div className="col-lg-12">
                                  <button className="btn btn-red white full-width">
                                    Details
                            </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="column">
                        <div className="card-body">
                          <div className="row">
                            <div className="column">
                              <strong>
                                <p className="policyholder">Policyholder</p>
                              </strong>
                            </div>
                            <div className="column">
                              <p className="policyholder-value">Pied Piper</p>
                            </div>
                          </div>
                          <div className="row policyholder-row">
                            <div className="column">
                              <strong>
                                <p className="policyholder">Insured</p>
                              </strong>
                            </div>
                            <div className="column">
                              <p className="policyholder-value">Charl Robert</p>
                            </div>
                          </div>
                          <div className="row policyholder-row">
                            <div className="column">
                              <strong>
                                <p className="policyholder">Clauses</p>
                              </strong>
                            </div>
                            <div className="column">
                              <p className="policyholder-value">Life Clause<br/>Death Clause</p>
                            </div>
                          </div>
                        </div>
                        <div className="card-body capi-details offer-second-row">
                          <div className="row">
                            <div className="column">
                              <strong>
                                <p className="policyholder">Policyholder</p>
                              </strong>
                            </div>
                            <div className="column">
                              <p className="policyholder-value">Charl Robert</p>
                            </div>
                          </div>
                          <div className="row policyholder-row">
                            <div className="column">
                              <strong>
                                <p className="policyholder">Insured</p>
                              </strong>
                            </div>
                            <div className="column">
                              <p className="policyholder-value">Charl Robert</p>
                            </div>
                          </div>
                          <div className="row policyholder-row">
                            <div className="column">
                              <strong>
                                <p className="policyholder">Clauses</p>
                              </strong>
                            </div>
                            <div className="column">
                              <p className="policyholder-value">Life Clause</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <h5 className="card-title text-red">Payment Details</h5>
                  <form>
                    <div className="row row-payment">
                      <div className="column">
                        <div className="col-lg-9 p-r-0">
                          <div className="form-group input-label-top input-label">
                            <label className="label-color" htmlFor="iban">
                              IBAN
                      </label>
                            <div className="row-field">
                              <div className="column-field">
                                <input
                                  type="text"
                                  className="form-control input-width"
                                  id="iban"
                                  placeholder="BE63001607116208"
                                  
                                />
                              </div>
                              <div className="column-icon">
                                <div className="input-group-append">
                                  <span className="info-icon-firstrow" data-toggle="tooltip" 
                                  data-placement="top" title="IBAN Information">ⓘ</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="column">
                        <div className="col-lg-9 p-r-0">
                          <div className="form-group input-label-top input-label">
                            <label className="label-color" htmlFor="paymentmode">
                              Payment Mode
                      </label>
                            <div className="row-field">
                              <div className="column-field">
                                <input
                                  type="text"
                                  className="form-control input-width"
                                  id="paymentmode"
                                  placeholder="Direct Debit"
                                  
                                />
                              </div>
                              <div className="column-icon">
                                <div className="input-group-append">
                                  <span className="info-icon-firstrow" data-toggle="tooltip" 
                                  data-placement="top" title="Payment mode">ⓘ</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row secondrow-payment">
                      <div className="column">
                        <div className="col-lg-9 p-r-0">
                          <div className="form-group input-label-top input-label">
                            <label className="label-color" htmlFor="bic">
                              BIC
                      </label>
                            <div className="row-field">
                              <div className="column-field">
                                <input
                                  type="text"
                                  className="form-control input-width"
                                  id="bic"
                                  placeholder="GEBABEBB"
                                  
                                />
                              </div>
                              <div className="column-icon">
                                <div className="input-group-append">
                                  <span className="info-icon-secondrow" data-toggle="tooltip" 
                                  data-placement="top" title="BIC information">ⓘ</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="column">
                        <div className="col-lg-9 p-r-0">
                          <div className="form-group input-label-top input-label">
                            <label className="label-color" htmlFor="paymentfrequency">
                              Payment Frequency
                      </label>
                            <div className="row-field">
                              <div className="column-field">
                                <input
                                  type="number"
                                  className="form-control input-width"
                                  id="paymentfrequency"
                                  placeholder="Monthly"
                                  
                                />
                              </div>
                              <div className="column-icon">
                                <div className="input-group-append">
                                  <span className="info-icon-secondrow" data-toggle="tooltip" 
                                  data-placement="top" title="This is payment frequency">ⓘ</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                    <div className="col-lg-5">
                      <button type="button" className="btn btn-red white full-width" 
                      onClick={()=>{
                        sessionStorage.setItem('currentUser', 'Charl Robert')
                      }}
                      data-toggle="modal" data-target=".bd-example-modal-lg">
                        Send Offer
                      </button>
                    </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <footer>
            <div>
              <br />
            </div>
          </footer>
        </div>
        <div className="modal fade bd-example-modal-lg"  tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel"  aria-hidden="true" style={{ top: '12%' }}>
              <div className="modal-dialog modal-lg">
                <div className="modal-content">
                  <button className="hide" ref={this.myRef} data-dismiss="modal"></button>
                  <div className="row" style={{ height: '500px'}}>
                    <div className="col-lg-6 bg-light">
                      <div style={{padding: '20px', paddingTop: '30px'}}>
                      <div className="text-center">
                        <img
                          src="/images/user1.png"
                          height={150}
                          width={150}
                          className="profile-pic"
                          alt="Name"
                          style={{marginLeft: 0}}
                        />
                      <h5 className="text-red ">Offer #173753 is created!</h5>  
                      </div>
                      <br></br>
                      <div className="row" stylw={{fontSize: '15px'}}>
                        <div className="col-lg-12">
                          <div>The Offer document and MiFID questionnaire have been emailed to Charl for review and signature.</div>
                        
                        </div>
                      </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="m-t-50 m-l-50">
                      <h5 className="text-red">Would you like to?</h5>
                      <br></br>
                      <div style={{fontSize: '15px', marginBottom: '10px'}}>
                        <Link to="/profile/simulation" style={{color: '#000'}} onClick={()=>{this.myRef.current.click()}}>Run another simulation</Link>
                      </div>
                      <div style={{fontSize: '15px', marginBottom: '10px'}}>
                        <Link to="/profile/details/0" style={{color: '#000'}} onClick={()=>{this.myRef.current.click()}}>Go back to Charl’s Profile</Link>
                      </div>
                      <div style={{fontSize: '15px', marginBottom: '10px'}}>
                        <Link to="/" style={{color: '#000'}} onClick={()=>{this.myRef.current.click()}}>Go back to Portfolio</Link>
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

export default Offers;