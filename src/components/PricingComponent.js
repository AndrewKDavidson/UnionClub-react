import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

const Jumbotron = () => {
  return (
    <header className="jumbotron-pages">
      <div className="row jumbotron-header">
        <div className="col-12 vh-center text-center">
          <h1 className="title">Membership Pricing</h1>
        </div>
      </div>
    </header>
  );
};
function RenderCard({ item }) {
  return (
    <Card className="prices mb-5">
      <div class="row">
        <div class="col-lg-5">
          <CardImg top width="100%" src={item.image} alt={item.name} />
        </div>
        <div class="col-lg-7">
          <CardBody>
            <CardTitle>{item.name}</CardTitle>
            <p>
              <span class="money">$</span>
              <strong>{item.amount}</strong> {item.period}
            </p>
            <CardText>{item.description}</CardText>
          </CardBody>
        </div>
      </div>
    </Card>
  );
}

class Pricing extends React.Component {
  componentDidMount() {
    document.body.classList.add("pricing", "not-home");
    document.querySelector("#navbar").classList.add("isScrolling");
  }
  componentWillUnmount() {
    document.body.classList.remove("pricing", "not-home");
  }
  render() {
    const pricing = this.props.items.map(item => {
      return (
        <div key={item.id}>
          <RenderCard item={item} />
        </div>
      );
    });
    return (
      <>
        <Jumbotron />
        <div className="container my-5">
          <div className="row">{pricing}</div>
        </div>
      </>
    );
  }
}

export default Pricing;
