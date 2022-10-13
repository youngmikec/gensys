import React, { useState } from 'react';
import { giftCards } from '../../constant';

const GiftCardRate = () => {
    const [giftcard, setGiftCard] = useState<string>('');
    const [currencies, setCurrencies] = useState<any[]>([]);
    const [rate, setRate] = useState<number>(0);
    const [amount, setAmount] = useState<number>(0);

    const selectCurrencies = (name: string) => {
        const returnedGiftcard = giftCards.find(item => item.name === name);
        if(returnedGiftcard){
            setCurrencies(returnedGiftcard.currencies);
            console.log(currencies);
        }
    }

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
                                    setGiftCard(e.target.value)
                                    selectCurrencies(giftcard)
                                }} 
                                className="w-full my-4 rounded-lg bg-white text-black py-2 px-4"
                            >
                                {
                                    giftCards.length > 0 &&
                                    giftCards.map((item, key) => {
                                        return <option 
                                        key={key} 
                                        value={item.name}
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
                                {
                                    currencies.length > 0 &&
                                    currencies.map((item, key) => {
                                        return <option key={key} value={item.rate}>{item.name}</option>
                                    })
                                }
                                
                            </select>
                        </div>
                        
                        <div className='px-1'>
                            <p className='text-sm font-bold'>Card Type</p>
                            <input type="text" defaultValue="Physical card" readOnly className="my-4 w-full rounded-lg bg-white text-black py-2 px-4" />
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
                        Rate NGN { rate }/USD
                        <div className="flex justify-between">
                            <h3 className='text-xl font-bold'>Total</h3>
                            <h3 className='text-xl font-bold'>{ amount ? (rate * amount) : 0 }</h3>
                        </div>
                    </div>
                </div> 
            </div>
        </>
    )
}

export default GiftCardRate;