import { useState,createContext } from 'react'
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
import Home from './pages/Home'
import {useNavigate} from 'react-router-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
export const LogContext = createContext()

function App() {
  

  return (
    <div className="App">

 
    
        <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchPageResult />} />
      </Routes>
    </Router>
    </div>
  )
  
}

export default App
