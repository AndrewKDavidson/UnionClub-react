import React from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators
} from "reactstrap";

const items = [
  {
    images: [
      {
        src:
          "https://unionclubtacoma.com/wp-content/uploads/2018/01/Richards_Studio_D2530310-1-182x200.jpg",
        altText: "Slide 1"
      },
      {
        src:
          "https://unionclubtacoma.com/wp-content/uploads/2018/01/Richards_Studio_D2530313-1-182x200.jpg",
        altText: "Slide 2"
      },
      {
        src:
          "https://unionclubtacoma.com/wp-content/uploads/2018/01/Richards_Studio_D25303A-1-182x200.jpg",
        altText: "Slide 3"
      }
    ]
  },
  {
    images: [
      {
        src:
          "https://unionclubtacoma.com/wp-content/uploads/2018/01/Richards_Studio_D253031-2-182x200.jpg",
        altText: "Slide 4"
      },
      {
        src:
          "https://unionclubtacoma.com/wp-content/uploads/2018/01/Richards_Studio_D253033-1-182x200.jpg",
        altText: "Slide 5"
      },
      {
        src:
          "https://unionclubtacoma.com/wp-content/uploads/2018/01/website-3-182x200.jpg",
        altText: "Slide 6"
      }
    ]
  }
];

class Carousel1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((group, index) => {
      console.log(group);
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={index}
        >
          <div key={index} className="row">
            {group.images.map((item, index) => {
              return (
                <div key={index} className="col-4">
                  <img
                    className="d-block mx-auto img-fluid"
                    src={item.src}
                    alt={item.alt}
                  />
                </div>
              );
            })}
          </div>
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={this.previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={this.next}
        />
      </Carousel>
    );
  }
}

export default Carousel1;
