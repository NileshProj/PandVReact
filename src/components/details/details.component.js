import React from 'react';
import { Link } from 'react-router-dom';

class Details extends React.Component {
    constructor(props) {
        super(props);
        this.state = { stared: false, edit: false, user: {}, data:[], temp:{}, id: 0 };
        this.starProfile = this.starProfile.bind(this);
        this.unstarProfile = this.unstarProfile.bind(this);
        this.enableEdit = this.enableEdit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.save = this.save.bind(this);
        this.state.user = {
            name: 'Charl Robert',
            address: '',
            contact1: {
                mobile1: '+32 596 183 486',
                mobile2: '+32 18 522 728',
                email: ''
            },
            contact2: {
                mobile1: '+32 477 991 577',
                mobile2: '+32 14 213 418',
                email: 'seb.rob@hotmail.com'
            }
        }
        this.state.data = [
            {
              name: 'Charl Robert',
              dob: '22/03/1957',
              address: 'Boulevard De Wilde 81',
              address1: '1440 Péruwelz',
              imageurl: '/images/user1.png'
            },
            {
              name: 'Tim Charles',
              dob: '22/03/1957',
              address: 'Boulevard De Wilde 81',
              address1: '1440 Péruwelz'
            },
            {
              name: 'Charleen Jones',
              dob: '15/09/1965',
              address: 'Chemin Roels 4',
              address1: '1440 Péruwelz'
            },
            {
              name: 'Charlene Yi',
              dob: '15/09/1965',
              address: 'Avenue Gielen 9',
              address1: '1440 Péruwelz'
            },
            {
              name: 'James Charlton',
              dob: '15/09/1965',
              address: 'Avenue Gielen 9',
              address1: '1440 Péruwelz'
            },
            {
              name: 'Charly Luyten',
              dob: '15/09/1965',
              address: 'Avenue Gielen 9',
              address1: '1440 Péruwelz'
            },
            {
              name: 'Charly Smith',
              dob: '15/09/1965',
              address: 'Avenue Gielen 9',
              address1: '1440 Péruwelz'
            },
            {
              name: 'Charl Robert',
              dob: '15/09/1965',
              address: 'Avenue Gielen 9',
              address1: '1440 Péruwelz'
            },
            {
              name: 'Charl Schmitz',
              dob: '15/09/1965',
              address: 'Avenue Gielen 9',
              address1: '1440 Péruwelz'
            },
          ];
        
    }

    componentDidMount() {
        
    }
    starProfile() {
        this.setState({stared : true});
    }
    unstarProfile() {
        this.setState({stared : false});
    }

    enableEdit() {
        this.setState({edit: true});
    }

    handleChange(filed1, field2, e) {
        let user = this.state.user;
        user[filed1][field2] = e.target.value;
        this.setState({user: user});
    }

    save() {
        this.setState({user: this.state.temp, edit :false, temp: {}});
    }

    render() {
        let id = this.props.match.params.id;
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
                            Charl Robert
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
                                <Link className="dropdown-item" to="/profile/c">
                                    Contracts
                                </Link>
                                <Link className="dropdown-item" to="/profile/p">
                                    Proposals
                                </Link>
                                <Link className="dropdown-item" to="/profile/d">
                                    Documents
                                </Link>
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
                        <div className="row m-t-10">
                            <div className="col-lg-6">
                                <div className="card m-t-10">
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <img
                                                src="/images/user1.png"
                                                height={150}
                                                width={150}
                                                className="profile-pic"
                                                alt="Name"
                                            />
                                        </div>
                                        <div className="col-lg-8">
                                            <div className="card-body m-t-50">
                                                <h5 className="card-title">{this.state.data[id].name}</h5>
                                                <p className="card-text">
                                                {this.state.data[id].address} <br></br>{this.state.data[id].address1}
                                                </p>
                                                <i className={"fa fa-star-o fa-2x top m-t-50 m-r-50 text-red "+(this.state.stared ? 'hide': '')}
                                                 onClick={this.starProfile} />
                                                <i className={"fa fa-star fa-2x top m-t-50 m-r-50 text-red "+(this.state.stared ? '': 'hide')}
                                                onClick={this.unstarProfile} />
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row m-20">
                                        <div className="col-lg-12">
                                            <h5 className="card-title text-red">
                                                Contact &amp; Additional Details
                                            </h5>
                                            <i
                                                className="fa fa-pencil-square-o float-right fa-2x top text-red"
                                                aria-hidden="true" onClick={this.enableEdit}
                                            />
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <h5>Charl Robert</h5>
                                                    <ul className="nav flex-column mb-2">
                                                        <li className={"nav-item "+(this.state.edit ? 'hide' : '')} >
                                                            <i className="fa fa-mobile fa-lg m-r-10"
                                                                aria-hidden="true"
                                                            />{this.state.user.contact1.mobile1}
                                                        </li>
                                                        <li className={"nav-item "+(this.state.edit ? '' : 'hide')} >
                                                            <input type="text" className="form-control" value={this.state.user.contact1.mobile1} 
                                                            onChange={(e)=>this.handleChange('contact1', 'mobile1',e)}></input>
                                                        </li>
                                                        <li className={"nav-item "+(this.state.edit ? 'hide' : '')} >
                                                            <i className="fa fa-mobile fa-lg m-r-10"
                                                                aria-hidden="true"
                                                            />{this.state.user.contact1.mobile2}
                                                        </li>
                                                        <li className={"nav-item "+(this.state.edit ? '' : 'hide')} >
                                                        <input type="text" className="form-control" value={this.state.user.contact1.mobile2}
                                                            onChange={(e)=>this.handleChange('contact1','mobile2',e)}></input>
                                                        </li>
                                                        <li className={"nav-item "+(this.state.edit ? 'hide' : '')} >
                                                            <i className="fa fa-envelope-o m-r-5"
                                                                aria-hidden="true"
                                                            />{this.state.user.contact1.email ? this.state.user.contact1.email : 'not found'}
                                                        </li>
                                                        <li className={"nav-item "+(this.state.edit ? '' : 'hide')} >
                                                            <input type="text" className="form-control" value={this.state.user.contact1.email}
                                                            onChange={(e)=>this.handleChange('contact1','email',e)}></input>
                                                        </li>
                                                    </ul>
                                                    <br />
                                                    <br />
                                                    <div>
                                                        <ul className="nav flex-column mb-2">
                                                            <li className="nav-item">
                                                                <strong></strong>
                                                                <strong>D.O.B </strong>22/03/1977
                                                            </li>
                                                            <li className="nav-item">
                                                                <strong>Gender </strong>Male
                                                            </li>
                                                            <li className="nav-item">
                                                                <strong>Profession </strong> Civil Servant
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <h5>Seb Robert</h5>
                                                    <ul className="nav flex-column mb-2">
                                                        <li className={"nav-item "+(this.state.edit ? 'hide' : '')} >
                                                            <i className="fa fa-mobile fa-lg m-r-10"
                                                                aria-hidden="true"
                                                            />{this.state.user.contact2.mobile1}
                                                        </li>
                                                        <li className={"nav-item "+(this.state.edit ? '' : 'hide')} >
                                                            <input type="text" className="form-control" value={this.state.user.contact2.mobile1}
                                                            onChange={(e)=>this.handleChange('contact2','mobile1',e)}></input>
                                                        </li>
                                                        <li className={"nav-item "+(this.state.edit ? 'hide' : '')} >
                                                            <i className="fa fa-mobile fa-lg m-r-10"
                                                                aria-hidden="true"
                                                            />{this.state.user.contact2.mobile2}
                                                        </li>
                                                        <li className={"nav-item "+(this.state.edit ? '' : 'hide')} >
                                                        <input type="text" className="form-control" value={this.state.user.contact2.mobile2}
                                                        onChange={(e)=>this.handleChange('contact2','mobile2',e)}></input>
                                                        </li>
                                                        <li className={"nav-item "+(this.state.edit ? 'hide' : '')} >
                                                            <i className="fa fa-envelope-o m-r-5"
                                                                aria-hidden="true"
                                                            />{this.state.user.contact2.email ? this.state.user.contact2.email : 'not found'}
                                                        </li>
                                                        <li className={"nav-item "+(this.state.edit ? '' : 'hide')} >
                                                            <input type="text" className="form-control" value={this.state.user.contact2.email}
                                                            onChange={(e)=>this.handleChange('contact2','email',e)}></input>
                                                        </li>
                                                    </ul>
                                                    <br />
                                                    <br />
                                                    <div>
                                                        <ul className="nav flex-column mb-2">
                                                            <li className="nav-item">
                                                                <strong>Marrital Status: </strong>Married
                                                            </li>
                                                            <li className="nav-item">
                                                                <strong>ID Card: </strong>DL
                                                            </li>
                                                            <li className="nav-item">
                                                                <strong>Valid Till: </strong> 12/2020
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <button className={"btn btn-red float-right "+(this.state.edit ? '' : 'hide')} onClick={()=>this.setState({edit: false})}>Done</button>
                                                {/* <i className={"fa fa-save fa-lg float-right "+(this.state.edit ? '' : 'hide')} onClick={this.save}></i>
                                                <i className={"fa fa-close fa-lg float-right "+(this.state.edit ? '' : 'hide')} onClick={()=>this.setState({edit: false})}></i> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card m-t-10" style={{ height: 200 }}>
                                    <h5 className="card-title text-red m-t-10 m-l-10">
                                        Recent Communication
                    </h5>
                                    <div>
                                        <br />
                                        <div className="border m-l-10 m-r-10">
                                        Proficiat met verjaardag 12/12/2018 (Outgoing - SMS)
                      </div>
                                        <div className="border m-l-10 m-t-10 m-r-10">
                                        10/10/2018 (Brief) VAPZ and IPT Policy
                      </div>
                                    </div>
                                </div>
                                <div className="card m-t-10" style={{ height: 200 }}>
                                    <h5 className="card-title text-red m-t-10 m-l-10">Relations</h5>
                                    <div>
                                        <br />
                                        <div className="row">
                                            <div className="col-lg-2">
                                                <i
                                                    className="fa fa-user fa-lg m-r-10 float-right"
                                                    aria-hidden="true"
                                                />
                                            </div>
                                            <div className="col-lg-10">
                                                <h5>
                                                    Andréke Robert
                            <br />
                                                    Julia Robert
                            <br />
                                                    Stephanie Robert
                          </h5>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-2">
                                                <i
                                                    className="fa fa-folder fa-lg m-r-10 float-right"
                                                    aria-hidden="true"
                                                />
                                            </div>
                                            <div className="col-lg-10">
                                                <h5>Pied Piper</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card m-t-10 hide">
                                    <div className="card-body">
                                        <h5 className="card-title text-red">Existing Contracts</h5>
                                        <br />
                                        <div className="row">
                                            <div className="col-sm-6 p-r-0">
                                                <div className="card bg-dark-gray">
                                                    <div className="card-body">
                                                        <div className="row">
                                                            <div className="col-lg-3">
                                                                <i
                                                                    className="fa fa-money fa-2x"
                                                                    aria-hidden="true"
                                                                />
                                                            </div>
                                                            <div className="col-lg-9">
                                                                <h5>45454533-3040</h5>
                                                                <p className="card-text">Pension Savings</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6 p-l-0">
                                                <div className="card bg-gray">
                                                    <div className="card-body">
                                                        <div className="row">
                                                            <div className="col-lg-3">
                                                                <i
                                                                    className="fa fa-car fa-2x"
                                                                    aria-hidden="true"
                                                                />
                                                            </div>
                                                            <div className="col-lg-9">
                                                                <h5>45454533-3040</h5>
                                                                <p className="card-text">Car</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <h5 className="card-title text-red">Offers and Proposals</h5>
                                        <a href="#" className="btn btn-red white full-width">
                                            Create New
                      </a>
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

export default Details;