import React, { useState } from "react";
import {
  banner_img1,
  banner_img2,
  banner_img3,
  down_arrow_img,
  generalbanner_img,
  header_icon,
} from "../../imagepath";
import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
function Homebanner() {
  const config = "/react/template";
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <>
      <>
        <section className="banner-section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="banner-content aos" data-aos="fade-up">
                  <h1>
                    Consult <span>Best Doctors</span> Your Nearby Location.
                  </h1>
                  <img
                    src={header_icon}
                    className="header-icon"
                    alt="header-icon"
                  />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  </p>
                  <Link to="/#" className="btn">
                    Start a Consult
                  </Link>
                  <div className="banner-arrow-img">
                    <img src={down_arrow_img} className="img-fluid" alt="" />
                  </div>
                </div>

                {/* <i>
                  <i className="feather-map-pin">
                    <i className="feather-crosshair">
                      <i className="feather-calendar">
                        
                      </i>
                    </i>
                  </i>
                </i> */}
              </div>
              <div className="col-lg-6">
                <div className="banner-img aos" data-aos="fade-up">
                  <img src={generalbanner_img} className="img-fluid" alt="" />
                  <div className="banner-img1">
                    <img src={banner_img1} className="img-fluid" alt="" />
                  </div>
                  <div className="banner-img2">
                    <img src={banner_img2} className="img-fluid" alt="" />
                  </div>
                  <div className="banner-img3">
                    <img src={banner_img3} className="img-fluid" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </>
  );
}

export default Homebanner;
