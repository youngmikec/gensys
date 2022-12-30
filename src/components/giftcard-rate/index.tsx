import React, { useState, useEffect } from 'react';
import { AxiosResponse } from 'axios';

import { ApiResponse, GCurrency, Giftcard } from '../../model';
import { RETRIEVE_GIFTCARDS_PUBLIC } from '../../services';

const GiftCardRate = () => {
    const [rate, setRate] = useState<number>(0);
    const [amount, setAmount] = useState<number>(0);
    const [giftcards, setGiftcards] = useState<Giftcard[]>([]);
    const [currencies, setCurrencies] = useState<GCurrency[]>([]);
    const [selectedGiftcard, setSelectedGiftcard] = useState<Giftcard | undefined>();

    const retreiveGiftcards = () => {
        RETRIEVE_GIFTCARDS_PUBLIC()
        .then((res: AxiosResponse<ApiResponse>) => {
            const { message, payload } = res.data;
            setGiftcards(payload);
            console.log(message);
        })
        .catch((err: any) => {
            const { message } = err.response.data;
            console.log(message);
        });
    };

    const handleSelectGiftcard = (id: string) => {
        const giftcard = giftcards.find((item: Giftcard) => item.id === id)
        if(giftcard){
            setSelectedGiftcard(giftcard);
            setCurrencies(giftcard.currencies);
        }
    }

    useEffect(() => {
        retreiveGiftcards();
    }, [])

    return (
        <>
            <div className='mx-3'>
                <h3 className='text-2xl font-bold mt-8 mb-4'>Gift Card</h3>
                <div className="bg-gray-300 border-2 border-gray-300 rounded-xl py-6 px-6">
                    <div className="grid grid-cols-2">
                        <div className='px-1'>
                            <p className='text-sm font-bold'>Pick Gift Card</p>
                            <select 
                                id="giftcard" 
                                name="giftcard"
                                onChange={(e) => {
                                    handleSelectGiftcard(e.target.value)
                                }} 
                                className="w-full my-4 rounded-lg bg-white text-black py-2 px-4"
                            >
                                <option value="">Select Giftcard</option>
                                {
                                    giftcards.length > 0 &&
                                    giftcards.map((item: Giftcard, key: number) => {
                                        return <option 
                                        key={key} 
                                        value={item.id}
                                        >{ item.name }</option>
                                    })
                                }
                                
                            </select>
                        </div>
                        <div className='px-1'>
                            <p className='text-sm font-bold'>Select Currency</p>
                            <select 
                                id="giftcard" 
                                name="giftcard" 
                                onChange={(e) => {
                                    setRate(parseInt(e.target.value))
                                }}
                                className="w-full my-4 rounded-lg bg-white text-black py-2 px-4"
                            >
                                <option value="">Select currency</option>
                                {
                                    currencies.length > 0 &&
                                    currencies.map((item: GCurrency, key: number) => {
                                        return <option key={key} value={item.rate}>{item.name}</option>
                                    })
                                }
                                
                            </select>
                        </div>
                        
                        <div className='px-1'>
                            <p className='text-sm font-bold'>Card Type</p>
                            <input type="text" value={selectedGiftcard?.type} readOnly className="my-4 w-full rounded-lg bg-white text-black py-2 px-4" />
                        </div>

                        <div className='px-1'>
                            <p className='text-sm font-bold'>Amount</p>
                            <input 
                                type="number" 
                                min={1}
                                value={amount}
                                onChange={(e) => {
                                    setAmount(parseInt(e.target.value))
                                }}
                                className="my-4 w-full rounded-lg bg-white text-black py-2 px-4" 
                            />
                        </div>
                    </div>

                    <div className="my-5">
                        Rate NGN { !Number.isNaN(rate)  ? rate : 0 }/USD
                        <div className="flex justify-between">
                            <h3 className='text-xl font-bold'>Total</h3>
                            <h3 className='text-xl font-bold'>{ !Number.isNaN(rate * amount) ? (rate * amount) : 0 }</h3>
                        </div>
                    </div>
                </div> 
            </div>
        </>
    )
}

export default GiftCardRate;