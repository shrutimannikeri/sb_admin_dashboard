import React, { useState } from "react";
import { Navbars } from "../Navbars";
import { Topbar } from "../Topbar";
import Card from "react-bootstrap/Card";
import { ButtonCircle } from "./ButtonCircle";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
export function ButtonsComp() {
  const [style, setStyle] = useState(
    "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
  );
const button_regular=[
  {
  variant:"primary",
  shape: "rounded-circle",
  icon:"fab fa-facebook-f",
  size: ""
},
{
  variant:"success",
  shape: "rounded-circle",
  icon:"fas fa-check"
},
{
  variant:"info",
  shape: "rounded-circle",
  icon:"fas fa-info-circle"
},
{
  variant:"warning",
  shape: "rounded-circle",
  icon:"fas fa-exclamation-triangle"
},
{
  variant:"danger",
  shape: "rounded-circle",
  icon:"fas fa-trash"
},
];
const button_small=[
  {
  variant:"primary",
  shape: "rounded-circle",
  icon:"fab fa-facebook-f",
  size:"sm"
},
{
  variant:"success",
  shape: "rounded-circle",
  icon:"fas fa-check",
  size:"sm"
},
{
  variant:"info",
  shape: "rounded-circle",
  icon:"fas fa-info-circle",
  size:"sm"
},
{
  variant:"warning",
  shape: "rounded-circle",
  icon:"fas fa-exclamation-triangle",
  size:"sm"
},
{
  variant:"danger",
  shape: "rounded-circle",
  icon:"fas fa-trash",
  size:"sm"
},
];
const button_large=[
  {
  variant:"primary",
  shape: "rounded-circle",
  icon:"fab fa-facebook-f",
  size:"lg"
},
{
  variant:"success",
  shape: "rounded-circle",
  icon:"fas fa-check",
  size:"lg"
},
{
  variant:"info",
  shape: "rounded-circle",
  icon:"fas fa-info-circle",
  size:"lg"
},
{
  variant:"warning",
  shape: "rounded-circle",
  icon:"fas fa-exclamation-triangle",
  size:"lg"
},
{
  variant:"danger",
  shape: "rounded-circle",
  icon:"fas fa-trash",
  size:"lg"
},
]

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

                <h1 className="h3 mb-4 text-gray-800">Buttons</h1>

                <div className="row">

                  <div className="col-lg-6">


                    <Card className="shadow mb-4 text-left">
                      <Card.Header className="py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Circle Buttons</h6>
                      </Card.Header>
                      <Card.Body className="text-left">
                        <p>Use Font Awesome Icons (included with this theme package) along with the circle
                          buttons as shown in the examples below!</p>

                        <div className="mb-2">
                          <code>.btn-circle</code>
                        </div>
                        {button_regular.map((btn,ind)=>(
                          <ButtonCircle button={btn} key={ind} />
                        ))}

                        <div className="mt-4 mb-2">
                          <code>.btn-circle .btn-sm</code>
                        </div>
                        {button_small.map((btn,ind)=>(
                          <ButtonCircle button={btn} key={ind} />
                        ))}
                        <div className="mt-4 mb-2">
                          <code>.btn-circle .btn-lg</code>
                        </div>
                        {button_large.map((btn,ind)=>(
                          <ButtonCircle button={btn} key={ind} />
                        ))}
                      </Card.Body>
                    </Card>


                    <Card className="shadow mb-4 text-left">
                      <Card.Header className="py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Brand Buttons</h6>
                      </Card.Header>
                      <Card.Body>
                        <p>Google and Facebook buttons are available featuring each company's respective
                          brand color. They are used on the user login and registration pages.</p>
                        <p>You can create more custom buttons by adding a new color variable in the
                          <code>_variables.scss</code> file and then using the Bootstrap button variant
                          mixin to create a new style, as demonstrated in the <code>_buttons.scss</code>
                          file.</p>
                        <Link to="/button" className=" btn-google btn-block"><i className="fab fa-google fa-fw"></i>
                          .btn-google</Link>
                        <Link to="/button" className="btn btn-facebook btn-block"><i className="fab fa-facebook-f fa-fw"></i> .btn-facebook</Link>

                      </Card.Body>
                    </Card>

                  </div>

                  <div className="col-lg-6">

                    <Card className="shadow mb-4 text-left">
                      <Card.Header className="py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Split Buttons with Icon</h6>
                      </Card.Header>
                      <Card.Body>
                        <p>Works with any button colors, just use the <code>.btn-icon-split</code> className and
                          the markup in the examples below. The examples below also use the
                          <code>.text-white-50</code> helper className on the icons for additional styling,
                          but it is not required.</p>
                        <Button className=" btn-icon-split" variant="primary">
                          <span className="icon text-white-50">
                            <i className="fas fa-flag"></i>
                          </span>
                          <span className="text">Split Button Primary</span>
                        </Button>
                        <div className="my-2"></div>
                        <Button href="#" className="btn-icon-split" variant="success">
                          <span className="icon text-white-50">
                            <i className="fas fa-check"></i>
                          </span>
                          <span className="text">Split Button Success</span>
                        </Button>
                        <div className="my-2"></div>
                        <Button  className="btn-icon-split" variant="info">
                          <span className="icon text-white-50">
                            <i className="fas fa-info-circle"></i>
                          </span>
                          <span className="text">Split Button Info</span>
                        </Button>
                        <div className="my-2"></div>
                        <Button  className="btn-icon-split" variant="warning">
                          <span className="icon text-white-50">
                            <i className="fas fa-exclamation-triangle"></i>
                          </span>
                          <span className="text">Split Button Warning</span>
                        </Button>
                        <div className="my-2"></div>
                        <Button  className="btn-icon-split" variant="danger">
                          <span className="icon text-white-50">
                            <i className="fas fa-trash"></i>
                          </span>
                          <span className="text">Split Button Danger</span>
                        </Button>
                        <div className="my-2"></div>
                        <Button className="btn-icon-split" variant="secondary">
                          <span className="icon text-white-50">
                            <i className="fas fa-arrow-right"></i>
                          </span>
                          <span className="text">Split Button Secondary</span>
                        </Button>
                        <div className="my-2"></div>
                        <Button  className="btn-icon-split" variant="light">
                          <span className="icon text-gray-600">
                            <i className="fas fa-arrow-right"></i>
                          </span>
                          <span className="text">Split Button Light</span>
                        </Button>
                        <div className="mb-4"></div>
                        <p>Also works with small and large button classes!</p>
                        <Button  className="btn-icon-split" variant="primary" size="sm">
                          <span className="icon text-white-50">
                            <i className="fas fa-flag"></i>
                          </span>
                          <span className="text">Split Button Small</span>
                        </Button>
                        <div className="my-2"></div>
                        <Button  className="btn-icon-split"  variant="primary" size="lg">
                          <span className="icon text-white-50">
                            <i className="fas fa-flag"></i>
                          </span>
                          <span className="text">Split Button Large</span>
                        </Button>
                      </Card.Body>
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

