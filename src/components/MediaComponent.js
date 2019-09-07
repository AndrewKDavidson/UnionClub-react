import React from "react";
import { CardImg, CardBody } from "reactstrap";

function RenderCard({ media }) {
  return (
    <div className="col-9 col-md-4" key={media.id}>
      <CardBody>
        <h2 className="rooms"> {media.name}</h2>
        <CardImg src={media.image} alt={media.name} />
      </CardBody>
    </div>
  );
}

class Media extends React.Component {
  componentDidMount() {
    document.body.classList.add("galleryBody", "not-home");
    document.querySelector("#navbar").classList.add("isScrolling");
  }
  componentWillUnmount() {
    document.body.classList.remove("galleryBody", "not-home");
  }

  render() {
    const renderMedia = this.props.media.map(media => {
      return (
        <>
          <RenderCard media={media} />
        </>
      );
    });

    return (
      <div className="row mb-5">
        <div className="col-12">
          <div className="py-4 rentals-header text-center">
            <h2 className="media-h2 mt-5">Gallery</h2>
            <br />
          </div>
          <div className="container">
            <div className="row">{renderMedia}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Media;
