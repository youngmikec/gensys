import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";
import { AxiosResponse } from 'axios';

import "./style.css";
import logo from "../../assets/images/logo-orange.png";

import { getItem } from "../../utils";
import { ApiResponse } from "../../model";
import { USER_ACCOUNT_VERIFY } from "../../services";

const VerifyAccountComp = () => {
    const params = useParams();
    const { code } = params;

    // local States
    const [loading, setLoading] = useState<boolean>(false);
    // const [code, setCode] = useState<{ value: string; error: boolean }>({value: "", error: false});

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

//   const inputCheck = (): boolean => {
//     let isValid: boolean = true;
//     if (code.value === "" || undefined || null) {
//       isValid = false;
//       setCode({ ...code, error: true });
//     } else {
//       setCode({ ...code, error: false });
//     }
    
//     return isValid;
//   };

//   const handleLogin = () => {
//     if (inputCheck()) {
//       setLoading(true);
//       const userId: string = getItem('clientID');
      
//       if(userId === '' || null || undefined) return notify('error', 'No user found pls Signup');
//       const data = { code: code.value, id:  userId};

//       USER_ACCOUNT_VERIFY(data)
//         .then((res: AxiosResponse<ApiResponse>) => {
//           setLoading(false);
//           const { message } = res.data;
//           notify("success", message);
//           window.location.href = "/sign-in";
//         })
//         .catch((err: any) => {
//           const { message } = err.response.data;
//           setLoading(false);
//           notify("error", message);
//         });
//     }
//   };

    const handleEmailVerification = () => {
        setLoading(true);
        const data = { code };
        USER_ACCOUNT_VERIFY(data)
            .then((res: AxiosResponse<ApiResponse>) => {
            setLoading(false);
            const { message } = res.data;
            notify("success", message);
            window.location.href = "/sign-in";
            })
            .catch((err: any) => {
            const { message } = err.response.data;
            setLoading(false);
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
                        <h4 className="text-[#6A6A6A] text-xl font-bold text-center">
                            Verify Account
                        </h4>
                        <p className="text-[#BFBFBF] text-sm my-3 text-center">
                            Enter the code sent to your email address
                        </p>
                    </div>

                    {/** Form Section */}
                    
                    {/** Form Section */}

                    
                    </div>
                </div>
            </div>

            <ToastContainer />
        </>
    )
}

export default VerifyAccountComp;