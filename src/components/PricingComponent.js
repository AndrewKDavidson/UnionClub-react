import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Breadcrumb,
  BreadcrumbItem
} from "reactstrap";

function RenderCard({ item }) {
  return (
    <Card>
      <CardImg top width="100%" src={item.image} alt={item.name} />
      <CardBody>
        <CardTitle>{item.name}</CardTitle>
        <CardSubtitle>{item.amount}</CardSubtitle>
        <CardText>{item.description}</CardText>
      </CardBody>
    </Card>
  );
}

class Pricing extends React.Component {
  constructor(props) {
    super(props);
  }
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
        <div className="col-12 col-md-5 m-4" key={item.id}>
          <RenderCard item={item} />
        </div>
      );
    });
    return (
      <div className="container pricing">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>Home</BreadcrumbItem>
          </Breadcrumb>
          <Breadcrumb>
            <BreadcrumbItem>About</BreadcrumbItem>
          </Breadcrumb>
          <Breadcrumb>
            <BreadcrumbItem active>Membership Pricing</BreadcrumbItem>
          </Breadcrumb>
          <Breadcrumb>
            <BreadcrumbItem>Rentals</BreadcrumbItem>
          </Breadcrumb>
          <Breadcrumb>
            <BreadcrumbItem>Media</BreadcrumbItem>
          </Breadcrumb>
          <Breadcrumb>
            <BreadcrumbItem>Blog</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>Membership Pricing</h3>
            <hr />
          </div>
        </div>
        <div className="row">{pricing}</div>
      </div>
    );
  }
}

export default Pricing;
