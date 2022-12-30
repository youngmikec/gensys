import React, { useState, useRef, useEffect } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from 'react-redux';
import { AxiosResponse } from 'axios';

import { ApiResponse, CryptoCurrency } from '../../../model';
import { UPDATE_CRYPTO } from '../../../services';
import { UPDATE_CRYPTO_STATE } from '../../../store/cryptos';

type Props = {
    crypto?: CryptoCurrency
}

const GiftcardUpdateForm = ({crypto}: Props) => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState<boolean>(false);

    const [cryptoImage, setCryptoImage] = useState<{value: string, error: boolean } | any>({value: '', error: false});
    const [barcode, setBarcode] = useState<{value: string, error: boolean } | any>({value: '', error: false});
    const [name, setName] = useState<{value: string, error: boolean } | any>({value: '', error: false});
    const [shortName, setShortName] = useState<{value: string, error: boolean } | any>({value: '', error: false});
    const [walletAddress, setWalletAddress] = useState<{value: string, error: boolean } | any>({value: '', error: false});
    const [bankName, setBankName] = useState<{value: string, error: boolean } | any>({value: '', error: false});
    const [accountName, setAccountName] = useState<{value: string, error: boolean } | any>({value: '', error: false});
    const [accountNumber, setAccountNumber] = useState<{value: string, error: boolean } | any>({value: '', error: false});
    const [rate, setRate] = useState<{value: number, error: boolean } | any>({value: 0, error: false});
    const [exchangePlatform, setExchangePlatform] = useState<{value: string, error: boolean } | any>({value: '', error: false});

    const cryptoFileRef = useRef<HTMLInputElement>(null);
    const barcodeFileRef = useRef<HTMLInputElement>(null);

    const openFile = (type: string = 'crypto') => {
        return type === 'crypto' ? cryptoFileRef.current?.click() : barcodeFileRef.current?.click();
    }

    const handleFileRead = async (event: any, type: string = 'crypto') => {
        const file = event.target.files[0];
        const base64: any = await convertBase64(file);
        type === 'crypto' ? setCryptoImage({...cryptoImage, value: base64}) : setBarcode({...barcode, value: base64})
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

    const clearFormStates = () => {
        setCryptoImage({value: '', error: false});
        setBarcode({value: '', error: false});
        setName({value: '', error: false});
        setShortName({value: '', error: false});
        setWalletAddress({value: '', error: false});
        setExchangePlatform({value: '', error: false});
        setBankName({value: '', error: false});
        setAccountName({value: '', error: false});
        setAccountNumber({value: '', error: false});
        setRate({value: 0, error: false});
    }

    const handleSubmit = () => {
        setLoading(true);
        const data = { 
            name: name.value,
            shortName: shortName.value,
            rate: rate.value,
            cryptoImage: cryptoImage.value,
            barcode: barcode.value,
            walletAddress: walletAddress.value,
            exchangePlatform: exchangePlatform.value,
            bankName: bankName.value,
            accountName: accountName.value,
            accountNumber: accountNumber.value,
        };
      // axios.defaults.withCredentials = true;
        const id: string = crypto?.id ? crypto.id : '';
        UPDATE_CRYPTO(id, data)
        .then((res: AxiosResponse<ApiResponse>) => {
            const { message, payload } = res.data;
            setLoading(false);
            notify("success", message);
            dispatch(UPDATE_CRYPTO_STATE(payload));
            clearFormStates();
        })
        .catch((err: any) => {
            const { message } = err.response.data;
            notify("error", message);
            setLoading(false);
        });  
      
    };

    useEffect(() => {
        setCryptoImage({value: crypto?.cryptoImage, error: false});
        setBarcode({value: crypto?.barcode, error: false});
        setName({value: crypto?.name, error: false});
        setShortName({value: crypto?.shortName, error: false});
        setWalletAddress({value: crypto?.walletAddress, error: false});
        setExchangePlatform({value: crypto?.exchangePlatform, error: false});
        setBankName({value: crypto?.bankName, error: false});
        setAccountName({value: crypto?.accountName, error: false});
        setAccountNumber({value: crypto?.accountNumber, error: false});
        setRate({value: crypto?.rate, error: false});
    }, [])


    return (
        <>
            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:space-x-3 md:space-x-3 sm:space-x-3'>
                <div>
                    <div className="mb-3">
                        <label htmlFor="cryptoImage" className="text-[#BFBFBF] text-sm block">
                            Crypto Image
                        </label>
                        <div
                            className={`border-2 rounded-md my-3 h-60 w-full flex justify-center ${
                                cryptoImage.error ? "border-red-500" : "border-[#BFBFBF]"
                            } px-4 py-2 `}
                        >
                            {
                                cryptoImage.value ? 
                                <img src={cryptoImage?.value} alt="uploaded" /> :
                                <button className='text-center text-[#7F7F80]' onClick={() => openFile()}>
                                    + <br /> Choose file
                                </button>
                            }
                            <input 
                                type="file" 
                                className='hidden'
                                ref={cryptoFileRef}
                                onChange={(e) => handleFileRead(e)}
                            />
                        </div>
                    </div>
                    
                    <div className="my-3">
                        <label htmlFor="barcode" className="text-[#BFBFBF] text-sm block">
                            Barcode
                        </label>
                        <div
                            className={`border-2 rounded-md my-3 h-60 w-full flex justify-center ${
                                barcode.error ? "border-red-500" : "border-[#BFBFBF]"
                            } px-4 py-2 `}
                        >
                            {
                                barcode.value ? 
                                <img src={barcode?.value} alt="uploaded" /> :
                                <button className='text-center text-[#7F7F80]' onClick={() => openFile('barcode')}>
                                    + <br /> Choose file
                                </button>
                            }
                            <input 
                                type="file" 
                                className='hidden'
                                ref={barcodeFileRef}
                                onChange={(e) => handleFileRead(e, 'barcode')}
                            />
                        </div>
                    </div>
                </div>

                <div>
                    <div id='form'>

                        <div className="my-3">
                            <label htmlFor="name" className="text-[#BFBFBF] text-sm block">
                                Crypto Name*
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
                            <label htmlFor="shortName" className="text-[#BFBFBF] text-sm block">
                                Short Name*
                            </label>
                            <input
                                type="text"
                                name="shortName"
                                value={shortName.value}
                                onChange={(e) =>
                                    setShortName({ ...shortName, value: e.target.value })
                                }
                                className={`bg-white text-[#6A6A6A] border-2 ${
                                    shortName.error ? "border-red-500" : "border-[#BFBFBF]"
                                } rounded-md px-4 py-2 w-full`}
                            />
                        </div>

                        <div className="my-3">
                            <label htmlFor="walletAddress" className="text-[#BFBFBF] text-sm block">
                                Wallet Address*
                            </label>
                            <input
                                type="text"
                                name="walletAddress"
                                value={walletAddress.value}
                                onChange={(e) =>
                                    setWalletAddress({ ...walletAddress, value: e.target.value })
                                }
                                className={`bg-white text-[#6A6A6A] border-2 ${
                                    walletAddress.error ? "border-red-500" : "border-[#BFBFBF]"
                                } rounded-md px-4 py-2 w-full`}
                            />
                        </div>

                        <div className="my-3">
                            <label htmlFor="exchangePlatform" className="text-[#BFBFBF] text-sm block">
                                Exchange Platform for payment*
                            </label>
                            <input
                                type="text"
                                name="exchangePlatform"
                                value={exchangePlatform.value}
                                onChange={(e) =>
                                    setExchangePlatform({ ...exchangePlatform, value: e.target.value })
                                }
                                className={`bg-white text-[#6A6A6A] border-2 ${
                                    exchangePlatform.error ? "border-red-500" : "border-[#BFBFBF]"
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
                            <label htmlFor="bankName" className="text-[#BFBFBF] text-sm block">
                                Bank to Receive Payment*
                            </label>
                            <input
                                type="text"
                                name="bankName"
                                value={bankName.value}
                                onChange={(e) =>
                                    setBankName({ ...bankName, value: e.target.value })
                                }
                                className={`bg-white text-[#6A6A6A] border-2 ${
                                    bankName.error ? "border-red-500" : "border-[#BFBFBF]"
                                } rounded-md px-4 py-2 w-full`}
                            />
                        </div>

                        <div className="my-3">
                            <label htmlFor="accountName" className="text-[#BFBFBF] text-sm block">
                                Account Name*
                            </label>
                            <input
                                type="text"
                                name="accountName"
                                value={accountName.value}
                                onChange={(e) =>
                                    setAccountName({ ...accountName, value: e.target.value })
                                }
                                className={`bg-white text-[#6A6A6A] border-2 ${
                                    accountName.error ? "border-red-500" : "border-[#BFBFBF]"
                                } rounded-md px-4 py-2 w-full`}
                            />
                        </div>

                        <div className="my-3">
                            <label htmlFor="accountNumber" className="text-[#BFBFBF] text-sm block">
                                Account Number*
                            </label>
                            <input
                                type="text"
                                name="accountNumber"
                                value={accountNumber.value}
                                onChange={(e) =>
                                    setAccountNumber({ ...accountNumber, value: e.target.value })
                                }
                                className={`bg-white text-[#6A6A6A] border-2 ${
                                    accountNumber.error ? "border-red-500" : "border-[#BFBFBF]"
                                } rounded-md px-4 py-2 w-full`}
                            />
                        </div>

                        <div className="my-3 text-center">
                            <button
                                onClick={() => handleSubmit()}
                                className="bg-[#FF9363] text-white py-1 px-10 rounded-2xl"
                            >
                                {loading ? "Processing..." : "Update"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <ToastContainer />
        </>
    )

}

export default GiftcardUpdateForm;