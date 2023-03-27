import React from 'react';
import image1 from '../assets/unsplash_4hbJ-eymZ1o.svg'
import image2 from '../assets/unsplash_gKXKBY-C-Dk.png'
import image3 from '../assets/unsplash_gKXKBY-C-Dk.svg'
const Card = () => {
  return (
   <div className='flex capitalize flex-wrap  justify-center items-center gap-5'>
     <div className=' border mt-3 px-3 shadow-2xl bg-gray-100'>
      <div >
        <h5 className='py-3'>what a cat eat for sure</h5>
            <p>3 mins</p>
      </div>
      <div className="imaoge p-3">
        <img src={image2} alt="" />
      </div>
    </div>
     <div className=' border mt-3 px-3 shadow-2xl bg-gray-100'>
      <div >
        <h5 className='py-3'>what a cat eat for sure</h5>
            <p>3 mins</p>
      </div>
      <div className="imaoge p-3">
        <img src={image3} alt="" />
      </div>
    </div>
     <div className=' border mt-3 px-3 shadow-2xl bg-gray-100'>
      <div >
        <h5 className='py-3'>what a cat eat for sure</h5>
            <p>3 mins</p>
      </div>
      <div className="imaoge p-3">
        <img src={image1} alt="" />
      </div>
    </div>
  
   </div>
  );
}

export default Card;
