import Car from "./Car";
import pic1 from '../assets/projekt7.png'
import pic2 from '../assets/projekt5.png'
import pic3 from '../assets/projekt6.png'
import pic4 from '../assets/projekt4.png'
import pic5 from '../assets/projekt1.png'


let job = ''

const car = [
 
  job={
    text: 'Uslužnom obradom raznih vrsta drveta na CNC mašini',
    htext: 'Obradom drveta na CNC',
    image: pic2
  },
  job={
    text: 'Izradom svih vrsta duboreza i reljefa',
    htext: 'Izradom duboreza i reljefa',
    image: pic3
  },
  job={
    text: 'Izradom svih vrsta ograda, svih vrsta stubova, u različitim veličinama i oblicima',
    htext: 'Izradom ograda',
    image: pic4
  },

  job={
    text: 'Restuaracijom nameštaja svih vrsta, kao i uslužnim lakiranjem',
    htext: 'Restuaracijom nameštaja',
    image: pic1
  },
  job={
    text: 'Izraada ukrasa, okvira, praktično svega što možete zamisliti i što možemo izmodelirati',
    htext: 'Različitih oblika',
    image: pic5
  },

]

export default function CardList() {

    return (
<div className='w-full mr-4 sm:mr-0 justify-center grid grid-flow-row  h-full'>
          
          { car.map((user, i) => {
                    return(
                      <div key={i} className=' ml-1 mr-1 sm:mr-0 mt-3 mb-3 sm:ml-4 sm:mt-5 w-full h-full '>
                     <Car key={i} text={car[i].text}
                      htext={car[i].htext} 
                      image={car[i].image}
                                              />
                      </div>
                    );} 
          )}
          
        </div>

    )}