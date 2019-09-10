import React, { Component } from "react";
import { Button, Input } from "reactstrap";
import Wow from "wow.js";
import Parallax from "scroll-parallax";

const Jumbotron = () => {
  return (
    <header className="jumbotron home">
      <div className="overlayBox" />
      <div className="row jumbotron-header text-center">
        <div className="col-12">
          <h3 className=" animated fadeInUp anim-delay-1">
            Tacoma's Premier Creative Community For
          </h3>
          <h1 className=" animated fadeInUp anim-delay-2">
            Coworking &amp; Events
          </h1>
          <Button
            className="btn btn-dark animated fadeInUp anim-delay-4"
            type="button"
            href="#"
          >
            Request a Tour
          </Button>
        </div>
        <div className="col-12 col-sm"></div>
      </div>
    </header>
  );
};

const About = () => {
  return (
    <div className="row row-content align-items-center">
      <div className="animated fadeInUp wow">
        <div className="col-12 text-center">
          <img
            src="/images/unionclub_lo_ff1-11.png"
            alt="Union Club Tacoma Logo"
          />
        </div>
        <div className="col-12 text-center">
          <h3 className="row-header">About Us</h3>
          <p>
            The Union Club is a mixed-use project contributing to Tacoma’s
            growing artistic and entrepreneurial community. It combines studio
            space, coworking space, office space, beautiful common areas,
            galleries and an event hall in a 15,000 square foot historic
            building in downtown Tacoma.
          </p>
        </div>
        <div className="col-12 text-center">
          <Button role="button" href="#" className="btn-light">
            Learn more&nbsp;&nbsp;&nbsp;{" "}
            <i
              className="fa fa-long-arrow-right"
              style={{ fontSize: "16px" }}
            />
          </Button>
        </div>
      </div>
    </div>
  );
};
const Benefits = () => {
  return (
    // <!-- benefits of using the union club -->
    <div
      className="benefits-section"
      style={{ zIndex: "100", position: "relative" }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 text-center">
            <h3 className="row-header">Benefits</h3>
          </div>
        </div>
        <div className="row align-items-center text-center benefit-items animated fadeInUp wow">
          <div className="col-12 col-sm-6 col-lg-3">
            <i className="fa fa-clock-o" />
            <p>24 Hr Access</p>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <i className="fa fa-coffee" />
            <p>Unlimited Coffee</p>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <i className="fa fa-envelope" />
            <p>Mail Service</p>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <i className="fa fa-paint-brush" />
            <p>Vintage Design</p>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <i className="fa fa-wifi" />
            <p>Insanely Fast Internet</p>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <i className="fa fa-desktop" />
            <p>HD Projectors</p>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <i className="fa fa-users" />
            <p>Conference Rooms</p>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <i className="fa fa-map-marker" />
            <p>Group Events</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ParallaxScroll = () => {
  return (
    // <!-- setting up the parallax -->
    <figure className="parallax-figure">
      <img
        alt="Bronze finger statue"
        className="parallax"
        data-center="1"
        data-intensity="45"
        data-safe-height="0.2"
        src="/images/hp-parallax.jpg"
      />
      <div
        className="overlayBox"
        style={{ background: "rgba(36,36,36,0.4)" }}
      />
      <h3 className="parallax-h3 position-absolute text-center">
        Coworking will help you find the right people
      </h3>
    </figure>
  );
};

const Contact = () => {
  return (
    // <!-- contact information with map -->
    <div className="contact-section row">
      <div className="map-container col-12 col-lg-7 pr-0">
        {/* <!-- map goes here --> */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2707.847276481714!2d-122.44356168406674!3d47.25868961993924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549055a6e6c55535%3A0xa4cc6cf21ab39453!2sUnion+Club+Tacoma!5e0!3m2!1sen!2sus!4v1564011748884!5m2!1sen!2sus"
          width="100%"
          height="100%"
          frameborder="0"
          style={{ border: 0 }}
          allowfullscreen
          title="Location on map"
        ></iframe>
      </div>
      <div className="col-12 col-lg-5 pl-0">
        {/* <!-- contact info goes here --> */}
        <div className="contact-address row row-content m-0">
          <div className="col-12 text-center text-lg-left text-white animated fadeInUp wow">
            <h3>Come &amp; Visit</h3>
            <p>
              539 Broadway <br />
              Tacoma, WA <br />
              98402
            </p>
            <p>
              Phone: <br />
              (253) 3048415
            </p>
            <p>
              Email:
              <br />
              <a className="text-white" href="mailto:info@unionclubtacoma.com">
                info@unionclubtacoma.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Subscribe = () => {
  return (
    /* <!-- email subscribe section --> */
    <div className="subscribe-section row row-content text-center">
      <div className="col-12">
        <i className="fa fa-envelope" />
        <h3>Subscribe to our newsletter</h3>
        <div className="form-inline mt-4 justify-content-center">
          <Input
            className="form-control w-75 my-2 mr-sm-2"
            type="text"
            placeholder=" &nbsp;&nbsp;Email"
            id="email"
            style={{ height: "52px" }}
          />
          <Button type="button" href="#" className="btn-dark">
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  );
};

const Instagram = () => {
  return (
    /* <!-- instagram hover section --> */
    <div className="instagram-section row">
      <div id="small-img" className="col-12 text-center">
        <ul className="list-unstyled">
          <li>
            <img
              src="/images/instagram-1.jpg"
              className="img-responsive inline-block"
              alt="Responsive"
            />
          </li>
          <li>
            <img
              src="/images/instagram-2.jpg"
              className="img-responsive inline-block"
              alt="Responsive"
            />
          </li>
          <li>
            <img
              src="/images/instagram-3.jpg"
              className="img-responsive inline-block"
              alt="Responsive"
            />
          </li>
          <li>
            <img
              src="/images/instagram-4.jpg"
              className="img-responsive inline-block"
              alt="Responsive"
            />
          </li>
          <li>
            <img
              src="/images/instagram-5.jpg"
              className="img-responsive inline-block"
              alt="Responsive"
            />
          </li>
          <li>
            <img
              src="/images/instagram-6.jpg"
              className="img-responsive inline-block"
              alt="Responsive"
            />
          </li>
          <li>
            <img
              src="/images/instagram-7.jpg"
              className="img-responsive inline-block"
              alt="Responsive"
            />
          </li>
          <li>
            <img
              src="/images/instagram-8.jpg"
              className="img-responsive inline-block"
              alt="Responsive"
            />
          </li>
        </ul>
        <div className="instagram-hashtag">
          <h3>
            <a
              href="http://www.instagram.com/unionclubtacoma"
              target="_blank"
              rel="noopener noreferrer"
            >
              #UNIONCLUBTACOMA
            </a>
          </h3>
        </div>
      </div>
    </div>
  );
};
class Home extends Component {
  constructor(props) {
    super(props);

    this.doThisStuffOnScroll = this.doThisStuffOnScroll.bind(this);
  }
  doThisStuffOnScroll() {
    this.didScroll = true;
  }

  componentDidMount() {
    document.querySelector("#navbar").classList.remove("isScrolling");
    const wow = new Wow();
    wow.init();
    const para = new Parallax(".parallax");
    para.init();

    window.addEventListener("scroll", this.doThisStuffOnScroll);
    // window.onscroll = doThisStuffOnScroll;

    setInterval(() => {
      if (this.didScroll) {
        this.didScroll = false;
        checkScroll();
      }
    }, 100);

    // Check if the page has been scrolled
    function checkScroll() {
      if (
        document.body.scrollTop > 0 ||
        document.documentElement.scrollTop > 0
      ) {
        document.getElementById("navbar").classList.add("isScrolling");
      } else {
        document.getElementById("navbar").classList.remove("isScrolling");
      }
    }
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.doThisStuffOnScroll);
  }

  render() {
    return (
      <>
        <Jumbotron />
        <About />
        <Benefits />
        <ParallaxScroll />
        <Contact />
        <Subscribe />
        <Instagram />
      </>
    );
  }
}

export default Home;
