// import React, { Fragment } from "react"
import { Link } from "react-router-dom"
import React, { Fragment, useState } from 'react'
import './style.css'
import Modal from "../components/menu" ;
import Profile from "../components/profile" ;
import aimage from './image/a.png';
import Post from "../components/post";
// import cimage from "./image/c.jfif";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceSmile, faPhotoFilm, faUser} from '@fortawesome/free-solid-svg-icons'
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
import { faMessage} from '@fortawesome/free-solid-svg-icons'
import { faBell} from '@fortawesome/free-solid-svg-icons'
import { faEllipsis} from '@fortawesome/free-solid-svg-icons'
import { faPlus} from '@fortawesome/free-solid-svg-icons'


export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showPost, setShowPost] = useState(false);

  
  return (
    <div>
        <div className="fixed top-0 h-[50px] flex flex-cols  w-full bg-white overflow-x-hidden shadow-lg">
          <div className="flex flex-cols">
            <div className="md:mr-0 mr-1">
              <img className="m-2 " src={aimage}/>
            </div>
            <div class="searchBox md:ml-0 ml-6 fixed ">
                <input class="searchInput"type="text" name="" placeholder="Search"/>
                  <button class="searchButton" href="#">
                    <FontAwesomeIcon className=" cursor-pointer text-[15px] " icon={faMagnifyingGlass} />
                  </button>
            </div>
             
            <Fragment>
            <div className="md:ml-0 ml-7 pl-7 pt-3 md:text-blue-300 text-black">
              <FontAwesomeIcon className="  cursor-pointer text-[28px] block  md:hidden hover:text-blue-500  focus:text-blue-500 active:text-blue-500" onClick={() => setShowModal(true)}
               icon={faBars} />
            </div> 
            <Modal  isVisible={showModal} onclose={() =>
                setShowModal(false)}/>
            </Fragment>
            
          </div>
          <div className=" hidden md:block">
          <div className="flex flex-cols m-2  ml-[220px] ">
            <div className="flex flex-col mt-[4px] justify-center items-center" >
              <div>
                 <FontAwesomeIcon className="text-blue-500  cursor-pointer text-[24px]" icon={faHouse} />
              </div>
            <div className='pt-[7px] '><div className='bg-blue-500 h-1 w-[80px] '></div></div>
           
            </div>
            <div className="ml-[30px]  w-[120px] h-9 rounded-lg hover:bg-gray-200 transition duration-[0.3s] flex justify-center items-center">
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
          </div  >
            <div className="fixed right-1 flex flex-cols m-1">
              <div className=" w-[35px] h-[40px] mr-2 rounded-[60px] hover:bg-gray-400  cursor-pointer bg-gray-300 transition duration-[0.3s] flex justify-center items-center">
              <FontAwesomeIcon className="text-[15px] text-black"  icon={faEllipsis} />
              </div>
              <div className=" w-[35px] mr-2 h-[40px] rounded-[60px]  cursor-pointer hover:bg-gray-400  bg-gray-300 transition duration-[0.3s] flex justify-center items-center">
              <FontAwesomeIcon className="text-[15px] text-black" icon={faMessage} />
              </div>
              <div className=" w-[35px] mr-2 h-[40px] rounded-[60px] hover:bg-gray-400  bg-gray-300  cursor-pointer transition duration-[0.3s] flex justify-center items-center">
              <FontAwesomeIcon className="text-[15px] text-black " icon={faBell} />
              </div>
              <Fragment>
                <div  onClick={() => setShowProfile(true)} className=" mr-2 w-[35px]  h-[40px] rounded-[60px] bg-gray-300 hover:bg-gray-400  cursor-pointer transition duration-[0.3s] flex justify-center items-center">
                  <FontAwesomeIcon  className="text-[18px] text-white flex justify-center items-center " icon={faUser}  />
                </div> 
                <Profile  isVisible={showProfile} onclose={() =>
                setShowProfile(false)}/>  
              </Fragment>
              
              
            </div>
 
        </div>
        <div className="flex flex-row mt-[50px] ">
          <div className='fixed left-0 h-full  md:w-1/4 bg-gray-100 hidden md:block '>
            <ul className=" m-3 font-bold text-[15px] ">
              <div className="flex flex-row pt-3 pb-3 hover:bg-slate-200 rounded-2xl transition duration-[0.3s] ">
                 <FontAwesomeIcon className=" pl-3 mr-4 w-auto text-gray-500" icon={faUser}/>
                 <li >  Olamide Bashir</li>
              </div>
              <div className="flex flex-row pt-3 pb-3 hover:bg-slate-200 rounded-2xl ">
                 <FontAwesomeIcon className=" pl-3 mr-4 w-auto text-blue-500 transition duration-[0.3s]" icon={faUserGroup}/>
                 <li >  Find Friends</li>
              </div>
              <div className="flex flex-row pt-3 pb-3 hover:bg-slate-200 rounded-2xl transition duration-[0.3s] ">
                <FontAwesomeIcon className=" pl-3 mr-4 w-auto textblack" icon={faBookmark} />
                 <li >  memories</li>
              </div>
              <div className="flex flex-row pt-3 pb-3 hover:bg-slate-200 rounded-2xl transition duration-[0.3s]">
                <FontAwesomeIcon className=" pl-3 mr-4 w-auto text-blue-500" icon={faPeopleGroup} />   
                 <li >  Groups</li>
              </div>
              <div className="flex flex-row pt-3 pb-3 hover:bg-slate-200 rounded-2xl transition duration-[0.3s]">
              <FontAwesomeIcon className=" pl-3 mr-4 w-auto text-blue-900" icon={faVideo} />
                 <li >Video</li>
              </div>
              <div className="flex flex-row pt-3 pb-3 hover:bg-slate-200 rounded-2xl transition duration-[0.3s]">
                 <FontAwesomeIcon className=" pl-3 mr-4 w-auto text-blue-500"icon={faGamepad} />
                 <li >  play Games</li>
              </div>
              <div className="flex flex-row pt-3 pb-3 hover:bg-slate-200 rounded-2xl transition duration-[0.3s]">
                 <FontAwesomeIcon className=" pl-3 mr-4 w-auto text-yellow-500"icon={faStar}/>
                 <li >  favorite</li>
              </div>
              <div className="flex flex-row pt-3 pb-3 hover:bg-slate-200 rounded-2xl transition duration-[0.3s]">
                 <FontAwesomeIcon className=" pl-3 mr-4 w-auto text-orange-500"icon={faFlag}/>
                 <li >  pages</li>
              </div>
              <div className="flex flex-row pt-3 pb-3 hover:bg-slate-200 rounded-2xl transition duration-[0.3s]">
                 <FontAwesomeIcon className=" pl-3 mr-4 w-auto text-green-500"icon={faTree}/>
                 <li >  Tree</li>
              </div>
              <div className="flex flex-row pt-3                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   3 pb-3 hover:bg-slate-200 rounded-2xl transition duration-[0.3s]">
                <FontAwesomeIcon className=" pl-3 mr-4 w-auto text-red-700" icon={faIdCard} />
                 <li >  cards and payment</li>
              </div>
            </ul>
          </div>
          <div className=' h-screen md:w-2/4 bg-gray-100 w-screen ml-0 md:ml-[295px] items-center  '>
            <div className="md:p-5 p-3 flex  flex-cols ">
              <div  className="w-[150px] hover:bg-neutral-50 transition duration-[0.4s] hover:bg-opacity-30 bg-white h-[240px] rounded-xl shadow-xl cursor-pointer">
                 <div class="fff">
                    <div className="p-1 flex justify-center">
                      <div className=" mt-[163px]  p-1 h-[43px] w-[42px] bg-white rounded-[40px]">
                        <div className=" w-[35px]  h-[35px] rounded-[60px]  cursor-pointer  bg-blue-500 flex justify-center items-center ">
                          <FontAwesomeIcon className="text-white" icon={faPlus} />
                        </div>
                      </div>
                     </div >
                     <p className="text-[14px]   font-semibold flex justify-center">create story</p>
                  </div> 
              </div>
              <div  className="w-[150px] ml-2 bg-gray-100 h-[240px] rounded-xl shadow-xl cursor-pointer">

              </div>
              <div  className="w-[130px] ml-2 bg-gray-100 h-[240px] rounded-xl shadow-xl cursor-pointer">

              </div>
            </div>
            <div className="flex justify-center" >
              <div className=" bg-white md:w-[500px]  w-[350px] h-auto p-4 rounded-xl shadow-xl "> 
              <div className="flex flex-cols">
                <div className=" mr-2 w-[40px]  h-[40px] rounded-[60px]  transition duration-[0.4s] hover:bg-slate-500 bg-gray-400 cursor-pointer  flex justify-center items-center">
                  <FontAwesomeIcon  className="text-[22px] text-white flex justify-center items-center " icon={faUser}  />
                </div>
                <Fragment>
                <div  onClick={() => setShowPost(true)}  className="w-full p-2 rounded-2xl shadow-md bg-gray-100 hover:bg-slate-200 cursor-pointer transition duration-[0.4s] text-gray-500 " >
                  What's on your mind, olamide ?
                </div>
                <Post isVisible={showPost} onclose={() =>
                setShowPost(false)}/>
                </Fragment>
              </div>
                <div className='pt-3 pb-3'><div className='bg-gray-200 h-0.5  '></div></div>
                <div className="md:flex-row flex flex-col">
                  <div className="cursor-pointer flex flex-cols pt-2 pb-2 pl-2 pr-2 hover:bg-slate-200 rounded-xl transition duration-[0.3s]">
                    <FontAwesomeIcon className=" pl-3 mr-4 w-auto text-red-500" icon={faVideo} />
                    <p className="mt-[-3px]">Live Video</p>
                  </div>
                  <div className="cursor-pointer flex flex-cols pt-2 pb-2 pl-2 pr-2 hover:bg-slate-200 rounded-xl transition duration-[0.3s]">
                    <FontAwesomeIcon className=" pl-3 mr-4 w-auto text-blue-500" icon={faPhotoFilm} />
                    <p className="mt-[-3px]">Photo/video</p>
                  </div>
                  <div className="cursor-pointer flex flex-cols pt-2 pb-2 pl-2 pr-2 hover:bg-slate-200 rounded-xl transition duration-[0.3s]">
                    <FontAwesomeIcon className=" pl-3 mr-4 w-auto text-yellow-400" icon={faFaceSmile} />
                    <p className="mt-[-3px]">Feeling/Activity</p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
          <div className=' md:h-screen md:w-1/4 bg-gray-100 h-screen  hidden md:block    '>
              <div className="flex flex-row pt-5 pl-4" >
                <div className="text-[20px] mr-[90px] font-semibold">Contacts</div>
               <div className="  mr-[10px] cursor-pointer w-9 h-9 flex justify-center items-center rounded-3xl hover:bg-gray-200">
                  <FontAwesomeIcon className="text-[15px] text-black"  icon={faMagnifyingGlass} />
                </div>
                <div className="cursor-pointer  w-9 h-9 flex justify-center items-center rounded-3xl hover:bg-gray-200">
                  <FontAwesomeIcon className="text-[15px] text-black"  icon={faEllipsis} />
                </div>
              </div>
              <div className="">
              <div className='ml-[-10px] pt-1'>
            <ul className=' m-3 font-semibold text-[15px] cursor-pointer '>
              <div className="flex flex-row pl-3 pt-1 pb-1 hover:bg-slate-200 rounded-2xl transition duration-[0.4s] ">
                <div className=" w-[35px] mr-2 h-[40px] rounded-[60px]  cursor-pointer  bg-gray-300 transition duration-[0.3s] flex justify-center items-center">
                  <FontAwesomeIcon className="text-[20px] text-black" icon={faUser} />
                </div>
                 <li className='mt-3' >james raphael</li>  
              </div>
              <div className="flex flex-row pt-1 pl-3 pb-1 hover:bg-slate-200 rounded-2xl transition duration-[0.4s] ">
                <div className=" w-[35px] mr-2 h-[40px] rounded-[60px]  cursor-pointer  bg-gray-300 transition duration-[0.3s] flex justify-center items-center">
                  <FontAwesomeIcon className="text-[20px] text-black" icon={faUser} />
                </div>
                 <li className='mt-3' > carlos alonso</li>  
              </div>
              <div className="flex flex-row pt-1 pb-1 pl-3 hover:bg-slate-200 rounded-2xl transition duration-[0.4s] ">
                <div className=" w-[35px] mr-2 h-[40px] rounded-[60px]  cursor-pointer hover:bg-gray-400  bg-gray-300 transition duration-[0.3s] flex justify-center items-center">
                  <FontAwesomeIcon className="text-[20px] text-black" icon={faUser} />
                </div>
                 <li className='mt-3' >liu isaac</li>  
              </div>
              <div className="flex flex-row pt-1 pb-1 pl-3 hover:bg-slate-200 rounded-2xl transition duration-[0.4s] ">
                <div className=" w-[35px] mr-2 h-[40px] rounded-[60px]  cursor-pointer hover:bg-gray-400  bg-gray-300 transition duration-[0.3s] flex justify-center items-center">
                  <FontAwesomeIcon className="text-[20px] text-black" icon={faUser} />
                </div>
                 <li className='mt-3' >amadi andrew</li>  
              </div>
              <div className="flex flex-row pt-1 pb-1 pl-3 hover:bg-slate-200 rounded-2xl transition duration-[0.4s] ">
                <div className=" w-[35px] mr-2 h-[40px] rounded-[60px]  cursor-pointer hover:bg-gray-400  bg-gray-300 transition duration-[0.3s] flex justify-center items-center">
                  <FontAwesomeIcon className="text-[20px] text-black" icon={faUser} />
                </div>
                 <li className='mt-3'>judith james</li>  
              </div>
              <div className="flex flex-row pt-1 pb-1 pl-3 hover:bg-slate-200 rounded-2xl transition duration-[0.4s] ">
                <div className=" w-[35px] mr-2 h-[40px] rounded-[60px]  cursor-pointer hover:bg-gray-400  bg-gray-300 transition duration-[0.3s] flex justify-center items-center">
                  <FontAwesomeIcon className="text-[20px] text-black" icon={faUser} />
                </div>
                 <li className='mt-3'>Bisola oloruntoba</li>  
              </div>
              <div className="flex flex-row pt-1 pb-1 pl-3 hover:bg-slate-200 rounded-2xl transition duration-[0.4s] ">
                <div className=" w-[35px] mr-2 h-[40px] rounded-[60px]  cursor-pointer hover:bg-gray-400  bg-gray-300 transition duration-[0.3s] flex justify-center items-center">
                  <FontAwesomeIcon className="text-[20px] text-black" icon={faUser} />
                </div>
                 <li className='mt-3'>Godwin Emzzy</li>  
              </div>
              <div className="flex flex-row pt-1 pb-1 pl-3 hover:bg-slate-200 rounded-2xl transition duration-[0.4s] ">
                <div className=" w-[35px] mr-2 h-[40px] rounded-[60px]  cursor-pointer hover:bg-gray-400  bg-gray-300 transition duration-[0.3s] flex justify-center items-center">
                  <FontAwesomeIcon className="text-[20px] text-black" icon={faUser} />
                </div>
                 <li className='mt-3'>wisdom enorse</li>  
              </div>
              <div className="flex flex-row pt-1 pb-1 pl-3 hover:bg-slate-200 rounded-2xl transition duration-[0.4s] ">
                <div className=" w-[35px] mr-2 h-[40px] rounded-[60px]  cursor-pointer hover:bg-gray-400  bg-gray-300 transition duration-[0.3s] flex justify-center items-center">
                  <FontAwesomeIcon className="text-[20px] text-black" icon={faUser} />
                </div>
                 <li className='mt-3'>Daniel dallang</li>  
              </div>
              <div className="flex flex-row pt-1 pb-1 pl-3 hover:bg-slate-200 rounded-2xl transition duration-[0.4s] ">
                <div className=" w-[35px] mr-2 h-[40px] rounded-[60px]  cursor-pointer hover:bg-gray-400  bg-gray-300 transition duration-[0.3s] flex justify-center items-center">
                  <FontAwesomeIcon className="text-[20px] text-black" icon={faUser} />
                </div>
                 <li className='mt-3'>Henry james</li>  
              </div>
              
            </ul>
          </div>
              </div>
          </div>
        </div>
    </div>
  )
}