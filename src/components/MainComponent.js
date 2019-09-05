import React, { Component } from "react";
import Home from "./HomeComponent";
import Pricing from "./PricingComponent";
import { PRICES } from "../shared/prices";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import { Switch, Route, Redirect } from "react-router-dom";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: PRICES,
      selectedPrice: null
    };
  }
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={Home} />
          <Route
            exact
            path="/pricing"
            component={() => <Pricing items={this.state.items} />}
          />
          {/*<Route path="/aboutus" component={" "} />
          <Route exact path="/menu" component={" "} />
          <Route path="/menu/:dishId" component={" "} />
          <Route exact path="/contactus" component={" "} />*/}
          {/* <Redirect to="/home" /> */}
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
