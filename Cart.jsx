import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import Carditem from '../components/Carditem';
const Cart = () => {
  const[totalAmount ,settotalAmount]=useState(0);
  const { cart } = useSelector((state) => state);


  useEffect(()=>{
    settotalAmount(cart.reduce((acc,curr)=>acc+curr.price ,0));
  },[cart])


  return (
    <div>
      <div className=''>
        {
          cart.length > 0 ? (
            <div className='flex justify-between  p-4 m-7  max-w-6xl mx-auto space-y-10 space-x-5 min-h-[80vh]'>
              <div>
                {
                  cart.map((item, index) => {
                    return <Carditem key={item.id} item={item} itemindex={index} />
                  })
                }
                <br></br>
              </div>
              <hr></hr>


              <div>
                <div>
                  <div  className='text-grey-700 font-semibold text-xl text-left truncate'>Your Cart</div>
                  <div  className='text-green-500 font-semibold text-lg text-left truncate'>Summary</div>
                  <p><span  className='text-grey-500 font-semibold text-lg text-left truncate'>Total items:{cart.length}</span></p>
                </div>
                <div>
                <p  className='text-green-700 font-semibold text-lg text-left truncate'>Total Amount:${totalAmount}</p>
                </div>
                <button className='text-gray-700 border-2  border-gray-700 rounded font-bold text-[12px] p-2 px-3 uppercase
                hover:bg-green-800 hover:text-white transition duration-300 ease-in'
                >CheckOut</button>
              </div>

            </div>

          ) : (<div  className='flex justify-center items-center'>
            <h1>Card Empty</h1>
            <NavLink to={"/"}>
              <button>Shop Now</button>
            </NavLink>
          </div>)
        }
      </div>

    </div>





  )
}

export default Cart
