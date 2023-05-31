import React from 'react'
import {RiScreenshot2Fill} from 'react-icons/ri'
import {FaMicrophoneAlt} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';

const Searchh = () => {
    const navigate =  useNavigate()

    function Handle(params) {
        navigate('/search') 
      }
      
  return (
<div className='flex  my-10   justify-center items-center ' >
<div className='search flex px-5 text-slate-600  border border-blue-400  rounded-lg  p-3 mx-3  lg:w-[900px]'>
        <button className='outline-none border-none  lg:w-[900px]' onClick={()=>{
            navigate('/search')
        }} >

        </button>
        <div className='gap-2 flex'>
     <RiScreenshot2Fill />
      <FaMicrophoneAlt />
     </div>
    </div>
</div>
  )
}

export default Searchh