import { AxiosResponse } from 'axios';
import React, { useState, useEffect } from 'react'
import { ApiResponse, CryptoCurrency } from '../../model';
import { RETRIEVE_CRYPTOS_PUBLIC } from '../../services';

const CryptoRate = () => {
    const [usdQty, setUsdQty] = useState<number>(0);
    const [cryptoQty, setCryptoQty] = useState<number>(0);
    const [totalAmount, setTotalAmount] = useState<number>(0);
    const [currencyRate, setCurrencyRate] = useState<number>(0);
    const [crypto, setCrypto] = useState<string>('BTC');
    const [selectedCrypto, setSelectedCrypto] = useState<CryptoCurrency | undefined>();
    const [cryptos, setCryptos] = useState<CryptoCurrency[]>([]);
    const [currencies, setCurrencies] = useState<{name: string, rate: number}[]>([]);

    const calculateCryptoAmount = (qty: number) => {
        const rate = selectedCrypto?.rate
        const total: number = rate ? (qty / rate) : qty;
        setCryptoQty(total);
        converUsd2NGN(qty);
    }
    
    const converUsd2NGN = (qty: number) => {
        const total: number = (currencyRate * qty);
        setTotalAmount((total === undefined || NaN) ? 0 : total);
    }


    const retreiveCryptos = () => {
        RETRIEVE_CRYPTOS_PUBLIC()
        .then((res: AxiosResponse<ApiResponse>) => {
            const { message, payload } = res.data;
            setCryptos(payload);
            console.log(message);
        })
        .catch((err: any) => {
            const { message } = err.response.data;
            console.log(message);
        });
    };

    const handleSelectCrypto = (name: string) => {
        const crypto = cryptos.find((item: CryptoCurrency) => item.shortName === name)
        if(crypto){
            setSelectedCrypto(crypto);
            setCurrencies(crypto.currencies);
        }
    }
    
    useEffect(() => {
        retreiveCryptos();
    }, []);

    return (
    <>
        <div className='mx-3'>
            <h3 className='text-2xl font-bold mt-8 mb-4'>Crypto</h3>
            <div className="bg-gray-100 border-2 border-gray-100 rounded-xl py-6 px-6">
                <div className="grid grid-cols-2">
                    <div className='px-1'>
                        <p className='text-sm font-bold'>Select Crypto</p>
                        <select 
                            name="crypto" 
                            id="crypto"
                            value={crypto}
                            onChange={(e) => {
                                setCrypto(e.target.value)
                                handleSelectCrypto(e.target.value)
                            }}
                            className="my-4 w-full rounded-lg bg-white text-black py-2 px-4"
                        >
                            <option value=''>Select crypto</option>
                            {
                                cryptos.length > 0 && 
                                cryptos.map((item: CryptoCurrency, idx: number) => {
                                    return <option key={idx} value={item.shortName}>{ item?.shortName }</option>
                                })
                            }
                            
                        </select>
                    </div>

                    <div className='px-1'>
                        <p className='text-sm font-bold'>Select Currency</p>
                        <select 
                            name="currency" 
                            id="currency"
                            value={currencyRate.toString()}
                            onChange={(e) => {
                                setCurrencyRate(parseInt(e.target.value))
                            }}
                            className="my-4 w-full rounded-lg bg-white text-black py-2 px-4"
                        >
                            <option value=''>Select currency</option>
                            {
                                currencies.length > 0 && 
                                currencies.map((item: {name: string, rate: number}, idx: number) => {
                                    return <option key={idx} value={item.rate}>{ item?.name }</option>
                                })
                            }
                            
                        </select>
                    </div>

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

                    
                </div>

                <div className="my-5">
                    Rate NGN { currencyRate ? currencyRate : 0 }/USD
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