import React from "react";
import Card from "react-bootstrap/Card";

export function BorderBox({ bordername }) {
  return (

    <Card className={bordername.classname}>
      <div className="card-body">
        {bordername.text}
      </div>
    </Card>
  );
}
