import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Caro from './components/Caro'
import Kontakt from './components/Kontakt'
import Typewriter from 'typewriter-effect';
import MainAnimation from './components/MainAnimation'


function App() {
  
  return (
    <div className="App">
    <div className=" shadow-xl absolute z-10 inset-y-0 left-0 w-full ">
        <Navbar  />
        <div className="z-10 shadow-lg shadow-slate-900 bg-[url('./assets/peeled-wood-texture3.jpg')] p-3 h-56 md:pl-40 md:pr-40  lg:h-full w-full text-center items-center">
        <Caro/>
      </div>
      
      <section id="onama">
        <div className='w-full justify-start text-start h-screen'>
          <MainAnimation/>
          <div className='pt-5 lg:pt-10 w-full h-1/3'>
          <div className=' m-0 p-0 text-lg lg:text-6xl font-bold font-sans w-full'>
          <Typewriter
               options={{
                 strings: ['Zdravo, ja sam Vukašin,'],
                 pauseFor: 12000,
                 autoStart: true,
                 loop: true,
               }}
             />
             </div>
             <div className=' m-0 p-0 top-0 text-lg lg:text-6xl  font-bold font-sans w-full '>
             <Typewriter
               options={{
                 strings: ['bavim se preradom drveta.'],
                 pauseFor: 12000,
                 
                 autoStart: true,
                 loop: true,
               }}
             />
             </div>
             </div>
        </div>
      </section>
      <section id="kontakt">
        <div className='w-screen h-auto'>
        <Kontakt/>
        </div>
      </section>
        </div>
    </div>
  )
}

export default App
