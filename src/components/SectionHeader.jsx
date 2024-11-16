import React from "react";

function SectionHeader({ headerText }) {
  return (
    <h1
      className="section-header main-color text-center fw-bold mt-5"
      style={{ fontSize: "60px" }}
      data-aos="zoom-in-up"
    >
      {headerText}
    </h1>
  );
}
export default React.memo(SectionHeader);
