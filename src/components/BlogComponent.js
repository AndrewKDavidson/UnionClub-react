import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";

function RenderCard({ blog }) {
  return (
    <>
      <Card className="text-center blogCard">
        <CardImg
          className="card-img-top blogImg"
          src={blog.image}
          alt={blog.title}
        />
        <CardBody>
          <CardTitle className="card-title">{blog.title}</CardTitle>

          <CardSubtitle className="card-subtitle mb-2 text-muted">
            {blog.subtitle}
          </CardSubtitle>
          <CardText className="card-text">{blog.description}</CardText>
          <div className="col-8 col-lg-6 col-xl-4"></div>
        </CardBody>
      </Card>
    </>
  );
}

class Blog extends React.Component {
  componentDidMount() {
    document.body.classList.add("blogBody", "not-home");
    document.querySelector("#navbar").classList.add("isScrolling");
  }
  componentWillUnmount() {
    document.body.classList.remove("blogBody", "not-home");
  }

  render() {
    const blogging = this.props.blogs.map(blog => {
      return (
        <div key={blog.id} className="col-7 col-md-4 mb-4">
          <RenderCard blog={blog} />
        </div>
      );
    });
    return (
      <div>
        <div className="navBlog">
          <div className="row jumbotron-header">
            <div className="col-12 vh-center text-center"></div>
          </div>
        </div>

        <div>
          <div className="container">
            <div className="row">
              <div class="col-12">
                <div className="j-blog text-center">
                  <h3>
                    <strong>UNION CLUB TACOMA</strong>
                  </h3>
                  <br />
                  <h4>Coworking + Arts + Events</h4>
                </div>
              </div>
              <nav className="navBlog my-3 mr-auto ml-auto">
                <div className="blogLinks">
                  <ul className="list-unstyled list-inline">
                    <li className="list-inline-item">
                      <a className="nav-link" href="#0">
                        Blog{" "}
                      </a>
                    </li>{" "}
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <li className="list-inline-item">
                      <a className="nav-link" href="#0">
                        Coworking{" "}
                      </a>
                    </li>
                    &nbsp;&nbsp; &nbsp;&nbsp;
                    <li className="list-inline-item">
                      <a className="nav-link" href="#0">
                        Events{" "}
                      </a>
                    </li>
                    &nbsp;&nbsp; &nbsp;&nbsp;
                    <li className="list-inline-item">
                      <a className="nav-link" href="#0">
                        History{" "}
                      </a>
                    </li>
                    &nbsp;&nbsp; &nbsp;&nbsp;
                    <li className="list-inline-item">
                      <a className="nav-link" href="#0">
                        Inspiration
                      </a>
                    </li>
                    &nbsp;&nbsp; &nbsp;&nbsp;
                    <li className="list-inline-item">
                      <a className="nav-link" href="#0">
                        Interview
                      </a>
                    </li>
                    &nbsp;&nbsp; &nbsp;&nbsp;
                    <li className="list-inline-item">
                      <a className="nav-link" href="#0">
                        Members
                      </a>
                    </li>
                    &nbsp;&nbsp; &nbsp;&nbsp;
                    <li className="list-inline-item">
                      <a className="nav-link" href="#0">
                        Press
                      </a>
                    </li>
                    &nbsp;&nbsp; &nbsp;&nbsp;
                    <li className="list-inline-item">
                      <a className="nav-link" href="#0">
                        Uncategorized
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
            <div className="row">{blogging}</div>
          </div>
        </div>
      </div>
    );
  }
}
export default Blog;
