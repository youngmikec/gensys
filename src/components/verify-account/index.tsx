import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";
import { AxiosResponse } from 'axios';

import { MdOutlineCancel } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";

import "./style.css";
import logo from "../../assets/images/logo-orange.png";

import { ApiResponse } from "../../model";
import { USER_ACCOUNT_VERIFY } from "../../services";

const VerifyAccountComp = () => {
    const params = useParams();
    const { code } = params;

    // local States
    const [loading, setLoading] = useState<boolean>(false);
    const [isVerified, setIsVerified] = useState<boolean>(false);
    const [responseMsg, setResponseMsg] = useState<string>('');

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

    const handleEmailVerification = () => {
        setLoading(true);
        const data = { code };
        USER_ACCOUNT_VERIFY(data)
            .then((res: AxiosResponse<ApiResponse>) => {
            setLoading(false);
            const { message } = res.data;
            setIsVerified(true);
            setResponseMsg(message);
        })
        .catch((err: any) => {
            const { message } = err.response.data;
            setLoading(false);
            setIsVerified(false);
            setResponseMsg(message);
            notify("error", message);
        });
    }

    useEffect(() => {
        handleEmailVerification()
    }, [])

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

                        {
                            (!loading && isVerified) &&
                            <div className="w-full text-center mx-auto">
                                <span className="mt-3 mb-8">
                                    <FaCheckCircle className="text-center mx-auto text-6xl text-green-500" />
                                </span>
                                <h4 className="text-[#6A6A6A] text-xl font-bold text-center">
                                    { responseMsg }
                                </h4>

                            </div>
                        }

                        {
                            (!loading && !isVerified) &&
                            <div className="w-full text-center mx-auto">
                                <span className="mt-3 mb-8 text-center">
                                    <MdOutlineCancel className="text-center mx-auto text-6xl text-red-500" />
                                </span>
                                <h4 className="text-[#6A6A6A] text-xl font-bold text-center">
                                    { responseMsg }
                                </h4>
                            </div>
                        }

                        {
                            loading && 
                            <p className="text-[#6A6A6A] text-sm my-3 text-center">
                                Verifying your account ...
                            </p>
                        }
                    </div>

                    
                    </div>
                </div>
            </div>

            <ToastContainer />
        </>
    )
}

export default VerifyAccountComp;