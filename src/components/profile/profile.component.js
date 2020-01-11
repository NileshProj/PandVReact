import React from 'react';
import { Route } from 'react-router-dom';
import Details from '../details/details.component';
import Simulation from '../simulation/simulation';
import Offers from '../offer/offer';
import SideBar from '../sidebar/sidebar.component';

function Profile() {
    return (
        <div>
            <SideBar></SideBar>
            <div className="row m-t-100">
                <div className="col-lg-1" />
                <div className="col-lg-11">
                <Route exact path="/profile/details">
                    <Details></Details>
                </Route> 
                <Route path="/profile/simulation">
                    <Simulation/>
                </Route>    
                <Route path="/profile/offers">
                    <Offers/>
                </Route>
                <Route path="/profile/need-analysis">
                    Need Analysis
                </Route>
                <Route path="/profile/mifid">
                    MIFID
                </Route>
                <Route path="/profile/product-selection">
                    Product Selection
                </Route>
                <Route path="/profile/documents">
                    Documents
                </Route>
                </div>
            </div>
            
        </div>


    )
}

export default Profile;