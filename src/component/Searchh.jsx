import React,{useState}from 'react';
import {RiScreenshot2Fill} from 'react-icons/ri'
import {FaMicrophoneAlt} from 'react-icons/fa'
    import axios from 'axios';
    import {useNavigate} from 'react-router-dom'

const Search = ({setData , setLoading, onchange , onsubmit}) => {
  const [searchQuery, setSearchQuery] = useState("")
  const navigation = useNavigate();


  const handleSearch = () => {
    // Perform your search logic here

    // Navigate to the search results component with the search query as a parameter
  navigation('/search');
  };

    
  return (
    <div className='flex  my-10   justify-center items-center '>
 <div className='search flex px-5 text-slate-600  border border-blue-400  rounded-lg items-center p-3 mx-3  lg:w-[900px] '>
    
  <form action="" className='outline-none border-none flex-grow'  onSubmit={handleSearch} >
  <input type="text"className='outline-none border-none flex-grow'         value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}    />
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
