import React,{useState}from 'react';
import {RiScreenshot2Fill} from 'react-icons/ri'
import {FaMicrophoneAlt} from 'react-icons/fa'
const Search = () => {
    const [query, setQuery] = useState('')
  
    const handleSearch = async (e) => {
      e.preventDefault();
      const url = `https://www.googleapis.com/customsearch/v1?key=${'AIzaSyBSR-JWgLM6MLGwXiCivFugOOjZPmcNDZQ'}&cx=${'47181b15c8d3d4263'}&q=${query}`;
    
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        // Process search results
      } catch (error) {
        console.error(error);
      }
    };
    
  return (
    <div className='flex  my-10   justify-center items-center '>
 <div className='search flex px-5 text-slate-600  border border-blue-400  rounded-lg items-center p-3 mx-3  lg:w-[900px] '>
    
  <form action="" className='outline-none border-none flex-grow' onSubmit={handleSearch}>
  <input type="text"className='outline-none border-none flex-grow'  onChange={(e) => setQuery(console.log(e.target.value))} />
  </form>
     <div className='gap-2 flex'>
     <RiScreenshot2Fill />
      <FaMicrophoneAlt />
     </div>
 </div>
    </div>
  );
}

export default Search;
