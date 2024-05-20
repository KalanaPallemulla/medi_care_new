/* eslint-disable no-unused-vars */
/* eslint-disable no-constant-condition */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
// import { useLocation } from "react-router-dom";
import logo from "../assets/images/logo.png";

// import Dropdown from "react-bootstrap/Dropdown";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import FeatherIcon from "feather-icons-react";

import { IMG07, patient2 } from "../components/patients/doctorprofile/img";
import { useSelector } from "react-redux";

const Header = () => {
  const history = useHistory();
  const profileData = useSelector((state) => state.profileReducer.profileData);

  //Aos
  // const location = useLocation();
  const userId = localStorage.getItem("userId");
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  const config = "/react/template";

  //mobile menu
  const [change, setChange] = useState(false);
  const [isSideMenu, setSideMenu] = useState("");
  const [isSideMenuone, setSideMenuone] = useState("");
  const [isSideMenutwo, setSideMenutwo] = useState("");
  const [isSideSearch, setSideSearch] = useState("");
  const [isSidebooking, setSideBooking] = useState("");
  const [button, setButton] = useState(true);
  const [navbar, setNavbar] = useState(false);
  const [isSideMenuthree, setSideMenuthree] = useState("");
  const [isSideMenufour, setSideMenufour] = useState("");
  const [sideMenufive, setSideMenufive] = useState("");
  const [menu, setMenu] = useState(false);

  // const [menu1, setMenu1] = useState(false);
  const toggleSidebarthree = (value) => {
    setSideMenuthree(value);
  };
  const toggleSidebar = (value) => {
    setSideMenu(value);
  };
  const toggleSidebarfour = (value) => {
    setSideMenufour(value);
  };
  const toggleSidebarfive = (value) => {
    setSideMenufive(value);
  };
  const toggleSidebarone = (value) => {
    setSideMenuone(value);
  };
  const toggleSidebartwo = (value) => {
    setSideMenutwo(value);
  };
  const toggleSidebarsearch = (value) => {
    setSideSearch(value);
  };
  const toggleSidebarbooking = (value) => {
    setSideBooking(value);
  };

  // const mobilemenus = () => {
  //   setMenu(!true);
  // };

  // Rest of your code that uses pathnames

  let pathnames = window.location.pathname;

  // const [active, setActive] = useState(false);
  const url = pathnames.split("/").slice(0, -1).join("/");

  const onHandleMobileMenu = () => {
    var root = document.getElementsByTagName("html")[0];
    root.classList.add("menu-opened");
  };

  const onhandleCloseMenu = () => {
    var root = document.getElementsByTagName("html")[0];
    root.classList.remove("menu-opened");
  };

  //nav transparent

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener("resize", showButton);

  const changeBackground = () => {
    if (window.scrollY >= 95) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  const handleLogout = () => {
    localStorage.removeItem("userId");
    history.push("/login");
  };
  return (
    <>
      {!pathnames.includes("home1") && (
        <header className={`header ${"header-fixed header-one"} `}>
          <div className="container">
            <nav
              className={`navbar navbar-expand-lg header-nav ${
                pathnames.includes("home1") ? "nav-transparent" : ""
              }`}
            >
              <div className="navbar-header">
                <Link
                  to="#0"
                  id="mobile_btn"
                  onClick={() => onHandleMobileMenu()}
                >
                  <span className="bar-icon">
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                </Link>
                <Link to="/index-2" className="navbar-brand logo">
                  <img src={logo} className="img-fluid" alt="Logo" />
                </Link>
              </div>
              <div className="main-menu-wrapper">
                <div className="menu-header">
                  <Link to="/index-2" className="menu-logo">
                    {/* <img src={logo} className="img-fluid" alt="Logo" /> */}
                  </Link>
                  <Link
                    to="#0"
                    id="menu_close"
                    className="menu-close"
                    onClick={() => onhandleCloseMenu()}
                  >
                    <i className="fas fa-times"></i>
                  </Link>
                </div>

                <ul className={`main-nav`}>
                  <li>
                    <Link
                      to="/"
                      // onClick={() => setMenu(!menu)}
                      className={`has-submenu ${
                        url.includes("/index") ? "active" : ""
                      }`}
                    >
                      Home
                    </Link>
                  </li>

                  {userId && (
                    <li
                      className={`has-submenu ${
                        url.includes("/patient") ? "active" : ""
                      }`}
                    >
                      <Link
                        to="/patient/dashboard"
                        className={isSideMenu == "patients" ? "subdrop" : ""}
                      >
                        Profile
                      </Link>
                    </li>
                  )}
                  {pathnames.includes("/index-5") ||
                  pathnames.includes("/index-11") ? (
                    <li className="searchbar">
                      <Link to="#">
                        <i>
                          <FeatherIcon icon="search" />
                        </i>
                      </Link>
                      <div className="togglesearch" style={{ display: "none" }}>
                        <form action={`${config}/patient/search-doctor1`}>
                          <div className="input-group">
                            <input type="text" className="form-control" />
                            <button type="submit" className="btn">
                              Search
                            </button>
                          </div>
                        </form>
                      </div>
                    </li>
                  ) : null}
                  {((pathnames.includes("/") &&
                    !pathnames.includes("/patient")) ||
                    pathnames.includes("/login") ||
                    pathnames.includes("/register")) &&
                  !userId ? (
                    <>
                      <>
                        <li className="register-btn">
                          <Link to="/register" className="btn reg-btn">
                            <i>
                              <FeatherIcon icon="user" />
                            </i>
                            Register
                          </Link>
                        </li>
                        <li className="register-btn">
                          <Link to="/login" className="btn btn-primary log-btn">
                            <i>
                              <FeatherIcon icon="lock" />
                            </i>
                            Login
                          </Link>
                        </li>
                      </>
                    </>
                  ) : null}

                  {userId ? (
                    <>
                      <li className="register-btn">
                        <Link
                          to="#"
                          className="dropdown-toggle nav-link"
                          data-bs-toggle="dropdown"
                        >
                          <span className="user-img">
                            <img
                              className="rounded-circle"
                              src={patient2}
                              width="31"
                              alt="Darren Elder"
                            />
                          </span>
                        </Link>
                        <div className="items-center dropdown-menu dropdown-menu-end">
                          <div className="flex ">
                            <div className="avatar avatar-sm">
                              <img
                                src={patient2}
                                alt="User Image"
                                className="avatar-img rounded-circle"
                              />
                            </div>
                            <div className="user-text">
                              <h6>{profileData?.firstName}</h6>
                              <p className="mb-0 text-muted">Available</p>
                            </div>
                          </div>
                          <Link
                            className="dropdown-item"
                            to="/patient/dashboard"
                          >
                            Dashboard
                          </Link>
                          <Link className="dropdown-item" to="/patient/profile">
                            Profile Settings
                          </Link>
                          <div className="dropdown-item" onClick={handleLogout}>
                            Logout
                          </div>
                        </div>
                      </li>
                    </>
                  ) : null}
                </ul>
              </div>
            </nav>
          </div>
        </header>
      )}
    </>
  );
};

export default Header;
