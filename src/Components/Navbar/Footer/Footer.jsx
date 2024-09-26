import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from 'react-icons/ci';
import { FaGithub } from 'react-icons/fa';
const  Footer = () => {
  return (
    <div
     id="Footer"
      className="flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center"
       >
        <div>
        <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal">Feel Free To reach out!</h3>
        </div>
        <ul className="text-sm md:text-xl ">
          <li className='flex gap-2'>
            <MdOutlineEmail size={20} />
            <a className='underline' href="mailto:sonu0132001@gmail.com" target='_blank'>Email</a>
            
          </li>
          <li className='flex gap-2'>
            <CiLinkedin />
            <a className='underline' href="https://www.linkedin.com/in/sonu-nishad-582274321/" target='_blank'>My Linkedin</a>
            
          </li>
          <li className='flex gap-2'>
            <FaGithub />
            <a className='underline' href=" https://github.com/sonuNishad123 " target='_blank'>Github</a>
            
          </li>
        </ul>
        </div>
  )
}

export default  Footer