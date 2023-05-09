import React from 'react'
import { AiFillWechat, AiOutlineCloudDownload, AiFillCopy } from "react-icons/ai"
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
const CardCard = ({
  title,
  image,
  alt,
  des,
 href,
}) => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      useClassNames: true
    })
  }, []);
  return (

  <div className=' border mt-3 px-3 shadow-2xl bg-gray-100 md:w-1/4  py-3'   data-aos="zoom-out-down">
    <div >
      <h5 className='py-3'>{title}</h5>
      <p>3 mins</p>
    </div>
    <div className="image p-3">
      <img src={image
      } alt='image' />
    </div>
    <h5 className='py-3'>{des}  <a href={href} className='text-blue-700' target='_blank'>see more</a></h5>

    <div className="icons flex px-3 justify-between items-center">
      <AiFillWechat className='text-2xl ' />
      <AiOutlineCloudDownload className='text-2xl ' />
      <AiFillCopy className='text-2xl ' />
    </div>
  </div>
  )
}

export default CardCard
