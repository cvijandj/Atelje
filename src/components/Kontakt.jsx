import {  Footer } from 'flowbite-react'
import atelje from '../assets/Atelje-removebg.png'
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook} from 'react-icons/fa';
import { FaPhoneAlt} from 'react-icons/fa';


export default function Kontakt() {
    return (
      <Footer container={true}>
  <div className="w-full h-full text-center">
    <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
      <Footer.Brand
        href="https://flowbite.com"
        src={atelje}
        alt="Flowbite Logo"
        name="Atelje Simikić"
      />
      <Footer.LinkGroup>
        <Footer.Link href="#">
        <div className=' flex flex-start justify-between items-center'>
        <FaFacebook /> Facebook
        </div>
        </Footer.Link>
        <Footer.Link href="#">
          <div className=' flex flex-start justify-between items-center'>
        <FaInstagram /> Instagram
        </div>
        </Footer.Link>
        <Footer.Link href="#">
        <div className=' flex flex-start justify-between items-center'>
        <FaPhoneAlt /> Telefon
        </div>
        </Footer.Link>
      </Footer.LinkGroup>
    </div>
    <Footer.Divider />
    <Footer.Copyright
      href="#"
      by="Cvijan Đukanović"
      year={2022}
    />
  </div>
  
</Footer>
    )
}