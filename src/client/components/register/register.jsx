import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
// import loginBanner from "../../assets/images/login-banner.png";
import loginBanner from "../../assets/images/login-banner.png";
import Header from "../header";
import Footer from "../footer";
import { useDispatch } from "react-redux";
import { registerClickAction } from "./redux/actions";
import { toast } from "react-toastify";

const Register = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [confirmPassword, setConfirmPassword] = useState("");

  const { firstName, lastName, email, password } = data;
  const onChangeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const errorTost = (message) => {
    toast.error(message, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const handleSubmit = () => {
    if (!firstName) {
      errorTost("First name is reuqired");
      return;
    }
    if (!lastName) {
      errorTost("Last name is reuqired");
      return;
    }
    if (!email) {
      errorTost("Email is reuqired");
      return;
    }
    if (!password) {
      errorTost("Password is reuqired");
      return;
    }
    if (!confirmPassword) {
      errorTost("Confirm password is reuqired");
      return;
    }
    if (password !== confirmPassword) {
      errorTost("Passwords do not match");
      return;
    }
    try {
      dispatch(
        registerClickAction({
          data: data,
          callback: () => history.push("/login"),
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    document.body.classList.add("account-page");

    return () => document.body.classList.remove("account-page");
  }, []);

  return (
    <>
      <Header {...props} />

      <>
        {/* Page Content */}
        <div className="content top-space">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-8 offset-md-2">
                {/* Register Content */}
                <div className="account-content">
                  <div className="row align-items-center justify-content-center">
                    <div className="col-md-7 col-lg-6 login-left">
                      <img
                        src={loginBanner}
                        className="img-fluid"
                        alt="Doccure Register"
                      />
                    </div>
                    <div className="col-md-12 col-lg-6 login-right">
                      <div className="login-header">
                        <h3>
                          Register{" "}
                          {/* <Link to="/doctor/doctor-register">
                            Are you a Hotel?
                          </Link> */}
                        </h3>
                      </div>
                      {/* Register Form */}
                      <form>
                        <div className="form-group form-focus">
                          <input
                            type="text"
                            className="form-control floating"
                            name="firstName"
                            value={firstName}
                            onChange={onChangeHandler}
                          />
                          <label className="focus-label">
                            First Name <span className="text-danger">*</span>
                          </label>
                        </div>
                        <div className="form-group form-focus">
                          <input
                            type="text"
                            className="form-control floating"
                            name="lastName"
                            value={lastName}
                            onChange={onChangeHandler}
                          />
                          <label className="focus-label">
                            Last Name <span className="text-danger">*</span>
                          </label>
                        </div>
                        <div className="form-group form-focus">
                          <input
                            type="text"
                            className="form-control floating"
                            name="email"
                            value={email}
                            onChange={onChangeHandler}
                          />
                          <label className="focus-label">
                            Email address <span className="text-danger">*</span>
                          </label>
                        </div>

                        <div className="form-group form-focus">
                          <input
                            type="password"
                            className="form-control floating"
                            name="password"
                            value={password}
                            onChange={onChangeHandler}
                          />
                          <label className="focus-label">
                            Password <span className="text-danger">*</span>
                          </label>
                        </div>
                        <div className="form-group form-focus">
                          <input
                            type="password"
                            className="form-control floating"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                          />
                          <label className="focus-label">
                            Confirm Password{" "}
                            <span className="text-danger">*</span>
                          </label>
                        </div>
                        <div className="text-end">
                          <Link className="forgot-link" to="/login">
                            Already have an account?
                          </Link>
                        </div>
                        <div
                          // to="/patient/patientregisterstep-1"
                          className="btn btn-primary w-100 btn-lg login-btn"
                          // type="submit"
                          onClick={handleSubmit}
                        >
                          Signup
                        </div>
                        {/* <div className="login-or">
                          <span className="or-line" />
                          <span className="span-or">or</span>
                        </div>
                        <div className="row form-row social-login">
                          <div className="col-6">
                            <Link to="#" className="btn btn-facebook w-100">
                              <i className="fab fa-facebook-f me-1" /> Login
                            </Link>
                          </div>
                          <div className="col-6">
                            <Link to="#" className="btn btn-google w-100">
                              <i className="fab fa-google me-1" /> Login
                            </Link>
                          </div>
                        </div> */}
                      </form>
                      {/* /Register Form */}
                    </div>
                  </div>
                </div>
                {/* /Register Content */}
              </div>
            </div>
          </div>
        </div>
        {/* /Page Content */}
      </>

      <Footer {...props} />
    </>
  );
};

export default Register;
