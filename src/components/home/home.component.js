import React from 'react';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {notes: [], note: '',newNote: false};
        this.newNote = this.newNote.bind(this);
        this.saveNote = this.saveNote.bind(this);
        this.updateNote = this.updateNote.bind(this);
        this.deleteNote = this.deleteNote.bind(this);
        this.state.notes = [
            {
                title: 'Check product fiche for Top-Hat Plan'
            },
            {
                title: 'Complete MIFID questionnaire for Marc'
            },
            {
                title:'Call Claims department regarding Sonjas rejected claim'
            },
            {
                title: 'Follow online training on new Company Law'
            }
        ]
    }

    newNote () {
        this.setState({newNote: true});
    }

    saveNote() {
        let notes = this.state.notes;
        notes.push({title: this.state.note});
        this.setState({notes: notes, newNote: false});
    }

    updateNote(e) {
        this.setState({note: e.target.value});
    }

    deleteNote(index) {
        let notes = this.state.notes;
        notes.splice(index, 1);
        this.setState({notes: notes, newNote: false});
    }
    
    render(){
    return (
        <div className="container">
            <div className="row m-t-130">
                <div className="col-lg-8">
                    <h5 className="text-red">At a glance</h5>
                    <div>
                        <div className="row">
                            <div className="col-lg-3 p-r-0">
                                <div className="border ">
                                    <span>Leads</span>
                                    <h5>5</h5>
                                    <i className="fa fa-flag-o fa-2x float-right top m-t-20 m-r-30" />
                                </div>
                            </div>
                            <div className="col-lg-3 p-l-0 p-r-0">
                                <div className="border">
                                    <span>Offers</span>
                                    <h5>8</h5>
                                    <i className="fa fa-envelope-o fa-2x float-right top m-t-20 m-r-30" />
                                </div>
                            </div>
                            <div className="col-lg-3 p-r-0 p-l-0">
                                <div className="border">
                                    <span>Proposals</span>
                                    <h5>20</h5>
                                    <i className="fa fa-users fa-2x float-right top m-t-20 m-r-30" />
                                </div>
                            </div>
                            <div className="col-lg-3 p-l-0">
                                <div className="border">
                                    <span>Starred Profiles</span>
                                    <h5>23</h5>
                                    <i className="fa fa-star-o fa-2x float-right top m-t-20 m-r-30" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-lg-12">
                            <h5 className="text-red">My Tasks (5)</h5>
                            <i className="fa fa-pencil-square-o float-right fa-2x top text-red m-r-10"
                                aria-hidden="true" onClick={this.newNote}
                            />
                            <div className="m-t-20">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="border" style={{ padding: 20, height: 222, overflow: 'auto' }}>
                                            <div className={"box "+(this.state.newNote ? '': 'hide')}>
                                                    <div className="row">
                                                        <input type="text" className="form-control col-lg-6" onChange={(e)=>this.updateNote(e)} placeholder="New Note.."></input>
                                                        <button className="btn btn-red col-lg-2" disabled={this.state.note.length === 0} onClick={this.saveNote}>Save</button>
                                                        <button className="btn btn-dark col-lg-2" onClick={()=>this.setState({newNote:false})}>Cancel</button>
                                                    </div>
                                            </div>
                                            <div className={this.state.newNote ? 'hide': ''}>
                                            {this.state.notes.map((note, index)=>{
                                                return (
                                                <div className="row"  key={index}>    
                                                    <div className="col-lg-10" >
                                                        <div style={{fontSize: '18px', margin: '5px 10px 10px 10px'}}>{note.title}</div> 
                                                    </div>
                                                    <div className="col-lg-2">
                                                        <div style={{margin: '12px 10px 10px 10px'}}>
                                                            <i className={"fa fa-check fa-lg m-r-10 "+(index !== 2 ? 'hide': '')} />
                                                            <i className="fa fa-trash fa-lg float-right" onClick={()=>this.deleteNote(index)}/>
                                                        </div>
                                                    </div>
                                                </div>
                                                )
                                            })}
                                           </div> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <h5 className="text-red">Frequently Used</h5>
                    <div className="border box-shadow">
                        <div className="row">
                            <div className="col-lg-12">
                                <ul className="nav list-group list-group-flush frequently-used-menu">
                                    <li className="nav-item list-group-item">
                                        <a className="nav-link" href="#">
                                            <span data-feather="home" />
                                            <i
                                                className="fa fa-user-circle fa-lg m-r-10"
                                                aria-hidden="true"
                                            />
                                            Create Customer
            </a>
                                    </li>
                                    <li className="nav-item list-group-item">
                                        <a className="nav-link" href="#">
                                            <span data-feather="home" />
                                            <i className="fa fa-users fa-lg m-r-10" aria-hidden="true" />
                                            Create Simulations
            </a>
                                    </li>
                                    <li className="nav-item list-group-item">
                                        <a className="nav-link" href="#">
                                            <span data-feather="home" />
                                            <i
                                                className="fa fa-envelope-o fa-lg m-r-10"
                                                aria-hidden="true"
                                            />
                                            Create Offer
            </a>
                                    </li>
                                    <li className="nav-item list-group-item">
                                        <a className="nav-link" href="#">
                                            <span data-feather="home" />
                                            <i className="fa fa-file fa-lg m-r-10" aria-hidden="true" />
                                            Create Prospect
            </a>
                                    </li>
                                    <li className="nav-item list-group-item">
                                        <a className="nav-link" href="#">
                                            <span data-feather="home" />
                                            <i
                                                className="fa fa-calendar-o fa-lg m-r-10"
                                                aria-hidden="true"
                                            />
                                            Create Proposals
            </a>
                                    </li>
                                    <li className="nav-item list-group-item">
                                        <a className="nav-link" href="#">
                                            <span data-feather="home" />
                                            <i
                                                className="fa fa-envelope-o fa-lg m-r-10"
                                                aria-hidden="true"
                                            />
                                            Endorse Contract
            </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <h5 className="text-red">My Follow Ups</h5>
            <br />
            <div>
                <div
                    id="carouselExampleControls"
                    className="carousel slide"
                    data-ride="carousel"
                >
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="card box-shadow">
                                        <div className="row no-gutters">
                                            <div className="col-md-5">
                                                <img
                                                    src="images/user1.png"
                                                    height={100}
                                                    width={100}
                                                    className="profile-pic"
                                                    alt="Name"
                                                />
                                            </div>
                                            <div className="col-md-7 m-t-50">
                                                <div className="card-body">
                                                    <h5 className="card-title">Amy De Greef</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-1" />
                                            <div className="col-lg-8">
                                                <br />
                                                <ul className="nav flex-column mb-2">
                                                    <li className="nav-item">
                                                    Offer <strong>#254174</strong> (First follow-up)</li>
                                                    <li className="nav-item">
                                                        <strong>Due Date: </strong>08-04-2019
                    </li>
                                                </ul>
                                                <br />
                                            </div>
                                            <div className="col-lg-3" />
                                            <div className="col-lg-12">
                                                <br></br>
                                                <a href="#" className="btn btn-red white full-width">
                                                    View Offer Details
                  </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="card box-shadow">
                                        <div className="row no-gutters">
                                            <div className="col-md-5">
                                                <img
                                                    src="images/user1.png"
                                                    height={100}
                                                    width={100}
                                                    className="profile-pic"
                                                    alt="Name"
                                                />
                                            </div>
                                            <div className="col-md-7 m-t-50">
                                                <div className="card-body">
                                                    <h5 className="card-title">Mathias Schmitz</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-1" />
                                            <div className="col-lg-8">
                                                <br />
                                                <ul className="nav flex-column mb-2">
                                                    <li className="nav-item">
                                                    Contract <strong>#175625</strong> (Client Alteration Review)

                    </li>
                                                    <li className="nav-item">
                                                        <strong>Due Date: </strong>07-04-2019
                    </li>
                                                </ul>
                                                <br />
                                            </div>
                                            <div className="col-lg-3" />
                                            <div className="col-lg-12">
                                                <a href="#" className="btn btn-red white full-width">
                                                    View Conrtact Details
                  </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="card box-shadow">
                                        <div className="row no-gutters">
                                            <div className="col-md-5">
                                                <img
                                                    src="images/user1.png"
                                                    height={100}
                                                    width={100}
                                                    className="profile-pic"
                                                    alt="Name"
                                                />
                                            </div>
                                            <div className="col-md-7 m-t-50">
                                                <div className="card-body">
                                                    <h5 className="card-title">Nathan Celik</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-1" />
                                            <div className="col-lg-8">
                                                <br />
                                                <ul className="nav flex-column mb-2">
                                                    <li className="nav-item">
                                                    Medical Questionnaire (Sign-off pending)
                    </li>
                                                    <li className="nav-item">
                                                        <strong>Due Date: </strong>08/04/2019
                    </li>
                                                </ul>
                                                <br />
                                            </div>
                                            <div className="col-lg-3" />
                                            <div className="col-lg-12">
                                                <a href="#" className="btn btn-red white full-width">
                                                    View Document Details
                  </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                        <div className="row">
                                <div className="col-lg-4">
                                    <div className="card box-shadow">
                                        <div className="row no-gutters">
                                            <div className="col-md-5">
                                                <img
                                                    src="images/user1.png"
                                                    height={100}
                                                    width={100}
                                                    className="profile-pic"
                                                    alt="Name"
                                                />
                                            </div>
                                            <div className="col-md-7 m-t-50">
                                                <div className="card-body">
                                                    <h5 className="card-title">Amy De Greef</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-1" />
                                            <div className="col-lg-8">
                                                <br />
                                                <ul className="nav flex-column mb-2">
                                                    <li className="nav-item">
                                                    Offer <strong>#254174</strong> (First follow-up)</li>
                                                    <li className="nav-item">
                                                        <strong>Due Date: </strong>08-04-2019
                    </li>
                                                </ul>
                                                <br />
                                            </div>
                                            <div className="col-lg-3" />
                                            <div className="col-lg-12">
                                                <br></br>
                                                <a href="#" className="btn btn-red white full-width">
                                                    View Offer Details
                  </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="card box-shadow">
                                        <div className="row no-gutters">
                                            <div className="col-md-5">
                                                <img
                                                    src="images/user1.png"
                                                    height={100}
                                                    width={100}
                                                    className="profile-pic"
                                                    alt="Name"
                                                />
                                            </div>
                                            <div className="col-md-7 m-t-50">
                                                <div className="card-body">
                                                    <h5 className="card-title">Mathias Schmitz</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-1" />
                                            <div className="col-lg-8">
                                                <br />
                                                <ul className="nav flex-column mb-2">
                                                    <li className="nav-item">
                                                    Contract <strong>#175625</strong> (Client Alteration Review)

                    </li>
                                                    <li className="nav-item">
                                                        <strong>Due Date: </strong>07-04-2019
                    </li>
                                                </ul>
                                                <br />
                                            </div>
                                            <div className="col-lg-3" />
                                            <div className="col-lg-12">
                                                <a href="#" className="btn btn-red white full-width">
                                                    View Conrtact Details
                  </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="card box-shadow">
                                        <div className="row no-gutters">
                                            <div className="col-md-5">
                                                <img
                                                    src="images/user1.png"
                                                    height={100}
                                                    width={100}
                                                    className="profile-pic"
                                                    alt="Name"
                                                />
                                            </div>
                                            <div className="col-md-7 m-t-50">
                                                <div className="card-body">
                                                    <h5 className="card-title">Nathan Celik</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-1" />
                                            <div className="col-lg-8">
                                                <br />
                                                <ul className="nav flex-column mb-2">
                                                    <li className="nav-item">
                                                    Medical Questionnaire (Sign-off pending)
                    </li>
                                                    <li className="nav-item">
                                                        <strong>Due Date: </strong>08/04/2019
                    </li>
                                                </ul>
                                                <br />
                                            </div>
                                            <div className="col-lg-3" />
                                            <div className="col-lg-12">
                                                <a href="#" className="btn btn-red white full-width">
                                                    View Document Details
                  </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>    
                        </div>
                        <div className="carousel-item">
                        <div className="row">
                                <div className="col-lg-4">
                                    <div className="card box-shadow">
                                        <div className="row no-gutters">
                                            <div className="col-md-5">
                                                <img
                                                    src="images/user1.png"
                                                    height={100}
                                                    width={100}
                                                    className="profile-pic"
                                                    alt="Name"
                                                />
                                            </div>
                                            <div className="col-md-7 m-t-50">
                                                <div className="card-body">
                                                    <h5 className="card-title">Amy De Greef</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-1" />
                                            <div className="col-lg-8">
                                                <br />
                                                <ul className="nav flex-column mb-2">
                                                    <li className="nav-item">
                                                    Offer <strong>#254174</strong> (First follow-up)</li>
                                                    <li className="nav-item">
                                                        <strong>Due Date: </strong>08-04-2019
                    </li>
                                                </ul>
                                                <br />
                                            </div>
                                            <div className="col-lg-3" />
                                            <div className="col-lg-12">
                                                <br></br>
                                                <a href="#" className="btn btn-red white full-width">
                                                    View Offer Details
                  </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="card box-shadow">
                                        <div className="row no-gutters">
                                            <div className="col-md-5">
                                                <img
                                                    src="images/user1.png"
                                                    height={100}
                                                    width={100}
                                                    className="profile-pic"
                                                    alt="Name"
                                                />
                                            </div>
                                            <div className="col-md-7 m-t-50">
                                                <div className="card-body">
                                                    <h5 className="card-title">Mathias Schmitz</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-1" />
                                            <div className="col-lg-8">
                                                <br />
                                                <ul className="nav flex-column mb-2">
                                                    <li className="nav-item">
                                                    Contract <strong>#175625</strong> (Client Alteration Review)

                    </li>
                                                    <li className="nav-item">
                                                        <strong>Due Date: </strong>07-04-2019
                    </li>
                                                </ul>
                                                <br />
                                            </div>
                                            <div className="col-lg-3" />
                                            <div className="col-lg-12">
                                                <a href="#" className="btn btn-red white full-width">
                                                    View Conrtact Details
                  </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="card box-shadow">
                                        <div className="row no-gutters">
                                            <div className="col-md-5">
                                                <img
                                                    src="images/user1.png"
                                                    height={100}
                                                    width={100}
                                                    className="profile-pic"
                                                    alt="Name"
                                                />
                                            </div>
                                            <div className="col-md-7 m-t-50">
                                                <div className="card-body">
                                                    <h5 className="card-title">Nathan Celik</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-1" />
                                            <div className="col-lg-8">
                                                <br />
                                                <ul className="nav flex-column mb-2">
                                                    <li className="nav-item">
                                                    Medical Questionnaire (Sign-off pending)
                    </li>
                                                    <li className="nav-item">
                                                        <strong>Due Date: </strong>08/04/2019
                    </li>
                                                </ul>
                                                <br />
                                            </div>
                                            <div className="col-lg-3" />
                                            <div className="col-lg-12">
                                                <a href="#" className="btn btn-red white full-width">
                                                    View Document Details
                  </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>    
                        </div>
                    </div>
                    <a
                        className="carousel-control-prev"
                        href="#carouselExampleControls"
                        role="button"
                        data-slide="prev"
                    >
                        <i className="fa fa-chevron-left fa-2x" />
                        <span className="sr-only">Previous</span>
                    </a>
                    <a
                        className="carousel-control-next"
                        href="#carouselExampleControls"
                        role="button"
                        data-slide="next"
                    >
                        <i className="fa fa-chevron-right fa-2x" />
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div>
    )
    }
}

export default Home;