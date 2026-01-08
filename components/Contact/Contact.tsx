import React from 'react'
import Herosec from './herosec'
import { FloatingNavDemo } from '../Home/Navbar'
import Offices from './Offices'
import ContactForm from './ContactForm'
import Footersec from '../Home/footersec'
export const dynamic = 'force-static'
const Contact = () => {
  return (
    <div className="bg-[#000A21] ">
         
    <div className=" p-5 lg:p-9 ">
        <FloatingNavDemo />
      <Herosec/>
      <Offices />
        </div>
        <ContactForm/>
        <Footersec />
    </div>
  )
}

export default Contact
