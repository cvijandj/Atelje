import Typewriter from 'typewriter-effect';



export default function Type() {
    return(
<div className="  pt-5 justify-center grid grid-flow-row lg:pt-10 w-screen h-1/3" >
          <div className=' m-0 p-0 text-2xl md:text-6xl ledgewood font-bold w-full'>
          <Typewriter
               options={{
                 strings: ['Здраво, ми смо Атеље Симикић,'],
                 pauseFor: 12000,
                 autoStart: true,
                 loop: true,
               }}
             />
             </div>
             <h1 className='mt-2 text-lg md:text-6xl ledgewood mr-42 sm:mr-96 font-bold'> Бавимо се:</h1>
             
             {/**<div className=' m-0 p-0 top-0 text-lg lg:text-6xl  font-bold font-sans w-full '>
             <Typewriter
               options={{
                 strings: ['bavim se preradom drveta.'],
                 pauseFor: 12000,
                 
                 autoStart: true,
                 loop: true,
               }}
             />
            </div>**/}
             </div>
    )}