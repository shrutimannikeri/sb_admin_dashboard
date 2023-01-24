import React, { useState } from "react";
import { ProgressBars } from "./ProgressBars";
import { Cards } from "./Cards";
import { Topbar } from "../Topbar";
import { Navbars } from "../Navbars";
import { ChartParts } from "./ChartParts";
import { CardHead } from "./CardHead";

export function Dashboard() {
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
                <CardHead />
                <Cards />
                <ChartParts />
                <ProgressBars />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
