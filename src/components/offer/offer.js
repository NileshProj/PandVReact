import React from 'react';
import { Link } from 'react-router-dom';

function Offers() {
    return (
<div>
 
  <div className="container-fluid">
    <div className="row">

    </div>
  </div>
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
          <a
            className="nav-item nav-link"
            id="nav-contact-tab"
            data-toggle="tab"
            href="#nav-contact"
            role="tab"
            aria-controls="nav-contact"
            aria-selected="false"
          >
            Contact
          </a>
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
                    <div className="card-body">
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
                          <a href="#" className="btn btn-red white full-width">
                            Details
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card capi-card">
                    <div className="card-body">
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
                          <a href="#" className="btn btn-red white full-width">
                            Details
                          </a>
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
                      <p className="policyholder-value">Charl Robert</p>
                    </div>
                  </div>
                </div>
                <div className="card-body capi-details">
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
                      <p className="policyholder-value">Charl Robert</p>
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
                          disabled
                        />
                      </div>
                      <div className="column-icon">
                        <div className="input-group-append">
                          <span className="info-icon">ⓘ</span>
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
                          disabled
                        />
                      </div>
                      <div className="column-icon">
                        <div className="input-group-append">
                          <span className="info-icon">ⓘ</span>
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
                          disabled
                        />
                      </div>
                      <div className="column-icon">
                        <div className="input-group-append">
                          <span className="info-icon">ⓘ</span>
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
                          disabled
                        />
                      </div>
                      <div className="column-icon">
                        <div className="input-group-append">
                          <span className="info-icon">ⓘ</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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


        
    )
}

export default Offers;