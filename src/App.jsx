import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'
import QuestGig from './component/QuestGig'
import Search from './component/Search'
import DisplayButton from './component/DisplayButton'
import Card from './component/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar  />
      <QuestGig />
      <Search />
      <DisplayButton /> 
      <Card />
    </div>
  )
}

export default App
