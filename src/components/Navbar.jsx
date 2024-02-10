import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { AiFillTag, AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai'
import { BsFillCartFill, BsFillSaveFill } from 'react-icons/bs'
import { TbTruckDelivery } from 'react-icons/tb'
import { MdOutlineFavorite } from 'react-icons/md';
import { IoMdHelpCircle } from "react-icons/io";
import { FaWallet, FaUserFriends } from "react-icons/fa";
import Login from './Login';
import Signup from './Signup';
const Navbar = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [isLoginCliked,setIsLoginCliked] = useState(false);
    const [isSignupCliked,setIsSignupCliked] = useState(false);
    const [nav, setNav] = useState(false);
    const [isDelivery, setIsDelivery] = useState(true);
    return (
        <>
            <div className='max-w-[1640px] mx-auto flex justify-between p-4'>
                {/* left side */}
                <div className='flex items-center'>
                    <div onClick={() => setNav(!nav)}>
                        <AiOutlineMenu size={30} />
                    </div>
                    <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2 hover:cursor-pointer'><Link to='/'>Best <span className='font-bold'>Eats</span></Link></h1>
                    <div className=' cursor-pointer hidden lg:flex items-center bg-gray-200 rounded-full p-1'>
                        <p className={`bg-${isDelivery ? 'black' : 'gray'} text-${isDelivery ? 'white' : 'black'} rounded-full p-2 duration-200`} onClick={() => setIsDelivery(!isDelivery)}>Delivery</p>
                        <p className={`bg-${isDelivery ? 'gray' : 'black'} text-${isDelivery ? 'black' : 'white'} rounded-full p-2 duration-200`} onClick={() => setIsDelivery(!isDelivery)}>Pickup</p>
                    </div>
                </div>
                <div className='flex items-center rounded-full bg-gray-200 px-2 w-[300px] md:w-[370px] lg:w-[500px]'>
                    <AiOutlineSearch size={30} />
                    <input type="text" className='bg-transparent p-2 w-full focus:outline-none' placeholder='Search foods' />
                </div>
                <div className='flex justify-around items-center'>
                    {/* Cart button */}
                    <button className={` hidden bg-black text-white ${isLogin ? 'md:flex' : 'hidden'}  items-center py-2 px-4 mr-1 rounded-full`}>
                        <BsFillCartFill size={20} className='mr-1' />Cart
                    </button>

                    {/* SignUp and Login button */}
                    <Link to='/signup'><button className={`bg-black text-white hidden ${isLogin ? 'hidden' : 'md:flex'} items-center py-2 px-4 mr-1 rounded-full`} onClick={() => setIsSignupCliked(!isSignupCliked)}>Signup</button></Link>
                    <Link to='/login'><button className={`bg-black text-white hidden ${isLogin ? 'hidden' : 'md:flex'} items-center py-2 px-4 mr-1 rounded-full`} onClick={() => setIsLoginCliked(!isLoginCliked)}>Login</button></Link>
                    <button className={`bg-black text-white hidden ${isLogin ? 'md:flex' : 'hidden'} items-center py-2 px-4 mr-1 rounded-full`} onClick={() => setIsLogin(!isLogin)}>Logout</button>
                </div>
                {/* Mobile Menu (overlay) */}
                {nav ? <div className='bg-black/80 w-full fixed h-screen z-10 top-0 left-0'></div> : ''}

                {/* side drawer menu */}
                <div className={nav ? 'fixed top-0 left-0 w-[300px] bg-white z-10 h-screen duration-300' : 'fixed top-0 left-[-100%] w-[300px] bg-white z-10 h-screen duration-300'}>
                    <AiOutlineClose size={30} className='absolute right-4 top-4 cursor-pointer' onClick={() => setNav(!nav)} />
                    <h2 className='text-2xl p-4'>Best <span className='font-bold'>Eats</span></h2>
                    <nav>
                        <ul className='flex flex-col p-4'>
                            <li className='flex cursor-pointer text-xl py-4 active:text-orange-400'  >
                                <TbTruckDelivery size={25} className='mr-3' />
                                Orders
                            </li>
                            <li className='flex cursor-pointer text-xl py-4 active:text-orange-400'>
                                <MdOutlineFavorite size={25} className='mr-3' />
                                Favorite
                            </li>
                            <li className='flex cursor-pointer text-xl py-4 active:text-orange-400'>
                                <FaWallet size={25} className='mr-3' />
                                Wallet
                            </li>
                            <li className='flex cursor-pointer text-xl py-4 active:text-orange-400'>
                                <IoMdHelpCircle size={25} className='mr-3' />
                                Help
                            </li>
                            <li className='flex cursor-pointer text-xl py-4 active:text-orange-400'>
                                <AiFillTag size={25} className='mr-3' />
                                Promotions
                            </li>
                            <li className='flex cursor-pointer text-xl py-4 active:text-orange-400'>
                                <BsFillSaveFill size={25} className='mr-3' />
                                Best One
                            </li>
                            <li className='flex cursor-pointer text-xl py-4 active:text-orange-400'>
                                <FaUserFriends size={25} className='mr-3' />
                                Invite Friends
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <Login isLoginCliked={isLoginCliked} setIsLoginCliked={setIsLoginCliked} />
            <Signup isSignupCliked={isSignupCliked} setIsSignupCliked={setIsSignupCliked} />
        </>
    )
}

export default Navbar