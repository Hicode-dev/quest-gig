import React from 'react';
import image1 from '../assets/unsplash_4hbJ-eymZ1o.svg'
import image2 from '../assets/unsplash_gKXKBY-C-Dk.png'
import image3 from '../assets/unsplash_gKXKBY-C-Dk.svg'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { AiFillWechat, AiOutlineCloudDownload, AiFillCopy } from "react-icons/ai"
import { useState, useEffect, } from 'react';
import axios from 'axios';
import CardCard from './CardCard';
const Card = () => {
  const [newsData, setNewsData] = useState([]);
  const [numArticles, setNumArticles] = useState(9
  );
  const Fetch = async () => {
    const config = {

      params: {
        country: 'ng',
        api_key: '65gh2-60GD-1742-QAPI',
        q: Math.floor(Math.random(numArticles) * 36)

      }
    };
    let { data } = await axios.get('https://questgig.com/api/v2/news?q=10', config)
    setNewsData(data.articles.slice(0, numArticles))
    // console.log(data.articles);
  }
  useEffect(() => {
    Fetch()
    Aos.init({
      duration: 1000,
      useClassNames: true
    })
  }, []);



  return (
    <div className='flex capitalize flex-wrap  justify-center animation  gap-5' data-aos="zoom-out-left">
      {
        newsData.map((C) => (
          <CardCard
          
            title ={C.title}
            image ={C.news_thumbnail            }
            alt = 'image'
            des ={C.description
            }
            href ={C.url}
          />
        ))

      }



    </div>
  );
}

export default Card;
