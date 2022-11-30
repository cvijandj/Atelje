import { Carousel } from 'flowbite-react'
import pic1 from '../assets/1.png'
import pic2 from '../assets/2.png'
import pic3 from '../assets/3.png'
import pic4 from '../assets/4.png'

export default function Caro() {
    return (
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
   
  </Carousel>
</div>

    );
}