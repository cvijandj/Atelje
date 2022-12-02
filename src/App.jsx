import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Caro from './Components/Caro'
import Kontakt from './Components/Kontakt'
import MainAnimation from './Components/MainAnimation'
import saw from './assets/saw.gif'
import Type from './Components/Type'
import CardList from './Components/CardList'




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
