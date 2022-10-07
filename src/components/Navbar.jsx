import React, {useState} from "react";
import {AiFillTag, AiOutlineClose, AiOutlineMenu} from "react-icons/ai";
import {BsCartFill, BsFillSafeFill} from "react-icons/bs";
import {TbTruckDelivery} from "react-icons/tb";
import {FaUserFriends, FaWallet} from "react-icons/fa";
import {MdFavorite, MdHelp} from "react-icons/md";
import Carts from "./Carts";

function Navbar({cart, cartCounter, removeItem, price}) {
    const [nav, setNav] = useState(false)
    const [showCart, setShowCart] = useState(false)

    return (
        <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
            <div className='flex items-center'>
                <div onClick={() => setNav(!nav)} className='cursor-pointer'>
                    <AiOutlineMenu size={30}/>
                </div>
                <h1 className='text-3xl ml-2 pb-1 lg:text-4xl'>
                    Best <span className='font-bold'>Eats</span>
                </h1>
            </div>

            <button onClick={() => setShowCart(!showCart)} className='relative bg-black text-white flex items-center py-2 rounded-full ml-3'>
                <BsCartFill size={20} className='sm:mr-1' /> <span className='hidden sm:inline mr-2'>Козрина</span>
                {cartCounter === 0 ? null : <span className='absolute top-[-.7rem] right-0 px-1 bg-orange-600 text-white rounded-xl'>{cartCounter}</span>}
            </button>
            {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div>
                : ''}
            <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
                <AiOutlineClose onClick={() => setNav(!nav)} size={30} className='absolute right-4 top-4 cursor-pointer'/>
                <h2 className='text-2xl p-4'>Best <span className='font-bold'>Eats</span></h2>
                <nav>
                    <ul className='flex flex-col p-4 text-gray-800'>
                        <li className='text-xl py-4 flex'><TbTruckDelivery size={25} className='mr-4'/> Заказы</li>
                        <li className='text-xl py-4 flex'><MdFavorite size={25} className='mr-4'/> Любимое</li>
                        <li className='text-xl py-4 flex'><FaWallet size={25} className='mr-4'/> Кошелёк</li>
                        <li className='text-xl py-4 flex'><MdHelp size={25} className='mr-4'/> Помощь</li>
                        <li className='text-xl py-4 flex'><AiFillTag size={25} className='mr-4'/> Акции</li>
                        <li className='text-xl py-4 flex'><BsFillSafeFill size={25} className='mr-4'/> Лучшее</li>
                        <li className='text-xl py-4 flex'><FaUserFriends size={25} className='mr-4'/> Пригласи друзей</li>
                    </ul>
                </nav>
            </div>
            <div className={showCart ? 'fixed top-0 right-0 w-[300px] h-screen bg-white z-10 duration-300' : 'fixed top-0 right-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
                <AiOutlineClose onClick={() => setShowCart(!showCart)} size={30} className='absolute right-4 top-4 cursor-pointer'/>
                <h2 className=' font-bold text-3xl p-4'>Корзина</h2>
                <nav>
                    <Carts cart={cart} removeItem={removeItem} price={price}/>
                </nav>
            </div>
        </div>
    )
}

export default Navbar