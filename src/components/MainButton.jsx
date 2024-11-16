import React from "react";
import Button from "react-bootstrap/Button";

function MainButton({ btnText }) {
  return (
    <Button className="main-btn fast-transition second-bg border-0 py-2 px-3">
      {btnText}
    </Button>
  );
}

export default React.memo(MainButton);
