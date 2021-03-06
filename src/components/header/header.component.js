import React from 'react';
import './header.component.css'
import { Link, withRouter } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: props.active, data: [{}], filterData: [], searchText: '', notification: false, count: 2 ,};
    this.setActive = this.setActive.bind(this);
    this.search = this.search.bind(this);
    this.state.data = [
      {
        name: 'Charl Robert (177012)',
        dob: '22/03/1957',
        address: 'Boulevard De Wilde 81',
        address1: '1440 Peruwelz',
        imageurl: '/images/user1.png'
      },
      {
        name: 'Tim Charles (177013)',
        dob: '12/06/1975',
        address: 'Palm villa 932',
        address1: '5001 Berat'
      },
      {
        name: 'Charleen Jones (248418)',
        dob: '15/09/1965',
        address: 'Chemin Roels 4',
        address1: '5019 Cete'
      },
      {
        name: 'Charlene Yi (182215)',
        dob: '14/01/1959',
        address: 'Bulevar ASNOM 16',
        address1: '5015 Lugas'
      },
      {
        name: 'James Charlton (216158)',
        dob: '21/10/1966',
        address: 'Pflugfelder Str. 36',
        address1: '5012 Bilce'
      },
      {
        name: 'Charly Luyten (862528)',
        dob: '19/08/1968',
        address: 'Fritzoe Brygge',
        address1: '5412 Vlushe'
      },
      {
        name: 'Charly Smith (345774)',
        dob: '1/10/1970',
        address: 'Kongensgate 35',
        address1: '5401 Cerove'
      },
      {
        name: 'Charl Robert (124823)',
        dob: '15/09/1965',
        address: 'Olav V s gate 4',
        address1: '5406 Malind'
      },
      {
        name: 'Charl Schmitz (165138)',
        dob: '30/03/1964',
        address: 'Quai Paul Verlaine 12',
        address1: '5411 Zhepe'
      },
    ];
  }

  componentDidMount() {
    let active = this.props.location.pathname.includes('profile') ? 2 : 1;
    this.setState({active: active});
  }
  
  componentWillReceiveProps(props){
    // if(props.active && this.state.active !== props.active) {
    //   this.setState({active: props.active === 1 ? 1 : 2});
    // } 
    setTimeout(() => {
      let active = this.props.location.pathname.includes('profile') ? 2 : 1;
      this.setState({active: active});
    }, 1000);
    
  }

  setActive(index) {
    this.setState({ active: index, searchText: '' });
  }

  search() {
    let temp = this.state.data.filter(item => item.name.toLowerCase().includes(this.state.searchText.toLowerCase()));
    this.setState({ filterData: temp, notification: false });
  }

  updateText(e) {
    this.setState({ searchText: e.target.value , notification: false});
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
          <div className="collapse navbar-collapse m-l-50" id="navbarCollapse">
            <ul className="navbar-nav mr-auto">
              <li className={"nav-item " + (this.state.active === 1 ? 'active' : '')}>
                <Link className="nav-link white capital" to="/" onClick={() => this.setActive(1)}>Portfolio</Link>
              </li>
              <li className={"nav-item " + (this.state.active === 2 ? 'active' : '')}>
                <Link className="nav-link white capital" to="/profile/details/0" onClick={() => this.setActive(2)}>Customers</Link>
              </li>
            </ul>
            <form className="form-inline mt-2 mt-md-0">
              <input className="mr-sm-2 search" type="text" value={this.state.searchText} placeholder="Search by Customer Id or email id"
                onChange={(e) => this.updateText(e)} onKeyUp={this.search} aria-label="Search" />
              <i className="fa fa-search fa-lg search-icon" aria-hidden="true" onClick={this.search} />
              <ul className="navbar-nav mr-auto">
                <li className="nav-item  m-r-30 " onClick={()=>this.setState({notification: !this.state.notification, count: 0})}>
                  <i className="fa fa-bell fa-lg m-t-10 white" aria-hidden="true" />
                  <div className={"count text-center "+(this.state.count === 0 ? 'hide': '')}>2</div>
                </li>
                <li className="nav-item border-left p-l-10">
                <img src="/images/11.jpg" className="profile-pic1"></img>
                  {/* <span>
                    <i className="fa fa-user-circle-o fa-2x m-t-5 m-l-10" aria-hidden="true" />
                  </span> */}
                </li>
                <li className="nav-item">
                  <Link className="nav-link white" to="/profile">Rune Celik</Link>
                </li>
              </ul>
            </form>
          </div>
        </nav>

        <div className={"notification border box-shadow "+(this.state.notification ? '':'hide')} onMouseLeave={()=>this.setState({notification: false})}>
          <div className="row hide">
              <div className="col-lg-12">
                <div className="message border-bottom">Charl Robert's Offer is added.</div>
              </div>
          </div>
          <div className="row">
              <div className="col-lg-12">
                <div className="message border-bottom">Seb Robert's offer is created.</div>
              </div>
          </div>
          <div className="row">
              <div className="col-lg-12">
                <div className="message">Tim Greef's Simulation is created.</div>
              </div>
          </div>
        </div>
        <div className={"bg-light search-result " + (this.state.filterData.length === 0 && this.state.searchText === '' ? 'hide' : '')}>
          <i className="fa fa-close fa-lg float-right m-r-10 m-t-10" onClick={() => this.setState({ filterData: [], searchText: '' })}></i>
          <div className="container">
            <div className="row">
              {this.state.filterData ? this.state.filterData.map((item, index) => {
                return (
                  <div className="col-lg-4" key={index}>
                    <div className="row no-gutters">
                      <div className="col-md-4">
                        <img
                          src={item.imageurl ? item.imageurl : '/images/'+(index+1)+'.jpg'}
                          height={70}
                          width={70}
                          className="profile-pic"
                          alt="Name"
                        />
                      </div>
                      <div className="col-md-7 m-t-20 m-l-10">
                        <div>
                          <Link style={{ color: "#000" }} onClick={() => { this.setState({ filterData: [], searchText: '' }); this.setActive(2) }} to={"/profile/details/" + index}>
                            <strong>{item.name}</strong>
                          </Link>
                          <br />
                          <div style={{ fontSize: '11px' }}>
                            <span>{item.dob}</span>
                            <br />
                            <span>{item.address}</span>
                            <br />
                            <span>{item.address1}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              }) : <div className="col-lg-4 m-t-10">No result found.</div>}


            </div>
            <div>
              <br />
              <div className="row">
                <div className="col-lg-6">
                  <h4 className="card-title text-red float-right m-t-10">
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


export default withRouter(Header);