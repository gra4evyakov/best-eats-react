import React from "react";

function HeadlineCards() {
    return (
        <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
            <div className='rounded-xl relative'>
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <p className='font-bold text-2xl px-2 pt-2'>Солнце взошло, позавтракай</p>
                    <p className='px-2'>не стесняйся</p>
                    <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Заказать</button>
                </div>
                <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.unsplash.com/photo-1485962398705-ef6a13c41e8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="/"/>
            </div>
            <div className='rounded-xl relative'>
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <p className='font-bold text-2xl px-2 pt-2'>Лучшие рестораны</p>
                    <p className='px-2'>Ежедневно</p>
                    <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Заказать</button>
                </div>
                <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" alt="/"/>
            </div>
            <div className='rounded-xl relative'>
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <p className='font-bold text-2xl px-2 pt-2'>Доставляем десерты</p>
                    <p className='px-2'>И вкусняшки</p>
                    <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Заказать</button>
                </div>
                <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.unsplash.com/photo-1541599188778-cdc73298e8fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=440&q=80" alt="/"/>
            </div>
        </div>
    )
}

export default HeadlineCards