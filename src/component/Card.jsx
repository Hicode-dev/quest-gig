import React from 'react';
import image1 from '../assets/unsplash_4hbJ-eymZ1o.svg'
import image2 from '../assets/unsplash_gKXKBY-C-Dk.png'
import image3 from '../assets/unsplash_gKXKBY-C-Dk.svg'

import {AiFillWechat,AiOutlineCloudDownload,AiFillCopy} from "react-icons/ai"
import { useState,useEffect, } from 'react';
import axios from 'axios';
const Card = () => {
  const [newsData, setNewsData] = useState([]);
  const [numArticles, setNumArticles] = useState(9
);
const Fetch= async () =>{
  const config = {
      
    params: {
      country: 'ng',
      api_key: '65gh2-60GD-1742-QAPI',
      q:  Math.floor(Math.random(numArticles) * 100)
    
    }
  };
  let {data} =await axios.get('https://questgig.com/api/v2/news?q=10', config)
  setNewsData(data.articles.slice(0, numArticles))
  console.log(data.articles);
}
  useEffect(() => {
   Fetch()
  }, []);

 


  return (
   <div className='flex capitalize flex-wrap  justify-center items-center gap-5'>
    {
      newsData.map((C)=>(
        <div className=' border mt-3 px-3 shadow-2xl bg-gray-100 md:w-1/4 h-3/4'>
        <div >
          <h5 className='py-3'>{C.title}</h5>
              <p>3 mins</p>
        </div>
        <div className="image p-3">
          <img src={image2} alt="" />
        </div>
        <h5 className='py-3'>{C.description}  <a href={C.url} className='text-blue-700'>see more</a></h5>

          <div className="icons flex px-3 justify-between items-center">
              <AiFillWechat  className='text-2xl '  />
              <AiOutlineCloudDownload  className='text-2xl ' />
              <AiFillCopy  className='text-2xl ' />
          </div>
      </div>
      ))        
    
    }
   

  
   </div>
  );
}

export default Card;
