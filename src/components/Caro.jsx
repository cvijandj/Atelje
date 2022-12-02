import { Carousel } from 'flowbite-react'
import pic1 from '../assets/projekt4.png'
import pic2 from '../assets/projekt5.png'
import pic3 from '../assets/projekt6.png'
import pic4 from '../assets/projekt7.png'
import pic5 from '../assets/projekt1.png'


export default function Caro() {
  return (
    
    <div className="z-10 shadow-lg shadow-slate-900 bg-[url('./assets/peeled-wood-texture3.jpg')] p-3 h-56 md:pl-40 md:pr-40  md:h-full w-screen text-center items-center">
        <div className=" border-4 shadow-slate-900 shadow-lg w-full top-0 h-full items-stretch">
  <Carousel slideInterval={5000}>
    <img 
      src={pic1}
      alt="..."
    />
    <img
      src={pic2}
      alt="..."
    />
    <img
      src={pic3}
      alt="..."
    />
    <img
      src={pic4}
      alt="..."
    />
    <img
      src={pic5}
      alt="..."
    />
  </Carousel>
  </div>
  </div>
  
  )
}