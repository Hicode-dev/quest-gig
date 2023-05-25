import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'
import QuestGig from './component/QuestGig'
import Search from './component/Search'
import DisplayButton from './component/DisplayButton'
import Card from './component/Card'
import axios from 'axios'
import { useEffect } from 'react'
import SearchPageResult from './pages/SearchPageResult'
function App() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [load, setLoad] = useState(false)
  const [query, setQuery] = useState(true)

  // const apiKey = '65gh2-60GD-1842-QAPI'; // Replace with your actual API key
// console.log(data);
function All(query) {
 console.log(query);

}

  // const [query, setQuery] = useState('')
  const apiKey = '65gh2-60GD-1842-QAPI'; // Replace with your actual API key
  // const searchQuery = 'lorem' ; // Replace with your search query

  const handleSearch = async (query) => {
  setLoading(true)
  setQuery(query)
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
      <Navbar />
      <QuestGig />
      <Search setData={setData} setLoading={setLoading}  onchange={(e) => handleSearch(e.target.value)} />
      {loading ? <p>losakdmkmdf </p> : data.length > 0 ? <>
      </>:
        <>
          <DisplayButton />
          <Card />
        </>
      }
      {}
    </div>
  )
}

export default App
