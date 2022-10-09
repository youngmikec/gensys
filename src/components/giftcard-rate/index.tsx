import React from 'react'

const GiftCardRate = () => {
  return (
    <>
        <div className='mx-3'>
            <h3 className='text-2xl font-bold mt-8 mb-4'>Gift Card</h3>
            <div className="bg-gray-300 border-2 border-gray-300 rounded-xl py-6 px-6">
                <div className="grid grid-cols-2">
                    <div>
                        <p>Pick Gift Card</p>
                        <select name="giftcard" id="giftcard" className="w-full my-4 rounded-xl bg-white text-black py-2 px-4">
                            <option value="">Select gift card</option>
                        </select>
                    </div>
                    <div>
                        <p>Select card</p>
                        <select name="giftcard" id="giftcard" className="w-full my-4 rounded-xl bg-white text-black py-2 px-4">
                            <option value="">Select gift card</option>
                        </select>
                    </div>
                    
                    <div>
                        <p>Card Type</p>
                        <input type="text" value="Physical card" className="rounded-lg bg-white text-black py-2 px-4" />
                    </div>
                    <div>
                        <p>Amount</p>
                        <input type="number" value="BTC" className="rounded-lg bg-white text-black py-2 px-4" />
                    </div>
                </div>

                <div className="my-5">
                    Rate NGN 700/USD
                    <div className="flex justify-between">
                        <h3 className='text-xl font-bold'>Total</h3>
                        <h3 className='text-xl font-bold'>2000</h3>
                    </div>
                </div>
            </div> 
        </div>
    </>
  )
}

export default GiftCardRate;