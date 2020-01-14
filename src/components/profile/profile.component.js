import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import Details from '../details/details.component';
import Simulation from '../simulation/simulation.component';
import Offers from '../offer/offer.component';
import SideBar from '../sidebar/sidebar.component';
import NeedAnalysis from '../need-analysis/need-analysis.component';
import MIFID from '../mifid/mifid.component';
import Product from '../product/product.component';
import ProductDetails from '../product/product-details.component';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {active: 1};
        this.setActive = this.setActive.bind(this);
    }
    componentDidMount() {
        window.scrollTo(0, 0);
        
    }
    setActive(index) {
        this.setState({active: index});
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row m-t-100">
                    <div className="col-lg-2" >
                    <SideBar active={this.state.active}></SideBar>
                    </div>
                    <div className="col-lg-10">
                    <Route path="/profile/details/:id" render={props => {
                        return <Details {...props} setActive={this.setActive}/>;
                        }}
                    >
                    </Route> 
                    <Route path="/profile/simulation">
                        <Simulation setActive={this.setActive}/>
                    </Route>    
                    <Route path="/profile/offers">
                        <Offers setActive={this.setActive}/>
                    </Route>
                    <Route path="/profile/need-analysis">
                        <NeedAnalysis setActive={this.setActive}></NeedAnalysis>
                    </Route>
                    <Route path="/profile/mifid">
                        <MIFID setActive={this.setActive}></MIFID>
                    </Route>
                    <Route path="/profile/product-selection">
                        <Product setActive={this.setActive}></Product>
                    </Route>
                    <Route path="/profile/product-details">
                        <ProductDetails setActive={this.setActive}></ProductDetails>
                    </Route>
                    <Route path="/profile/documents">
                        Documents
                    </Route>
                    </div>
                </div>
                
            </div>
    
    
        )
    }
    
}

export default withRouter(Profile);