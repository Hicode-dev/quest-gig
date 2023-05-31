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

const SearchPageResult = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [load, setLoad] = useState(false)
  const [query, setQuery] = useState(true)
  


  // Start navigation when the component mounts


  // const apiKey = '65gh2-60GD-1842-QAPI'; // Replace with your actual API key
// console.log(data);
function All(query) {
//  console.log(query);

}

  // const [query, setQuery] = useState('')
  const apiKey = '65gh2-60GD-1842-QAPI'; // Replace with your actual API key
  // const searchQuery = 'lorem' ; // Replace with your search query

  const handleSearch = async (query) => {
  setLoading(true)
  // setData([])
  // console.log("query1",query);
    // query.preventDefault();
    const url = `https://questgig.com/api/v2/search?q=${query}&api_key=${apiKey}`;

    try {
      const response = await axios.get(url);
      const data = response.data
      setLoading(false)
      setData(data)
      // setQuery(data)
      console.log(data);
      // Process search results
    } catch (error) {
      setLoading(false)
      console.error(error);
    }
  };
  useEffect(() => {
  }, [])
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
      <Search setData={setData} setLoading={setLoading}  onchange={(e) => handleSearch(e.target.value)} />
      {loading ? <p>losakdmkmdf </p> : data.length > 0 ? <>
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
      </>:
        <>
          <h3>askmkcnfndmmn</h3>
        </>
      }
      {}
    </div>
  )
}

export default SearchPageResult
