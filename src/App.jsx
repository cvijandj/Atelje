import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Caro from './components/Caro.jsx'
import Kontakt from './components/Kontakt.jsx'
import MainAnimation from './components/MainAnimation.jsx'
import saw from './assets/saw.gif'
import Type from './components/Type.jsx'
import CardList from './components/CardList.jsx'




function App() {
  
  return (
    <div className="App">
       <Navbar  />  
      <div className=" mt-16 absolute inset-y-0 inset-x-0 left-0 w-screen ">
          
        <Caro/>
        <MainAnimation/>
      <section id="onama">
      <Type/>
          <CardList/>
      </section>
      <section id="kontakt">
        <Kontakt/>
      </section>
      </div>  
   </div>
  )
}

export default App
