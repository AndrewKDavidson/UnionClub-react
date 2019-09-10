import React from "react";
import Carousel1 from "./RentalsCarousel";

const RentalsHeader = () => {
  return (
    <>
      <div className="py-5 rentals-header text-center">
        <div className="wrapper">
          <h4>June 25, 2018</h4>
          <h2>Great Hall Event Rentals</h2>
        </div>
        <div className="rentals-nav">
          <ul className="list-unstyled list-inline">
            <strong>
              <li className="list-inline-item">
                <a className="nav-link" href="#0">
                  PAST
                </a>
              </li>
              &nbsp;&nbsp; –&nbsp;&nbsp;
              <li className="list-inline-item">
                <a className="nav-link" href="#0">
                  PRESENT
                </a>
              </li>
              &nbsp;&nbsp; –&nbsp;&nbsp;
              <li className="list-inline-item">
                <a className="nav-link" href="#0">
                  PRICING
                </a>
              </li>
              &nbsp;&nbsp; –&nbsp;&nbsp;
              <li className="list-inline-item">
                <a className="nav-link" href="#0">
                  FEATURES
                </a>
              </li>
              &nbsp;&nbsp; –&nbsp;&nbsp;
              <li className="list-inline-item">
                <a className="nav-link" href="#0">
                  PRAISE
                </a>
              </li>
              &nbsp;&nbsp; –&nbsp;&nbsp;
              <li className="list-inline-item">
                <a className="nav-link" href="#0">
                  CONTACT
                </a>
              </li>
            </strong>
          </ul>
        </div>
      </div>
      <div className="text-center header-image">
        <img
          alt="Responsive"
          className="img-fluid"
          src="https://unionclubtacoma.com/wp-content/uploads/2018/01/DSC09873-1024x683.jpg"
        />
      </div>
    </>
  );
};

const BodyContent = () => {
  return (
    <div className="my-4 text-center">
      <h1>The Great Hall of the Past</h1>
      <p className="mb-5">
        Organized by a group of well-known businessmen in 1888, the Union Club
        Tacoma is one of Tacoma’s oldest event venues. Events over the years
        have ranged from festive – think the annual Daffodil ball, to the
        political, where famous faces like President Taft and Eleanor Roosevelt
        campaigned, to the absurd, events titled Spinsters Social, Men’s Meat
        Carving night. The Union Club has seen a lot of life over the years and
        we’re so grateful to continue in that tradition.
      </p>
    </div>
  );
};

const GreatHall = () => {
  return (
    <div className="text-center my-4">
      <h1>The Great Hall of Today</h1>
      <p className="text-center">
        Today, the Union Club Tacoma is a perfect space for your event needs,
        from non-profit fundraisers to weddings, to corporate meetings the Union
        Club is a perfect space for your event needs. Come down the stairs and
        enter into a different time. With the rustic wood floors, chic white
        walls, a grand fireplace, and abundant natural light the Union Club can
        transform into your dream event space. Walk up the stairs to a peaceful
        and private meeting room for business needs. Overlooking Commencement
        Bay, the Union Club balcony holds commanding views of Mount Rainier, the
        Port of Tacoma, and the Puyallup Valley.
      </p>
    </div>
  );
};

const Carousel2 = () => {
  return (
    <div className="carousel slide mb-0" data-ride="carousel" id="mycarousel">
      <div className="carousel-inner px-3">
        <div className="carousel-item active">
          <div className="row">
            <div className="col-4">
              <img
                className="d-block img-fluid mx-auto"
                src="https://unionclubtacoma.com/wp-content/uploads/2018/02/great-hall1-182x200.jpg"
                alt="1 slide"
              />
            </div>
            <div className="col-4">
              <img
                className="d-block img-fluid mx-auto"
                src="https://unionclubtacoma.com/wp-content/uploads/2018/02/great-hall2-182x200.jpg"
                alt="2 slide"
              />
            </div>
            <div className="col-4">
              <img
                className="d-block img-fluid mx-auto"
                src="https://unionclubtacoma.com/wp-content/uploads/2018/02/great-hall3-182x200.jpg"
                alt="3 slide"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Cards = () => {
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card border-0">
            <div className="card-body px-0">
              <h5 className="card-title">Pricing</h5>
              <h6 className="card-subtitle mb-2">
                <strong>Members</strong>
              </h6>
              <p className="card-text">$75/hour(4-hour minimum)</p>
              <h6 className="card-subtitle mb-2">
                <strong>Non-Members</strong>
              </h6>
              <p className="card-text">$150/hour(4-hour minimum)</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card border-0">
            <div className="card-body px-0">
              <h5 className="card-title">Features</h5>
              <p className="card-text">
                Semi-private, 2400 square feet event space complete with a wet
                bar and small deck. Our occupancy allows for 200 guests standing
                or 120 guests at seated round tables. We have an inventory of
                (12) – 60″ round tables, 90 black banquet chairs, and (6) – 8′
                rectangle tables. We are happy to assist you by referring you to
                rental companies for additional seating requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
      <h3 className="text-center">Praise</h3>
      <div className="row">
        <div
          id="carouselPraise"
          className="carousel slide mt-0"
          data-ride="carousel"
        >
          <div className="carousel-inner text-left" role="listbox">
            <div className="carousel-item active p-4">
              <p>
                Janelle and Union Club Tacoma were such a pleasure to work with.
                When our first venue fell through last minute multiple people
                recommended UCT. Janelle was flexible in meeting me,
                accommodating to our needs and an overall pleasure to work with.
                We will definitely use them again for a venue rental.
              </p>
              <p className="font-italic">- Amanda Harkins</p>
            </div>
            <div className="carousel-item p-4">
              <p>
                I host events here. Everything from paint parties to family
                events and this is a wonderful multi-use space. As a small,
                veteran owned business, the staff support is key in ensuring my
                continuous successes. Can't say enough positive things about the
                place.
              </p>
              <p className="font-italic">- LeShawn Gamble</p>
            </div>
            <div className="carousel-item p-4">
              <p>
                This place is beautiful. It is a shared work space and venue for
                events. I am an entrepreneur and business owner so it is a
                fabulous space to be creative and bring your clients and
                customers. The views are fantastic and it is in great area in
                downtown Tacoma. You have to check it out, Northwest's finest. I
                definitely recommend this place. And did I forget to mention?
                Free parking!
              </p>
              <p className="font-italic">- Gariane Ladd</p>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselPraise"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselPraise"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </>
  );
};

const Contact = () => {
  return (
    <>
      <div className="col-12 col-md-12 col-lg-12">
        <h1 className="text-center" style={{ fontSize: "40px" }}>
          Request for more information
        </h1>
        <form>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="name">First Name (Required)</label>
              <input type="name" className="form-control" id="firstName" />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="name">Last Name (Required)</label>
              <input type="name" className="form-control" id="lastName" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email (Required)</label>
            <input type="text" className="form-control" id="email" />
          </div>
          <div className="form-group">
            <label htmlFor="telephone">Your Telephone (Required)</label>
            <input type="text" className="form-control" id="telephone" />
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="date">Event Date (Required)</label>
              <input type="date" className="form-control" id="date" />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="guests">
                Estimated Number of Guests (Required)
              </label>
              <input type="text" className="form-control" id="guests" />
            </div>
            <div className="form-group col-md-12">
              <label htmlFor="info">
                Additional information about your event (Required)
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="5"
              ></textarea>
            </div>
          </div>
          <button type="submit" className="btn btn-success w-100 my-3">
            Send
          </button>
        </form>
      </div>

      <div className="disclaimer my-5 font-italic">
        *By requesting more information you agree to allow Union Club Tacoma to
        periodically send you emails.
      </div>
    </>
  );
};

class Rentals extends React.Component {
  componentDidMount() {
    document.body.classList.add("rentals", "not-home");
    document.querySelector("#navbar").classList.add("isScrolling");
  }
  componentWillUnmount() {
    document.body.classList.remove("rentals", "not-home");
  }
  render() {
    return (
      <div className="container">
        <RentalsHeader />
        <BodyContent />
        <Carousel1 />
        <GreatHall />
        <Carousel2 />
        <Cards />
        <Contact />
      </div>
    );
  }
}

export default Rentals;
