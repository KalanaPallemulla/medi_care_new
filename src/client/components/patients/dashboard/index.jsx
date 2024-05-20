/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { DashboardSidebar } from "./sidebar/sidebar.jsx";
// import { Tab, Tabs } from "react-bootstrap";
import StickyBox from "react-sticky-box";
import {
  IMG01,
  IMG02,
  IMG03,
  IMG04,
  IMG05,
  IMG06,
  IMG07,
  IMG08,
  IMG09,
  IMG10,
} from "./img";
import Dashboard1 from "../../../assets/images/specialities/pt-dashboard-01.png";
import Dashboard2 from "../../../assets/images/specialities/pt-dashboard-02.png";
import Dashboard3 from "../../../assets/images/specialities/pt-dashboard-03.png";
import Dashboard4 from "../../../assets/images/specialities/pt-dashboard-04.png";
import Graph1 from "../../../assets/images/shapes/graph-01.png";
import Graph2 from "../../../assets/images/shapes/graph-02.png";
import Graph3 from "../../../assets/images/shapes/graph-03.png";
import Graph4 from "../../../assets/images/shapes/graph-04.png";

import Footer from "../../footer";
import Header from "../../header.jsx";
import DoctorFooter from "../../common/doctorFooter/index.jsx";
import {
  doctor_14,
  doctor_15,
  doctor_17,
  doctor_thumb_01,
  doctor_thumb_03,
  doctor_thumb_05,
  doctor_thumb_07,
  doctor_thumb_08,
  doctor_thumb_09,
  doctor_thumb_13,
  doctor_thumb_21,
  doctordashboardprofile06,
  doctordashboardprofile07,
  doctordashboardprofile08,
  doctorprofileimg,
  doctorthumb02,
  doctorthumb11,
  patient20,
  patient21,
} from "../../imagepath.jsx";
import Chart from "react-apexcharts";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useDispatch, useSelector } from "react-redux";
import { getProfileAction } from "../redux/actions.js";
import AppointmentHistory from "./AppointmentHistory.js";

const Dashboard = (props) => {
  const dispatch = useDispatch();
  const profileData = useSelector((state) => state.profileReducer.profileData);
  console.log("profileData", profileData);
  useEffect(() => {
    dispatch(getProfileAction());
  }, []);
  const TextContent = () => <p>Last Visit 25 Mar 2024</p>;

  const [count, setCount] = useState(1, 2, 3, 4);

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     key: 1,
  //   };
  //   this.handleSelect = this.handleSelect.bind(this);
  // }
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const options = {
        series: [
          {
            data: [140, 100, 180, 130, 100, 130],
          },
        ],
        chart: {
          height: 300,
          type: "bar",
          events: {
            click: function (chart, w, e) {
              // Handle click event
            },
          },
        },
        fill: {
          colors: ["#E8F1FF"],
        },
        plotOptions: {
          bar: {
            columnWidth: "45%",
          },
        },
        dataLabels: {
          enabled: false,
        },
        legend: {
          show: false,
        },
        xaxis: {
          categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        },
        crosshairs: {
          show: false,
        },
      };

      const chart = new ApexCharts(chartRef.current, options);
      chart.render();

      // Cleanup function
      return () => {
        chart.destroy();
      };
    }
  }, []);

  const [options1, setOptions1] = useState(null); // Initialize options1 as null

  const chartContainerRef = useRef(null);

  useEffect(() => {
    const options = {
      series: [
        { data: [90, 60, 30, 60, 90, 70, 70] },
        { data: [110, 90, 40, 120, 130, 130, 130] },
      ],
      chart: {
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      fill: {
        opacity: 1,
        colors: ["#F1F5F9"],
      },
      states: {
        hover: {
          color: "#00008B",
        },
      },
    };

    setOptions1(options); // Set options1 state

    if (chartContainerRef.current) {
      const chart = new ApexCharts(chartContainerRef.current, options);
      chart.render();
    }

    return () => {
      // Cleanup code if needed
    };
  }, []);

  const specialitysettings = {
    items: 3,
    loop: true,
    margin: 15,
    dots: false,
    nav: true,
    navContainer: ".slide-nav-patient",
    navText: [
      '<i class="fas fa-chevron-left"></i>',
      '<i class="fas fa-chevron-right"></i>',
    ],

    autoplay: false,
    infinite: "true",

    slidestoscroll: 1,
    rtl: "true",
    rows: 1,
    responsive: {
      0: {
        items: 1,
      },
      500: {
        items: 1,
      },
      575: {
        items: 2,
      },
      768: {
        items: 2,
      },
      1000: {
        items: 3,
      },
      1300: {
        items: 5,
      },
    },
  };
  const specialitysettings1 = {
    items: 1,
    loop: true,
    margin: 25,
    dots: false,
    nav: true,
    navContainer: ".slide-nav-1",
    navText: [
      '<i class="fas fa-chevron-left custom-arrow"></i>',
      '<i class="fas fa-chevron-right custom-arrow"></i>',
    ],

    autoplay: false,
    infinite: "true",

    slidestoscroll: 1,
    rtl: "true",
    rows: 1,
    responsive: {
      0: {
        items: 1,
      },
      500: {
        items: 1,
      },
      575: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 1,
      },
      1300: {
        items: 1,
      },
    },
  };

  const [animate, setAnimate] = useState(false);
  const circleRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (circleRef.current) {
        const elementPos = circleRef.current.getBoundingClientRect().top;
        const topOfWindow = window.scrollY;
        const percent = parseFloat(
          circleRef.current.getAttribute("data-percent")
        );
        const animate = circleRef.current.dataset.animate === "true";

        if (elementPos < topOfWindow + window.innerHeight - 30 && !animate) {
          circleRef.current.dataset.animate = "true";
          setAnimate(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger on initial load

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="main-wrapper">
        <Header {...props} />
        <div className="pt-20" />
        <div className=" content">
          <div className="container">
            <div className="row">
              {/* Profile Sidebar */}
              <div className="col-lg-4 col-xl-3 theiaStickySidebar">
                <div className="stickybar">
                  {/* Profile Sidebar */}
                  <DashboardSidebar />
                  {/* /Profile Sidebar */}
                </div>
              </div>
              {/* / Profile Sidebar */}
              <div className="col-lg-8 col-xl-9">
                <div className="flex flex-col space-x-0 sm:space-x-4 sm:flex-row">
                  <div className="bg-green-400 book-appointment-head col-lg-4">
                    <h3>Book a new Appointment</h3>
                    <span className="add-icon">
                      <Link to="#">
                        <i className="fa-solid fa-circle-plus" />
                      </Link>
                    </span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-gray-400 border border-gray-300 h-14 col-lg-5 rounded-xl">
                    <h1 className="font-serif text-base">Next Appointment:</h1>
                    <h1 className="font-serif text-base">2024-05-24</h1>
                    <div className="w-[1px] h-4 bg-gray-600" />
                    <h1 className="font-serif text-base">3 PM</h1>
                  </div>
                </div>
                <div className="col-xl-12 d-flex">
                  <div className="dashboard-card w-100">
                    <div className="dashboard-card-head">
                      <div className="header-title">
                        <h5>Appointment History</h5>
                      </div>
                    </div>
                    <div className="dashboard-card-body">
                      <div className="account-detail-table">
                        {/* Tab Menu */}
                        <nav className="pb-0 mt-3 mb-3 border-0 patient-dash-tab">
                          <ul className="nav nav-tabs-bottom">
                            <li className="nav-item">
                              <Link
                                className="nav-link active"
                                to="#appoint-tab"
                                data-bs-toggle="tab"
                              >
                                Appointments
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link
                                className="nav-link"
                                to="#medical-tab"
                                data-bs-toggle="tab"
                              >
                                Medical Records
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link
                                className="nav-link"
                                to="#prsc-tab"
                                data-bs-toggle="tab"
                              >
                                Prescriptions
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link
                                className="nav-link"
                                to="#invoice-tab"
                                data-bs-toggle="tab"
                              >
                                Invoices
                              </Link>
                            </li>
                          </ul>
                        </nav>
                        {/* /Tab Menu */}
                        {/* Tab Content */}
                        <div className="pt-0 tab-content">
                          {/* Appointments Tab */}
                          <div
                            id="appoint-tab"
                            className="tab-pane fade show active"
                          >
                            <div className="custom-new-table">
                              <div className="table-responsive">
                                <table className="table mb-0 table-hover table-center">
                                  <thead>
                                    <tr>
                                      <th>ID</th>
                                      <th>Test Name</th>
                                      <th>Date</th>
                                      <th>Referred By</th>
                                      <th>Amount</th>
                                      <th>Comments</th>
                                      <th>Status</th>
                                      <th />
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>
                                        <Link to="#">
                                          <span className="text-blue">
                                            RE124343
                                          </span>
                                        </Link>
                                      </td>
                                      <td>Electro cardiography</td>
                                      <td>21 Mar 2024</td>
                                      <td>Edalin Hendry</td>
                                      <td>$300</td>
                                      <td>Good take rest</td>
                                      <td>
                                        <span className="badge badge-success-bg">
                                          Normal
                                        </span>
                                      </td>
                                      <td>
                                        <div className="d-flex align-items-center">
                                          <Link
                                            to="#"
                                            className="account-action me-2"
                                          >
                                            <i className="fa-solid fa-prescription" />
                                          </Link>
                                          <Link
                                            to="#"
                                            className="account-action"
                                          >
                                            <i className="fa-solid fa-file-invoice-dollar" />
                                          </Link>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <Link to="#">
                                          <span className="text-blue">
                                            RE124342
                                          </span>
                                        </Link>
                                      </td>
                                      <td>Complete Blood Count</td>
                                      <td>28 Mar 2024</td>
                                      <td>Shanta Nesmith</td>
                                      <td>$400</td>
                                      <td>Stable, no change</td>
                                      <td>
                                        <span className="badge badge-success-bg">
                                          Normal
                                        </span>
                                      </td>
                                      <td>
                                        <div className="d-flex align-items-center">
                                          <Link
                                            to="#"
                                            className="account-action me-2"
                                          >
                                            <i className="fa-solid fa-prescription" />
                                          </Link>
                                          <Link
                                            to="#"
                                            className="account-action"
                                          >
                                            <i className="fa-solid fa-file-invoice-dollar" />
                                          </Link>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <Link to="#">
                                          <span className="text-blue">
                                            RE124341
                                          </span>
                                        </Link>
                                      </td>
                                      <td>Blood Glucose Test</td>
                                      <td>02 Apr 2024</td>
                                      <td>John Ewel</td>
                                      <td>$350</td>
                                      <td>All Clear</td>
                                      <td>
                                        <span className="badge badge-success-bg">
                                          Normal
                                        </span>
                                      </td>
                                      <td>
                                        <div className="d-flex align-items-center">
                                          <Link
                                            to="#"
                                            className="account-action me-2"
                                          >
                                            <i className="fa-solid fa-prescription" />
                                          </Link>
                                          <Link
                                            to="#"
                                            className="account-action"
                                          >
                                            <i className="fa-solid fa-file-invoice-dollar" />
                                          </Link>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <Link to="#">
                                          <span className="text-blue">
                                            RE124340
                                          </span>
                                        </Link>
                                      </td>
                                      <td>Liver Function Tests</td>
                                      <td>15 Apr 2024</td>
                                      <td>Joseph Engels</td>
                                      <td>$480</td>
                                      <td>Stable, no change</td>
                                      <td>
                                        <span className="badge badge-success-bg">
                                          Normal
                                        </span>
                                      </td>
                                      <td>
                                        <div className="d-flex align-items-center">
                                          <Link
                                            to="#"
                                            className="account-action me-2"
                                          >
                                            <i className="fa-solid fa-prescription" />
                                          </Link>
                                          <Link
                                            to="#"
                                            className="account-action"
                                          >
                                            <i className="fa-solid fa-file-invoice-dollar" />
                                          </Link>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <Link to="#">
                                          <span className="text-blue">
                                            RE124339
                                          </span>
                                        </Link>
                                      </td>
                                      <td>Lipid Profile</td>
                                      <td>27 Apr 2024</td>
                                      <td>Victoria Selzer</td>
                                      <td>$250</td>
                                      <td>Good take rest</td>
                                      <td>
                                        <span className="badge badge-success-bg">
                                          Normal
                                        </span>
                                      </td>
                                      <td>
                                        <div className="d-flex align-items-center">
                                          <Link
                                            to="#"
                                            className="account-action me-2"
                                          >
                                            <i className="fa-solid fa-prescription" />
                                          </Link>
                                          <Link
                                            to="#"
                                            className="account-action"
                                          >
                                            <i className="fa-solid fa-file-invoice-dollar" />
                                          </Link>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <Link to="#">
                                          <span className="text-blue">
                                            RE124338
                                          </span>
                                        </Link>
                                      </td>
                                      <td>Blood Cultures</td>
                                      <td>10 May 2024</td>
                                      <td>Juliet Gabriel</td>
                                      <td>$320</td>
                                      <td>Good take rest</td>
                                      <td>
                                        <span className="badge badge-success-bg">
                                          Normal
                                        </span>
                                      </td>
                                      <td>
                                        <div className="d-flex align-items-center">
                                          <Link
                                            to="#"
                                            className="account-action me-2"
                                          >
                                            <i className="fa-solid fa-prescription" />
                                          </Link>
                                          <Link
                                            to="#"
                                            className="account-action"
                                          >
                                            <i className="fa-solid fa-file-invoice-dollar" />
                                          </Link>
                                        </div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                          {/* /Appointments Tab */}
                          {/* Medical Records Tab */}
                          <div className="tab-pane fade" id="medical-tab">
                            <div className="custom-table">
                              <div className="table-responsive">
                                <table className="table mb-0 table-center">
                                  <thead>
                                    <tr>
                                      <th>ID</th>
                                      <th>Name</th>
                                      <th>Date</th>
                                      <th>Description</th>
                                      <th>Action</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td className="text-blue-600">
                                        <Link to="#">#MR-123</Link>
                                      </td>
                                      <td>
                                        <Link to="#" className="lab-icon">
                                          <span>
                                            <i className="fa-solid fa-paperclip" />
                                          </span>
                                          Lab Report
                                        </Link>
                                      </td>
                                      <td>24 Mar 2024</td>
                                      <td>Glucose Test V12</td>
                                      <td>
                                        <div className="action-item">
                                          <Link to="#">
                                            <i className="fa-solid fa-pen-to-square" />
                                          </Link>
                                          <Link to="#">
                                            <i className="fa-solid fa-download" />
                                          </Link>
                                          <Link to="#">
                                            <i className="fa-solid fa-trash-can" />
                                          </Link>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="text-blue-600">
                                        <Link to="#">#MR-124</Link>
                                      </td>
                                      <td>
                                        <Link to="#" className="lab-icon">
                                          <span>
                                            <i className="fa-solid fa-paperclip" />
                                          </span>
                                          Lab Report
                                        </Link>
                                      </td>
                                      <td>27 Mar 2024</td>
                                      <td>Complete Blood Count(CBC)</td>
                                      <td>
                                        <div className="action-item">
                                          <Link to="#">
                                            <i className="fa-solid fa-pen-to-square" />
                                          </Link>
                                          <Link to="#">
                                            <i className="fa-solid fa-download" />
                                          </Link>
                                          <Link to="#">
                                            <i className="fa-solid fa-trash-can" />
                                          </Link>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="text-blue-600">
                                        <Link to="#">#MR-125</Link>
                                      </td>
                                      <td>
                                        <Link to="#" className="lab-icon">
                                          <span>
                                            <i className="fa-solid fa-paperclip" />
                                          </span>
                                          Lab Report
                                        </Link>
                                      </td>
                                      <td>10 Apr 2024</td>
                                      <td>Echocardiogram</td>
                                      <td>
                                        <div className="action-item">
                                          <Link to="#">
                                            <i className="fa-solid fa-pen-to-square" />
                                          </Link>
                                          <Link to="#">
                                            <i className="fa-solid fa-download" />
                                          </Link>
                                          <Link to="#">
                                            <i className="fa-solid fa-trash-can" />
                                          </Link>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="text-blue-600">
                                        <Link to="#">#MR-126</Link>
                                      </td>
                                      <td>
                                        <Link to="#" className="lab-icon">
                                          <span>
                                            <i className="fa-solid fa-paperclip" />
                                          </span>
                                          Lab Report
                                        </Link>
                                      </td>
                                      <td>19 Apr 2024</td>
                                      <td>COVID-19 Test</td>
                                      <td>
                                        <div className="action-item">
                                          <Link to="#">
                                            <i className="fa-solid fa-pen-to-square" />
                                          </Link>
                                          <Link to="#">
                                            <i className="fa-solid fa-download" />
                                          </Link>
                                          <Link to="#">
                                            <i className="fa-solid fa-trash-can" />
                                          </Link>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="text-blue-600">
                                        <Link to="#">#MR-127</Link>
                                      </td>
                                      <td>
                                        <Link to="#" className="lab-icon">
                                          <span>
                                            <i className="fa-solid fa-paperclip" />
                                          </span>
                                          Lab Report
                                        </Link>
                                      </td>
                                      <td>27 Apr 2024</td>
                                      <td>Allergy Tests</td>
                                      <td>
                                        <div className="action-item">
                                          <Link to="#">
                                            <i className="fa-solid fa-pen-to-square" />
                                          </Link>
                                          <Link to="#">
                                            <i className="fa-solid fa-download" />
                                          </Link>
                                          <Link to="#">
                                            <i className="fa-solid fa-trash-can" />
                                          </Link>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="text-blue-600">
                                        <Link to="#">#MR-128</Link>
                                      </td>
                                      <td>
                                        <Link to="#" className="lab-icon">
                                          <span>
                                            <i className="fa-solid fa-paperclip" />
                                          </span>
                                          Lab Report
                                        </Link>
                                      </td>
                                      <td>02 May 2024</td>
                                      <td>Lipid Panel </td>
                                      <td>
                                        <div className="action-item">
                                          <Link to="#">
                                            <i className="fa-solid fa-pen-to-square" />
                                          </Link>
                                          <Link to="#">
                                            <i className="fa-solid fa-download" />
                                          </Link>
                                          <Link to="#">
                                            <i className="fa-solid fa-trash-can" />
                                          </Link>
                                        </div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                          {/* /Medical Records Tab */}
                          {/* Prescriptions Tab */}
                          <div className="tab-pane fade" id="prsc-tab">
                            <div className="custom-table">
                              <div className="table-responsive">
                                <table className="table mb-0 table-center">
                                  <thead>
                                    <tr>
                                      <th>ID</th>
                                      <th>Name</th>
                                      <th>Created Date</th>
                                      <th>Prescriped By</th>
                                      <th>Action</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td className="text-blue-600">
                                        <Link
                                          to="#"
                                          data-bs-toggle="modal"
                                          data-bs-target="#view_prescription"
                                        >
                                          #PR-123
                                        </Link>
                                      </td>
                                      <td>
                                        <Link
                                          to="#"
                                          className="lab-icon prescription"
                                        >
                                          <span>
                                            <i className="fa-solid fa-prescription" />
                                          </span>
                                          Prescription
                                        </Link>
                                      </td>
                                      <td>24 Mar 2024, 10:30 AM</td>
                                      <td>
                                        <h2 className="table-avatar">
                                          <Link
                                            to="/patient/doctor-profile"
                                            className="avatar avatar-sm me-2"
                                          >
                                            <img
                                              className="avatar-img rounded-3"
                                              src={doctorthumb02}
                                              alt="User Image"
                                            />
                                          </Link>
                                          <Link to="/patient/doctor-profile">
                                            Edalin Hendry
                                          </Link>
                                        </h2>
                                      </td>
                                      <td>
                                        <div className="action-item">
                                          <Link
                                            to="#"
                                            data-bs-toggle="modal"
                                            data-bs-target="#view_prescription"
                                          >
                                            <i className="fa-solid fa-link" />
                                          </Link>
                                          <Link to="#">
                                            <i className="fa-solid fa-download" />
                                          </Link>
                                          <Link to="#">
                                            <i className="fa-solid fa-trash-can" />
                                          </Link>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="text-blue-600">
                                        <Link
                                          to="#"
                                          data-bs-toggle="modal"
                                          data-bs-target="#view_prescription"
                                        >
                                          #PR-124
                                        </Link>
                                      </td>
                                      <td>
                                        <Link
                                          to="#"
                                          className="lab-icon prescription"
                                        >
                                          <span>
                                            <i className="fa-solid fa-prescription" />
                                          </span>
                                          Prescription
                                        </Link>
                                      </td>
                                      <td>27 Mar 2024, 11:15 AM</td>
                                      <td>
                                        <h2 className="table-avatar">
                                          <Link
                                            to="/patient/doctor-profile"
                                            className="avatar avatar-sm me-2"
                                          >
                                            <img
                                              className="avatar-img rounded-3"
                                              src={doctor_thumb_05}
                                              alt="User Image"
                                            />
                                          </Link>
                                          <Link to="/patient/doctor-profile">
                                            John Homes
                                          </Link>
                                        </h2>
                                      </td>
                                      <td>
                                        <div className="action-item">
                                          <Link
                                            to="#"
                                            data-bs-toggle="modal"
                                            data-bs-target="#view_prescription"
                                          >
                                            <i className="fa-solid fa-link" />
                                          </Link>
                                          <Link to="#">
                                            <i className="fa-solid fa-download" />
                                          </Link>
                                          <Link to="#">
                                            <i className="fa-solid fa-trash-can" />
                                          </Link>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="text-blue-600">
                                        <Link
                                          to="#"
                                          data-bs-toggle="modal"
                                          data-bs-target="#view_prescription"
                                        >
                                          #PR-125
                                        </Link>
                                      </td>
                                      <td>
                                        <Link
                                          to="#"
                                          className="lab-icon prescription"
                                        >
                                          <span>
                                            <i className="fa-solid fa-prescription" />
                                          </span>
                                          Prescription
                                        </Link>
                                      </td>
                                      <td>11 Apr 2024, 09:00 AM</td>
                                      <td>
                                        <h2 className="table-avatar">
                                          <Link
                                            to="/patient/doctor-profile"
                                            className="avatar avatar-sm me-2"
                                          >
                                            <img
                                              className="avatar-img rounded-3"
                                              src={doctor_thumb_03}
                                              alt="User Image"
                                            />
                                          </Link>
                                          <Link to="/patient/doctor-profile">
                                            Shanta Neill
                                          </Link>
                                        </h2>
                                      </td>
                                      <td>
                                        <div className="action-item">
                                          <Link
                                            to="#"
                                            data-bs-toggle="modal"
                                            data-bs-target="#view_prescription"
                                          >
                                            <i className="fa-solid fa-link" />
                                          </Link>
                                          <Link to="#">
                                            <i className="fa-solid fa-download" />
                                          </Link>
                                          <Link to="#">
                                            <i className="fa-solid fa-trash-can" />
                                          </Link>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="text-blue-600">
                                        <Link
                                          to="#"
                                          data-bs-toggle="modal"
                                          data-bs-target="#view_prescription"
                                        >
                                          #PR-126
                                        </Link>
                                      </td>
                                      <td>
                                        <Link
                                          to="#"
                                          className="lab-icon prescription"
                                        >
                                          <span>
                                            <i className="fa-solid fa-prescription" />
                                          </span>
                                          Prescription
                                        </Link>
                                      </td>
                                      <td>15 Apr 2024, 02:30 PM</td>
                                      <td>
                                        <h2 className="table-avatar">
                                          <Link
                                            to="/patient/doctor-profile"
                                            className="avatar avatar-sm me-2"
                                          >
                                            <img
                                              className="avatar-img rounded-3"
                                              src={doctor_thumb_08}
                                              alt="User Image"
                                            />
                                          </Link>
                                          <Link to="/patient/doctor-profile">
                                            Anthony Tran
                                          </Link>
                                        </h2>
                                      </td>
                                      <td>
                                        <div className="action-item">
                                          <Link
                                            to="#"
                                            data-bs-toggle="modal"
                                            data-bs-target="#view_prescription"
                                          >
                                            <i className="fa-solid fa-link" />
                                          </Link>
                                          <Link to="#">
                                            <i className="fa-solid fa-download" />
                                          </Link>
                                          <Link to="#">
                                            <i className="fa-solid fa-trash-can" />
                                          </Link>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="text-blue-600">
                                        <Link
                                          to="#"
                                          data-bs-toggle="modal"
                                          data-bs-target="#view_prescription"
                                        >
                                          #PR-127
                                        </Link>
                                      </td>
                                      <td>
                                        <Link
                                          to="#"
                                          className="lab-icon prescription"
                                        >
                                          <span>
                                            <i className="fa-solid fa-prescription" />
                                          </span>
                                          Prescription
                                        </Link>
                                      </td>
                                      <td>23 Apr 2024, 06:40 PM</td>
                                      <td>
                                        <h2 className="table-avatar">
                                          <Link
                                            to="/patient/doctor-profile"
                                            className="avatar avatar-sm me-2"
                                          >
                                            <img
                                              className="avatar-img rounded-3"
                                              src={doctor_thumb_01}
                                              alt="User Image"
                                            />
                                          </Link>
                                          <Link to="/patient/doctor-profile">
                                            Susan Lingo
                                          </Link>
                                        </h2>
                                      </td>
                                      <td>
                                        <div className="action-item">
                                          <Link
                                            to="#"
                                            data-bs-toggle="modal"
                                            data-bs-target="#view_prescription"
                                          >
                                            <i className="fa-solid fa-link" />
                                          </Link>
                                          <Link to="#">
                                            <i className="fa-solid fa-download" />
                                          </Link>
                                          <Link to="#">
                                            <i className="fa-solid fa-trash-can" />
                                          </Link>
                                        </div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                          {/* Prescriptions Tab */}
                          {/*Invoices Tab */}
                          <div className="tab-pane fade" id="invoice-tab">
                            <div className="custom-table">
                              <div className="table-responsive">
                                <table className="table mb-0 table-center">
                                  <thead>
                                    <tr>
                                      <th>ID</th>
                                      <th>Doctor</th>
                                      <th>Appointment Date</th>
                                      <th>Booked on</th>
                                      <th>Amount</th>
                                      <th>Action</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td className="text-blue-600">
                                        <Link
                                          to="#"
                                          data-bs-toggle="modal"
                                          data-bs-target="#invoice_view"
                                        >
                                          #Inv-2021
                                        </Link>
                                      </td>
                                      <td>
                                        <h2 className="table-avatar">
                                          <Link
                                            to="/patient/doctor-profile"
                                            className="avatar avatar-sm me-2"
                                          >
                                            <img
                                              className="avatar-img rounded-3"
                                              src={doctor_thumb_21}
                                              alt="User Image"
                                            />
                                          </Link>
                                          <Link to="/patient/doctor-profile">
                                            Edalin Hendry
                                          </Link>
                                        </h2>
                                      </td>
                                      <td>24 Mar 2024</td>
                                      <td>21 Mar 2024</td>
                                      <td>$300</td>
                                      <td>
                                        <div className="action-item">
                                          <Link
                                            to="#"
                                            data-bs-toggle="modal"
                                            data-bs-target="#invoice_view"
                                          >
                                            <i className="fa-solid fa-link" />
                                          </Link>
                                          <Link to="#">
                                            <i className="fa-solid fa-print" />
                                          </Link>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="text-blue-600">
                                        <Link
                                          to="#"
                                          data-bs-toggle="modal"
                                          data-bs-target="#invoice_view"
                                        >
                                          #Inv-2021
                                        </Link>
                                      </td>
                                      <td>
                                        <h2 className="table-avatar">
                                          <Link
                                            to="/patient/doctor-profile"
                                            className="avatar avatar-sm me-2"
                                          >
                                            <img
                                              className="avatar-img rounded-3"
                                              src={doctor_thumb_13}
                                              alt="User Image"
                                            />
                                          </Link>
                                          <Link to="/patient/doctor-profile">
                                            John Homes
                                          </Link>
                                        </h2>
                                      </td>
                                      <td>17 Mar 2024</td>
                                      <td>14 Mar 2024</td>
                                      <td>$450</td>
                                      <td>
                                        <div className="action-item">
                                          <Link
                                            to="#"
                                            data-bs-toggle="modal"
                                            data-bs-target="#invoice_view"
                                          >
                                            <i className="fa-solid fa-link" />
                                          </Link>
                                          <Link to="#">
                                            <i className="fa-solid fa-print" />
                                          </Link>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="text-blue-600">
                                        <Link
                                          to="#"
                                          data-bs-toggle="modal"
                                          data-bs-target="#invoice_view"
                                        >
                                          #Inv-2021
                                        </Link>
                                      </td>
                                      <td>
                                        <h2 className="table-avatar">
                                          <Link
                                            to="/patient/doctor-profile"
                                            className="avatar avatar-sm me-2"
                                          >
                                            <img
                                              className="avatar-img rounded-3"
                                              src={doctor_thumb_03}
                                              alt="User Image"
                                            />
                                          </Link>
                                          <Link to="/patient/doctor-profile">
                                            Shanta Neill
                                          </Link>
                                        </h2>
                                      </td>
                                      <td>11 Mar 2024</td>
                                      <td>07 Mar 2024</td>
                                      <td>$250</td>
                                      <td>
                                        <div className="action-item">
                                          <Link
                                            to="#"
                                            data-bs-toggle="modal"
                                            data-bs-target="#invoice_view"
                                          >
                                            <i className="fa-solid fa-link" />
                                          </Link>
                                          <Link to="#">
                                            <i className="fa-solid fa-print" />
                                          </Link>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="text-blue-600">
                                        <Link
                                          to="#"
                                          data-bs-toggle="modal"
                                          data-bs-target="#invoice_view"
                                        >
                                          #Inv-2021
                                        </Link>
                                      </td>
                                      <td>
                                        <h2 className="table-avatar">
                                          <Link
                                            to="/patient/doctor-profile"
                                            className="avatar avatar-sm me-2"
                                          >
                                            <img
                                              className="avatar-img rounded-3"
                                              src={doctor_thumb_08}
                                              alt="User Image"
                                            />
                                          </Link>
                                          <Link to="/patient/doctor-profile">
                                            Anthony Tran
                                          </Link>
                                        </h2>
                                      </td>
                                      <td>26 Feb 2024</td>
                                      <td>23 Feb 2024</td>
                                      <td>$320</td>
                                      <td>
                                        <div className="action-item">
                                          <Link
                                            to="#"
                                            data-bs-toggle="modal"
                                            data-bs-target="#invoice_view"
                                          >
                                            <i className="fa-solid fa-link" />
                                          </Link>
                                          <Link to="#">
                                            <i className="fa-solid fa-print" />
                                          </Link>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="text-blue-600">
                                        <Link
                                          to="#"
                                          data-bs-toggle="modal"
                                          data-bs-target="#invoice_view"
                                        >
                                          #Inv-2021
                                        </Link>
                                      </td>
                                      <td>
                                        <h2 className="table-avatar">
                                          <Link
                                            to="/patient/doctor-profile"
                                            className="avatar avatar-sm me-2"
                                          >
                                            <img
                                              className="avatar-img rounded-3"
                                              src={doctor_thumb_01}
                                              alt="User Image"
                                            />
                                          </Link>
                                          <Link to="/patient/doctor-profile">
                                            Susan Lingo
                                          </Link>
                                        </h2>
                                      </td>
                                      <td>18 Feb 2024</td>
                                      <td>15 Feb 2024</td>
                                      <td>$480</td>
                                      <td>
                                        <div className="action-item">
                                          <Link
                                            to="#"
                                            data-bs-toggle="modal"
                                            data-bs-target="#invoice_view"
                                          >
                                            <i className="fa-solid fa-link" />
                                          </Link>
                                          <Link to="#">
                                            <i className="fa-solid fa-print" />
                                          </Link>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="text-blue-600">
                                        <Link
                                          to="#"
                                          data-bs-toggle="modal"
                                          data-bs-target="#invoice_view"
                                        >
                                          #Inv-2021
                                        </Link>
                                      </td>
                                      <td>
                                        <h2 className="table-avatar">
                                          <Link
                                            to="/patient/doctor-profile"
                                            className="avatar avatar-sm me-2"
                                          >
                                            <img
                                              className="avatar-img rounded-3"
                                              src={doctor_thumb_09}
                                              alt="User Image"
                                            />
                                          </Link>
                                          <Link to="/patient/doctor-profile">
                                            Joseph Boyd
                                          </Link>
                                        </h2>
                                      </td>
                                      <td>10 Feb 2024</td>
                                      <td>07 Feb 2024</td>
                                      <td>$260</td>
                                      <td>
                                        <div className="action-item">
                                          <Link
                                            to="#"
                                            data-bs-toggle="modal"
                                            data-bs-target="#invoice_view"
                                          >
                                            <i className="fa-solid fa-link" />
                                          </Link>
                                          <Link to="#">
                                            <i className="fa-solid fa-print" />
                                          </Link>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="text-blue-600">
                                        <Link
                                          to="#"
                                          data-bs-toggle="modal"
                                          data-bs-target="#invoice_view"
                                        >
                                          #Inv-2021
                                        </Link>
                                      </td>
                                      <td>
                                        <h2 className="table-avatar">
                                          <Link
                                            to="/patient/doctor-profile"
                                            className="avatar avatar-sm me-2"
                                          >
                                            <img
                                              className="avatar-img rounded-3"
                                              src={doctor_thumb_07}
                                              alt="User Image"
                                            />
                                          </Link>
                                          <Link to="/patient/doctor-profile">
                                            Juliet Gabriel
                                          </Link>
                                        </h2>
                                      </td>
                                      <td>28 Jan 2024</td>
                                      <td>25 Jan 2024</td>
                                      <td>$350</td>
                                      <td>
                                        <div className="action-item">
                                          <Link
                                            to="#"
                                            data-bs-toggle="modal"
                                            data-bs-target="#invoice_view"
                                          >
                                            <i className="fa-solid fa-link" />
                                          </Link>
                                          <Link to="#">
                                            <i className="fa-solid fa-print" />
                                          </Link>
                                        </div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                          {/* Invoices Tab */}
                        </div>
                        {/* Tab Content */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-5 d-flex">
                    <div className="favourites-dashboard w-100">
                      <div className="dashboard-card w-100">
                        <div className="dashboard-card-head">
                          <div className="header-title">
                            <h5>Visited Doctors</h5>
                          </div>
                          <div className="card-view-link">
                            <Link to="/patient/favourites">View All</Link>
                          </div>
                        </div>
                        <div className="dashboard-card-body">
                          <div className="doctor-fav-list">
                            <div className="doctor-info-profile">
                              <Link to="#" className="table-avatar">
                                <img src={doctorprofileimg} alt="Img" />
                              </Link>
                              <div className="doctor-name-info">
                                <h5>
                                  <Link to="#">Dr. Edalin</Link>
                                </h5>
                                <span>Endodontists</span>
                              </div>
                            </div>
                            <Link to="#" className="cal-plus-icon">
                              <i className="fa-solid fa-calendar-plus" />
                            </Link>
                          </div>
                          <div className="doctor-fav-list">
                            <div className="doctor-info-profile">
                              <Link to="#" className="table-avatar">
                                <img src={doctorthumb11} alt="Img" />
                              </Link>
                              <div className="doctor-name-info">
                                <h5>
                                  <Link to="#">Dr. Maloney</Link>
                                </h5>
                                <span>Cardiologist</span>
                              </div>
                            </div>
                            <Link to="#" className="cal-plus-icon">
                              <i className="fa-solid fa-calendar-plus" />
                            </Link>
                          </div>
                          <div className="doctor-fav-list">
                            <div className="doctor-info-profile">
                              <Link to="#" className="table-avatar">
                                <img src={doctor_14} alt="Img" />
                              </Link>
                              <div className="doctor-name-info">
                                <h5>
                                  <Link to="#">Dr. Wayne&nbsp;</Link>
                                </h5>
                                <span>Dental Specialist</span>
                              </div>
                            </div>
                            <Link to="#" className="cal-plus-icon">
                              <i className="fa-solid fa-calendar-plus" />
                            </Link>
                          </div>
                          <div className="doctor-fav-list">
                            <div className="doctor-info-profile">
                              <Link to="#" className="table-avatar">
                                <img src={doctor_15} alt="Img" />
                              </Link>
                              <div className="doctor-name-info">
                                <h5>
                                  <Link to="#">Dr. Marla</Link>
                                </h5>
                                <span>Endodontists</span>
                              </div>
                            </div>
                            <Link to="#" className="cal-plus-icon">
                              <i className="fa-solid fa-calendar-plus" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-7 d-flex ">
                    <div className="dashboard-main-col w-100">
                      <div className="dashboard-card w-100">
                        <div className="dashboard-card-head">
                          <div className="header-title">
                            <h5 className="hidden text-3xl sm:block">
                              <span className="card-head-icon">
                                <i className="fa-solid fa-calendar-days" />
                              </span>
                              Upcoming Appointments
                            </h5>
                            <h5 className="block text-sm sm:hidden">
                              <span className="card-head-icon">
                                <i className="fa-solid fa-calendar-days" />
                              </span>
                              Upcoming Appointments
                            </h5>
                          </div>
                          <div className="card-view-link">
                            <div className="owl-nav slide-nav-patient text-end nav-control" />
                          </div>
                        </div>
                        <div className="dashboard-card-body">
                          <div className="apponiment-dates">
                            <ul className="appointment-calender-slider">
                              <OwlCarousel {...specialitysettings}>
                                <li>
                                  <Link to="#">
                                    <h5>
                                      19 <span>Mon</span>
                                    </h5>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <h5>
                                      20 <span>Mon</span>
                                    </h5>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#" className="available-date">
                                    <h5>
                                      21 <span>Tue</span>
                                    </h5>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#" className="available-date">
                                    <h5>
                                      22 <span>Wed</span>
                                    </h5>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <h5>
                                      23 <span>Thu</span>
                                    </h5>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <h5>
                                      24 <span>Fri</span>
                                    </h5>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="#">
                                    <h5>
                                      25 <span>Sat</span>
                                    </h5>
                                  </Link>
                                </li>
                              </OwlCarousel>
                            </ul>

                            <div className="appointment-dash-card">
                              <div className="doctor-fav-list">
                                <div className="doctor-info-profile">
                                  <Link to="#" className="table-avatar">
                                    <img src={doctorprofileimg} alt="Img" />
                                  </Link>
                                  <div className="doctor-name-info">
                                    <h5>
                                      <Link to="#">Dr.Edalin Hendry</Link>
                                    </h5>
                                    <span>Dentist</span>
                                  </div>
                                </div>
                              </div>
                              <div className="date-time">
                                <p>
                                  <i className="fa-solid fa-clock" />
                                  21 Mar 2024 - 10:30 PM{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <div className="dashboard-card w-100">
                        <div className="dashboard-card-head">
                          <div className="header-title">
                            <h5>Notifications</h5>
                          </div>
                          <div className="card-view-link">
                            <Link to="#">View All</Link>
                          </div>
                        </div>
                        <div className="dashboard-card-body">
                          <div className="table-responsive">
                            <table className="table dashboard-table">
                              <tbody>
                                <tr>
                                  <td>
                                    <div className="table-noti-info">
                                      <div className="table-noti-icon color-violet">
                                        <i className="fa-solid fa-bell" />
                                      </div>
                                      <div className="table-noti-message">
                                        <h6>
                                          <Link to="#">
                                            Booking Confirmed on{" "}
                                            <span> 21 Mar 2024 </span> 10:30 AM
                                          </Link>
                                        </h6>
                                        <span className="message-time">
                                          Just Now
                                        </span>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="table-noti-info">
                                      <div className="table-noti-icon color-blue">
                                        <i className="fa-solid fa-star" />
                                      </div>
                                      <div className="table-noti-message">
                                        <h6>
                                          <Link to="#">
                                            You have a <span> New </span> Review
                                            for your Appointment{" "}
                                          </Link>
                                        </h6>
                                        <span className="message-time">
                                          5 Days ago
                                        </span>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="table-noti-info">
                                      <div className="table-noti-icon color-red">
                                        <i className="fa-solid fa-calendar-check" />
                                      </div>
                                      <div className="table-noti-message">
                                        <h6>
                                          <Link to="#">
                                            You have Appointment with{" "}
                                            <span> Ahmed </span> by 01:20 PM{" "}
                                          </Link>
                                        </h6>
                                        <span className="message-time">
                                          12:55 PM
                                        </span>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="table-noti-info">
                                      <div className="table-noti-icon color-yellow">
                                        <i className="fa-solid fa-money-bill-1-wave" />
                                      </div>
                                      <div className="table-noti-message">
                                        <h6>
                                          <Link to="#">
                                            Sent an amount of{" "}
                                            <span> $200 </span> for an
                                            Appointment by 01:20 PM{" "}
                                          </Link>
                                        </h6>
                                        <span className="message-time">
                                          2 Days ago
                                        </span>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="table-noti-info">
                                      <div className="table-noti-icon color-blue">
                                        <i className="fa-solid fa-star" />
                                      </div>
                                      <div className="table-noti-message">
                                        <h6>
                                          <Link to="#">
                                            You have a <span> New </span> Review
                                            for your Appointment{" "}
                                          </Link>
                                        </h6>
                                        <span className="message-time">
                                          5 Days ago
                                        </span>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Page Content */}
      </div>
      {/* Add Dependent Modal*/}
      <div className="modal fade custom-modals" id="add_dependent">
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">Add Dependant</h3>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="fa-solid fa-xmark" />
              </button>
            </div>
            <form action="#">
              <div className="add-dependent">
                <div className="modal-body">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="pb-0 form-wrap">
                        <div className="change-avatar img-upload">
                          <div className="profile-img">
                            <i className="fa-solid fa-file-image" />
                          </div>
                          <div className="upload-img">
                            <h5>Profile Image</h5>
                            <div className="imgs-load d-flex align-items-center">
                              <div className="change-photo">
                                Upload New
                                <input type="file" className="upload" />
                              </div>
                              <a href="#" className="upload-remove">
                                Remove
                              </a>
                            </div>
                            <p>
                              Your Image should Below 4 MB, Accepted format
                              jpg,png,svg
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-wrap">
                        <label className="col-form-label">Name</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-wrap">
                        <label className="col-form-label">Relationship</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-wrap">
                        <label className="col-form-label">
                          DOB <span className="text-danger">*</span>
                        </label>
                        <div className="form-icon">
                          <input
                            type="text"
                            className="form-control datetimepicker"
                          />
                          <span className="icon">
                            <i className="fa-regular fa-calendar-days" />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-wrap">
                        <label className="col-form-label">Select Gender</label>
                        <select className="select">
                          <option>Select</option>
                          <option>Male</option>
                          <option>Female</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <div className="modal-btn text-end">
                  <a
                    href="#"
                    className="btn btn-gray"
                    data-bs-toggle="modal"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </a>
                  <button type="submit" className="btn btn-primary prime-btn">
                    Save Changes
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Add Dependent Modal*/}
      {/*View Invoice */}
      <div className="modal fade custom-modals" id="invoice_view">
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">View Invoice</h3>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="fa-solid fa-xmark" />
              </button>
            </div>
            <div className="pb-0 modal-body">
              <div className="prescribe-download">
                <h5>21 Mar 2024</h5>
                <ul>
                  <li>
                    <a href="javascript:void(0);" className="print-link">
                      <i className="fa-solid fa-print" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="btn btn-primary prime-btn">
                      Download
                    </a>
                  </li>
                </ul>
              </div>
              <div className="view-prescribe invoice-content">
                <div className="invoice-item">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="invoice-logo">
                        <img src="assets/img/logo.png" alt="logo" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <p className="invoice-details">
                        <strong>Invoice No : </strong> #INV005
                        <br />
                        <strong>Issued:</strong> 21 Mar 2024
                      </p>
                    </div>
                  </div>
                </div>
                {/* Invoice Item */}
                <div className="invoice-item">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="invoice-info">
                        <h6 className="customer-text">Billing From</h6>
                        <p className="invoice-details invoice-details-two">
                          Edalin Hendry <br />
                          806 Twin Willow Lane, <br />
                          Newyork, USA <br />
                        </p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="invoice-info">
                        <h6 className="customer-text">Billing To</h6>
                        <p className="invoice-details invoice-details-two">
                          Richard Wilson <br />
                          299 Star Trek Drive
                          <br />
                          Florida, 32405, USA
                          <br />
                        </p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="invoice-info invoice-info2">
                        <h6 className="customer-text">Payment Method</h6>
                        <p className="invoice-details">
                          Debit Card <br />
                          XXXXXXXXXXXX-2541
                          <br />
                          HDFC Bank
                          <br />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Invoice Item */}
                {/* Invoice Item */}
                <div className="invoice-item invoice-table-wrap">
                  <div className="row">
                    <div className="col-md-12">
                      <h6>Invoice Details</h6>
                      <div className="table-responsive">
                        <table className="table invoice-table table-bordered">
                          <thead>
                            <tr>
                              <th>Description</th>
                              <th>Quatity</th>
                              <th>VAT</th>
                              <th>Total</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>General Consultation</td>
                              <td>1</td>
                              <td>$0</td>
                              <td>$150</td>
                            </tr>
                            <tr>
                              <td>Video Call</td>
                              <td>1</td>
                              <td>$0</td>
                              <td>$100</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="col-md-6 col-xl-4 ms-auto">
                      <div className="table-responsive">
                        <table className="table invoice-table-two">
                          <tbody>
                            <tr>
                              <th>Subtotal:</th>
                              <td>
                                <span>$350</span>
                              </td>
                            </tr>
                            <tr>
                              <th>Discount:</th>
                              <td>
                                <span>-10%</span>
                              </td>
                            </tr>
                            <tr>
                              <th>Total Amount:</th>
                              <td>
                                <span>$315</span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Invoice Item */}
                {/* Invoice Information */}
                <div className="mb-0 other-info">
                  <h4>Other information</h4>
                  <p className="mb-0 text-muted">
                    An account of the present illness, which includes the
                    circumstances surrounding the onset of recent health changes
                    and the chronology of subsequent events that have led the
                    patient to seek medicine
                  </p>
                </div>
                {/* /Invoice Information */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /View Invoice */}
      {/*View Prescription */}
      <div className="modal fade custom-modals" id="view_prescription">
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">View Prescription</h3>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="fa-solid fa-xmark" />
              </button>
            </div>
            <div className="pb-0 modal-body">
              <div className="prescribe-download">
                <h5>21 Mar 2024</h5>
                <ul>
                  <li>
                    <a href="javascript:void(0);" className="print-link">
                      <i className="fa-solid fa-print" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="btn btn-primary prime-btn">
                      Download
                    </a>
                  </li>
                </ul>
              </div>
              <div className="view-prescribe invoice-content">
                <div className="invoice-item">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="invoice-logo">
                        <img src="assets/img/logo.png" alt="logo" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <p className="invoice-details">
                        <strong>Prescription ID :</strong> #PR-123 <br />
                        <strong>Issued:</strong> 21 Mar 2024
                      </p>
                    </div>
                  </div>
                </div>
                {/* Invoice Item */}
                <div className="invoice-item">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="invoice-info">
                        <h6 className="customer-text">Doctor Details</h6>
                        <p className="invoice-details invoice-details-two">
                          Edalin Hendry <br />
                          806 Twin Willow Lane, <br />
                          Newyork, USA <br />
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="invoice-info invoice-info2">
                        <h6 className="customer-text">Patient Details</h6>
                        <p className="invoice-details">
                          Adrian Marshall <br />
                          299 Star Trek Drive,
                          <br />
                          Florida, 32405, USA <br />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Invoice Item */}
                {/* Invoice Item */}
                <div className="invoice-item invoice-table-wrap">
                  <div className="row">
                    <div className="col-md-12">
                      <h6>Prescription Details</h6>
                      <div className="table-responsive">
                        <table className="table invoice-table table-bordered">
                          <thead>
                            <tr>
                              <th>Medicine Name</th>
                              <th>Dosage</th>
                              <th>Frequency</th>
                              <th>Duration</th>
                              <th>Timings</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Ecosprin 75MG [Asprin 75 MG Oral Tab]</td>
                              <td>
                                75 mg <span>Oral Tab</span>
                              </td>
                              <td>1-0-0-1</td>
                              <td>1 month</td>
                              <td>Before Meal</td>
                            </tr>
                            <tr>
                              <td>Alexer 90MG Tab</td>
                              <td>
                                90 mg <span>Oral Tab</span>
                              </td>
                              <td>1-0-0-1</td>
                              <td>1 month</td>
                              <td>Before Meal</td>
                            </tr>
                            <tr>
                              <td>Ramistar XL2.5</td>
                              <td>
                                60 mg <span>Oral Tab</span>
                              </td>
                              <td>1-0-0-0</td>
                              <td>1 month</td>
                              <td>After Meal</td>
                            </tr>
                            <tr>
                              <td>Metscore</td>
                              <td>
                                90 mg <span>Oral Tab</span>
                              </td>
                              <td>1-0-0-1</td>
                              <td>1 month</td>
                              <td>After Meal</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Invoice Item */}
                {/* Invoice Information */}
                {/* <div className="other-info">
                  <h4>Other information</h4>
                  <p className="mb-0 text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus sed dictum ligula, cursus blandit risus. Maecenas
                    eget metus non tellus dignissim aliquam ut a ex. Maecenas
                    sed vehicula dui, ac suscipit lacus. Sed finibus leo vitae
                    lorem interdum, eu scelerisque tellus fermentum. Curabitur
                    sit amet lacinia lorem. Nullam finibus pellentesque libero.
                  </p>
                </div> */}
                <div className="other-info">
                  <h4>Follow Up</h4>
                  <p className="mb-0 text-muted">
                    Follow u p after 3 months, Have to come on empty stomach
                  </p>
                </div>
                ch
                <div className="prescriber-info">
                  <h6>Dr. Edalin Hendry</h6>
                  <p>Dept of Cardiology</p>
                </div>
                {/* /Invoice Information */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /View Prescription */}
      <DoctorFooter {...props} />
    </>
  );
};

export default Dashboard;
