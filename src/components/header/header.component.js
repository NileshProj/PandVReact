import React from 'react';
import './header.component.css'
import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: 1, data: [{}], filterData:[] };
    this.setActive = this.setActive.bind(this);
    this.search = this.search.bind(this);
    this.state.data = [
      {
        name: 'Tim Charles (177013)',
        dob: '22/03/1957',
        address: 'Boulevard De Wilde 81',
        address1: '1440 Péruwelz'
      },
      {
        name: 'Charleen Jones (248418)',
        dob: '15/09/1965',
        address: 'Chemin Roels 4',
        address1: '1440 Péruwelz'
      },
      {
        name: 'Charlene Yi (182215)',
        dob: '15/09/1965',
        address: 'Avenue Gielen 9',
        address1: '1440 Péruwelz'
      },
      {
        name: 'James Charlton (216158)',
        dob: '15/09/1965',
        address: 'Avenue Gielen 9',
        address1: '1440 Péruwelz'
      },
      {
        name: 'Charly Luyten (862528)',
        dob: '15/09/1965',
        address: 'Avenue Gielen 9',
        address1: '1440 Péruwelz'
      },
      {
        name: 'Charly Smith (345774)',
        dob: '15/09/1965',
        address: 'Avenue Gielen 9',
        address1: '1440 Péruwelz'
      },
      {
        name: 'Charl Robert (124823)',
        dob: '15/09/1965',
        address: 'Avenue Gielen 9',
        address1: '1440 Péruwelz'
      },
      {
        name: 'Charl Schmitz (165138)',
        dob: '15/09/1965',
        address: 'Avenue Gielen 9',
        address1: '1440 Péruwelz'
      },
    ];
  }

  setActive(index) {
    this.setState({ active: index, searchText: '' });
  }

  search() {
    let temp = this.state.data.filter(item=> item.name.toLowerCase().includes(this.state.searchText.toLowerCase()));
    this.setState({filterData: temp});
  }

  updateText(e) {
    this.setState({ searchText: e.target.value, filterData: [] });
  }



  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-maroon p-3">
          <img src="/images/pnv logo.jpg" height={50} alt="" />
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse m-l-250" id="navbarCollapse">
            <ul className="navbar-nav mr-auto">
              <li className={"nav-item " + (this.state.active === 1 ? 'active' : '')}>
                <Link className="nav-link white capital" to="/" onClick={() => this.setActive(1)}>Portfolio</Link>
              </li>
              <li className={"nav-item " + (this.state.active === 2 ? 'active' : '')}>
                <Link className="nav-link white capital" to="/profile/details" onClick={() => this.setActive(2)}>Customers</Link>
              </li>
            </ul>
            <form className="form-inline mt-2 mt-md-0">
              <input className="mr-sm-2 search" type="text" placeholder="Search by Customer Id or email id"
                onChange={(e) => this.updateText(e)} aria-label="Search" />
              <i className="fa fa-search fa-lg search-icon" aria-hidden="true" onClick={this.search} />
              <ul className="navbar-nav mr-auto">
                <li className="nav-item  m-r-50 ">
                  <i className="fa fa-bell fa-lg m-t-10 white" aria-hidden="true" />
                </li>
                <li className="nav-item border-left p-l-10">
                  <span>
                    <i className="fa fa-user-circle-o fa-2x m-t-5 m-l-10" aria-hidden="true" />
                  </span>
                </li>
                <li className="nav-item">
                  <Link className="nav-link white" to="/profile">Rune Celik</Link>
                </li>
              </ul>
            </form>
          </div>
        </nav>

        <div className={"bg-light search-result "+(this.state.filterData.length === 0 ? 'hide': '') }>
          <i className="fa fa-close fa-lg float-right m-r-10 m-t-10" onClick={()=>this.setState({filterData:[]})}></i>
          <div className="container">
            <div className="row">
            {this.state.filterData? this.state.filterData.map(item=>{
              return (
                <div className="col-lg-4">
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img
                    src="/images/user1.png"
                    height={70}
                    width={70}
                    className="profile-pic"
                    alt="Name"
                  />
                </div>
                <div className="col-md-8 m-t-20">
                  <div>
                    <a style={{ color: "#000" }} href="customer-details.html">
                    <strong>{item.name}</strong>
                    </a>
                    <br />
                    <small>
                      <span>{item.dob}</span>
                      <br />
                      <span>{item.address}</span>
                      <br />
                      <span>{item.address1}</span>
                    </small>
                  </div>
                </div>
              </div>
            </div>
              )
            }): null}
            

          </div>
          <div>
          <br />
          <div className="row">
            <div className="col-lg-6">
              <h4 className="card-title text-red float-right">
                Not the {this.state.searchText} you are looking for?
              </h4>
            </div>
            <div className="col-lg-4">
              <button className="btn btn-red white full-width float-left">
                Register a New Prospect
              </button>
            </div>
          </div>
          <br></br>
        </div>
        </div>
        </div>
      </header>

    )
  }
}


export default Header;