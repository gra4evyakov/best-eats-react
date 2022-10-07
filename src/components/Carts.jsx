import React, {useState} from "react";

function Carts({cart, removeItem, price}) {
    const [slider, setSlider] = useState(false)
    return (
        <>
            <div className='flex flex-col gap-5'>
                {cart.map((item, index) => (
                    <div key={index} className='flex justify-between items-center px-4 py-2 text-gray-800 bg-gray-100 rounded-3xl'>
                        <div className='flex flex-col'>
                            <p className='text-sm py-1 font-bold'>{item.name}</p>
                            <p className='text-sm'>{item.price}</p>
                        </div>
                        <button onClick={() => removeItem(item, index)} className='border border-black py-1 px-2 rounded-2xl text-sm'>remove</button>
                    </div>
                ))}
            </div>
            {cart.length < 1 ? (<p className='text-2xl text-center py-4'>Корзина пуста...</p>) :
                <div className='flex justify-between items-center'>
                    <div onClick={() => setSlider(!slider)} className='relative cursor-pointer bg-gray-200 rounded-full p-1 text-[14px] w-[100px] h-[45px]'>
                        <p className={slider ? 'absolute p-2 bg-black text-white rounded-full right-1 duration-200' : 'absolute p-2 bg-black text-white rounded-full right-8 duration-200'}>{slider ? 'Pickup' : 'Delivery'}</p>
                    </div>
                    <p className='text-xl text-end px-4 py-6 font-bold'>Price: {price}</p>
                </div>
            }
        </>
    )
}

export default Carts

