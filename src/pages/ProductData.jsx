import { Button, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";

function ProductData() {
  const params = useParams();
  const products = useSelector((state) => state.products);
  const currentProduct = products.find(
    (product) => product.id === +params.productId
  );
  const navigate = useNavigate();
  return (
    <div className="product-details">
      <Container>
        <Row className="row-gap-3 h-100 align-items-center">
          <Col lg="5">
            <img
              src={currentProduct.image}
              alt="product img"
              className="img-fluid"
              data-aos="zoom-in"
            />
          </Col>
          <Col lg="7" className="h-100">
            <div className="product-info first-bg rounded-3 px-4 py-5">
              <h1
                className="fw-bold main-color text-center text-lg-start mb-3"
                data-aos="zoom-out"
              >
                {currentProduct.name}
              </h1>
              <h4
                className="main-color text-center text-lg-start"
                data-aos="zoom-out"
                data-aos-delay="150"
              >
                type : {currentProduct.category}
              </h4>
              <p
                className="text-black-50 text-center text-lg-start"
                data-aos="zoom-out"
                data-aos-delay="300"
              >
                description : {currentProduct.description}
              </p>
              <p
                className=" text-center text-lg-start"
                data-aos="zoom-out"
                data-aos-delay="450"
              >
                price : {currentProduct.price}$
              </p>
              <div
                className="sizes d-flex gap-1 align-items-center"
                data-aos="zoom-out"
                data-aos-delay="600"
              >
                <h5 className="fw-bold main-color me-1 text-center text-lg-start">
                  sizes :
                </h5>
                {currentProduct.sizes.map((e) => {
                  return (
                    <span className="rounded-3 main-bg text-white d-flex justify-content-center-align-items-center p-2">
                      {e}
                    </span>
                  );
                })}
              </div>
              <div
                className="colors d-flex gap-1 align-items-center mt-2"
                data-aos="zoom-out"
                data-aos-delay="750"
              >
                <h5 className="fw-bold main-color me-1 text-center text-lg-start">
                  colors :
                </h5>
                {currentProduct.colors.map((e) => {
                  return (
                    <span className="rounded-3 main-bg text-white d-flex justify-content-center-align-items-center p-2">
                      {e}
                    </span>
                  );
                })}
              </div>
            </div>
          </Col>
        </Row>
        <Button
          className="main-bg text-white w-100 border-0"
          onClick={() => {
            navigate(-1);
          }}
        >
          Back To Products
        </Button>
      </Container>
    </div>
  );
}

export default ProductData;
