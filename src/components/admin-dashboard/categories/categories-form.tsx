import React, { useState, useEffect, useRef } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from 'react-redux';
import { AxiosResponse } from 'axios';

import { ApiResponse, Category } from '../../../model';
import { CREATE_CATEGORY, UPDATE_CATEGORY } from '../../../services';
import { ADD_TO_CATEGORIES, UPDATE_CATEGORY_STATE } from '../../../store/categories';

type Props = {
    category?: Category,
    formType: 'CREATE' | 'EDIT'
}

const CategoriesForm = ({ category, formType }: Props) => {

    const dispatch = useDispatch();
    const [loading, setLoading] = useState<boolean>(false);

    const [categoryImage, setCategoryImage] = useState<{value: string, error: boolean }>({value: '', error: false});
    const [name, setName] = useState<{value: string, error: boolean }>({value: '', error: false});


    const fileRef = useRef<HTMLInputElement>(null);

    const openFile = () => {
        return fileRef.current?.click();
    }

    const handleFileRead = async (event: any) => {
        const file = event.target.files[0];
        const base64: any = await convertBase64(file);
        setCategoryImage({...categoryImage, value: base64});
    }

    const convertBase64 = (file: any) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file)
            fileReader.onload = () => {
            resolve(fileReader.result);
            }
            fileReader.onerror = (error) => {
                reject(error);
            }
        })
    }

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
        if (name.value === "" || undefined || null) {
          isValid = false;
          setName({ ...name, error: true });
        } else {
          setName({ ...name, error: false });
        }
        
        if (categoryImage.value === "" || undefined || null) {
          isValid = false;
          setCategoryImage({ ...categoryImage, error: true });
        } else {
          setCategoryImage({ ...categoryImage, error: false });
        }

        return isValid;
    };

    const clearFormStates = () => {
        setCategoryImage({value: '', error: false});
        setName({value: '', error: false});
    }

    const handleSubmit = () => {
        if (inputCheck()) {
            setLoading(true);
            const data = { 
                name: name.value,
                categoryImage: categoryImage.value
            };
          // axios.defaults.withCredentials = true;
          CREATE_CATEGORY(data)
            .then((res: AxiosResponse<ApiResponse>) => {
                const { message, payload } = res.data;
                setLoading(false);
                notify("success", message);
                dispatch(ADD_TO_CATEGORIES(payload));
                clearFormStates();
            })
            .catch((err: any) => {
                const { message } = err.response.data;
                notify("error", message);
                setLoading(false);
            });
        }else {
            notify("error", `Fill in all required fields`);
        }  
    };

    const handleUpdate = () => {
        if (inputCheck()) {
            setLoading(true);
            const id: string = category ? category.id : '';
            const data = { 
                name: name.value,
                categoryImage: categoryImage.value
            };
          // axios.defaults.withCredentials = true;
          UPDATE_CATEGORY(id, data)
            .then((res: AxiosResponse<ApiResponse>) => {
                const { message, payload } = res.data;
                setLoading(false);
                notify("success", message);
                dispatch(UPDATE_CATEGORY_STATE(payload));
                clearFormStates();
            })
            .catch((err: any) => {
                const { message } = err.response.data;
                notify("error", message);
                setLoading(false);
            });
        }else {
            notify("error", `Fill in all required fields`);
        }  
    };

    useEffect(() => {
        if(formType === 'EDIT' && category){
            setName({...name, value: category.name})
            setCategoryImage({...categoryImage, value: category.categoryImage})
        }
    }, [formType]);

    return (
        <>
            <div className='grid grid-cols-1'>
                <div>
                    <div className="my-3">
                        <label htmlFor="name" className="text-[#BFBFBF] text-sm block">
                            Category Name*
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={name.value}
                            onChange={(e) =>
                                setName({ ...name, value: e.target.value })
                            }
                            className={`bg-white text-[#6A6A6A] border-2 ${
                                name.error ? "border-red-500" : "border-[#BFBFBF]"
                            } rounded-md px-4 py-2 w-full`}
                        />
                    </div>

                    <div className="my-3">
                        <label htmlFor="name" className="text-[#BFBFBF] text-sm block">
                            Category Image*
                        </label>

                        <div
                            className={`border-2 rounded-md my-3 h-60 w-full flex justify-center ${
                                categoryImage.error ? "border-red-500" : "border-[#BFBFBF]"
                            } px-4 py-2 `}
                        >
                            
                            {
                                categoryImage.value ? 
                                <img src={categoryImage?.value} alt="uploaded" /> :
                                <button className='text-center text-[#7F7F80]' onClick={() => openFile()}>
                                    + <br /> Choose file
                                </button>
                            }
                            <input 
                                type="file" 
                                className='hidden'
                                ref={fileRef}
                                onChange={(e) => handleFileRead(e)}
                            />
                        </div>
                    </div>


                    {
                        formType === 'CREATE' ?
                        <div className="my-3 text-center">
                            <button
                                onClick={() => handleSubmit()}
                                className="bg-[#FF9363] text-white py-1 px-10 rounded-2xl"
                            >
                                {loading ? "Processing..." : "Create"}
                            </button>
                        </div> :
                        <div className="my-3 text-center">
                            <button
                                onClick={() => handleUpdate()}
                                className="bg-[#FF9363] text-white py-1 px-10 rounded-2xl"
                            >
                                {loading ? "Processing..." : "Update"}
                            </button>
                        </div>
                    }
                </div>

            </div>

            <ToastContainer />
        </>
    )
}

export default CategoriesForm;