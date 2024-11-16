import { Col, Container, Row } from "react-bootstrap";
import Advan from "./Advan";

function Advantages() {
  return (
    <section className="advantages-section my-5">
      <Container>
        <Row className="row-gap-4">
          <Col lg="3" md="6">
            <Advan
              advanIcon="award"
              advanText="Excellent Service"
              AosDelay="0"
            />
          </Col>
          <Col lg="3" md="6">
            <Advan advanIcon="crown" advanText="High Quality" AosDelay="200" />
          </Col>
          <Col lg="3" md="6">
            <Advan advanIcon="truck" advanText="Fast Delivery" AosDelay="400" />
          </Col>
          <Col lg="3" md="6">
            <Advan
              advanIcon="headset"
              advanText="Customer service"
              AosDelay="600"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Advantages;
