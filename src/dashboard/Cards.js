import React from "react";
import Card from "react-bootstrap/Card";

export function Cards() {
  const cardlist = [
    {
      title: "Earnings (Monthly)",
      revenue: " $40,000",
      icon: "fas fa-calendar fa-2x text-gray-300",
      styles: {
        borderLeft: "2px solid #4e73df",
        color: "#4e73df"
      }
    },
    {
      title: "EARNINGS (ANNUAL)",
      revenue: " $215,000",
      icon: "fas fa-dollar-sign fa-2x text-gray-300",
      styles: {
        borderLeft: "2px solid #1cc88a",
        color: "#1cc88a"
      }
    },
    {
      title: "PENDING REQUESTS",
      revenue: "18",
      icon: "fas fa-comments fa-2x text-gray-300",
      styles: {
        borderLeft: "2px solid #f6c23e",
        color: "#f6c23e"
      }
    }
  ];
  return (
    <div className="row">
      {/*  <!-- Earnings (Monthly) Card Example --> */}
      {cardlist.map((cardlists) => (
        <div className="col-xl-3 col-md-6 mb-4">
          <Card className="shadow h-100 py-2" style={cardlists.styles}>
            <Card.Body>
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-uppercase mb-1 text-left">
                    {cardlists.title}
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800 text-left">
                    {cardlists.revenue}
                  </div>
                </div>
                <div className="col-auto">
                  <i className={cardlists.icon}></i>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      ))}


      {/*  <!-- Earnings (Monthly) Card Example --> */}
      <div className="col-xl-3 col-md-6 mb-4">
        <Card className="border-left-info shadow h-100 py-2">
          <Card.Body className="text-left">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                  Tasks
                </div>
                <div className="row no-gutters align-items-center">
                  <div className="col-auto">
                    <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                      50%
                    </div>
                  </div>
                  <div className="col">
                    <div className="progress progress-sm mr-2">
                      <div
                        className="progress-bar bg-info a1"
                        role="progressbar"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-auto">
                <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>

    </div>
  );
}
