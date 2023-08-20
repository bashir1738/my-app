// import React, { Fragment } from "react"
import { Link } from "react-router-dom"
import React, { Fragment, useState } from 'react'
import './style.css'
import Modal from "../components/menu" ;
import aimage from './image/a.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faUser} from '@fortawesome/free-solid-svg-icons'
import { faUserGroup} from '@fortawesome/free-solid-svg-icons'
import { faPeopleGroup} from '@fortawesome/free-solid-svg-icons'
import { faBookmark} from '@fortawesome/free-solid-svg-icons'
import { faVideo} from '@fortawesome/free-solid-svg-icons'
import { faFlag} from '@fortawesome/free-solid-svg-icons'
import { faStar} from '@fortawesome/free-solid-svg-icons'
import { faGamepad} from '@fortawesome/free-solid-svg-icons'
import { faTree} from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import { faHouse} from '@fortawesome/free-solid-svg-icons'
import { faBars} from '@fortawesome/free-solid-svg-icons'
import { faShop} from '@fortawesome/free-solid-svg-icons'
import { faIdCard} from '@fortawesome/free-solid-svg-icons'


export default function Home() {
  const [showModal, setShowModal] = useState(false);

  
  return (
    <div>
        <div className="fixed top-0 h-[60px] flex flex-cols  w-full bg-white overflow-x-hidden shadow-xl">
          <div className="flex flex-cols">
            <div className="">
              <img className="m-2 " src={aimage}/>
            </div>
            <div className="  p-3 mt-2 mb-2 bg-slate-200 rounded-[60px] ">
              <FontAwesomeIcon className=" cursor-pointer text-[17px] " icon={faMagnifyingGlass} />
            </div> 
            <Fragment>
            <div className="pl-7 pt-4 md:text-blue-300 text-black">
              <FontAwesomeIcon className="  cursor-pointer text-[28px] block  md:hidden hover:text-blue-500  focus:text-blue-500 active:text-blue-500" onClick={() => setShowModal(true)}
               icon={faBars} />
            </div> 
            <Modal  isVisible={showModal} onclose={() =>
                setShowModal(false)}/>
            </Fragment>
            
          </div>
          <div className=" hidden md:block">
          <div className="   flex flex-cols m-4  ml-[220px] ">
            <div className="flex justify-center items-center" >
            <FontAwesomeIcon className="text-blue-500  cursor-pointer text-[24px]" icon={faHouse} />
            
            </div>
            <div className="ml-[50px] w-[120px] h-9 rounded-lg hover:bg-gray-200 transition duration-[0.3s] flex justify-center items-center">
            <FontAwesomeIcon className="text-[24px]  cursor-pointer" icon={faUserGroup} />
            </div>
            <div className=" w-[120px] h-9 rounded-lg  cursor-pointer hover:bg-gray-200 transition duration-[0.3s] flex justify-center items-center">
            <FontAwesomeIcon className="text-[24px]" icon={faVideo} />
            </div>
            <div className=" w-[120px] h-9 rounded-lg  cursor-pointer hover:bg-gray-200 transition duration-[0.3s] flex justify-center items-center">
            <FontAwesomeIcon className="text-[24px]" icon={faShop} />
            </div>
            <div className=" w-[120px] h-9 rounded-lg hover:bg-gray-200  cursor-pointer transition duration-[0.3s] flex justify-center items-center">
            <FontAwesomeIcon className="text-[24px]" icon={faPeopleGroup} />
            </div>
          </div>
          </div>

        </div>
        <div className="flex flex-row mt-[60px] ">
          <div className=' h-full md:w-1/4 bg-gray-100 hidden md:block'>
            <ul className=" m-3 font-bold text-[15px] ">
              <div className="flex flex-row pt-3 pb-3 hover:bg-slate-300 rounded-2xl transition duration-[0.3s] ">
                 <FontAwesomeIcon className=" pl-3 mr-4 w-auto text-gray-500" icon={faUser}/>
                 <li >  Olamide Bashir</li>
              </div>
              <div className="flex flex-row pt-3 pb-3 hover:bg-slate-300 rounded-2xl ">
                 <FontAwesomeIcon className=" pl-3 mr-4 w-auto text-blue-500 transition duration-[0.3s]" icon={faUserGroup}/>
                 <li >  Find Friends</li>
              </div>
              <div className="flex flex-row pt-3 pb-3 hover:bg-slate-300 rounded-2xl transition duration-[0.3s] ">
                <FontAwesomeIcon className=" pl-3 mr-4 w-auto textblack" icon={faBookmark} />
                 <li >  memories</li>
              </div>
              <div className="flex flex-row pt-3 pb-3 hover:bg-slate-300 rounded-2xl transition duration-[0.3s]">
                <FontAwesomeIcon className=" pl-3 mr-4 w-auto text-blue-500" icon={faPeopleGroup} />   
                 <li >  Groups</li>
              </div>
              <div className="flex flex-row pt-3 pb-3 hover:bg-slate-300 rounded-2xl transition duration-[0.3s]">
              <FontAwesomeIcon className=" pl-3 mr-4 w-auto text-blue-900" icon={faVideo} />
                 <li >Video</li>
              </div>
              <div className="flex flex-row pt-3 pb-3 hover:bg-slate-300 rounded-2xl transition duration-[0.3s]">
                 <FontAwesomeIcon className=" pl-3 mr-4 w-auto text-blue-500"icon={faGamepad} />
                 <li >  play Games</li>
              </div>
              <div className="flex flex-row pt-3 pb-3 hover:bg-slate-300 rounded-2xl transition duration-[0.3s]">
                 <FontAwesomeIcon className=" pl-3 mr-4 w-auto text-yellow-500"icon={faStar}/>
                 <li >  favorite</li>
              </div>
              <div className="flex flex-row pt-3 pb-3 hover:bg-slate-300 rounded-2xl transition duration-[0.3s]">
                 <FontAwesomeIcon className=" pl-3 mr-4 w-auto text-orange-500"icon={faFlag}/>
                 <li >  pages</li>
              </div>
              <div className="flex flex-row pt-3 pb-3 hover:bg-slate-300 rounded-2xl transition duration-[0.3s]">
                 <FontAwesomeIcon className=" pl-3 mr-4 w-auto text-green-500"icon={faTree}/>
                 <li >  Tree</li>
              </div>
              <div className="flex flex-row pt-3 pb-3 hover:bg-slate-300 rounded-2xl transition duration-[0.3s]">
                <FontAwesomeIcon className=" pl-3 mr-4 w-auto text-red-700" icon={faIdCard} />
                 <li >  cards and payment</li>
              </div>
            </ul>
          </div>
          <div className='h-screen md:w-2/4 bg-gray-200 w-screen '>
          
          </div>
          <div className=' md:h-screen md:w-1/4 bg-gray-100 w-hidden '>

          </div>
        </div>
        
        <Link to='/login'>Login</Link>
    </div>
  )
}