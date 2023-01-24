import React, { useState } from "react";
import { Navbars } from "../Navbars";
import { Topbar } from "../Topbar";
import { Cards } from "../dashboard/Cards";
import Card from "react-bootstrap/Card";
import Dropdown from 'react-bootstrap/Dropdown';

export function CardsComp() {
  const [style, setStyle] = useState(
    "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
  );

  return (
    <div>
      <div id="page-top">
        {/*  <!-- Page Wrapper --> */}
        <div id="wrapper">
          <Navbars style={style} setStyle={setStyle} />
          {/*  <!-- Content Wrapper --> */}
          <div id="content-wrapper" className="d-flex flex-column">
            {/*  <!-- Main Content --> */}
            <div id="content">
              <Topbar style={style} setStyle={setStyle} />
              <div className="container-fluid">
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                  <h1 className="h3 mb-0 text-gray-800">Cards</h1>

                </div>
                <Cards />
                <div className="row">

                  <div className="col-lg-6">

                    <Card className="mb-4 text-left">
                      <Card.Header>
                        Default Card Example
                      </Card.Header>
                      <Card.Body>
                        This card uses Bootstrap's default styling with no utility classes added. Global
                        styles are the only things modifying the look and feel of this default card example.
                      </Card.Body>
                    </Card>

                    <Card className="shadow mb-4 text-left">
                      <Card.Header className="py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Basic Card Example</h6>
                      </Card.Header>
                      <Card.Body>
                        The styling for this basic card example is created by using default Bootstrap
                        utility classes. By using utility classes, the style of the card component can be
                        easily modified with no need for any custom CSS!
                      </Card.Body>
                    </Card>

                  </div>

                  <div className="col-lg-6">

                    <Card className="shadow mb-4">
                      <Card.Header className="py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 className="m-0 font-weight-bold text-primary">Dropdown Card Example</h6>
                        <Dropdown className="no-arrow">
                          <Dropdown.Toggle id="dropdown-basic">
                            <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                          </Dropdown.Toggle>
                          <Dropdown.Menu>


                            <Dropdown.Header>Dropdown Header:</Dropdown.Header>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </Card.Header>
                      <Card.Body className="card-body">
                        Dropdown menus can be placed in the card header in order to extend the functionality
                        of a basic card. In this dropdown card example, the Font Awesome vertical ellipsis
                        icon in the card header can be clicked on in order to toggle a dropdown menu.
                      </Card.Body>
                    </Card>


                    <Card className="shadow mb-4 text-left">

                      <Card.Header href="#collapseCardExample" className="d-block card-header py-3" data-toggle="collapse" role="button" aria-expanded="true" aria-controls="collapseCardExample">
                        <h6 className="m-0 font-weight-bold text-primary">Collapsable Card Example</h6>
                      </Card.Header>

                      <div className="collapse show" id="collapseCardExample">
                        <Card.Body>
                          This is a collapsable card example using Bootstrap's built in collapse
                          functionality. <strong>Click on the card header</strong> to see the card body
                          collapse and expand!
                        </Card.Body>
                      </div>
                    </Card>

                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
