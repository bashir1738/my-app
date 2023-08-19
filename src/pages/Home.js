import React from "react"
import { Link } from "react-router-dom"
import './style.css'
import aimage from './image/a.png';

export default function Home() {


  
  return (
    <div>
        <div className="h-[60px] flex flex-cols w-auto bg-white overflow-x-hidden">
          <div >
            <img className="m-2" src={aimage}/>
          </div>
          <div>
            
          </div>
        </div>
        <div className="flex flex-row">
          <div className='h-sayto position:fixed md:w-screen bg-gray-100 w-hidden'>
            <ul className=" m-6 font-bold text-[18px] ">
              <li className="pt-3 pb-3 hover:bg-slate-300 rounded-3xl">Olamide Bashir</li>
              <li className=" pt-3 pb-3 hover:bg-slate-300 rounded-3xl">Find friends</li>
              <li className="pt-3 pb-3 hover:bg-slate-300 rounded-3xl">Memories</li>
              <li className="pt-3 pb-3 hover:bg-slate-300 rounded-3xl">saved</li>
              <li className="pt-3 pb-3 hover:bg-slate-300 rounded-3xl">Groups</li>
              <li className="pt-3 pb-3 hover:bg-slate-300 rounded-3xl">Video</li>
              <li className="pt-3 pb-3 hover:bg-slate-300 rounded-3xl">Marketplace</li>
              <li className="pt-3 pb-3 hover:bg-slate-300 rounded-3xl">feeds</li>
              <li className="pt-3 pb-3 hover:bg-slate-300 rounded-3xl">favourite</li>
            </ul>
          </div>
          <div className='h-screen md:w-[2600px] bg-gray-200 w-screen '>

          </div>
          <div className='md:h-screen md:w-screen bg-gray-100 w-hidden '>

          </div>
        </div>
        
        <Link to='/login'>Login</Link>
    </div>
  )
}