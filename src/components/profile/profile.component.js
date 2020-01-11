import React from 'react';
import { Route } from 'react-router-dom';
import Details from '../details/details.component';
import Simulation from '../simulation/simulation.component';
import Offers from '../offer/offer';
import SideBar from '../sidebar/sidebar.component';
import NeedAnalysis from '../need-analysis/need-analysis.component';
import MIFID from '../mifid/mifid.component';
import Product from '../product/product.component';

function Profile() {
    return (
        <div className="container-fluid">
            <div className="row m-t-100">
                <div className="col-lg-2" >
                <SideBar></SideBar>
                </div>
                <div className="col-lg-10">
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
                    <NeedAnalysis></NeedAnalysis>
                </Route>
                <Route path="/profile/mifid">
                    <MIFID></MIFID>
                </Route>
                <Route path="/profile/product-selection">
                    <Product></Product>
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