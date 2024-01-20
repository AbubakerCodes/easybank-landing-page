import React, {useState } from "react";
import BackDrop from './BackDrop';
import useScreenSize from "../hooks/useScreenSize";
import logo from "/logo.svg";
import icon_close from "/assets/icon_close.svg";
import icon_hamburger from "/assets/icon_hamburger.svg";
import {Link} from "react-router-dom";


function Navbar () {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const isLargeScreen = useScreenSize();
    


    function handleToggleMainMenu () {
        setIsMenuOpen(!isMenuOpen);
    }
    return (
        <>
        {!isLargeScreen && <BackDrop isOpen={isMenuOpen} onClick={handleToggleMainMenu} />}
        <nav className={`${isLargeScreen && "fixed top-0 min-w-full"}text-brand-primary-blue-200   lg:text-brand-secondary-blue-200 bg-opacity-100 bg-white z-100 relative`}>
           
            {/* container */}
            <div className={` sm:relative mx-auto max-w-7xl  px-8 py-6 md:px-10 lg:px-16 lg:flex lg:flex-row lg:items-center lg:justify-between align-middle z-100`}>
                
                  {/* logo and mobile menu button */}
                <div className="  sm:flex sm:items-center sm:align-middle sm:justify-between lg:inline-block lg:align-bottom ">
                    {/* logo */}
                    <div className="z-100">
                        <a href="/"><img src={logo} className="w-[139px] h-[20px] z-100" alt="bank log"/></a>
                    </div>

                      {/* hamburger menu */}
                    {!isMenuOpen ? 
                    <button onClick={handleToggleMainMenu} className="lg:hidden focus:outline-none text-brand-primary-blue-400">
                    <img src={icon_hamburger} className="w-[24px] h-[11px]" alt="hamburger menu"/>
                    </button> :
                    <button onClick={handleToggleMainMenu} className={`${!isMenuOpen && "sm:hidden"} text-brand-primary-blue-400 lg:hidden focus:outline-none z-100`}>
                        <img src={icon_close} className="w-[18px] h-[19]" alt="close main menu button icon"/>
                        <span className="sr-only">Close main menu</span>
                    </button>}
                    
                </div>

                  {/* navLinks */}
                <div className=" align-middle">
                  <ul className={`${!isMenuOpen && "sm:hidden"} sm:flex sm:flex-col items-center justify-center gap-6 sm:absolute top-1/2 translate-y-1/4 right-[50%] translate-x-1/2 sm:bg-white sm:px-6 sm:py-8 md:p-8 sm:w-[85%] sm:max-w-[400px]  sm:rounded-md z-100 lg:gap-12 lg:p-0 lg:relative lg:w-fit lg:h-[11px] lg:flex lg:flex-row  lg:bg-transparent `}>
                      <li className={`${isLargeScreen && "hover-line"} hover:text-brand-primary-blue-400 duration-200 ease-in`}><Link to="/" onClick={() => setIsMenuOpen(prev => (prev, !prev))}>Home</Link></li>
                      <li className={`${isLargeScreen && "hover-line"} hover:text-brand-primary-blue-400 duration-200 ease-in`}><Link to="/about" onClick={() => setIsMenuOpen(prev => (prev, !prev))}>About</Link></li>
                      <li className={`${isLargeScreen &&"hover-line"} hover:text-brand-primary-blue-400 duration-200 ease-in`}><Link to="/contact" onClick={() => setIsMenuOpen(prev => (prev, !prev))}>Contact</Link></li>
                      <li className={`${isLargeScreen &&"hover-line"} hover:text-brand-primary-blue-400 duration-200 ease-in`}><Link to="/blog" onClick={() => setIsMenuOpen(prev => (prev, !prev))}>Blog</Link></li>
                      <li className={`${isLargeScreen &&"hover-line"} hover:text-brand-primary-blue-400 duration-200 ease-in`}><Link to="/careers" onClick={() => setIsMenuOpen(prev => (prev, !prev))}>Careers</Link></li>
                  </ul>
                </div>
                
                {/* right side */}
                <div>
                  <button className="sm:hidden lg:inline-block text-white py-3 px-8 text-center align-middle rounded-full bg-gradient-to-r from-brand-primary-green-400 to-brand-primary-cyan-400 hover:opacity-65 duration-200 ease-in">
                    Request Invite
                  </button>
                </div>
            </div>
        </nav>
        </>
    )
}

export {Navbar};