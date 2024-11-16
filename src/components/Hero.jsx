import { Col, Container, Row } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Hero({
  mainText,
  subText,
  showAnimatedPhotos,
  buttonText,
  buttonLink,
  img1,
  img2,
  img3,
}) {
  const photos = [img1, img2, img3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (showAnimatedPhotos) {
      const intervalId = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % photos.length);
      }, 4000);

      return () => clearInterval(intervalId);
    }
  }, [showAnimatedPhotos, photos.length]);

  return (
    <div className="hero vh-100">
      <Container className="position-relative z-3 h-100">
        <Row className="h-100">
          <Col
            lg="6"
            className="hero-text d-flex flex-column justify-content-center overflow-hidden"
          >
            <h1
              className="main-text text-white text-center text-lg-start"
              data-aos="fade-right"
            >
              {mainText}
            </h1>
            <p
              className="sub-text fw-light text-white-50 w-75 text-center text-lg-start"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              {subText}
            </p>
            <Link
              className="btn btn-primary main-btn fast-transition second-bg border-0 py-2 px-3"
              data-aos="fade-right"
              data-aos-delay="400"
              to={buttonLink}
            >
              {buttonText}
            </Link>
          </Col>

          {showAnimatedPhotos && (
            <Col
              lg="6"
              className="hero-image d-flex flex-column justify-content-center align-items-center overflow-hidden"
            >
              <div className="image-box d-flex justify-content-center align-items-center">
                <img
                  src={photos[currentImageIndex]}
                  alt="sport shoes"
                  className="displayed-img img-fluid"
                  width={400}
                  data-aos="fade-left"
                />
              </div>
            </Col>
          )}
        </Row>
      </Container>
    </div>
  );
}
export default React.memo(Hero);
