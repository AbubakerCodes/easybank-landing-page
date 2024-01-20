import { RiFacebookBoxFill, RiInstagramLine, RiPinterestFill, RiTwitterFill, RiYoutubeFill, RiYoutubeLine } from "@remixicon/react";
import logo from "/logo_white.png";
import {Link} from "react-router-dom";

function Footer() {

    return (
        <nav id="footer" className={` text-white bg-brand-primary-blue-400 py-10`}>
           
           {/* container */}
           <div className={`flex flex-col items-center gap-8 lg:gap-[58px] lg:flex-row lg:justify-items-start lg:items-start mx-auto max-w-7xl  px-8 py-6 md:px-10 lg:px-16`}>
               
                 {/* logo and social icons*/}
               <div className=" flex flex-col items-center gap-8 lg:gap-16 lg:mr-auto lg:justify-between lg:items-start">
                   {/* logo */}
                   <div className="">
                       <a href="/"><img src={logo} className="filter-none white z-50" alt="bank logo"/></a>
                   </div>

                     {/*social icons*/}
                     <div className="flex items-center md:justify-between gap-4 md:gap-8 lg:gap-4">
                      <RiFacebookBoxFill  className="hover:fill-[#66c6b1] cursor-pointer"/>
                      <RiYoutubeFill className="hover:fill-[#66c6b1] cursor-pointer"/>
                      <RiTwitterFill  className="hover:fill-[#66c6b1] cursor-pointer"/>
                      <RiPinterestFill  className="hover:fill-[#66c6b1] cursor-pointer"/>
                      <RiInstagramLine  className="hover:fill-[#66c6b1] cursor-pointer"/>
                     </div>
                   
               </div>

                 {/* navLinks */}
               <div className=" flex flex-col md:flex-row md:justify-between items-start lg:items-start gap-4 lg:gap-[59px] lg:mr-auto">
                <ul className="flex flex-col md:flex-row lg:flex-col items-start gap-4">
                     <li className={` hover:text-[#66c6b1] duration-200 ease-in`}><Link to="/demo">About</Link></li>
                     <li className={` hover:text-[#66c6b1] duration-200 ease-in`}><Link to="/demo">Contact</Link></li>
                     <li className={` hover:text-[#66c6b1] duration-200 ease-in`}><Link to="/demo">Blog</Link></li>
                </ul>
                 <ul className="flex flex-col md:flex-row lg:flex-col items- lg:items-start gap-4" id="navLinks" >
                     <li className={` hover:text-[#66c6b1] duration-200 ease-in`}><Link to="/demo">Careers</Link></li>
                     <li className={` hover:text-[#66c6b1] duration-200 ease-in`}><Link to="/demo">Support</Link></li>
                     <li className={` hover:text-[#66c6b1] duration-200 ease-in`}><Link to="/demo">Privacy Policy</Link></li>
                     
                 </ul>
               </div>
               
               {/* right side */}
               <div className="flex flex-col items-center gap-4 lg:justify-self-end lg:ml-auto lg:items-end">
                 <button className=" text-white py-3 px-8 text-center align-middle rounded-full bg-gradient-to-r from-brand-primary-green-400 to-brand-primary-cyan-400 filter hover:contrast-75 hover:brightness-100  duration-200 ease-in">
                   Request Invite
                 </button>
                 <p className="mt-3 lg:mt-6 text-sm text-brand-secondary-blue-200">&copy; Easybank. All Rights Reserved</p>
               </div>
           </div>
       </nav>
    )
  }
  
  export default Footer;
  