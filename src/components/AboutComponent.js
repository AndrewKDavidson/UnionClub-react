import React from "react";

const Jumbotron = () => {
  return (
    <header className="jumbotron-pages">
      <div className="row jumbotron-header">
        <div className="col-12 vh-center text-center">
          <h1 className="title">ABOUT US</h1>
        </div>
      </div>
    </header>
  );
};

const Content = () => {
  return (
    <div className="container">
      <div className="row py-4">
        <div className="col-md-6">
          <img
            src="https://unionclubtacoma.com/wp-content/uploads/2017/12/TopImage570x270W.jpg"
            className="img-fluid"
            alt="comfortable office"
          />
          <div className="row py-4">
            <div className="col-6">
              <img
                src="https://unionclubtacoma.com/wp-content/uploads/2017/12/BottoomImage270x270W.jpg"
                className="img-fluid "
                alt="lady at desk"
              />
            </div>
            <div className="col-6">
              <img
                src="https://unionclubtacoma.com/wp-content/uploads/2017/12/BottomImage270x270W.jpg"
                className="img-fluid "
                alt="guy at desk"
              />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-5 offset-md-1 text-center">
          <h3 className="">ABOUT THE UNION CLUB</h3>
          <br />
          <p>
            {" "}
            The Union Club is a coworking space contributing to Tacoma's growing
            artistic and entrepreneurial communities. It combines a maker
            studio, event hall, and office coworking space, in a 15,000 square
            foot historic building in downtown Tacoma.
          </p>
          <p>
            Our mission is to support and promote local art and technology,
            creating a gathering place for creatives and ​entrepreneurs. By
            providing a supportive community, the Union Club is a place where
            members can do what they love and love where they work. We offer a
            variety of memberships that range in price and vary in privacy.
            Whether you thrive working in a communal space or favor closing the
            door behind you the Union Club fits the bill.
          </p>

          <h5 className="mb-3">
            <strong>History</strong>
          </h5>
          <p>
            Founded in 1888, the Union Club served as a social and business club
            for the most influential men of the time. In 1906, a three-story
            addition was designed to give women access to the Union Club. In
            1936, the University Union Club was founded and remained in the
            building until 1985.
          </p>
          <p>
            Designated guests of the Union Club include President William Taft,
            First Lady Eleanor Roosevelt and college football coach Knute
            Rockne.
          </p>
          <p>
            In 2016, the Union Club was in a state of disrepair and was
            purchased by Amber and Eli Moreno. With a passion for historical
            preservation they have restored the building back to its original
            grandeur and have created a new, modern take on the Union Club.
          </p>
          <span className="navbar-text">
            <a href="#0" data-toggle="modal" data-target="#formModal">
              <button type="button" className="btn btn-dark my-4">
                Become a Member{" "}
              </button>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

const Cards = () => {
  return (
    <div style={{ backgroundColor: "rgb(249, 249, 249)" }}>
      <div className="container row-content">
        <h2 className="row justify-content-center">MEET OUR TEAM</h2>
        <div className="row justify-content-center pt-5 text-center">
          <div className="card team col-md-5">
            <img
              className="card-img-top"
              src="https://unionclubtacoma.com/wp-content/uploads/2019/05/cropped-Kyro-Headshot-2-300x300.jpeg"
              alt="Kyro Parker"
            />
            <div className="card-body">
              <h5>Kyro Parker</h5>
              <p className="card-text">
                Community Manager &amp; Events Manager
              </p>
            </div>
          </div>
          <div className="card team col-md-5">
            <img
              alt="Heather Hurt"
              className="card-img-top"
              src="https://unionclubtacoma.com/wp-content/uploads/2018/01/cropped-UnionClub_HeatherHurtPhotography-12-1-300x300.jpg"
            />
            <div className="card-body">
              <h5>Stasha Moreno</h5>
              <p className="card-text">Chief Operations Officer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
class About extends React.Component {
  componentDidMount() {
    document.body.classList.add("aboutUs", "not-home");
    document.querySelector("#navbar").classList.add("isScrolling");
  }
  componentWillUnmount() {
    document.body.classList.remove("aboutUs", "not-home");
  }
  render() {
    return (
      <>
        <Jumbotron />
        <Content />
        <Cards />
      </>
    );
  }
}

export default About;
