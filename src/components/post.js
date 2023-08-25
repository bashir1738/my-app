import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faUserGroup,  faUser} from '@fortawesome/free-solid-svg-icons'


const post = ({isVisible, onclose}) => {
    if (!isVisible) return null
  return (
    <div className='fixed inset-0 bg-black bg-opacity-30  flex justify-center items-center '>
      <div className="md:w-[500px] w-[350px]" >
        <div className=' bg-white p-4 rounded-lg shadow-xl mt-3'>
        <div className='flex  justify-between'>
            <div className='place-self-center'>
              <h2 className=" text-black text-[20px] font-bold " >Create Post</h2>
            </div>
            <div className='w-[40px]  h-[40px] rounded-[40px] p-5  cursor-pointer  bg-gray-300 flex justify-center items-center' onClick ={() => onclose()}>  
              <button className='  mt-[-5px] font-light text-black text-[28px] '  > x </button>
            </div>
          </div>
          <div className='pt-3 pb-3'><div className='bg-gray-200 h-0.5'></div></div>
          <div className='flex flex-cols'>
            <div className=" mr-2 w-[45px]  h-[45px] rounded-[60px] hover:bg-gray-400 transition duration-[]0.4s  bg-gray-300 cursor-pointer  flex justify-center items-center">
               <FontAwesomeIcon  className="text-[26px] text-white flex justify-center items-center " icon={faUser} />
            </div>
            <div className='mt-[-5px]'>
              <p className='font-semibold'>Olamide Bashir</p>
              <div className='bg-gray-200 p-[1px] pl-4 rounded-xl cursor-pointer'>
                <FontAwesomeIcon className=" text-[10px] mr-1 w-auto text-black " icon={faUserGroup}/> 
                <a className='text-[13px]'>Friends</a>  
                <a className='text-[10px]'> ▼</a>
              </div>
            </div>  
          </div> 
          <div className='' >
            <input className='  w-full resize-y h-[200px] py-a bg-transparent text-[22px] border border-transparent  'type='text' placeholder="What's on your mind olamide ?"/>
          </div>   
          
        </div>
     </div>
     </div>
    
  )
}
export default post