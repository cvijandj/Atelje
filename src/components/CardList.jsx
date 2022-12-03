import Car from "./Car";
import pic1 from '../assets/projekt7.png'
import pic2 from '../assets/projekt5.png'
import pic3 from '../assets/projekt6.png'
import pic4 from '../assets/projekt4.png'
import pic5 from '../assets/projekt1.png'


let job = ''

const car = [
 
  job={
    text: 'Услужном обрадом дрвета на ЦНЦ (CNC) машинама, као и ручном обрадом дрвета.',
    htext: 'Обрадом дрвета на ЦНЦ (CNC)',
    image: pic2
  },
  job={
    text: 'Израдом свих врста дубореза и рељефа',
    htext: 'Израдом дубореза и рељефа',
    image: pic3
  },
  job={
    text: 'Израдом свих врста ограда, стубова, у различитим величинама и облицима.',
    htext: 'Израдом ограда',
    image: pic4
  },

  job={
    text: 'Израда намештаја по вашим мерама и вашим жељама.',
    htext: 'Израдом намештаја',
    image: pic1
  },
  job={
    text: 'Израдом украса, оквира, лампа, свега што можете замислити, а да је изводљиво измоделирати и израдити.',
    htext: 'Израдом различитих облика',
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