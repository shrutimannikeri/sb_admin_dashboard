import React, { useState } from "react";
import { Navbars } from "../Navbars";
import { Topbar } from "../Topbar";
import { BorderBox } from "./BorderBox";

export function BorderComp() {
  const [style, setStyle] = useState(
    "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
  );

  const bordername = [
    {
      classname: "mb-4 py-3 border-left-primary",
      text: ".border-left-primary"
    },
    {
      classname: "mb-4 py-3 border-left-secondary",
      text: ".border-left-secondary"
    },
    {
      classname: "mb-4 py-3 border-left-success",
      text: ".border-left-success"
    },
    {
      classname: "mb-4 py-3 border-left-info",
      text: ".border-left-info"
    },
    {
      classname: "mb-4 py-3 border-left-warning",
      text: ".border-left-warning"
    },
    {
      classname: "mb-4 py-3 border-left-danger",
      text: ".border-left-danger"
    },
    {
      classname: "mb-4 py-3 border-left-dark",
      text: ".border-left-dark"
    }
  ];
  const bordernameBottom = [
    {
      classname: "mb-4 py-3 border-bottom-primary",
      text: ".border-bottom-primary"
    },
    {
      classname: "mb-4 py-3 border-bottom-secondary",
      text: ".border-bottom-secondary"
    },
    {
      classname: "mb-4 py-3 border-bottom-success",
      text: ".border-bottom-success"
    },
    {
      classname: "mb-4 py-3 border-bottom-info",
      text: ".border-bottom-info"
    },
    {
      classname: "mb-4 py-3 border-bottom-warning",
      text: ".border-bottom-warning"
    },
    {
      classname: "mb-4 py-3 border-bottom-danger",
      text: ".border-bottom-danger"
    },
    {
      classname: "mb-4 py-3 border-bottom-dark",
      text: ".border-bottom-dark"
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

                <h1 className="h3 mb-1 text-gray-800">Border Utilities</h1>
                <p className="mb-4">Bootstrap's default utility classes can be found on the official <a href="https://getbootstrap.com/docs">Bootstrap Documentation</a> page. The custom utilities
                  below were created to extend this theme past the default utility classes built into Bootstrap's
                  framework.</p>

                <div className="row text-left">



                  <div className="col-lg-6">
                    {bordername.map((border, ind) => (
                      <BorderBox bordername={border} key={ind} />
                    ))}




                  </div>


                  <div className="col-lg-6">
                    {bordernameBottom.map((border, ind) => (
                      <BorderBox bordername={border} key={ind} />
                    ))}




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
