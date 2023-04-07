import React from "react";
import { Carousel } from "react-bootstrap";
import "../style.css";
const Main = () => {
  return (
    <div>
      <center>
        <Carousel className="cos">
          <Carousel.Item>
            <img
              className="d-block w-50 h-20"
              src={require("/Users/subbu/weforyou/src/images/five.jpg")}
              alt="First slide"
              style={{ height: 500 }}
            />
            <Carousel.Caption>
              <h3>We Are For You </h3>
              <p>We Developed a App</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-50 h-20"
              src={require("/Users/subbu/weforyou/src/images/7.jpeg")}
              alt="Second slide"
              style={{ height: 500 }}
            />

            <Carousel.Caption>
              <h3>We Are For You</h3>
              <p>Organised a Meeting Session with School Students</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-50 h-20"
              src={require("/Users/subbu/weforyou/src/images/six.jpg")}
              alt="Third slide"
              style={{ height: 500 }}
            />

            <Carousel.Caption>
              <h3>We Are For You</h3>
              <p>We Distributed a First Aid to Needy People</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </center>
    </div>
  );
};

export default Main;
