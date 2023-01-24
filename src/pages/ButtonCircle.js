import React from "react";
import Button from "react-bootstrap/esm/Button";

export function ButtonCircle({ button }) {
  return (
    <Button variant={button.variant} className="rounded-circle mx-1" size={button.size}>
      <i className={button.icon}></i>
    </Button>
  );
}
