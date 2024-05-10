import React from 'react'
import './Navbar.css'
import { BsCartCheckFill } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
import Cart from '../Pages/Cart';
import { useSelector } from 'react-redux';


const Navbar = () => {

    const { cart } = useSelector((state) => state);
    return (
        <div className='wrapper'>
            <div className='flex items-center justify-between h-20 max-w-6xl mx-auto'>
                <NavLink to='/'>
                    <div className='ml-5'>
                        <img src='src/assets/download.jpg' className='w-[200px] h-[150px]'>
                        </img>

                    </div>
                </NavLink>

                <div className='flex items-center font-medium text-slate-100 mr-5 space-x-6'>
                    <NavLink to='/'>
                        <p className='home'>Home</p>
                    </NavLink>

                    <NavLink to='/Cart'>
                        <div className='relative'>
                            <BsCartCheckFill  className='text-2xl'/>
                            {
                             
                              <span className='absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center
                              items-center animate-bounce rounded-full text-white'>
                              {cart.length}</span>
                            }

                        </div>
                    </NavLink>


                </div>

            </div>
        </div>
    )
}

export default Navbar
