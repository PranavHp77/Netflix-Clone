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
      <Rowpost url={originals} title='Netflix Originals'/>
      <Rowpost url={action} title='Action' isSmall/>
      <Rowpost url={drama} title='Drama' isSmall/>
      <Rowpost url={comedy} title='Comedy' isSmall/>
      <Rowpost url={horror} title='Horror' isSmall/>
      <Rowpost url={romance} title='Romance' isSmall/>
      <Footer/>
    </div>
  )
}

export default App
