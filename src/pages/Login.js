import React, { Fragment, useState } from 'react'
// import { Link } from "react-router-dom"
import './style.css';
import Modal from "../components/modal" ;
import { IconName } from "react-icons/fa";

export default function Login() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className='overflow-x-hidden'>
      <div className='w-screen h-[720px] bg-gray-100 md:h-[700px] '>
        <div className='grid grid-cols-1 md:grid-cols-2 h-screen w-screen'>
          <div className="flex flex-col items-center md:justify-center">
            <div className='md:text-left text-center'>
              <h1 className='text-blue-500 text-6xl font-bold mb-[10px] mt-4 '>facebook</h1>
              <div className='text-[24px] md:text-[27px]'>facebook helps you connect,<br/> share with people in your life</div>
            </div>
          </div>
          <div className='flex flex-col items-center w-full mt-[30px]  md:justify-center  '>
            <div className='bg-white p-4 flex flex-col md:w-[390px] w-[337px]  rounded-lg shadow-xl md:mt-[100px]   ' >
            <form>
                <div>
                  <input type="text" required placeholder='Email address or phone number ' className='bg-transparent w-full  outline-blue-400 p-3 mb-4  ' />
                </div>
                <div>
                  <input type="password" required placeholder='Password' className='bg-transparent outline-blue-400 p-3 mb-4 w-full' />

                </div>
                <button className='bg-blue-600 p-2 font-semibold text-white rounded-lg text text-[20px] w-full'>Log In</button>
              </form>

              <a className='text-blue-600 font-medium text-center p-5 md:'>forgotten Password?</a>
              <div className='p8'><div className='bg-gray-200 h-0.5  '></div></div>
              <Fragment>
                <div className='flex items-center justify-center pt-8 pb-4'>
                  <button className='bg-green-500 hover:bg-green-600 p-3 font-bold  text-white hover:text-gray-100  rounded-lg text text-1xl w-[200px] ' onClick={() => setShowModal(true)}>Create new account</button>
                </div>
                <Modal isVisible={showModal} onclose={() =>
                setShowModal(false)} />
              </Fragment>
            </div>
            <div className='p-5'> 
            <a className='font-semibold'>Create a Page</a> for a celebrity, brand or business.
            </div>
            <signup/>
          </div>
        </div>
      </div>
      <div className='w-auto h-[180px] bg- md:w-screen  '> 
        <div className='text-xs pt-[30px] pl-[50px] pb-[10px] pr-[50px] md:pt-[30px] md:pl-[110px] md:pr-[110px] md:pb-[10px]'>
            <div className='text-gray-400 flex space-x-9 pb-4 '>
              <ul className='list-none '>
                  <li className='inline'><a>English (UK) </a></li>
                  <li className='inline ml-2'><a>Hausa </a></li>
                  <li className='inline  ml-2'><a>Français (France)</a></li>
                  <li className='inline  ml-2'><a>Português (Brasil) </a></li>
                  <li className='inline  ml-2'><a>Español</a></li>
                  <li className='inline  ml-2'><a>العربية</a></li>
                  <li className='inline  ml-2'><a>Bahasa Indonesia </a></li>
                  <li className='inline  ml-2'><a>Deutsch </a></li>
                  <li className='inline  ml-2'><a>日本語 </a></li>
                  <li className='inline  ml-2'><a>Italiano </a></li>
                  <li className='inline  ml-2'><a>हिन्दी </a></li>         
                  <button className=" ml-2 bg-gray-200 pl-3 pr-3 font-bold text-1xl text-black">+</button>
                </ul>
            </div>
            <div className='p8'><div className='bg-gray-200 h-0.5  '></div></div>
            <div className='text-gray-400 flex space-x-9 pt-4 '>
              <ul className='list-none '> 
                  <li className='inline'><a>Sign Up </a></li>
                  <li className='inline ml-3'><a>Log in </a></li>
                  <li className='inline ml-3'><a>Messenger </a></li>
                  <li className='inline ml-3'><a>Facebook Lite </a></li>
                  <li className='inline ml-3'><a>Video </a></li>
                  <li className='inline ml-3'><a>Places </a></li>
                  <li className='inline ml-3'><a>Game </a></li>
                  <li className='inline ml-3'><a>Markeplae </a></li>
                  <li className='inline ml-3'><a>Meta pay </a></li>
                  <li className='inline ml-3'><a>Meta quest </a></li>
                  <li className='inline ml-3'><a>Meta store </a></li>
                  <li className='inline ml-3'><a>Instagram </a></li>
                  <li className='inline ml-3'><a>Threads </a></li>
                  <li className='inline ml-3'><a>Fundraisers </a></li>
                  <li className='inline ml-3'><a>Services </a></li>
                  <li className='inline ml-3'><a>Visiting information center </a></li>
                  <li className='inline ml-3'><a>Privacy policy </a></li>
                  <li className='inline ml-3'><a>Privacy center </a></li>
                  <li className='inline ml-3'><a>Groups </a></li>
                  <li className='inline ml-3'><a>Create ads </a></li>
                  <li className='inline ml-3'><a>Create page </a></li>
                  <li className='inline ml-3'><a>Developers </a></li>
                  <li className='inline ml-3'><a>Careers </a></li>
                  <li className='inline ml-3'><a>cookies </a></li>
                  <li className='inline ml-3'><a>AdChoices </a></li>
                  <li className='inline ml-3'><a>Terms </a></li>
                  <li className='inline ml-3'><a>Help </a></li>
                  <li className='inline ml-3'><a>Contact uploading and non-users</a></li>
              </ul>
            </div>
            <p className='text-gray-500 pt-4'>meta @ 2023</p>
        </div>
      </div>
    </div>
  )
}