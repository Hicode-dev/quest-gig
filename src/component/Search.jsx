import React from 'react';
import {RiScreenshot2Fill} from 'react-icons/ri'
import {FaMicrophoneAlt} from 'react-icons/fa'
const Search = () => {
  return (
    <div className='flex  my-10   justify-center items-center '>
 <div className='search flex px-5 text-slate-600  border border-blue-400  rounded-lg items-center p-3 mx-3  lg:w-[900px] '>
    
 <input type="text" className='outline-none border-none flex-grow' />
     <div className='gap-2 flex'>
     <RiScreenshot2Fill />
      <FaMicrophoneAlt />
     </div>
 </div>
    </div>
  );
}

export default Search;
