import React, { useState } from 'react'
import { BTC2USDRate, BTCRate, USDRate } from '../../constant'

const CryptoRate = () => {
    const [usdQty, setUsdQty] = useState<number>(0);
    const [cryptoQty, setCryptoQty] = useState<number>(0);
    const [totalAmount, setTotalAmount] = useState<number>(0);
    const [crypto, setCrypto] = useState<string>('BTC');

    const calculateCryptoAmount = (qty: number) => {
        const rate = crypto === 'BTC' ? BTC2USDRate : USDRate;
        const total: number = crypto === 'BTC' ? (qty / rate) : qty;
        setCryptoQty(total);
        converUsd2NGN(qty);
    }
    
    const converUsd2NGN = (qty: number) => {
        const rate = crypto === 'BTC' ? BTCRate : USDRate;
        const total: number = (rate * qty);
        setTotalAmount((total === undefined || NaN) ? 0 : total);
    }


    return (
    <>
        <div className='mx-3'>
            <h3 className='text-2xl font-bold mt-8 mb-4'>Crypto</h3>
            <div className="bg-gray-100 border-2 border-gray-100 rounded-xl py-6 px-6">
                <div className="grid grid-cols-2">
                    <div className='px-1'>
                        <p className='text-sm font-bold'>Amount</p>
                        <input 
                            type="number"
                            value={usdQty}
                            onChange={(e) => {
                                calculateCryptoAmount(parseInt(e.target.value))
                                setUsdQty(parseInt(e.target.value))
                            } }
                            className="my-4 w-full rounded-lg bg-white text-black py-2 px-4"
                        />
                    </div>

                    <div className='px-1'>
                        <p className='text-sm font-bold'>Select Currency</p>
                        <input type="text" defaultValue="USD" value="USD" readOnly className="my-4 w-full rounded-lg bg-white text-black py-2 px-4" />
                    </div>

                    <div className='px-1'>
                        <p className='text-sm font-bold'>To</p>
                        <input 
                            type="number"
                            value={cryptoQty}
                            onChange={(e) => {
                                converUsd2NGN(usdQty)
                            } }
                            disabled
                            className="my-4 w-full rounded-lg bg-white text-black py-2 px-4" />
                    </div>

                    <div className='px-1'>
                        <p className='text-sm font-bold'>Select Crypto</p>
                        <select 
                            name="crypto" 
                            id="crypto"
                            value={crypto}
                            onChange={(e) => setCrypto(e.target.value)}
                            className="my-4 w-full rounded-lg bg-white text-black py-2 px-4"
                        >
                            <option value="BTC">BTC</option>
                            <option value="USDT">USDT</option>
                        </select>
                    </div>
                </div>

                <div className="my-5">
                    Rate NGN { crypto === 'BTC' ? BTCRate : USDRate }/USD
                    <div className="flex justify-between">
                        <h3 className='text-xl font-bold'>Total</h3>
                        <h3 className='text-xl font-bold'>{ typeof totalAmount === 'number' ? totalAmount : `${totalAmount}` }</h3>
                    </div>
                </div>
            </div> 
        </div>
    </>
    )
}

export default CryptoRate