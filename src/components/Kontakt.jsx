import {  Footer } from 'flowbite-react'
import atelje from '../assets/Atelje-removebg.png'
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook} from 'react-icons/fa';
import { FaPhoneAlt} from 'react-icons/fa';


export default function Kontakt() {
    return (
      <div className='w-screen h-auto'>
      <Footer container={true}>
  <div className="w-full h-full text-center">
    <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
      <Footer.Brand
        href="https://www.instagram.com/atelje_simikic/"
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
        <Footer.Link href="https://www.instagram.com/atelje_simikic/" >
          <div className=' flex flex-start justify-between items-center'>
        <FaInstagram /> Instagram
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