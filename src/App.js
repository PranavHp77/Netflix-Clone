import React from 'react'
import Navbar from './Components/NavBar/Navbar'
import "./App.css"
import Banner from './Components/Banner/Banner'
import Rowpost from './Components/Rowpost/Rowpost'
import {originals,action,drama,comedy,horror,romance} from './urls'
import Footer from './Components/Footer/Footer'


function App() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Rowpost url={action} title='Netflix Originals'/>
      <Rowpost url={horror} title='Action' isSmall/>
      <Rowpost url={drama} title='Drama' isSmall/>
      <Rowpost url={comedy} title='Comedy' isSmall/>
      <Rowpost url={romance} title='Romance' isSmall/>
      <Footer/>
    </div>
  )
}

export default App
