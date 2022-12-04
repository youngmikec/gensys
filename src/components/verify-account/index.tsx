import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { AxiosResponse } from 'axios';

import "./style.css";
import logo from "../../assets/images/logo-orange.png";

import { getItem, setItem } from "../../utils";
import { ApiResponse } from "../../model";

const VerifyAccountComp = () => {
    // const url: any = process.env.REACT_APP_BASE_URL;
    // const url: string = "https://generate-api.onrender.com/api";
    const url: string = "http://localhost:3000/api";

    // local States
    const [loading, setLoading] = useState<boolean>(false);
    const [code, setCode] = useState<{ value: string; error: boolean }>({value: "", error: false});

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
    if (code.value === "" || undefined || null) {
      isValid = false;
      setCode({ ...code, error: true });
    } else {
      setCode({ ...code, error: false });
    }
    
    return isValid;
  };

  const handleLogin = () => {
    if (inputCheck()) {
      setLoading(true);
      const userId: string = getItem('clientID');
      
      if(userId === '' || null || undefined) return notify('error', 'No user found pls Signup');
      const data = { code: code.value, id:  userId};
      // axios.defaults.withCredentials = true;
      axios
        .post(`${url}/users/verify`, data)
        .then((res: AxiosResponse<ApiResponse>) => {
          setLoading(false);
          const { message, payload } = res.data;
          notify("success", message);
          window.location.href = "/sign-in";
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
                        <img src={logo} width="100px" height="100px" alt="barcode" />
                        </div>
                    </div>

                    <div className="bg-white w-full rounded-2xl shadow-lg py-16 px-10">
                        <div className="">
                        <h4 className="text-[#6A6A6A] text-xl font-bold text-center">
                            Verify Account
                        </h4>
                        <p className="text-[#BFBFBF] text-sm my-3 text-center">
                            Enter the code sent to your email address
                        </p>
                    </div>

                    {/** Form Section */}
                    <div id="form" className="mx-">
                        <div className="my-3">
                            <label htmlFor="code" className="text-[#BFBFBF] text-sm block">
                                Email*
                            </label>
                            <input
                                type="text"
                                name="code"
                                value={code.value}
                                onChange={(e) =>
                                    setCode({ ...code, value: e.target.value })
                                }
                                className={`bg-white text-[#6A6A6A] border-2 ${
                                    code.error ? "border-red-500" : "border-[#BFBFBF]"
                                } rounded-md px-4 py-2 w-full`}
                            />
                        </div>


                        {/* <div className="my-3 flex justify-between">
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
                        </div> */}

                        <div className="my-3 text-center">
                            <button
                            onClick={() => handleLogin()}
                            className="bg-[#FF9363] text-white py-1 px-10 rounded-2xl"
                            >
                                {loading ? "Loading..." : "Verify"}
                            </button>
                        </div>
                    </div>
                    {/** Form Section */}

                    
                    </div>
                </div>
            </div>

            <ToastContainer />
        </>
    )
}

export default VerifyAccountComp;