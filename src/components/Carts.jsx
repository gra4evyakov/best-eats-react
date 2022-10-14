import React, {useState} from "react";

function Carts({cart, removeItem, price, handleClick}) {
    const [slider, setSlider] = useState(false)
    return (
        <>
            <div className='flex flex-col gap-5 h-full'>
                {cart.map((item, index) =>
                    (
                    <div key={index} className='flex justify-between items-end px-4 py-2 text-gray-800 bg-gray-100 rounded-3xl'>
                        <div className='flex flex-col'>
                            <p className='text-sm py-1 font-bold'>{item.name}</p>
                            <div className='flex gap-5 items-center'>
                                <p className='text-sm'>{item.price}р</p>
                                <div className='flex gap-2 bg-white border border-black rounded-xl items-center'>
                                    <button onClick={() => handleClick(item, '-')} className='text-sm bg-gray-200'>-</button>
                                    <p className='text-sm'>{item.count ? item.count : null}</p>
                                    <button onClick={() => handleClick(item, '+')} className='text-sm bg-gray-200'>+</button>
                                </div>
                            </div>
                        </div>
                        <button onClick={() => removeItem(item, index)} className=' border border-black py-1 px-2 rounded-xl text-sm'>remove</button>
                    </div>
                ))}
            </div>
            {cart.length < 1 ? (
                <>
                    <p className='text-2xl text-center py-4'>Корзина пуста...</p>
                    <img className='mx-auto' src="https://img.icons8.com/external-victoruler-flat-gradient-victoruler/64/000000/external-hungry-food-and-delivery-victoruler-flat-gradient-victoruler.png" alt='hungry-face'/>
                </>
                ):
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

