/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import logo from "../assets/images/logo.png";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";

const Footer = (props) => {
  //Aos

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  const exclusionArray = [
    "/pages/doctor-grid",
    "/pages/doctor-list",
    "/pages/video-call",
    "/pages/voice-call",
    "/pages/chat-doctor",
    "/patient/doctor-list",
    "/patient/doctor-grid",
  ];
  if (exclusionArray.indexOf(props.location.pathname) >= 0) {
    return "";
  }

  return (
    <>
      {!props.location.pathname.includes("/index-6") &&
        !props.location.pathname.includes("/index-7") &&
        !props.location.pathname.includes("/index-8") &&
        !props.location.pathname.includes("/index-6") &&
        !props.location.pathname.includes("/index-7") &&
        !props.location.pathname.includes("/index-8") && (
          <footer className="footer footer-one">
            <div className="footer-bottom">
              <div className="container">
                {/* Copyright */}
                <div className="copyright">
                  <div className="row">
                    <div className="col-md-6 col-lg-6">
                      <div className="copyright-text">
                        <p className="mb-0">
                          {" "}
                          Copyright © 2024{" "}
                          <Link
                            to="#"
                            // target="_blank"
                          >
                            AMPLEXO.
                          </Link>{" "}
                          All Rights Reserved
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-6">
                      {/* Copyright Menu */}
                      <div className="copyright-menu">
                        <ul className="policy-menu">
                          <li>
                            <Link to="/pages/privacy-policy">
                              Privacy Policy
                            </Link>
                          </li>
                          <li>
                            <Link to="/pages/terms">Terms and Conditions</Link>
                          </li>
                        </ul>
                      </div>
                      {/* /Copyright Menu */}
                    </div>
                  </div>
                </div>
                {/* /Copyright */}
              </div>
            </div>
          </footer>
        )}
    </>
  );
};

export default Footer;
