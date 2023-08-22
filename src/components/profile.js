import React from 'react'
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDoorOpen, faUser} from '@fortawesome/free-solid-svg-icons'
import { faCircleQuestion} from '@fortawesome/free-solid-svg-icons'
import { faMoon} from '@fortawesome/free-solid-svg-icons'
import { faComment} from '@fortawesome/free-solid-svg-icons'
// import { faDoorOpen} from '@fortawesome/free-solid-svg-icons'
import { faGear} from '@fortawesome/free-solid-svg-icons'

const profile = ({isVisible, onclose}) => {
  if (!isVisible) return null
  return (
    <div className='fixed top-[-10px] ml-[-210px] '>
      <div className="md:w-[370px] w-[340px] h-[300px] flex flex-col">
        <button onClick={() => onclose()} className='place-self-end text-[40px] text-transparent '>x</button>
        <div className='bg-white p-3 rounded xl shadow-xl '>
          <div className=' mt-2 p-4  rounded-xl shadow-xl '>
          <div className='flex flex-row'>
              <div className=" w-[35px] mr-2 h-[40px] rounded-[60px]  cursor-pointer hover:bg-gray-400  bg-gray-300 transition duration-[0.3s] flex justify-center items-center">
                <FontAwesomeIcon className="text-[25px] text-white cursor-pointer" icon={faUser} />
              </div>
              <div className='pt-2 text-lg cursor-pointer'>
                Olamide Bashir
              </div>
          </div>
          <div className='pt-2 pb-2'><div className='bg-gray-200 h-0.5  '></div></div>
          <div className='text-md font-semibold text-blue-500 cursor-pointer'>
            See all profiles
          </div>
          </div>
          <div className='ml-[-10px] pt-1'>
            <ul className=' m-3 font-semibold text-[15px] cursor-pointer '>
              <div className="flex flex-row pl-3 pt-1 pb-1 hover:bg-slate-100 rounded-2xl transition duration-[0.4s] ">
                <div className=" w-[35px] mr-2 h-[40px] rounded-[60px]  cursor-pointer hover:bg-gray-400  bg-gray-300 transition duration-[0.3s] flex justify-center items-center">
                  <FontAwesomeIcon className="text-[20px] text-black" icon={faGear} />
                </div>
                 <li className='mt-3' >  Settings & privacy</li>  
              </div>
              <div className="flex flex-row pt-1 pl-3 pb-1 hover:bg-slate-100 rounded-2xl transition duration-[0.4s] ">
                <div className=" w-[35px] mr-2 h-[40px] rounded-[60px]  cursor-pointer hover:bg-gray-400  bg-gray-300 transition duration-[0.3s] flex justify-center items-center">
                  <FontAwesomeIcon className="text-[20px] text-black" icon={faCircleQuestion} />
                </div>
                 <li className='mt-3' >  Help & support</li>  
              </div>
              <div className="flex flex-row pt-1 pb-1 pl-3 hover:bg-slate-100 rounded-2xl transition duration-[0.4s] ">
                <div className=" w-[35px] mr-2 h-[40px] rounded-[60px]  cursor-pointer hover:bg-gray-400  bg-gray-300 transition duration-[0.3s] flex justify-center items-center">
                  <FontAwesomeIcon className="text-[20px] text-black" icon={faMoon} />
                </div>
                 <li className='mt-3' >Display & accessibility</li>  
              </div>
              <div className="flex flex-row pt-1 pb-1 pl-3 hover:bg-slate-100 rounded-2xl transition duration-[0.4s] ">
                <div className=" w-[35px] mr-2 h-[40px] rounded-[60px]  cursor-pointer hover:bg-gray-400  bg-gray-300 transition duration-[0.3s] flex justify-center items-center">
                  <FontAwesomeIcon className="text-[20px] text-black" icon={faComment} />
                </div>
                 <li className='mt-3' >Give feedback</li>  
              </div>
              <div className="flex flex-row pt-1 pb-1 pl-3 hover:bg-slate-100 rounded-2xl transition duration-[0.4s] ">
                <div className=" w-[35px] mr-2 h-[40px] rounded-[60px]  cursor-pointer hover:bg-gray-400  bg-gray-300 transition duration-[0.3s] flex justify-center items-center">
                  <FontAwesomeIcon className="text-[20px] text-black" icon={faDoorOpen} />
                </div>
            
                 <li className='mt-3' > <Link  to='/login'> log out</Link></li>  
              </div>
            </ul>
          </div>
          <div className='pl-3 text-gray-500 text-[13px] hover:underline cursor-pointer'>
          Privacy  · Terms  · Advertising  · Ad choices   · Cookies  <br/>· More  · Meta © 2023
          </div>
        </div>
      </div>
    </div>
  )
}
export default profile