import React from "react";
import Button from "react-bootstrap/esm/Button";
import { Link, useNavigate } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
export function Navbars({ style, setStyle }) {
const navigate=useNavigate()
  const changeStyle = () => {
    if (style === "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion") {
      setStyle(
        "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled"
      );
    } else {
      setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion");
    }
  };

  return (
    <ul className={style} id="accordionSidebar">
      {/*  <!-- Sidebar - Brand --> */}
      <Button
        className="sidebar-brand d-flex align-items-center justify-content-center"
       onClick={()=>navigate('/')}
      >
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-wink"></i>
        </div>
        <div className="sidebar-brand-text mx-3">
          SB Admin <sup>2</sup>
        </div>
        <div className="text-center d-none d-md-inline">
          <Button
            className="rounded-circle border-0"
            id="sidebarToggle"
            onClick={changeStyle}
          ></Button>
        </div>
      </Button>

      {/*   <!-- Divider --> */}
      <hr className="sidebar-divider my-0" />

      {/*  <!-- Nav Item - Dashboard --> */}
      <li className="nav-item active">
        <Button className="nav-link"  onClick={()=>navigate('/')}>
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span>
        </Button>
      </li>

      {/*  <!-- Divider --> */}
      <hr className="sidebar-divider" />

      {/*   <!-- Heading --> */}
      <div className="sidebar-heading">Interface</div>

      {/*  <!-- Nav Item - Pages Collapse Menu --> */}
      <li className="nav-item">
      <Nav.Link
          className="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapseTwo"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
          <i className="fas fa-fw fa-cog"></i>
          <span>Components</span>
        </Nav.Link>
        <div
          id="collapseTwo"
          className="collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Custom Components:</h6>
            <Link className="collapse-item" to='/buttons'>
              Buttons
            </Link>
            <Link className="collapse-item" to="/cards">
              Cards
            </Link>
          </div>
        </div>
      </li>

      {/* <!-- Nav Item - Utilities Collapse Menu --> */}
      <li className="nav-item">
        <Nav.Link
          className="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapseUtilities"
          aria-expanded="true"
          aria-controls="collapseUtilities"
        >
          <i className="fas fa-fw fa-wrench"></i>
          <span>Utilities</span>
        </Nav.Link>
        <div
          id="collapseUtilities"
          className="collapse"
          aria-labelledby="headingUtilities"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Custom Utilities:</h6>
            <Link className="collapse-item" to="/colors">
              Colors
            </Link>
            <Link className="collapse-item" to="/border">
              Borders
            </Link>
            <Link className="collapse-item" to="/animation">
              Animations
            </Link>
          </div>
        </div>
      </li>

      {/*  <!-- Divider --> */}
      <hr className="sidebar-divider" />

      {/* <!-- Heading --> */}
      <div className="sidebar-heading">Addons</div>

      {/*  <!-- Nav Item - Pages Collapse Menu --> */}
      <li className="nav-item">
        <Nav.Link
          className="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapsePages"
          aria-expanded="true"
          aria-controls="collapsePages"
        >
          <i className="fas fa-fw fa-folder"></i>
          <span>Pages</span>
        </Nav.Link>
        <div
          id="collapsePages"
          className="collapse"
          aria-labelledby="headingPages"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">Login Screens:</h6>
            <Link className="collapse-item" to="/login">
              Login
            </Link>
            <Link className="collapse-item" to="/register">
              Register
            </Link>
            <Link className="collapse-item" to="/forgotpassword">
              Forgot Password
            </Link>
            <div className="collapse-divider"></div>
            <h6 className="collapse-header">Other Pages:</h6>
            <Link className="collapse-item" to="/404">
              404 Page
            </Link>
            <Link className="collapse-item" to="/blank">
              Blank Page
            </Link>
          </div>
        </div>
      </li>

      {/* <!-- Nav Item - Charts --> */}
      <li className="nav-item">
        <Link className="nav-link" to="/">
          <i className="fas fa-fw fa-chart-area"></i>
          <span>Charts</span>
        </Link>
      </li>

      {/*  <!-- Nav Item - Tables --> */}
      <li className="nav-item">
        <Link className="nav-link" to="/tables">
          <i className="fas fa-fw fa-table"></i>
          <span>Tables</span>
        </Link>
      </li>

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider d-none d-md-block" />

      {/*   <!-- Sidebar Toggler (Sidebar) --> */}
      {/*   <div className="text-center d-none d-md-inline">
              <button className="rounded-circle border-0" id="sidebarToggle" onClick={changeStyle}></button>
          </div> */}

      {/*  <!-- Sidebar Message --> */}
      <div className="sidebar-card d-none d-lg-flex">
        <img
          className="sidebar-card-illustration mb-2"
          src="img/undraw_rocket.svg"
          alt="..." />
        <p className="text-center mb-2">
          <strong>SB Admin Pro</strong> is packed with premium features,
          components, and more!
        </p>
        <a
          className="btn btn-success btn-sm"
          href="https://startbootstrap.com/theme/sb-admin-pro"
        >
          Upgrade to Pro!
        </a>
      </div>
    </ul>
  );
}
