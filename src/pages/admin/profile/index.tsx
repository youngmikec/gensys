import React, { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AxiosResponse } from "axios";

import Card from "../../../shared/card";
import { ApiResponse, User } from "../../../model";
import AdminLayout from "../../../shared/admin-layout";
import profile from "../../../assets/images/profile.png";
import { RETRIEVE_USER_PROFILE } from "../../../services/users";
import initialImg from "../../../assets/images/upload-img.png";

const Profile = () => {
  const [idCard, setIdCard] = useState<any>();
  const [uploadImg, setUploadImg] = useState<any>(initialImg);
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<{ value: string; error: boolean }>({
    value: "",
    error: false,
  });
  const [firstname, setFirstname] = useState<{ value: string; error: boolean }>(
    { value: "", error: false }
  );
  const [lastname, setLastname] = useState<{ value: string; error: boolean }>({
    value: "",
    error: false,
  });
  const [phone, setPhone] = useState<{ value: string; error: boolean }>({
    value: "",
    error: false,
  });
  const [profileId, setProfileId] = useState<{ value: string; error: boolean }>(
    { value: "", error: false }
  );

  const [userProfile, setUserProfile] = useState<User | any>();

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

  const retrieveProfile = () => {
    RETRIEVE_USER_PROFILE()
      .then((res: AxiosResponse<ApiResponse>) => {
        // console.log("profile", res);
        const { message, payload } = res.data;
        notify("success", message);
        setUserProfile(payload);
      })
      .catch((err: any) => {
        notify("error", err.message);
      });
  };

  const fileRef = useRef<HTMLInputElement>(null);

  const openFile = () => {
    return fileRef.current?.click();
  };

  const setInputFields = () => {
    setFirstname(userProfile?.firstName);
    setLastname(userProfile?.lastName);
    setEmail(userProfile?.email);
    setPhone(userProfile?.phone);
  };

  const onImageChange = (e: any) => {
    setIdCard(e.target.files[0]);
    const file = e.target.files[0];
    const reader = new FileReader();
    const url = reader.readAsDataURL(file);
    reader.onloadend = () => {
      setUploadImg(reader.result);
    };
  };

  const inputCheck = (): boolean => {
    let isValid: boolean = true;
    if (email.value === "" || undefined || null) {
      isValid = false;
      setEmail({ ...email, error: true });
    } else {
      setEmail({ ...email, error: false });
    }
    if (firstname.value === "" || undefined || null) {
      isValid = false;
      setFirstname({ ...firstname, error: true });
    } else {
      setFirstname({ ...firstname, error: false });
    }
    return isValid;
  };


  useEffect(() => {
    retrieveProfile();
    if (userProfile) {
      setInputFields();
      console.log(userProfile, "l");
    }
  }, []);

  return (
    <AdminLayout>
      <div className="mx-auto w-11/12 sm:w-9/12 md:w-11/12 lg:w-9/12">
        {userProfile && (
          <div className="my-8 w-full">
            <Card type="lg">
              <div className="flex justify-center mb-4">
                <div className="bg-black rounded-full">
                  <img
                    src={profile}
                    width="50px"
                    height="50px"
                    className="rounded-full"
                    alt="barcode"
                  />
                </div>
              </div>
              <br />
              <div className="grid space-x-0 sm:space-x-1 md:space-x-2 lg:space-x-2 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                <div className="my-4 px-4">
                  <p>First Name</p>
                  <h3 className="text-sm sm:text-sm md:text-sm lg:text-lg">
                    {userProfile?.firstName}
                  </h3>
                </div>
                <div className="my-4 px-4">
                  <p>Last Name</p>
                  <h3 className="text-sm sm:text-sm md:text-sm lg:text-lg">
                    {userProfile?.lastName}
                  </h3>
                </div>
                <div className="my-4 px-4">
                  <p>Email</p>
                  <h3 className="text-sm sm:text-sm md:text-sm lg:text-lg">
                    {userProfile?.email}
                  </h3>
                </div>
                <div className="my-4 px-4">
                  <p>Phone</p>
                  <h3 className="text-sm sm:text-sm md:text-sm lg:text-lg">
                    {userProfile?.phone}
                  </h3>
                </div>
                <div className="my-4 px-4">
                  <p>Balance</p>
                  <h3 className="text-sm sm:text-sm md:text-sm lg:text-lg">
                    <span className="line-through">N</span> {userProfile?.balance}
                  </h3>
                </div>
                
                <div className="my-4 px-4">
                  <p>User Type</p>
                  <h3 className="text-sm sm:text-sm md:text-sm lg:text-lg">
                    {userProfile?.userType}
                  </h3>
                </div>
                <div className="my-4 px-4">
                  <p>Email Verification Status</p>
                  <h3 className="text-sm sm:text-sm md:text-lg lg:text-lg">
                    {userProfile?.isVerified === true
                      ? "Verified"
                      : "Not Verified"}
                  </h3>
                </div>
                <div className="my-4 px-4">
                  <p>Email Notification?</p>
                  <h3 className="text-sm sm:text-sm md:text-lg lg:text-lg">
                    {userProfile?.emailNotification === true
                      ? "Enabled"
                      : "Disabled"}
                  </h3>
                </div>
              </div>
            </Card>
          </div>
        )}

      </div>

      <ToastContainer />
    </AdminLayout>
  );
};

export default Profile;
