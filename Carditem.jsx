import React from 'react'
import { MdAutoDelete } from "react-icons/md";
import { remove } from '../redux/slices/Cartslice'
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Carditem = ({ item, index }) => {

  const dispatch = useDispatch();

  function Deletehandler() {
    dispatch(remove(item.id));
    toast.error("Remove Item")
  }
  return (
    <div>
      <div className=' flex justify-between items-center max-w-6xl mx-auto  gap-15 '>
        <div className=''>
          <img src={item.image} className='w-[250px] h-[200px]'></img>
        </div>
        <div>
          <div>
            <h1 className='text-grey-700 font-semibold text-lg text-left truncate'>{item.title}</h1>
            <h1 className='w-400 text-grey-400 font-normal text-[12px] text-left'>{item.description}</h1>
          </div>
          <div className='flex justify-between gap-12 items-center w-full mt-5'>
            <div>
              <p className='text-green-600 font-semibold'>{item.price}</p>
            </div>
            <div>
              <MdAutoDelete onClick={Deletehandler}
              className=' w-[30px] h-[30px] bg-red-400 rounded-full p-1'/>
            </div>
          </div>


        </div>

      </div>
    </div>
  )
}

export default Carditem
