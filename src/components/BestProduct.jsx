import { faBagShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { decrementLike, incrementLike } from "../store/slices/likesSlice";
import React from "react";
import { decrementInCart, incrementInCart } from "../store/slices/cartSlice";

function BestProduct({
  bestProductImg,
  bestProductInfo,
  bestProductTitle,
  bestProductPrice,
  AosDelay,
}) {
  const dispatch = useDispatch();
  return (
    <div
      className="best-product d-flex flex-column align-items-center bg-white rounded-3 h-100"
      data-aos="zoom-in"
      data-aos-delay={AosDelay}
    >
      <div className="image first-bg w-100 d-flex justify-content-center align-items-center rounded-top pb-3">
        <img src={bestProductImg} alt="best product img" width={130} />
      </div>
      <div className="text px-2 mt-3 position-relative">
        <h5 className="best-product-title main-color text-center">
          {bestProductTitle}
        </h5>
        <p className="fw-light text-black-50 text-center mt-auto">
          {bestProductInfo}
        </p>
      </div>
      <div className="actions-price d-flex align-items-center justify-content-between w-100 px-2 mt-auto py-3 border-top">
        <div className="actions d-flex gap-1">
          <div
            className="buy rounded-2 d-flex justify-content-center align-items-center first-bg fast-transition"
            onClick={(e) => {
              e.currentTarget.classList.toggle("active");
              e.currentTarget.classList.contains("active")
                ? dispatch(incrementInCart())
                : dispatch(decrementInCart());
            }}
          >
            <FontAwesomeIcon icon={faBagShopping} />
          </div>
          <div
            className="like rounded-2 d-flex justify-content-center align-items-center first-bg fast-transition"
            onClick={(e) => {
              e.currentTarget.classList.toggle("active");
              e.currentTarget.classList.contains("active")
                ? dispatch(incrementLike())
                : dispatch(decrementLike());
            }}
          >
            <FontAwesomeIcon icon={faHeart} />
          </div>
        </div>
        <span className="price" style={{ fontSize: "15px" }}>
          {bestProductPrice}$
        </span>
      </div>
    </div>
  );
}

export default React.memo(BestProduct);
