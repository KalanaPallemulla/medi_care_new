import React from "react";
import { Link } from "react-router-dom";

const AppointmentHistory = () => {
  return (
    <div className="col-xl-12 d-flex">
      <div className="dashboard-card w-100">
        <div className="dashboard-card-head">
          <div className="header-title">
            <h5>Reports</h5>
          </div>
          <div className="dropdown header-dropdown">
            <Link className="dropdown-toggle" data-bs-toggle="dropdown" to="#">
              <img
                src={doctordashboardprofile06}
                className="avatar dropdown-avatar"
                alt="Img"
              />
              Hendrita
            </Link>
            <div className="dropdown-menu dropdown-menu-end">
              <Link to="#" className="dropdown-item">
                <img
                  src={doctordashboardprofile06}
                  className="avatar dropdown-avatar"
                  alt="Img"
                />
                Hendrita
              </Link>
              <Link to="#" className="dropdown-item">
                <img
                  src={doctordashboardprofile08}
                  className="avatar dropdown-avatar"
                  alt="Img"
                />
                Laura
              </Link>
              <Link to="#" className="dropdown-item">
                <img
                  src={doctordashboardprofile07}
                  className="avatar dropdown-avatar"
                  alt="Img"
                />
                Mathew
              </Link>
            </div>
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
              <div id="appoint-tab" className="tab-pane fade show active">
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
                              <span className="text-blue">RE124343</span>
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
                              <Link to="#" className="account-action me-2">
                                <i className="fa-solid fa-prescription" />
                              </Link>
                              <Link to="#" className="account-action">
                                <i className="fa-solid fa-file-invoice-dollar" />
                              </Link>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <Link to="#">
                              <span className="text-blue">RE124342</span>
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
                              <Link to="#" className="account-action me-2">
                                <i className="fa-solid fa-prescription" />
                              </Link>
                              <Link to="#" className="account-action">
                                <i className="fa-solid fa-file-invoice-dollar" />
                              </Link>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <Link to="#">
                              <span className="text-blue">RE124341</span>
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
                              <Link to="#" className="account-action me-2">
                                <i className="fa-solid fa-prescription" />
                              </Link>
                              <Link to="#" className="account-action">
                                <i className="fa-solid fa-file-invoice-dollar" />
                              </Link>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <Link to="#">
                              <span className="text-blue">RE124340</span>
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
                              <Link to="#" className="account-action me-2">
                                <i className="fa-solid fa-prescription" />
                              </Link>
                              <Link to="#" className="account-action">
                                <i className="fa-solid fa-file-invoice-dollar" />
                              </Link>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <Link to="#">
                              <span className="text-blue">RE124339</span>
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
                              <Link to="#" className="account-action me-2">
                                <i className="fa-solid fa-prescription" />
                              </Link>
                              <Link to="#" className="account-action">
                                <i className="fa-solid fa-file-invoice-dollar" />
                              </Link>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <Link to="#">
                              <span className="text-blue">RE124338</span>
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
                              <Link to="#" className="account-action me-2">
                                <i className="fa-solid fa-prescription" />
                              </Link>
                              <Link to="#" className="account-action">
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
                            <Link to="#" className="lab-icon prescription">
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
                            <Link to="#" className="lab-icon prescription">
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
                            <Link to="#" className="lab-icon prescription">
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
                            <Link to="#" className="lab-icon prescription">
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
                            <Link to="#" className="lab-icon prescription">
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
  );
};

export default AppointmentHistory;
