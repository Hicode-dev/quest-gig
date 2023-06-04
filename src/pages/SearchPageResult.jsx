import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'
import Search from '../component/Search'
import { BsFillCloudSunFill } from 'react-icons/bs'
import { FaMoon } from 'react-icons/fa'
import { FaSearch } from 'react-icons/fa'
import QuestGig from '../component/QuestGig'
import image1 from '../assets/Group 28.svg'
import Result from './Result'
import Sugestion from '../component/Sugestion'

const SearchPageResult = ({searchQuery}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('');

  const apiKey = '65gh2-60GD-1842-QAPI'; // Replace with your actual API key

  const handleSearch = async () => {
    setLoading(true);
    setData([]);

    const url = `https://questgig.com/api/v2/search?q=${query}&api_key=${apiKey}`;

    try {
      const response = await axios.get(url);
      const data = response.data;
      setLoading(false);
      setData(data);
      console.log(data);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSearch();
    }
  };

  useEffect(() => {
    if (query !== '') {
      handleSearch();
    }
  }, []);

  return (
    <div className="App">
      <div className='flex justify-between px-10 items-center  shadow-sm py-5'>
      <div className="weather">
        <img src={image1} className=' md:w-[8rem] w-[8rem]' alt="" />
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
    <div className='flex mx-3  md:mx-[13rem] flex-col'>
    <Search setData={setData} setLoading={setLoading}  onChange={handleInputChange}
          onKeyPress={handleKeyPress} />
      <Sugestion />
      {loading ? <p>losakdmkmdf </p> : data.length > 0 ? <>

      <div className='mt-12'>
      {
          data.map((C) => (
          <Result 
          
            title ={C.title}
            link ={C.link
            }
            alt = 'image'
            snippet ={C.snippet}
          />
        ))
      }
      </div>

   
      </>:
        <>
          <h3>askmkcnfndmmn</h3>
        </>
      }
    </div>


      {}
    </div>
  )
}

export default SearchPageResult
