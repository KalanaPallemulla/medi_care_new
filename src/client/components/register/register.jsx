import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
// import loginBanner from "../../assets/images/login-banner.png";
import loginBanner from "../../assets/images/banner-1.png";
import Header from "../header";
import Footer from "../footer";
import { useDispatch } from "react-redux";
import { registerClickAction } from "./redux/actions";
import { toast } from "react-toastify";

const passwordRegex =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&.,-/^])[A-Za-z\d@$!%*?&.,-/^]+$/;

const Register = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [firstnameError, setFirstNameError] = useState("");
  const [lastnameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [passwordsNotMatchedError, setPasswordsNotMatchedError] = useState("");

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
    let isError = false;
    if (!firstName) {
      // errorTost("First name is reuqired");
      setFirstNameError("First name is required");
      // return;
      isError = true;
    } else {
      setFirstNameError("");
      isError = false;
    }
    if (!lastName) {
      // errorTost("Last name is reuqired");
      setLastNameError("Last name is required");
      // return;
      isError = true;
    } else {
      setLastNameError("");
      isError = false;
    }
    if (!email) {
      // errorTost("Email is reuqired");
      setEmailError("Email is required");
      // return;
      isError = true;
    } else {
      setEmailError("");
      isError = false;
    }
    if (!password) {
      // errorTost("Password is reuqired");
      setPasswordError("Passowrd is required");
      // return;
      isError = true;
    } else {
      setPasswordError("");
      isError = false;
    }
    if (!passwordRegex.test(password)) {
      setPasswordError(
        "Passwords must contain at least number special character and uppercase letter"
      );
      // return;
      isError = true;
    } else {
      setPasswordError("");
      isError = false;
    }
    if (!confirmPassword) {
      // errorTost("Confirm password is reuqired");
      setConfirmPasswordError("Confirm Password is required");
      // return;
      isError = true;
    } else {
      setConfirmPasswordError("");
      isError = false;
    }

    if (password !== confirmPassword) {
      // errorTost("Passwords do not match");
      setPasswordsNotMatchedError("Passwords do not match");
      // return;
      isError = true;
    } else {
      setPasswordsNotMatchedError("");
      isError = false;
    }

    if (!passwordRegex.test(password)) {
      setPasswordError(
        "Passwords must contain at least number special character and uppercase letter"
      );
      isError = true;
    } else {
      setPasswordError("");
      isError = false;
    }

    if (isError) {
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

  const error = true;
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
                        alt="AMPLEXO Register"
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
                        <div className="col-lg-12 col-md-12">
                          <div className="form-wrap">
                            <label className="col-form-label">First name</label>
                            <input
                              type="text"
                              className={` form-control ${
                                firstnameError.length > 0
                                  ? "form-control-error"
                                  : ""
                              }`}
                              name="firstName"
                              value={firstName}
                              onChange={onChangeHandler}
                            />
                            <div className="text-[12px] italic text-red-400 ">
                              {firstnameError}
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12">
                          <div className="form-wrap">
                            <label className="col-form-label">Last name</label>
                            <input
                              type="text"
                              className={` form-control ${
                                lastnameError.length > 0
                                  ? "form-control-error"
                                  : ""
                              }`}
                              name="lastName"
                              value={lastName}
                              onChange={onChangeHandler}
                            />
                            <div className="text-[12px] italic text-red-400 ">
                              {lastnameError}
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12">
                          <div className="form-wrap">
                            <label className="col-form-label">Email</label>
                            <input
                              type="text"
                              className={` form-control ${
                                emailError.length > 0
                                  ? "form-control-error"
                                  : ""
                              }`}
                              name="email"
                              value={email}
                              onChange={onChangeHandler}
                            />
                            <div className="text-[12px] italic text-red-400 ">
                              {emailError}
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-12 col-md-12">
                          <div className="form-wrap">
                            <label className="col-form-label">Password</label>
                            <input
                              type="password"
                              className={` form-control ${
                                passwordError.length > 0 ||
                                passwordsNotMatchedError.length > 0
                                  ? "form-control-error"
                                  : ""
                              }`}
                              name="password"
                              value={password}
                              onChange={onChangeHandler}
                            />
                            <div className="text-[12px] italic text-red-400 ">
                              {passwordError}
                            </div>
                            <div className="text-[12px] italic text-red-400 ">
                              {passwordsNotMatchedError}
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12">
                          <div className="form-wrap">
                            <label className="col-form-label">
                              Confirm Password
                            </label>
                            <input
                              type="password"
                              className={` form-control ${
                                confirmPasswordError.length > 0 ||
                                passwordsNotMatchedError.length > 0
                                  ? "form-control-error"
                                  : ""
                              }`}
                              name="confirmPassword"
                              value={confirmPassword}
                              onChange={(e) =>
                                setConfirmPassword(e.target.value)
                              }
                            />
                            <div className="text-[12px] italic text-red-400 ">
                              {confirmPasswordError}
                            </div>
                          </div>
                        </div>
                        <div className="text-end">
                          <Link className="forgot-link" to="/login">
                            Already have an account?
                          </Link>
                        </div>
                        <div
                          // to="/patient/patientregisterstep-1"
                          className="btn bg-[#339999] hover:bg-[#339999] text-white w-100 btn-lg login-btn"
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
