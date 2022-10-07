import React from "react";

function Carts({cart, removeItem, price}) {
    return (
        <>
            <div className='flex flex-col gap-5'>
                {cart.map((item, index) => (
                    <div key={index} className='flex justify-between items-center p-4 text-gray-800 bg-gray-100 rounded-3xl'>
                        <p className='text-sm py-4 font-bold'>{item.name}</p>
                        <p className='text-sm py-4'>{item.price}</p>
                        <button onClick={() => removeItem(item, index)} className='border border-black rounded-2xl'>remove</button>
                    </div>
                ))}
            </div>
            <p className='text-end px-4 py-6 font-bold'>Price: {price}</p>
        </>
    )
}

export default Carts