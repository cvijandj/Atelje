import {  Footer } from 'flowbite-react'
import atelje from '../assets/Atelje-removebg.png'
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook} from 'react-icons/fa';
import { FaPhoneAlt} from 'react-icons/fa';
import { FaMapMarkerAlt} from 'react-icons/fa';


export default function Kontakt() {
    return (
      <div className='w-screen h-auto'>
      <Footer container={true}>
  <div className="w-full h-full text-center">
    <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
      <Footer.Brand
        href="https://www.instagram.com/atelje_simikic/"
        src={atelje}
        alt="Атеље Симикић, Atelje Simikic, obrada drveta Beograd Simanovci"
        name="Атеље Симикић"
      />
      <Footer.LinkGroup>
        <Footer.Link href="https://www.google.com/maps/place/%D0%90%D1%82%D0%B5%D1%99%D0%B5+%D0%A1%D0%B8%D0%BC%D0%B8%D0%BA%D0%B8%D1%9B/@44.8671503,20.0969606,15z/data=!4m5!3m4!1s0x0:0x62496b765e184163!8m2!3d44.8671503!4d20.0969606">
        <div className=' flex justify-around '>
        <FaMapMarkerAlt /> <p>Шимановци, Дечка 65</p>
        </div>
        </Footer.Link>
        <Footer.Link href="https://www.instagram.com/atelje_simikic/" >
          <div className=' flex flex-start justify-between items-center'>
        <FaInstagram /> Инстаграм
        </div>
        </Footer.Link>
        <Footer.Link href="+38163396836">
        <div className=' flex flex-start justify-between items-center'>
        <FaPhoneAlt /> +38163396836
        </div>
        </Footer.Link>
      </Footer.LinkGroup>
    </div>
    <Footer.Divider />
    <Footer.Copyright
      href="https://www.linkedin.com/in/cvijan-djukanovic/"
      by="Cvijan Đukanović"
      year={2022}
    />
  </div>
  
</Footer>
</div>
    )
}