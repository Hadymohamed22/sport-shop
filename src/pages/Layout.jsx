import { faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faBagShopping,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container, Navbar, Row } from "react-bootstrap";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import sectionDivider from "../assets/section-divider.png";
import { useSelector } from "react-redux";
import productInCartImage from "../assets/cup.png";

function Layout() {
  const state = useSelector((state) => state);
  return (
    <>
      <Navbar
        expand="lg"
        className=" position-fixed p-0 px-2 start-50 translate-middle-x"
      >
        <Container>
          <Link class="navbar-brand" to="/">
            <img
              src={logo}
              alt="online sport shop logo"
              width={70}
              loading="lazy"
            />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link   active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link " to="products">
                  Products
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link " to="about">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link " to="contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="cart-like d-flex align-items-center gap-3">
            <div className="like-icon position-relative">
              <FontAwesomeIcon icon={faHeart} className="fs-5" />
              <span className="position-absolute bg-danger text-white d-flex justify-content-center align-items-center">
                {state.likes.itemsNum}
              </span>
              <div className="likes-products position-fixed d-flex flex-column gap-2 slow-transition">
                {state.likes.items.map((e) => {
                  return (
                    <div
                      className="product d-flex justify-content-between align-items-center rounded-3 px-3 text-white py-2"
                      key={e.name}
                    >
                      <div className="image-name d-flex gap-2 align-items-center w-75">
                        <img
                          src={e.img}
                          width={50}
                          height={50}
                          alt="product in cart"
                          className=" rounded-circle"
                        />
                        <div style={{ fontSize: "13px" }}>{e.name}</div>
                      </div>
                      <span className="price">{e.price}$</span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="cart-icon position-relative">
              <FontAwesomeIcon icon={faBagShopping} className="fs-5" />
              <span className="position-absolute bg-danger text-white d-flex justify-content-center align-items-center">
                {state.cart.itemsNum}
              </span>
              <div className="products-in-cart position-fixed d-flex flex-column gap-2 slow-transition">
                {state.cart.items.map((e) => {
                  return (
                    <div
                      className="product d-flex justify-content-between align-items-center rounded-3 px-3 text-white py-2"
                      key={e.name}
                    >
                      <div className="image-name d-flex gap-2 align-items-center w-75">
                        <img
                          src={e.img}
                          width={50}
                          height={50}
                          alt="product in cart"
                          className=" rounded-circle"
                        />
                        <div style={{ fontSize: "13px" }}>{e.name}</div>
                      </div>
                      <span className="price">{e.price}$</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Container>
      </Navbar>
      <Outlet />
      <footer className="main-bg text-white">
        <img
          src={sectionDivider}
          alt="section divider"
          className="w-100"
          draggable="false"
          loading="lazy"
        />
        <Container>
          <Row className="row-gap-3">
            <Col lg="3" md="6">
              <img
                src={logo}
                alt="online sport shop logo"
                width={250}
                loading="lazy"
              />
            </Col>
            <Col lg="3" md="6">
              <h4>About Us</h4>
              <ul className="m-0 list-unstyled">
                <li className="ps-1 fast-transition" style={{ padding: "3px" }}>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="me-2 text-white-50 fast-transition"
                    style={{ fontSize: "13px" }}
                  />
                  <a
                    href="/#"
                    className="text-white-50 text-decoration-none fw-light fast-transition"
                  >
                    Team
                  </a>
                </li>
                <li className="ps-1 fast-transition" style={{ padding: "3px" }}>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="me-2 text-white-50 fast-transition"
                    style={{ fontSize: "13px" }}
                  />
                  <a
                    href="/#"
                    className="text-white-50 text-decoration-none fw-light fast-transition"
                  >
                    Mission
                  </a>
                </li>
                <li className="ps-1 fast-transition" style={{ padding: "3px" }}>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="me-2 text-white-50 fast-transition"
                    style={{ fontSize: "13px" }}
                  />
                  <a
                    href="/#"
                    className="text-white-50 text-decoration-none fw-light fast-transition"
                  >
                    Newsletter
                  </a>
                </li>
              </ul>
            </Col>
            <Col lg="3" md="6">
              <h4>Quick Links</h4>
              <ul className="m-0 list-unstyled">
                <li className="ps-1 fast-transition" style={{ padding: "3px" }}>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="me-2 text-white-50 fast-transition"
                    style={{ fontSize: "13px" }}
                  />
                  <Link
                    to="/"
                    className="text-white-50 text-decoration-none fw-light fast-transition"
                  >
                    Home
                  </Link>
                </li>
                <li className="ps-1 fast-transition" style={{ padding: "3px" }}>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="me-2 text-white-50 fast-transition"
                    style={{ fontSize: "13px" }}
                  />
                  <Link
                    to="products"
                    className="text-white-50 text-decoration-none fw-light fast-transition"
                  >
                    Products
                  </Link>
                </li>
                <li className="ps-1 fast-transition" style={{ padding: "3px" }}>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="me-2 text-white-50 fast-transition"
                    style={{ fontSize: "13px" }}
                  />
                  <Link
                    to="about"
                    className="text-white-50 text-decoration-none fw-light fast-transition"
                  >
                    About
                  </Link>
                </li>
                <li className="ps-1 fast-transition" style={{ padding: "3px" }}>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="me-2 text-white-50 fast-transition"
                    style={{ fontSize: "13px" }}
                  />
                  <Link
                    to="contact"
                    className="text-white-50 text-decoration-none fw-light fast-transition"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </Col>
            <Col lg="3" md="6">
              <h4>Contact Us</h4>
              <div className="social-links d-flex justify-content-start align-items-center gap-3 my-3">
                <div className="insta-icon d-flex justify-content-center align-items-center fast-transition">
                  <FontAwesomeIcon icon={faInstagram} />
                </div>
                <div className="face-icon d-flex justify-content-center align-items-center fast-transition">
                  <FontAwesomeIcon icon={faFacebookF} />
                </div>
                <div className="twitter-icon d-flex justify-content-center align-items-center fast-transition">
                  <FontAwesomeIcon icon={faTwitter} />
                </div>
                <div className="xtwitter-icon d-flex justify-content-center align-items-center fast-transition">
                  <FontAwesomeIcon icon={faXTwitter} />
                </div>
              </div>
              <p
                className="text-white-50 fw-light"
                style={{ fontSize: "15px" }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                rem, voluptatibus praesentium voluptatem perferendis pariatur
                eius ducimus.
              </p>
            </Col>
          </Row>
          <div className="copy-right border-top border-1 text-center mt-2 py-3">
            &copy;
            <span className="ms-1">
              Design And Code By
              <span className="second-color"> Hady Mohamed</span>
            </span>
          </div>
        </Container>
      </footer>
    </>
  );
}

export default Layout;
