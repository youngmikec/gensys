import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { AxiosResponse } from 'axios';

// stylesheet
import "./style.css";
import logo from "../../assets/images/logo-orange.png";

import { setItem } from "../../utils";
import { ApiResponse } from "../../model";

const SignupComp = () => {
  // const url: any = process.env.REACT_APP_BASE_URL;
  // const url: string = "https://generate-api.onrender.com/api";
  const url: string = "http://localhost:3000/api";

  // local States
  const [loading, setLoading] = useState<boolean>(false);
  const [firstName, setFirstName] = useState<{ value: string; error: boolean }>({value: "", error: false});
  const [lastName, setLastName] = useState<{ value: string; error: boolean }>({value: "", error: false});
  const [phone, setPhone] = useState<{ value: string; error: boolean }>({value: "", error: false});
  const [country, setCountry] = useState<{ value: string; error: boolean }>({value: "NG", error: false});
  const [email, setEmail] = useState<{ value: string; error: boolean }>({value: "", error: false});
  const [password, setPassword] = useState<{ value: string; error: boolean }>({ value: "", error: false });
  const [confirmPassword, setConfirmPassword] = useState<{ value: string; error: boolean }>({ value: "", error: false });

  const notify = (type: string, msg: string) => {
    if (type === "success") {
      toast.success(msg, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }

    if (type === "error") {
      toast.error(msg, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const inputCheck = (): boolean => {
    let isValid: boolean = true;
    if (firstName.value === "" || undefined || null) {
      isValid = false;
      setFirstName({ ...firstName, error: true });
    } else {
      setFirstName({ ...firstName, error: false });
    }
    if (lastName.value === "" || undefined || null) {
      isValid = false;
      setLastName({ ...lastName, error: true });
    } else {
      setLastName({ ...lastName, error: false });
    }
    if (email.value === "" || undefined || null) {
      isValid = false;
      setEmail({ ...email, error: true });
    } else {
      setEmail({ ...email, error: false });
    }
    if (phone.value === "" || undefined || null) {
      isValid = false;
      setPhone({ ...phone, error: true });
    } else {
      setPhone({ ...phone, error: false });
    }
    if (country.value === "" || undefined || null) {
      isValid = false;
      setCountry({ ...country, error: true });
    } else {
      setCountry({ ...country, error: false });
    }
    if (password.value === "" || undefined || null) {
      isValid = false;
      setPassword({ ...password, error: true });
    } else {
      setPassword({ ...password, error: false });
    }
    if (confirmPassword.value === "" || undefined || null) {
      isValid = false;
      setConfirmPassword({ ...confirmPassword, error: true });
    } else {
      setConfirmPassword({ ...confirmPassword, error: false });
    }
    if (password.value !== confirmPassword.value) {
      isValid = false;
    }
    return isValid;
  };

  const handleLogin = () => {
    if (inputCheck()) {
      setLoading(true);
      const data = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        phone: phone.value,
        password: password.value,
        country: country.value,
    }
      // axios.defaults.withCredentials = true;
      axios
        .post(`${url}/users/register`, data)
        .then((res: AxiosResponse<ApiResponse>) => {
          setLoading(false);
          const { message, payload } = res.data;
          notify("success", message);
          setItem("clientID", payload.id);
          setItem("clientD", payload);
          window.location.href = "/verify";
        })
        .catch((err: any) => {
          const { message } = err.response.data;
          setLoading(false);
          notify("error", message);
        });
    }
  };

return (
    <>
    <div className="wrapper pt-4 my-auto">
        <div className="mx-auto w-11/12 sm:w-9/12 md:w-7/12 lg:w-[55%] h-max">
            <div className="flex justify-center mb-4">
                <div className="">
                <img src={logo} width="100px" height="100px" alt="barcode" />
                </div>
            </div>

            <div className="bg-white w-full rounded-2xl shadow-lg py-16 px-10">
                <div className="">
                    <h4 className="text-[#6A6A6A] text-xl font-bold text-center">
                        Sign up
                    </h4>
                    <p className="text-[#BFBFBF] text-sm my-3 text-center">
                        If you have an account with us, please Sign In
                    </p>
                </div>

                {/** Form Section */}
                <div id="form" 
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2"
                >

                    <div className="my-3 mx-2">
                        <label htmlFor="firstName" className="text-[#BFBFBF] text-sm block">
                            First Name*
                        </label>
                        <input
                            type="text"
                            name="firstName"
                            value={firstName.value}
                            onChange={(e) =>
                                setFirstName({ ...firstName, value: e.target.value })
                            }
                            className={`bg-white text-[#6A6A6A] border-2 ${
                                firstName.error ? "border-red-500" : "border-[#BFBFBF]"
                            } rounded-md px-4 py-2 w-full`}
                        />
                    </div>

                    <div className="my-3 mx-2">
                        <label htmlFor="lastName" className="text-[#BFBFBF] text-sm block">
                            Last Name*
                        </label>
                        <input
                            type="text"
                            name="lastName"
                            value={lastName.value}
                            onChange={(e) =>
                                setLastName({ ...lastName, value: e.target.value })
                            }
                            className={`bg-white text-[#6A6A6A] border-2 ${
                                lastName.error ? "border-red-500" : "border-[#BFBFBF]"
                            } rounded-md px-4 py-2 w-full`}
                        />
                    </div>

                    <div className="my-3 mx-2">
                        <label htmlFor="email" className="text-[#BFBFBF] text-sm block">
                            Email*
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={email.value}
                            onChange={(e) =>
                                setEmail({ ...email, value: e.target.value })
                            }
                            className={`bg-white text-[#6A6A6A] border-2 ${
                                email.error ? "border-red-500" : "border-[#BFBFBF]"
                            } rounded-md px-4 py-2 w-full`}
                        />
                    </div>

                    <div className="my-3 mx-2">
                        <label htmlFor="phone" className="text-[#BFBFBF] text-sm block">
                            Phone*
                        </label>
                        <input
                            type="text"
                            name="phone"
                            maxLength={11}
                            value={phone.value}
                            onChange={(e) =>
                                setPhone({ ...phone, value: e.target.value })
                            }
                            className={`bg-white text-[#6A6A6A] border-2 ${
                                phone.error ? "border-red-500" : "border-[#BFBFBF]"
                            } rounded-md px-4 py-2 w-full`}
                        />
                    </div>

                    <div className="my-3 mx-2">
                        <label htmlFor="country" className="text-[#BFBFBF] text-sm block">
                            Country*
                        </label>
                        
                        <select  
                            name="country" 
                            id="country"
                            onChange={(e) =>
                                setCountry({ ...country, value: e.target.value })
                            }
                            className={`bg-white text-[#6A6A6A] border-2 ${
                                country.error ? "border-red-500" : "border-[#BFBFBF]"
                            } rounded-md px-4 py-2 w-full`}
                        >
                            <option value="">Select Country</option>
                            <option value="GH">Ghana</option>
                            <option value="NG">Nigeria</option>
                        </select>
                    </div>

                    <div className="my-3 mx-2">
                        <label
                            htmlFor="password"
                            className="text-[#BFBFBF] text-sm block"
                        >
                        Password*
                        </label>
                        <input
                            type="password"
                            value={password.value}
                            onChange={(e) =>
                                setPassword({ ...password, value: e.target.value })
                            }
                            className={`bg-white text-[#6A6A6A] border-2 ${
                                password.error ? "border-red-500" : "border-[#BFBFBF]"
                            } rounded-md px-4 py-2 w-full`}
                        />
                    </div>

                    <div className="my-3 mx-2">
                        <label
                            htmlFor="confirmPassword"
                            className="text-[#BFBFBF] text-sm block"
                        >
                            Confirm Password*
                        </label>
                        <input
                            type="password"
                            value={confirmPassword.value}
                            onChange={(e) =>
                                setConfirmPassword({ ...confirmPassword, value: e.target.value })
                            }
                            className={`bg-white text-[#6A6A6A] border-2 ${
                                confirmPassword.error ? "border-red-500" : "border-[#BFBFBF]"
                            } rounded-md px-4 py-2 w-full`}
                        />
                    </div>

                </div>

                <div className="my-3 flex justify-between">
                    <div>
                        <input type="checkBox" className="shadow-sm border-0" />
                        <span className="text-[#BFBFBF] text-sm mx-3">
                            Remember me?
                        </span>
                    </div>
                    <div>
                        <p className="text-[#FF9363]">
                            <Link to="/forgot-password">Forgot Password</Link>
                        </p>
                    </div>
                </div>

                <div className="my-3 text-center">
                    <button
                        onClick={() => handleLogin()}
                        className="bg-[#FF9363] text-white py-1 px-10 rounded-2xl"
                    >
                        {loading ? "Loading..." : "Sign up"}
                    </button>
                </div>
                {/** Form Section */}

                <div className="mt-5 text-center text-sm">
                    <p className="text-[#BFBFBF]">
                        Don’t have an account?{" "}
                        <Link to="/sign-up" className="text-[#FF9363]">
                        Click here to sign up.
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    </div>

    <ToastContainer />
    </>
);
};

export default SignupComp;
