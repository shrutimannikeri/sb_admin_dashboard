import React from "react";
import Button from "react-bootstrap/Button";


export function CardHead() {
  return (
    <div className="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
      <Button variant="primary" className="d-none d-sm-inline-block btn-sm btn-primary shadow-sm"><i className="fas fa-download fa-sm text-white-50"></i> Generate Report</Button>

    </div>
  );
}
