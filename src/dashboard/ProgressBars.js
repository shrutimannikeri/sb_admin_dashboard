import React from "react";
import Card from "react-bootstrap/Card";
import { ColorsBox } from "./ColorsBox";
import ProgressBar from 'react-bootstrap/ProgressBar';
import { DetailPage } from "./DetailPage";

export function ProgressBars() {
  const progressList = [
    {
      title: "Server Migration",
      name: "danger",
      percentage: 20
    },
    {
      title: "Sales Tracking",
      name: "warning",
      percentage: 40
    },
    {
      title: "Customer Database",
      name: "primary",
      percentage: 60
    },
    {
      title: "Payout Details",
      name: "info",
      percentage: 80
    },
    {
      title: " Account Setup",
      name: "success",
      percentage: 100
    }
  ];
  return (
    <div className="row">
      <div className="col-lg-6 mb-4">
        <div className="row">
          <div className="col-lg-12 mb-4">
            <Card className=" shadow mb-4">
              <Card.Header className=" py-3">
                <h6 className="m-0 font-weight-bold text-primary text-left">Projects</h6>
              </Card.Header>
              <Card.Body>
                {progressList.map((progress) => (
                  <div>
                    <h4 className="small font-weight-bold text-left my-2">
                      {progress.title}<span className="float-right">{progress.percentage === 100 ? "Complete!" : progress.percentage + "%"}</span>
                    </h4>
                    <ProgressBar variant={progress.name} now={progress.percentage} className="mb-4" />
                  </div>

                ))}


              </Card.Body>
            </Card>
          </div>
        </div>
        <ColorsBox />
      </div>

      <DetailPage />
    </div>
  );
}
