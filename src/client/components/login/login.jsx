import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import loginBanner from "../../assets/images/banner-fifteen-ryt.png";
import { Link } from "react-router-dom";
import Header from "../header";
import Footer from "../footer";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { loginAction } from "./redux/actions";

// const config = "/react/template/";

const LoginContainer = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.registerReducer.user);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = data;

  const handleOnChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      loginAction({
        data: data,
        callback: () => {
          history.push("/patient/dashboard");
        },
      })
    );
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
                {/* Login Tab Content */}
                <div className="account-content">
                  <div className="row align-items-center justify-content-center">
                    <div className="col-md-7 col-lg-6 login-left">
                      <img
                        src={loginBanner}
                        className="img-fluid"
                        alt="AMPLEXO Login"
                      />
                    </div>
                    <div className="col-md-12 col-lg-6 login-right">
                      <div className="login-header">
                        {user && user.firstName ? (
                          <div>
                            <h3>Hello {user?.firstName}!</h3>
                            <h3 className="text-sm">Please Login</h3>
                          </div>
                        ) : (
                          <h3>Login</h3>
                        )}
                      </div>
                      <form>
                        <div className="form-group form-focus">
                          <input
                            type="email"
                            className="form-control floating"
                            name="email"
                            value={email}
                            onChange={handleOnChange}
                          />
                          <label className="focus-label">Email</label>
                        </div>
                        <div className="form-group form-focus">
                          <input
                            type="password"
                            className="form-control floating"
                            name="password"
                            value={password}
                            onChange={handleOnChange}
                          />
                          <label className="focus-label">Password</label>
                        </div>
                        {/* <div className="text-end">
                          <Link
                            className="forgot-link"
                            to="/pages/forgot-password"
                          >
                            Forgot Password ?
                          </Link>
                        </div> */}

                        <div
                          onClick={handleSubmit}
                          className="btn w-100 btn-lg login-btn bg-[#339999] text-white hover:border hover:border-[#339999]  hover:bg-[#33999990] "
                          type="submit"
                        >
                          Login
                        </div>

                        <div className="mt-4 text-sm text-center text-[#111827]">
                          Don’t have an account?{" "}
                          <a className="text-[#1F3266]" href="/register">
                            Register
                          </a>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                {/* /Login Tab Content */}
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

export default LoginContainer;
