import React from 'react'
import './Product.css'
import { useDispatch, useSelector } from 'react-redux'
import { add } from '../redux/slices/Cartslice'
import { remove } from '../redux/slices/Cartslice'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Product = ({ post }) => {

  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state);


  function Removehandler() {
    dispatch(remove(post.id));
    toast.error("REMOVE")
  }

  function Addhandler() {
    dispatch(add(post));
    toast.success("Add Successfully")
  }
  return (
    <div className='flex flex-col items-center justify-between hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 
    rounded-xl ml-5  shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)]
     '>
      <div>
        <p className='text-grey-700 font-semibold text-lg text-left truncate'>
          {post.title.split(" ").slice(0, 3).join(" ") + "...."}</p>
      </div>

      <div>
        <p className='w-400 text-grey-400 font-normal text-[12px] text-left'>
          {post.description.split(" ").slice(0, 10).join(" ") + "..."}</p>
      </div>

      <div className='h-[200px]'>
        <img src={post.image} className='w-full h-full'></img>
      </div>

      <div className='flex justify-between gap-12 items-center w-full mt-5'>
        <div>
          <p className='text-green-600 font-semibold'>${post.price}</p>
        </div>
        
          {
            cart.some((p) => p.id == post.id) ?
              (<button className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px=3 uppercase
              hover:bg-gray-800 hover:text-white transition duration-300 ease-in' 
                onClick={Removehandler}>
                Remove Item</button>)
              : (<button className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px=3 uppercase
              hover:bg-gray-800 hover:text-white transition duration-300 ease-in' 
                onClick={Addhandler}>Add To Cart</button>)
          }
      


      </div>

    </div>
  )
}

export default Product
