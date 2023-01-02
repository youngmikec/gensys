import React, { useState } from 'react';
import { GCurrency } from '../../model';

type Props = {
    currencies: GCurrency[],
    addFunc: (data: any) => any,
    removeFunc: (name: string) => any
}

const CurrencyAddComp = ({ currencies, addFunc, removeFunc }: Props) => {
    const [currencyName, setCurrencyName] = useState<{value: string, error: boolean }>({value: '', error: false});
    const [currencyRate, setCurrencyRate] = useState<{value: number, error: boolean }>({value: 0, error: false});

    const cInputCheck = (): boolean => {
        let isValid: boolean = true;
        if (currencyName.value === "" || undefined || null) {
          isValid = false;
          setCurrencyName({ ...currencyName, error: true });
        } else {
          setCurrencyName({ ...currencyName, error: false });
        }
        
        if (currencyRate.value === 0 || undefined || null) {
          isValid = false;
          setCurrencyRate({ ...currencyRate, error: true });
        } else {
          setCurrencyRate({ ...currencyRate, error: false });
        }
        
        return isValid;
    };

    const handleAddCurrency = () => {
        if(cInputCheck()){
            const data = {
                name: currencyName.value,
                rate: currencyRate.value,
            }
            addFunc(data);
        }
        setCurrencyName({value: '', error: false});
        setCurrencyRate({value: 0, error: false});
    }

    return (
        <>
            <div className="mb-3 w-full">
                <label htmlFor="cryptoImage" className="text-[#BFBFBF] text-sm block">
                    Currencies
                </label>
                <div
                    className='
                        border-2 rounded-md my-3 h-60 w-full
                        border-[#BFBFBF]
                        px-1 py-2
                    '
                >
                    <div className='flex justify-start'>
                        <div>
                            <div className="my-1 mx-2">
                                <label htmlFor="currencyName" className="text-[#BFBFBF] text-sm block">
                                    Currency Name*
                                </label>
                                <input
                                    type="text"
                                    name="currencyName"
                                    value={currencyName.value}
                                    onChange={(e) =>
                                        setCurrencyName({ ...currencyName, value: e.target.value })
                                    }
                                    className={`bg-white text-[#6A6A6A] border-2 ${
                                        currencyName.error ? "border-red-500" : "border-[#BFBFBF]"
                                    } rounded-md px-4 py-1 w-full`}
                                />
                            </div>
                        </div>

                        <div>
                            <div className="my-1 mx-2">
                                <label htmlFor="currencyRate" className="text-[#BFBFBF] text-sm block">
                                    Currency Rate In NGN per USD*
                                </label>
                                <input
                                    type="number"
                                    name="currencyRate"
                                    min={1000}
                                    value={currencyRate.value}
                                    onChange={(e) =>
                                        setCurrencyRate({ ...currencyRate, value: parseInt(e.target.value) })
                                    }
                                    className={`bg-white text-[#6A6A6A] border-2 ${
                                        currencyRate.error ? "border-red-500" : "border-[#BFBFBF]"
                                    } rounded-md px-4 py-1 w-full`}
                                />
                            </div>
                        </div>

                        <div className="mb-4 mt-6 mx-2">
                            <button 
                                className="bg-[#4e965a] text-white py-1 px-5 rounded-2xl"
                                onClick={() => handleAddCurrency()}
                            >Add</button>
                        </div>
                    </div>

                    <div className="mt-3 grid grid-cols-3">
                        {
                            currencies.length > 0 && 
                            currencies.map((item: GCurrency, key) => {
                                return <div className='mx-2 my-1' key={key}>
                                    <div
                                        className="bg-[#e9e9e9] text-[#9c9c9c] py-1 px-5 rounded-2xl flex justify-between"
                                    >
                                        <span>{ item.name } ({item.rate}/USD)</span> 
                                        <span className='ml-3 cursor-pointer' onClick={() => removeFunc(item.name) }>X</span>
                                    </div>
                                    
                                </div>
                            })
                        }
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default CurrencyAddComp