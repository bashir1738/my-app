import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser} from '@fortawesome/free-solid-svg-icons'
import { faUserGroup} from '@fortawesome/free-solid-svg-icons'
import { faPeopleGroup} from '@fortawesome/free-solid-svg-icons'
import { faBookmark} from '@fortawesome/free-solid-svg-icons'
import { faVideo} from '@fortawesome/free-solid-svg-icons'
import { faFlag} from '@fortawesome/free-solid-svg-icons'
import { faStar} from '@fortawesome/free-solid-svg-icons'
import { faGamepad} from '@fortawesome/free-solid-svg-icons'
import { faTree} from '@fortawesome/free-solid-svg-icons'

const menu = ({isVisible, onclose}) => {
    if (!isVisible) return null
  return (
    <div className='fixed mt-[-9px] '>
        <div className='w-full h-screen'>
        <button className='place-self-center ml-[113px] text-[45px] text-transparent'   onClick={() => onclose()}>x</button>
            <div className='bg-gray-100 p-2 '    >
            <div className="flex flex-row">
            <ul className=" m-3 font-bold text-[15px] -9 ">
              <div className=" w-screen  flex flex-row pt-3 pb-3 hover:bg-slate-300 rounded-2xl transition duration-[0.3s] ">
                 <FontAwesomeIcon className=" pl-3 mr-4 w-auto text-gray-500" icon={faUser}/>
                 <li >  Olamide Bashir</li>
              </div>
              <div className="flex flex-row pt-3 pb-3 hover:bg-slate-300 rounded-2xl ">
                 <FontAwesomeIcon className=" pl-3 mr-4 w-auto text-blue-500 transition duration-[0.3s]" icon={faUserGroup}/>
                 <li >  Find Friendsr</li>
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
            </ul>
            </div>
            </div>
        </div>
    </div>
  )
}
export default menu