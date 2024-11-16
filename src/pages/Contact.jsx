import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Hero from "../components/Hero";
import DirectContactBox from "../components/DirectContactBox";

function Contact() {
  return (
    <div className="contact-page">
      <Hero
        mainText="We’re Here to Help!"
        subText="Have questions or need assistance? Get in touch with our team today and let’s make your experience seamless."
        buttonText="Contact Us Now"
        buttonLink="/contact"
      />
      <div className="contact-form my-5">
        <h1 className="main-color text-center fw-bold m-0" data-aos="zoom-in">
          Get In Touch Now
        </h1>
        <p className="text-black-50 text-center m-0" data-aos="zoom-in">
          We’d Love to Hear from You!
        </p>
        <form
          className="mx-auto p-3 rounded-3 mt-3 position-relative overflow-hidden text-white"
          data-aos="fade-up"
        >
          <label className="mt-2" htmlFor="name">
            Name
          </label>
          <input
            className="form-control mt-1 mb-2"
            type="text"
            id="name"
            required
            placeholder="Name"
          />
          <label className="mt-2" htmlFor="email">
            Email
          </label>
          <input
            className="form-control mt-1 mb-2"
            type="email"
            id="email"
            required
            placeholder="Email"
          />
          <label className="mt-2" htmlFor="phone">
            Phone
          </label>
          <input
            className="form-control mt-1 mb-2"
            type="tel"
            id="phone"
            placeholder="Phone"
            minLength={0}
            maxLength={11}
          />
          <label className="mt-2" htmlFor="subject">
            Subject
          </label>
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: "100px" }}
            id="subject"
            className="mt-1 mb-2"
          />
          <Button className="w-100 mt-2 main-bg border-0">Send Message</Button>
        </form>
      </div>
      <div className="direct-contact-info ">
        <h1 className="main-color text-center fw-bold m-0" data-aos="zoom-in">
          Direct Contact Information
        </h1>
        <Container className="mt-5">
          <Row className="row-gap-3">
            <Col lg="4">
              <DirectContactBox
                icon="email"
                mainText="Email"
                subText="support@sportify.com"
                AosDelay="0"
              />
            </Col>
            <Col lg="4">
              <DirectContactBox
                icon="phone"
                mainText="Phone"
                subText="+20 123 456 7890"
                AosDelay="200"
              />
            </Col>
            <Col lg="4">
              <DirectContactBox
                icon="address"
                AosDelay="400"
                mainText="Address"
                subText="Sport Street, Building No. 23, Activity District, Cairo, Egypt"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
export default Contact;
