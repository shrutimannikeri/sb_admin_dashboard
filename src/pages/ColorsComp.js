import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbars } from "../Navbars";
import { Topbar } from "../Topbar";
import Card from "react-bootstrap/Card";
import { ColorBoxDiv } from "./ColorBoxDiv";
import { ColorBoxP } from "./ColorBoxP";
import "./color.css";
export function ColorsComp() {
  const [style, setStyle] = useState(
    "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
  );
  const colorlist_gray = [
    {
      text: ".text-gray-100",
      classname: "text-gray-100 p-3 bg-dark m-0"
    },
    {
      text: ".text-gray-200",
      classname: "text-gray-200 p-3 bg-dark m-0"
    },
    {
      text: ".text-gray-300",
      classname: "text-gray-300 p-3 bg-dark m-0"
    },
    {
      text: ".text-gray-400",
      classname: "text-gray-400 p-3 bg-dark m-0"
    },
    {
      text: ".text-gray-500",
      classname: "text-gray-500 p-3 m-0"
    },
    {
      text: ".text-gray-600",
      classname: "text-gray-600 p-3 m-0"
    },
    {
      text: ".text-gray-700",
      classname: "text-gray-700 p-3 m-0"
    },
    {
      text: ".text-gray-800",
      classname: "text-gray-800 p-3 m-0"
    },
    {
      text: ".text-gray-900",
      classname: "text-gray-800 p-3 m-0"
    }
  ];
  const colorlist = [
    {
      text: ".text-gray-100",
      classname: "text-xs"
    },
    {
      text: ".text-gray-200",
      classname: "text-lg mb-0"
    }
  ];

  const colorlist_graydiv = [
    {
      text: ".bg-gradient-secondary",
      classname: "px-3 py-5 bg-gradient-primary text-white"
    },
    {
      text: ".bg-gradient-secondary",
      classname: "px-3 py-5 bg-gradient-secondary text-white"
    },
    {
      text: ".bg-gradient-success",
      classname: "px-3 py-5 bg-gradient-success text-white"
    },
    {
      text: ".bg-gradient-info",
      classname: "px-3 py-5 bg-gradient-info text-white"
    },
    {
      text: ".bg-gradient-warning",
      classname: "px-3 py-5 bg-gradient-warning text-white"
    },
    {
      text: ".bg-gradient-danger",
      classname: "px-3 py-5 bg-gradient-danger text-white"
    },
    {
      text: ".bg-gradient-light",
      classname: "px-3 py-5 bg-gradient-light text-white"
    },
    {
      text: ".bg-gradient-dark",
      classname: "px-3 py-5 bg-gradient-dark text-white"
    }
  ];


  const colorlist_bggray = [
    {
      text: ".bg-gray-100",
      classname: "p-3 bg-gray-100"
    },
    {
      text: ".bg-gray-200",
      classname: "p-3 bg-gray-200"
    },
    {
      text: ".text-gray-300",
      classname: "p-3 bg-gray-300"
    },
    {
      text: ".bg-gray-400",
      classname: "p-3 bg-gray-400"
    },
    {
      text: ".bg-gray-500",
      classname: "p-3 bg-gray-500 text-white"
    },
    {
      text: ".bg-gray-600",
      classname: "p-3 bg-gray-600 text-white"
    },
    {
      text: ".bg-gray-700",
      classname: "p-3 bg-gray-700 text-white"
    },
    {
      text: ".bg-gray-800",
      classname: "p-3 bg-gray-800 text-white"
    },
    {
      text: ".bg-gray-900",
      classname: "p-3 bg-gray-900 text-white"
    }
  ];
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
              <div className="container-fluid text-left">

                <h1 className="h3 mb-1 text-gray-800">Color Utilities</h1>
                <p className="mb-4">Bootstrap's default utility classes can be found on the official <Link to="https://getbootstrap.com/docs">Bootstrap Documentation</Link> page. The custom utilities
                  below were created to extend this theme past the default utility classes built into Bootstrap's
                  framework.</p>

                <div className="row text-left colorboxdiv">

                  <div className="col-lg-4">

                    <Card className="shadow mb-4">
                      <Card.Header className="py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Custom Text Color Utilities</h6>
                      </Card.Header>
                      <Card.Body>
                        {colorlist_gray.map((color, ind) => (
                          <ColorBoxP colorlist={color} key={ind} />
                        ))}

                      </Card.Body>
                    </Card>

                    <Card className="shadow mb-4">
                      <Card.Header className="py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Custom Font Size Utilities</h6>
                      </Card.Header>
                      <Card.Body>
                        {colorlist.map((color, ind) => (
                          <ColorBoxP colorlist={color} key={ind} />
                        ))}

                      </Card.Body>
                    </Card>

                  </div>
                  <div className="col-lg-4">

                    <Card className="shadow mb-4">
                      <Card.Header className="py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Custom Background Gradient Utilities
                        </h6>
                      </Card.Header>


                      <Card.Body>
                        {colorlist_graydiv.map((color, ind) => (
                          <ColorBoxDiv colorlist={color} key={ind} />
                        ))}

                      </Card.Body>
                    </Card>

                  </div>


                  <div className="col-lg-4">

                    <Card className="shadow mb-4">
                      <Card.Header className="py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Custom Grayscale Background Utilities
                        </h6>
                      </Card.Header>


                      <Card.Body>
                        {colorlist_bggray.map((color, ind) => (
                          <ColorBoxDiv colorlist={color} key={ind} />
                        ))}

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
