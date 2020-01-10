import React from 'react';
import { Link } from 'react-router-dom';

function Simulation() {
    return (
<div>
  <div className="container-fluid">
    <div className="row">
      <nav className="col-md-2 d-none d-md-block bg-brown sidebar">
        <div className="sidebar-sticky ">
          <ul className="nav flex-column list-group  list-group-flush">
            <li className="nav-item list-group-item bg-brown">
              <a className="nav-link" href="#">
                <span data-feather="home" />
                <i
                  className="fa fa-user-circle fa-lg m-r-10"
                  aria-hidden="true"
                />
                Profile <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item list-group-item bg-brown active">
              <a className="nav-link active" href="#">
                <span data-feather="file" />
                <i
                  className="fa fa-dashboard fa-lg m-r-10"
                  aria-hidden="true"
                />
                Simulations
                <i
                  className="fa fa-arrow-left  white m-t-5 fa-lg float-right"
                  aria-hidden="true"
                />
              </a>
            </li>
            <li className="nav-item list-group-item bg-brown">
              <a className="nav-link" href="#">
                <span data-feather="file" />
                <i
                  className="fa fa-dashboard fa-lg m-r-10"
                  aria-hidden="true"
                />
                Need Analysis
              </a>
            </li>
            <li className="nav-item list-group-item bg-brown">
              <a className="nav-link" href="#">
                <span data-feather="file" />
                <i
                  className="fa fa-dashboard fa-lg m-r-10"
                  aria-hidden="true"
                />
                MFID
              </a>
            </li>
            <li className="nav-item list-group-item bg-brown">
              <a className="nav-link" href="#">
                <span data-feather="file" />
                <i
                  className="fa fa-dashboard fa-lg m-r-10"
                  aria-hidden="true"
                />
                Product Selection
              </a>
            </li>
            <li className="nav-item list-group-item bg-brown">
              <a className="nav-link" href="#">
                <span data-feather="file" />
                <i
                  className="fa fa-dashboard fa-lg m-r-10"
                  aria-hidden="true"
                />
                Offers &amp; Proposals
              </a>
            </li>
            <li className="nav-item list-group-item bg-brown">
              <a className="nav-link" href="#">
                <span data-feather="file" />
                <i
                  className="fa fa-dashboard fa-lg m-r-10"
                  aria-hidden="true"
                />
                Documents
              </a>
            </li>
          </ul>
        </div>
      </nav>
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
              Charl Robert &gt; 80% simulation
            </a>
            <i
              className="fa fa-plus-circle fa-2x m-l-10 m-t-5 text-red"
              aria-hidden="true"
            />
            {/* <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Profile</a>
      <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Contact</a> */}
          </div>
        </nav>
        <div className="tab-content" id="nav-tabContent">
          <div
            className="tab-pane fade show active"
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
          >
            {/* <div class="row m-t-10"> */}
            {/* <div class="col-lg-6"> */}
            {/* <div class="card m-t-10"> */}
            <div className="card">
              <div className="row">
                <div className="column">
                  <div className="card-body">
                    <h5 className="card-title text-red">
                      Information needed to get started
                    </h5>
                    <form>
                      <div className="row">
                        <div className="col-lg-9 p-r-0">
                          <div className="form-group">
                            <label htmlFor="one">Yearly Net Salary</label>
                            <input
                              type="text"
                              className="form-control "
                              defaultValue={55.0}
                              id="one"
                            />
                          </div>
                        </div>
                        <div className="col-lg-3">
                          <i className="fa fa-info-circle fa-2x m-t-30" />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-9 p-r-0">
                          <div className="form-group">
                            <label htmlFor="one">Yearly Gross Salary</label>
                            <input
                              type="text"
                              className="form-control "
                              defaultValue={200.0}
                              id="one"
                            />
                          </div>
                        </div>
                        <div className="col-lg-3">
                          <i className="fa fa-info-circle fa-2x m-t-30" />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-9 p-r-0">
                          <div className="form-group">
                            <label htmlFor="one">Employment Date</label>
                            <input
                              type="text"
                              className="form-control "
                              defaultValue="12/12/2020"
                              id="one"
                            />
                          </div>
                        </div>
                        <div className="col-lg-3">
                          <i className="fa fa-info-circle fa-2x m-t-30" />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-9 p-r-0">
                          <div className="form-group">
                            <label htmlFor="one">Estimated Legal Pension</label>
                            <input
                              type="text"
                              className="form-control "
                              defaultValue="42.500"
                              id="one"
                            />
                          </div>
                        </div>
                        <div className="col-lg-3">
                          <i className="fa fa-info-circle fa-2x m-t-30" />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-9 p-r-0">
                          <div className="form-group">
                            <label htmlFor="one">Pension Age</label>
                            <input
                              type="text"
                              className="form-control "
                              defaultValue={67}
                              id="one"
                            />
                          </div>
                        </div>
                        <div className="col-lg-3">
                          <i className="fa fa-info-circle fa-2x m-t-30" />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="column">
                  <div className="card-body">
                    <h5 className="card-title text-red">Fiscal Optimizer</h5>
                    <div className="row">
                      <div className="col-lg-10 m-t-10">
                        <form>
                          <div className="form-group">
                            <input
                              type="range"
                              min={0}
                              max={100}
                              className="form-control-range slider"
                              id="myRange"
                            />
                          </div>
                        </form>
                      </div>
                      <div className="col-lg-2 p-l-0">
                        <input
                          type="number"
                          className="form-control input-range-slider"
                          placeholder={0}
                          id="input-demo"
                          disabled
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-10 m-t-20">
                        <input
                          type="text"
                          defaultValue="24.534.33"
                          className="form-control"
                          id="myRange"
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
                        <strong>200.000</strong>&nbsp;
                        <i className="fa fa-info-circle fa-lg" />
                      </div>
                      <div className="col-lg-3">
                        <span>IPT</span>
                        <br />
                        <strong>12.2.19.80</strong>&nbsp;
                        <i className="fa fa-info-circle fa-lg" />
                      </div>
                    </div>
                    <div className="row">
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

export default Simulation;