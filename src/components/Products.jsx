import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SectionHeader from "./SectionHeader";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faFilter,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import {
  addInCart,
  decrementInCart,
  incrementInCart,
  removeFromCart,
} from "../store/slices/cartSlice";
import {
  addLike,
  decrementLike,
  incrementLike,
  removeLike,
} from "../store/slices/likesSlice";
import Swal from "sweetalert2";
import { fetchProducts } from "../store/slices/productsSlice";
import { Link } from "react-router-dom";

function Products() {
  let catagories = [
    "All",
    "Shoes",
    "Sportswear",
    "Equipment",
    "Socks",
    "Accessories",
  ];
  const inputRange = useRef();
  const [activeFilter, setActiveFilter] = useState(null);
  const [filterAction, setFilterAction] = useState({
    type: catagories[activeFilter],
    price: 0,
  });
  const products = useSelector((state) => state.products);
  const [productsState, setProducts] = useState(products);
  const [productsLength, setProductsLength] = useState(products);
  const dispatch = useDispatch();
  const maxValue = useRef();
  const filterBox = useRef();
  const productsBoxs = useRef();

  const handleClickOnFilter = (index) => {
    setActiveFilter(index);
    setFilterAction((state) => {
      return { ...state, type: catagories[index] };
    });
  };

  const handleApplyFilter = () => {
    if (filterAction.type === undefined) {
      Swal.fire({
        title: "Error!",
        text: "Must chose filter type",
        icon: "error",
        confirmButtonText: "ok",
      });
    } else if (filterAction.type === "All") {
      setProducts(products);
    } else {
      setProducts(
        products.filter(
          (e) =>
            e.category === filterAction.type && e.price <= filterAction.price
        )
      );
    }
  };
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    if (!activeFilter) {
      setProducts(products);
    }
  }, [products, activeFilter]);
  useEffect(() => {
    dispatch(fetchProducts());
    setProductsLength(productsState.length);
  }, [productsState]);
  return (
    <section className="products my-5">
      <SectionHeader headerText="Products" />
      <Container fluid>
        <div className="filter-products d-flex position-relative mt-5">
          <div
            className="filter px-2 border-end position-relative slow-transition"
            ref={filterBox}
            data-aos="fade-right"
          >
            <h2 className="text-center mb-3 fw-bold text-white main-bg py-1">
              Filters
            </h2>
            <h5 className="main-color fw-bold text-center">type : </h5>
            <div className="types mt-3 d-flex justify-content-center flex-wrap row-gap-2">
              {catagories.map((e, i) => {
                return (
                  <span
                    onClick={() => {
                      handleClickOnFilter(i);
                    }}
                    className={`type px-3 py-2 mx-2 rounded-pill first-bg main-color fast-transition ${
                      activeFilter === i ? "active" : ""
                    }`}
                    style={{ fontSize: "13px" }}
                    key={e}
                  >
                    {e}
                  </span>
                );
              })}
            </div>
            <div className="price-range mt-3">
              <h5 className="main-color fw-bold text-center">price : </h5>
              <div className="min-max d-flex justify-content-between align-items-center">
                <span
                  className="min-value px-3 py-2 rounded-3 first-bg"
                  style={{ fontSize: "13px" }}
                >
                  min: 0
                </span>
                <span
                  className="max-value px-3 py-2 rounded-3 first-bg"
                  style={{ fontSize: "13px" }}
                  ref={maxValue}
                >
                  max: 50
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="300"
                step="5"
                className="mt-3 w-100 border-0"
                ref={inputRange}
                onChange={(e) => {
                  maxValue.current.textContent = `max : ${e.currentTarget.value}`;
                  setFilterAction((state) => {
                    return { ...state, price: inputRange.current.value };
                  });
                }}
              />
              <button
                className="mt-3 w-100 rounded-pill btn main-bg text-white apply-filter"
                onClick={handleApplyFilter}
              >
                Apply Filter
              </button>
            </div>
            <div
              className="filter-icon rounded-end-pill main-bg text-white ps-3 pe-3 py-1 position-absolute start-100 d-none"
              onClick={() => {
                filterBox.current.classList.toggle("open");
              }}
            >
              <FontAwesomeIcon icon={faFilter} />
            </div>
          </div>
          <div className="products px-2">
            <Container>
              <Row className="row-gap-3" ref={productsBoxs}>
                {productsLength === 0 && (
                  <h1 className="fw-bold text-center main-color">Not Found</h1>
                )}
                {productsState.slice(0, 8).map((e, i) => {
                  return (
                    <Col lg="3" md="6">
                      <div
                        className="product d-flex flex-column justify-content-between border border-2 rounded-3 h-100 position-relative overflow-hidden"
                        data-aos="zoom-in"
                      >
                        <div className="image">
                          <img
                            src={e.image}
                            alt="product img"
                            className="img-fluid rounded-top"
                          />
                        </div>
                        <div className="text d-flex flex-column p-3">
                          <div className="name d-flex justify-content-between align-items-center">
                            <span className="fw-bold main-color">Name: </span>
                            <p className="text-end m-0">{e.name}</p>
                          </div>
                          <div className="price d-flex justify-content-between align-items-center">
                            <span className="fw-bold main-color">Price:</span>
                            <p className="text-end m-0">{e.price}$</p>
                          </div>
                        </div>
                        <Link
                          className="btn main-bg text-white mx-2 mb-2"
                          to={`/product-details/${e.id}`}
                        >
                          See Details
                        </Link>
                        <div className="actions d-flex flex-column gap-1 position-absolute slow-transition">
                          <div
                            className="buy rounded-circle d-flex justify-content-center align-items-center first-bg fast-transition"
                            onClick={(event) => {
                              event.currentTarget.classList.toggle("active");
                              if (
                                event.currentTarget.classList.contains("active")
                              ) {
                                dispatch(incrementInCart());
                                dispatch(
                                  addInCart({
                                    img: e.image,
                                    name: e.name,
                                    price: e.price,
                                  })
                                );
                              } else {
                                dispatch(decrementInCart());
                                dispatch(removeFromCart(e.name));
                              }
                            }}
                          >
                            <FontAwesomeIcon icon={faBagShopping} />
                          </div>
                          <div
                            className="like rounded-circle d-flex justify-content-center align-items-center first-bg fast-transition"
                            onClick={(event) => {
                              event.currentTarget.classList.toggle("active");
                              if (
                                event.currentTarget.classList.contains("active")
                              ) {
                                dispatch(incrementLike());
                                dispatch(
                                  addLike({
                                    img: e.image,
                                    name: e.name,
                                    price: e.price,
                                  })
                                );
                              } else {
                                dispatch(decrementLike());
                                dispatch(removeLike(e.name));
                              }
                            }}
                          >
                            <FontAwesomeIcon icon={faHeart} />
                          </div>
                        </div>
                      </div>
                    </Col>
                  );
                })}
              </Row>
              <Link
                className="see-more py-2 mt-5 d-block text-decoration-none w-100 main-bg rounded-pill text-white text-center"
                to="products"
              >
                See More
              </Link>
            </Container>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Products;
