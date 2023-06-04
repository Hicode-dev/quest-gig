import React from 'react';
import SearchImage from './SearchImage';

const Sugestion = () => {
  return (
 <div className=''>
       <div className='flex items-center gap-4 transition-all duration-150 trans'>
        <button className='  font-bold hover:bg-slate-300' >Search</button>
        <button className='  font-bold px-3' >Q Bot</button>
        <button className='   font-bold px-3' >Images</button>
        <button className='   font-bold px-3' >Videos</button>
        <button className='   font-bold px-3' >News</button>
        <button className='   font-bold px-3' >More</button>
    </div>
    <SearchImage />
 </div>
  );
}

export default Sugestion;
