import React, { Component } from "react";
import Home from "./HomeComponent";
import Rentals from "./RentalsComponent";
import Pricing from "./PricingComponent";
import About from "./AboutComponent";
import Media from "./MediaComponent";
import Blog from "./BlogComponent";
import { PRICES } from "../shared/prices";
import { BLOGS } from "../shared/blogs";
import { MEDIAS } from "../shared/Media";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import { Switch, Route, Redirect } from "react-router-dom";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: PRICES,
      blogs: BLOGS,
      media: MEDIAS,
      selectedPrice: null,
      isAbout: false,
      isBlog: false,
      isGallery: false,
      isPricing: false,
      isRentals: false
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
          <Route exact path="/about" component={About} />
          <Route exact path="/rentals" component={Rentals} />
          <Route
            exact
            path="/gallery"
            component={() => <Media media={this.state.media} />}
          />
          <Route
            exact
            path="/blog"
            component={() => <Blog blogs={this.state.blogs} />}
          />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
