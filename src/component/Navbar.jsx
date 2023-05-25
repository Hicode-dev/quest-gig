import React,{useEffect,useState} from 'react'
import {BsFillCloudSunFill} from 'react-icons/bs'
import {FaMoon} from 'react-icons/fa'
import { FaSearch } from 'react-icons/fa'
const Navbar = () => {
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('ng');
  const [temperature, setTemperature] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');



  return (
    <div className='flex justify-between px-10 items-center  shadow-sm py-5'>
      <div className="weather">
       <BsFillCloudSunFill className='sm:text-3xl text-blue-600'  />
      </div>
  


    <div className="middle-content hidden md:block">
        <ul className='flex gap-5'>
            <li className='cursor-pointer'>Home</li>
            <li className='cursor-pointer'>About</li>
            <li className='cursor-pointer'>Faqs</li>
            <li className='cursor-pointer'>community</li>
        </ul>
    </div>
    <div className="right flex items-center gap-5">
        <button className='bg-slate-400 py-2 px-5 rounded-lg'>
            <FaMoon />
        </button>
        <button className='rounded-lg border py-2 px-5 border-blue-400'>
           <h2>EE</h2>
        </button>
    </div>
    </div>
  )
}

export default Navbar
