import React, { useState } from "react";
import { Topbar } from "../Topbar";
import { Navbars } from "../Navbars";

export function BlankPageComp() {

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
              <div class="container-fluid text-left">


                <h1 class="h3 mb-4 text-gray-800">Blank Page</h1>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
