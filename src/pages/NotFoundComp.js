import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbars } from "../Navbars";
import { Topbar } from "../Topbar";

export function NotFoundComp() {
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
              <div class="container-fluid">

                <div class="text-center">
                  <div class="error mx-auto" data-text="404">404</div>
                  <p class="lead text-gray-800 mb-5">Page Not Found</p>
                  <p class="text-gray-500 mb-0">It looks like you found a glitch in the matrix...</p>
                  <Link to="/">← Back to Dashboard</Link>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
