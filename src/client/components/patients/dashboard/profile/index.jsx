import React, { useEffect, useState } from "react";
import DashboardSidebar from "../sidebar/sidebar.jsx";
import IMG01 from "../../../../assets/images/patient.jpg";
import StickyBox from "react-sticky-box";
import { Link } from "react-router-dom";
import Footer from "../../../footer.jsx";
import Header from "../../../header.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
  getProfileAction,
  updateProfileDataAction,
} from "../../redux/actions.js";
import { toast } from "react-toastify";
import Loading from "../../../common/loading/index.js";

import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const Profile = (props) => {
  const dispatch = useDispatch();
  const profileData = useSelector((state) => state.profileReducer.profileData);
  const isLoading = useSelector((state) => state.profileReducer.isLoading);
  const [value, setValue] = useState();
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    avatar: "wdaw",
    email: JSON.parse(localStorage.getItem("userEmail")),
    phoneNumber: "",
    dateOfBirth: "",
    gender: "male",
    country: "",
    passportNumber: "",
    history: "",
  });

  const [emargencyContacts, setEmargencyContacts] = useState([
    {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
    },
  ]);

  const {
    firstName,
    lastName,
    avatar,
    email,
    phoneNumber,
    dateOfBirth,
    gender,
    country,
    passportNumber,
    history,
  } = data;

  useEffect(() => {
    console.log("hi");
    dispatch(getProfileAction());
  }, []);

  useEffect(() => {
    setData({
      ...data,
      firstName: profileData?.firstName,
      lastName: profileData?.lastName,
      dateOfBirth: profileData?.dateOfBirth,
      phoneNumber: profileData?.phoneNumber,
      gender: profileData?.gender ? profileData?.gender : "male",
      passportNumber: profileData?.passportNumber,
      country: profileData?.country,
      avatar: profileData?.avatar ? profileData?.avatar : "",
    });
    if (
      profileData &&
      profileData.emergencyContact &&
      profileData.emergencyContact.length > 0
    )
      setEmargencyContacts(profileData.emergencyContact);
  }, [profileData]);
  console.log("profileData.emergencyContact", profileData.emergencyContact);
  const handleOnChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !dateOfBirth || !phoneNumber || !email) {
      toast.error("Please fill the required fields", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    if (
      emargencyContacts.length === 0 ||
      !emargencyContacts[0].firstName ||
      !emargencyContacts[0].lastName ||
      !emargencyContacts[0].email ||
      !emargencyContacts[0].phoneNumber
    ) {
      toast.error("Please add at least one emergency contact", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    let userData = {
      ...data,
    };

    userData.emergencyContact = [...emargencyContacts];
    console.log("userData", userData);
    dispatch(updateProfileDataAction(userData));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0]; // Get the first file from the list of selected files
    const maxSizeInMB = 2;
    const maxSizeInBytes = maxSizeInMB * 1024 * 1024;
    if (file && file.size > maxSizeInBytes) {
      alert(`File size should be less than ${maxSizeInMB}MB`);
      return;
    }
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file); // Read the file as a data URL (base64 encoded string)

      reader.onload = () => {
        const base64String = reader.result; // Get the base64 encoded string
        setData({ ...data, avatar: base64String });
      };

      reader.onerror = (error) => {
        console.error("Error reading the file:", error);
      };
    }
  };

  const handleAddMore = (e) => {
    e.preventDefault();
    setEmargencyContacts([
      ...emargencyContacts,
      {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
      },
    ]);
  };

  const handleRemoveContact = (e, index) => {
    e.preventDefault();
    const emergencyContactsValues = [...emargencyContacts];
    emergencyContactsValues.splice(index, 1);
    setEmargencyContacts(emergencyContactsValues);
  };

  const onChanegEmergencyContact = (e, index) => {
    const emergencyContactsValues = [...emargencyContacts];
    emergencyContactsValues[index][e.target.name] = e.target.value;
    setEmargencyContacts(emergencyContactsValues);
  };

  const onChanegEmergencyContactPhoneNumber = (e, index) => {
    const emergencyContactsValues = [...emargencyContacts];
    emergencyContactsValues[index].phoneNumber = e;
    setEmargencyContacts(emergencyContactsValues);
  };
  console.log("profileData", profileData);
  return (
    <>
      <div>
        <Header {...props} />

        <div className="pt-20" />

        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
                <StickyBox offsetTop={20} offsetBottom={20}>
                  <DashboardSidebar />
                </StickyBox>
              </div>

              <div className="col-lg-8 col-xl-9">
                <form>
                  <div className="setting-card">
                    <div className="change-avatar img-upload">
                      <div className="profile-img">
                        <i className="fa-solid fa-file-image" />
                      </div>
                      <div className="upload-img">
                        <h5>Profile Image</h5>
                        <div className="imgs-load d-flex align-items-center">
                          <div className="change-photo">
                            Upload New
                            <input
                              type="file"
                              className="upload"
                              onChange={handleFileChange}
                            />
                          </div>
                          <Link to="#" className="upload-remove">
                            Remove
                          </Link>
                        </div>
                        <p className="form-text">
                          Your Image should Below 4 MB, Accepted format
                          jpg,png,svg
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="setting-title">
                    <h5>Information</h5>
                  </div>
                  <div className="setting-card">
                    <div className="row">
                      <div className="col-lg-4 col-md-6">
                        <div className="form-wrap">
                          <label className="col-form-label">
                            First Name <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="firstName"
                            value={firstName}
                            onChange={handleOnChange}
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="form-wrap">
                          <label className="col-form-label">
                            Last Name <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="lastName"
                            value={lastName}
                            onChange={handleOnChange}
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="form-wrap">
                          <label className="col-form-label">
                            Date of Birth <span className="text-danger">*</span>
                          </label>
                          <input
                            type="date"
                            className="form-control"
                            name="dateOfBirth"
                            value={dateOfBirth && dateOfBirth.substring(0, 10)}
                            onChange={handleOnChange}
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="form-wrap">
                          <label className="col-form-label">
                            Phone Number <span className="text-danger">*</span>
                          </label>
                          {/* <input
                            type="tel"
                            className="form-control"
                            name="phoneNumber"
                            value={phoneNumber}
                            onChange={handleOnChange}
                          /> */}
                          <PhoneInput
                            defaultCountry="lk"
                            value={phoneNumber}
                            onChange={(phone) =>
                              setData({ ...data, phoneNumber: phone })
                            }
                          />
                        </div>
                      </div>
                      {/* <div className="col-lg-4 col-md-6">
                        <div className="form-wrap">
                          <label className="col-form-label">
                            Email Address <span className="text-danger">*</span>
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            name="email"
                            value={email}
                            onChange={handleOnChange}
                          />
                        </div>
                      </div> */}
                      <div className="col-lg-4 col-md-6">
                        <div className="form-wrap">
                          <label className="col-form-label">
                            Passport Number
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="passportNumber"
                            value={passportNumber}
                            onChange={handleOnChange}
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="form-wrap">
                          <label className="col-form-label">Gender</label>
                          <select
                            className="form-control"
                            value={gender}
                            name="gender"
                            onChange={(e) =>
                              setData({ ...data, gender: e.target.value })
                            }
                          >
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="form-wrap">
                          <label className="col-form-label">Country</label>
                          <input
                            type="text"
                            className="form-control"
                            name="country"
                            value={country}
                            onChange={handleOnChange}
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12">
                        <div className="form-wrap">
                          <label className="col-form-label">
                            Medical History
                          </label>
                          <textarea
                            type="text"
                            className="form-control"
                            name="history"
                            value={history}
                            onChange={handleOnChange}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="setting-title">
                    <h5>Emegency Contact</h5>
                  </div>
                  <div className="space-y-2 setting-card">
                    {emargencyContacts.map((emergencyContact, index) => (
                      <div className="p-4 border rounded-lg">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-wrap">
                              <label className="col-form-label">
                                First Name{" "}
                                <span className="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                name="firstName"
                                value={emergencyContact.firstName}
                                onChange={(e) =>
                                  onChanegEmergencyContact(e, index)
                                }
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-wrap">
                              <label className="col-form-label">
                                Last Name <span className="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                name="lastName"
                                value={emergencyContact.lastName}
                                onChange={(e) =>
                                  onChanegEmergencyContact(e, index)
                                }
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-wrap">
                              <label className="col-form-label">
                                Email <span className="text-danger">*</span>
                              </label>
                              <input
                                type="email"
                                className="form-control"
                                name="email"
                                value={emergencyContact.email}
                                onChange={(e) =>
                                  onChanegEmergencyContact(e, index)
                                }
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-wrap">
                              <label className="col-form-label">
                                Phone Number{" "}
                                <span className="text-danger">*</span>
                              </label>

                              <PhoneInput
                                defaultCountry="ua"
                                value={emergencyContact.phoneNumber}
                                onChange={(e) =>
                                  onChanegEmergencyContactPhoneNumber(e, index)
                                }
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-end">
                          <button
                            className="text-sm text-red-500"
                            onClick={(e) => handleRemoveContact(e, index)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    ))}
                    <div className="flex justify-end w-full mt-2">
                      <button onClick={handleAddMore}>Add more</button>
                    </div>
                  </div>
                  <div className="modal-btn text-end">
                    <Link to="#" className="btn btn-gray">
                      Cancel
                    </Link>
                    <button
                      type="submit"
                      className="btn btn-primary prime-btn"
                      onClick={handleSubmit}
                    >
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Footer {...props} />
      </div>
      {isLoading && <Loading />}
    </>
  );
};

export default Profile;
