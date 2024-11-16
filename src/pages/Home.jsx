import { Col, Container, Row } from "react-bootstrap";
import Advantages from "../components/Advantages";
import Hero from "../components/Hero";
import SectionHeader from "../components/SectionHeader";
import BestProduct from "../components/BestProduct";
import ball from "../assets/ball.png";
import shoes from "../assets/shoes.png";
import cup from "../assets/cup.png";
import teshirt from "../assets/teshirt.png";
import pantalon from "../assets/pantalon.png";
import ball2 from "../assets/ball-2.png";
import hotShoes from "../assets/shoes-black.png";
import redShoes from "../assets/shoes-red.png";
import grayShoes from "../assets/shoes-gray.png";
import blueShoes from "../assets/shoes-blue.png";
import { useRef } from "react";
import Products from "../components/Products";
import img1 from "../assets/hero-product-1.png";
import img2 from "../assets/hero-product-2.png";
import img3 from "../assets/hero-product-3.png";

function Home() {
  const shoesPreviewed = useRef();
  return (
    <div className="home">
      <Hero
        mainText={"Unleash Your Power with Premium Sports Gear"}
        subText={
          "Explore Our Collection of High-Quality Sports Equipment & Apparel. Ready for Your Next Adventure!"
        }
        showAnimatedPhotos={true}
        buttonText="Shop Now"
        buttonLink="products"
        img1={img1}
        img2={img2}
        img3={img3}
      />
      <Advantages />
      <section className="best-sale-section my-5">
        <SectionHeader headerText="Best Sale" />
        <Container className="mt-5">
          <Row className="row-gap-4">
            <Col lg="2" md="4">
              <BestProduct
                bestProductImg={ball}
                bestProductTitle="Micasia FootBall"
                bestProductInfo="Micasia FootBall FT-5"
                bestProductPrice="30"
                AosDelay="0"
              />
            </Col>
            <Col lg="2" md="4">
              <BestProduct
                bestProductImg={shoes}
                bestProductTitle="Sport Shoes"
                bestProductInfo="ACTIVE Sport Shoes S-41"
                bestProductPrice="130"
                AosDelay="100"
              />
            </Col>
            <Col lg="2" md="4">
              <BestProduct
                bestProductImg={cup}
                bestProductTitle="Cup For Protein"
                bestProductInfo="Black Protein Cup"
                bestProductPrice="25"
                AosDelay="200"
              />
            </Col>
            <Col lg="2" md="4">
              <BestProduct
                bestProductImg={teshirt}
                bestProductTitle="Adidas Top"
                bestProductInfo="Entrada 22 Training Top"
                bestProductPrice="200"
                AosDelay="300"
              />
            </Col>
            <Col lg="2" md="4">
              <BestProduct
                bestProductImg={pantalon}
                bestProductTitle="Adidas Pants"
                bestProductInfo="French Terry Tapered"
                bestProductPrice="150"
                AosDelay="400"
              />
            </Col>
            <Col lg="2" md="4">
              <BestProduct
                bestProductImg={ball2}
                bestProductTitle="ANTA Basketball"
                bestProductInfo="Brown Basketball size 7"
                bestProductPrice="34"
                AosDelay="500"
              />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="shoes-section">
        <Container className="h-100 overflow-hidden">
          <Row className="row-gap-4 h-100">
            <Col lg="5" className="h-100">
              <div
                className="d-flex justify-content-center align-items-center h-100"
                data-aos="fade-right"
              >
                <img
                  src={hotShoes}
                  alt="hot black shoes"
                  width={350}
                  ref={shoesPreviewed}
                />
              </div>
            </Col>
            <Col lg="7" className="h-100">
              <div className="content h-100 d-flex flex-column justify-content-center">
                <h1
                  className="text-white text-center text-lg-start"
                  data-aos="fade-left"
                >
                  Sport Training Shoes
                </h1>
                <p
                  className="fw-light text-white-50 w-75 text-center text-lg-start"
                  data-aos="fade-left"
                  data-aos-delay="200"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempore nam sit recusandae odio iste minima.
                </p>
                <div
                  className="images d-flex gap-2 my-3"
                  data-aos="fade-left"
                  data-aos-delay="200"
                >
                  <div className="rounded-2 d-flex justify-content-center align-items-center fast-transition">
                    <img
                      src={hotShoes}
                      alt="black sport shoes"
                      width={50}
                      onClick={(e) => {
                        shoesPreviewed.current.src = e.currentTarget.src;
                      }}
                    />
                  </div>
                  <div className="rounded-2 d-flex justify-content-center align-items-center fast-transition">
                    <img
                      src={blueShoes}
                      alt="blue sport shoes"
                      width={50}
                      onClick={(e) => {
                        shoesPreviewed.current.src = e.currentTarget.src;
                      }}
                    />
                  </div>
                  <div className="rounded-2 d-flex justify-content-center align-items-center fast-transition">
                    <img
                      src={redShoes}
                      alt="red sport shoes"
                      width={50}
                      onClick={(e) => {
                        shoesPreviewed.current.src = e.currentTarget.src;
                      }}
                    />
                  </div>
                  <div className="rounded-2 d-flex justify-content-center align-items-center fast-transition">
                    <img
                      src={grayShoes}
                      alt="gray sport shoes"
                      width={50}
                      onClick={(e) => {
                        shoesPreviewed.current.src = e.currentTarget.src;
                      }}
                    />
                  </div>
                </div>
                <button
                  className="rounded-2 main-bg text-white border-0 px-5 py-2 fast-transition"
                  data-aos="fade-left"
                  data-aos-delay="300"
                >
                  See Details
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Products />
    </div>
  );
}
export default Home;
