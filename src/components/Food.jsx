import React, {useState} from "react";
import {data} from "../data/data";

function Food({handleClick}) {
    const [foods, setFoods] = useState(data)

    function filterType(category) {

        setFoods(
            data.filter(item => {
            return item.category === category
            })
        )
    }

    function  filterPrice(price) {
        setFoods(
            data.filter(item => {
                return item.price >= price
            })
        )
    }
    
    return (
        <div className='max-w-[1640px] m-auto px-4 py-12'>
            <h1 className='text-orange-600 font-bold text-4xl text-center'>Лучшие блюда из меню</h1>

            <div className='flex flex-col lg:flex-row justify-between'>
                <div>
                    <p className='font-bold text-gray-700'>По типу</p>
                    <div className='flex justify-between flex-wrap'>
                        <button onClick={() => setFoods(data)} className='m-1 border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white '>Всё</button>
                        <button onClick={() => filterType('burger')} className='m-1 border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white '>Бургеры</button>
                        <button onClick={() => filterType('pizza')} className='m-1 border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white '>Пицца</button>
                        <button onClick={() => filterType('salad')} className='m-1 border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white '>Салаты</button>
                        <button onClick={() => filterType('chicken')} className='m-1 border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white '>Курица</button>
                    </div>
                </div>

                <div>
                    <p className='font-bold text-gray-700'>По цене</p>
                    <div className='flex justify-between max-w-[390px] w-full'>
                        <button onClick={() => filterPrice(500)} className='m-1 border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white '>500+</button>
                        <button onClick={() => filterPrice(1000)} className='m-1 border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white '>1000+</button>
                        <button onClick={() => filterPrice(1500)} className='m-1 border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white '>1500+</button>
                        <button onClick={() => filterPrice(2000)} className='m-1 border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white '>2000+</button>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
                {foods.map((item,index) => (
                    <div key={index} className='border shadow-lg rounded-lg hover:scale-105 duration-300'>
                        <div className='relative'>
                            <img className='w-full h-[200px] object-cover rounded-t-lg' src={item.image} alt={item.name}/>
                            <button onClick={() => handleClick(item, '+')} className='absolute bottom-2 right-2 border border-white bg-orange-500/60 text-white ml-2 duration-200 hover:bg-orange-600 hover:bottom-3'>Заказать</button>
                        </div>
                        <div className='flex justify-between px-2 py-4'>
                            <p className='font-bold'>{item.name}</p>
                            <p>
                                <span className='bg-orange-500 text-white px-2 py-1 rounded-full'>{item.price}р</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Food