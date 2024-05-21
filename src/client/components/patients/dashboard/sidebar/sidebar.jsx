import React from "react";
import { Link } from "react-router-dom";
import { doctordashboardprofile06 } from "../../../imagepath";
import { useSelector } from "react-redux";

export const DashboardSidebar = () => {
  const pathnames = window.location.pathname;
  const profileData = useSelector((state) => state.profileReducer.profileData);

  return (
    <>
      {/* Profile Sidebar */}
      <div className="profile-sidebar patient-sidebar profile-sidebar-new">
        <div className="widget-profile pro-widget-content">
          <div className="profile-info-widget">
            <Link to="/patient/profile" className="booking-doc-img">
              {profileData.avatar === "" ? (
                <div className="flex items-center justify-center w-40 h-40 space-x-1">
                  <h1 className="text-4xl ">
                    {profileData?.firstName.charAt(0).toUpperCase()}
                  </h1>
                  <h1>{profileData?.lastName.charAt(0).toUpperCase()}</h1>
                </div>
              ) : (
                <img src={profileData.avatar} alt="User Image" />
              )}
            </Link>
            <div className="space-y-2 profile-det-info">
              <h3>
                <Link to="/patient/profile">
                  {profileData?.firstName} {profileData?.lastName}
                </Link>
              </h3>

              <div className="patient-details">
                <h5 className="mb-0">
                  Gender :{" "}
                  {profileData?.gender?.charAt(0).toUpperCase() +
                    profileData?.gender?.slice(1)}
                </h5>
              </div>
              <div className="patient-details">
                <h5 className="mb-0">
                  Date of birth : {profileData?.dateOfBirth?.substring(0, 10)}
                </h5>
              </div>
              <div className="patient-details">
                <h5 className="mb-0">
                  Phone Number : {profileData?.phoneNumber}
                </h5>
              </div>
              <div className="patient-details">
                <h5 className="mb-0">Country : {profileData?.country}</h5>
              </div>

              {/* <span>
                Female <i className="fa-solid fa-circle" /> 32 years 03 Months
              </span> */}
            </div>
          </div>
        </div>
        <div className="dashboard-widget">
          <nav className="dashboard-menu">
            <ul>
              <li
                className={
                  pathnames.includes("/patient/dashboard") ? "active" : ""
                }
              >
                <Link to="/patient/dashboard">
                  <i className="fa-solid fa-shapes me-2" />
                  <span>Dashboard</span>
                </Link>
              </li>
              {/* <li
                className={
                  pathnames.includes("/patient/patient-appointments") ||
                  pathnames.includes(
                    "/patient/patient-cancelled-appointment"
                  ) ||
                  pathnames.includes(
                    "/patient/patient-cancelled-appointment"
                  ) ||
                  pathnames.includes(
                    "/patient/patient-completed-appointment"
                  ) ||
                  pathnames.includes("/patient/upcoming-appointment")
                    ? "active"
                    : ""
                }
              >
                <Link to="/patient/patient-appointments">
                  <i className="fa-solid fa-calendar-days me-2" />
                  <span>My Appointments</span>
                </Link>
              </li> */}

              <li
                className={
                  pathnames.includes("/patient/profile") ? "active" : ""
                }
              >
                <Link to="/patient/profile">
                  <i className="fa-solid fa-user-pen me-2" />
                  <span>Profile Settings</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      {/* /Profile Sidebar */}
    </>
  );
};
export default DashboardSidebar;
