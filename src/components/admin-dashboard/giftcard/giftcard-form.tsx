import React, { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from 'react-redux';
import { AxiosResponse } from 'axios';

import { ApiResponse, GCurrency } from '../../../model';
import { CREATE_GIFTCARD } from '../../../services';
import { ADD_TO_GIFTCARDS } from '../../../store/giftcards';
import CurrencyAddComp from '../../currencyAddComp';


const GiftcardForm = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState<boolean>(false);

    const [name, setName] = useState<{value: string, error: boolean }>({value: '', error: false});
    const [rate, setRate] = useState<{value: number, error: boolean }>({value: 0, error: false});
    const [type, setType] = useState<{value: string, error: boolean }>({value: 'PHYSICAL', error: false});

    const [currencies, setCurrencies] = useState<{value: any[], error: boolean }>({value: [], error: false}); 
    
    const notify = (type: string, msg: string): void => {
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
        
        if (rate.value === 0 || undefined || null) {
          isValid = false;
          setRate({ ...rate, error: true });
        } else {
          setRate({ ...rate, error: false });
        }
        
        return isValid;
    };

    const clearFormStates = (): void => {
        setName({value: '', error: false});
        setType({value: '', error: false});
        setRate({value: 0, error: false});
        setCurrencies({value: [], error: false})
    }

    const handleSubmit = () => {
        if (inputCheck()) {
            setLoading(true);
            const data = { 
                name: name.value,
                rate: rate.value,
                type: type.value,
                currencies: currencies.value
            };
          // axios.defaults.withCredentials = true;
            CREATE_GIFTCARD(data)
            .then((res: AxiosResponse<ApiResponse>) => {
                const { message, payload } = res.data;
                setLoading(false);
                notify("success", message);
                dispatch(ADD_TO_GIFTCARDS(payload));
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

    const handleAddCurrency = ( data: any ) => {
        setCurrencies({value: [data, ...currencies.value], error: false});
    }

    const removeCurrency = (name: string) => {
        const filteredArray = currencies.value.filter((item: GCurrency) => item.name !== name);
        setCurrencies({value: [...filteredArray], error: false});
    }

    return (
        <>
            <div>
                <div id='form'>

                    <div className="my-3">
                        <label htmlFor="name" className="text-[#BFBFBF] text-sm block">
                            Giftcard Name*
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
                        <label htmlFor="rate" className="text-[#BFBFBF] text-sm block">
                            Rate In NGN*
                        </label>
                        <input
                            type="number"
                            name="rate"
                            min={1000}
                            value={rate.value}
                            onChange={(e) =>
                                setRate({ ...rate, value: parseInt(e.target.value) })
                            }
                            className={`bg-white text-[#6A6A6A] border-2 ${
                                rate.error ? "border-red-500" : "border-[#BFBFBF]"
                            } rounded-md px-4 py-2 w-full`}
                        />
                    </div>

                    <div className="my-3">
                        <label htmlFor="rate" className="text-[#BFBFBF] text-sm block">
                            Giftcard Type
                        </label>
                        <select 
                            name="type" 
                            id="type"
                            onChange={(e) => setType({...type, value: e.target.value})}
                            className={`bg-white text-[#6A6A6A] border-2 ${
                                type.error ? "border-red-500" : "border-[#BFBFBF]"
                            } rounded-md px-4 py-2 w-full`}
                        >
                            <option value="">Select type</option>
                            <option value="PHYSICAL">Physical</option>
                            <option value="ECODE">Ecode</option>
                        </select>
                    </div>

                    <CurrencyAddComp 
                        currencies={currencies.value}
                        addFunc={handleAddCurrency}
                        removeFunc={removeCurrency}
                    />


                    <div className="my-3 text-center">
                        <button
                            onClick={() => handleSubmit()}
                            className="bg-[#FF9363] text-white py-1 px-10 rounded-2xl"
                        >
                            {loading ? "Processing..." : "Create"}
                        </button>
                    </div>
                </div>
            </div>

            <ToastContainer />
        </>
    )
}

export default GiftcardForm;