import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { AxiosResponse } from 'axios';

// stylesheet
import "./style.css";
import logo from "../../assets/images/logo-orange.png";

import { setItem } from "../../utils";
import { ApiResponse } from "../../model";
import { USER_LOGIN } from "../../services";

const SignInComp = () => {

  // local States
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<{ value: string; error: boolean }>({value: "", error: false});
  const [password, setPassword] = useState<{ value: string; error: boolean }>({ value: "", error: false });

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
    if (email.value === "" || undefined || null) {
      isValid = false;
      setEmail({ ...email, error: true });
    } else {
      setEmail({ ...email, error: false });
    }
    if (password.value === "" || undefined || null) {
      isValid = false;
      setPassword({ ...password, error: true });
    } else {
      setPassword({ ...password, error: false });
    }
    return isValid;
  };

  const handleLogin = () => {
    if (inputCheck()) {
      setLoading(true);
      const data = { email: email.value, password: password.value };
      USER_LOGIN(data)
        .then((res: AxiosResponse<ApiResponse>) => {
          setLoading(false);
          const { message, payload } = res.data;
          notify("success", message);
          setItem("clientD", payload.user);
          setItem("clientToken", payload.token);
          setItem("auth", { isLoggedIn: true, user: payload.user });
          window.location.href = "/products";
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
        <div className="mx-auto w-11/12 sm:w-9/12 md:w-7/12 lg:w-[35%] h-max">
          <div className="flex justify-center mb-4">
            <div className="">
              <Link to="/">
                <img src={logo} width="100px" height="100px" alt="barcode" />
              </Link>
            </div>
          </div>

          <div className="bg-white w-full rounded-2xl shadow-lg py-16 px-10">
            <div className="">
              <h4 className="text-[#6A6A6A] text-xl font-bold text-center">
                Sign In
              </h4>
              <p className="text-[#BFBFBF] text-sm my-3 text-center">
                If you have an account with us, please Sign In
              </p>
            </div>

            {/** Form Section */}
            <div id="form" className="mx-">
              <div className="my-3">
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

              <div className="my-3">
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

              <div className="my-3 flex justify-between">
                <div>
                  <Link to="/crm-login">
                    <span className="text-[#FF9363] text-sm mx-3">
                      Sign in as admin
                    </span>
                  </Link>
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
                  {loading ? "Loading..." : "Sign in"}
                </button>
              </div>
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

export default SignInComp;
