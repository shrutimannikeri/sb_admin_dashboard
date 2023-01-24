import React from "react";
import Card from "react-bootstrap/Card";

export function ColorsBox() {
  const colorlist = [
    {
      name: "primary",
      code: "#4e73df",
      classname: "text-white shadow bg-primary",
    },
    {
      name: "success",
      code: "#1cc88a",
      classname: "text-white shadow bg-success",
    },
    {
      name: "info",
      code: "#36b9cc",
      classname: "text-white shadow bg-info",
    },
    {
      name: "warning",
      code: "#f6c23e",
      classname: "text-white shadow bg-warning",
    },
    {
      name: "danger",
      code: "#e74a3b",
      classname: "text-white shadow bg-danger",
    },
    {
      name: "secondary",
      code: "#858796",
      classname: "text-white shadow bg-secondary",
    },
    {
      name: "light",
      code: "#f8f9fc",
      classname: "shadow bg-light text-black",
    },
    {
      name: "dark",
      code: "#5a5c69",
      classname: "text-white shadow bg-dark",
    },
  ];
  return (
    <div className="row">
      {colorlist.map((color) => (
        <div className="col-lg-6 mb-4">
          <Card className={color.classname}>
            <Card.Body>
              {color.name}
              <div
                className={color.classname === "shadow bg-light text-black"
                  ? "text-black-50 small"
                  : "text-white-50 small"}
              >
                {color.code}
              </div>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
}
