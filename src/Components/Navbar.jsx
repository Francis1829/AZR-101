import React from 'react'
import { useState } from 'react';
import Logo from '../assets/logo.svg'
import {Link} from 'react-router-dom'
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

function Navbar() {

    const [scroll, setScroll] = useState(false)
    const ChangeColor = () => {
        if (window.scrollY >= 80) {
            setScroll(true)
        }else {
            setScroll(false)
        }
    }

    window.addEventListener('scroll', ChangeColor)
    
    const MenuList = [
        {
            Name: "Home",
            Paths: "/"
        },
        {
            Name: "Services",
            Paths: "/Services"
        },
        {
            Name: "Pricing",
            Paths: "/Pricing"
        },
        {
            Name: "About us",
            Paths: "/About"
        },
    ]

const [click, setClick] = useState(false);

const handleClick = () => {
    setClick(!click);
  };
  
  const handleclicks = () => {
    setClick(false);
  };

  return (
    <>
    <header className={ scroll ? "fixed w-full z-50 scroll shadow-xl" : "fixed w-full z-50"}>
        <div className='container mx-auto px-4'>
        <nav className='px-10 p-5 flex justify-between items-center w-100 '>
        <div className="flex items-center justify-center md:cursor-pointer p-2"> 
                    <img src={Logo} alt="" className='lg:w-[95px] md:w-[75px] w-[65px] ' />
            </div>
            <div
              className="r-menu xl:lg:hidden md:hidden block"
              onClick={handleClick}
            >
              {click ? "" : <FaBars size={40} className="text-white" />}
            </div>
            <div className='xl/lg:flex md:flex hidden'>
            <div className='flex justify-center items-center xl/lg:mr-10 mr-5'>
            {MenuList.map((list, i) => (
                <ul className='text-white xl/lg:mx-6 mx-2 2xl:text-xl xl/lg:text-base text-sm tracking-wide md:cursor-pointer '>
                    <Link to={list.Paths}><li key={i} className='opacity-75  active:font-bold font-medium hover:font-semibold  hover:text-[#b5913a] focus:opacity-100'>
                        {list.Name}
                    </li></Link>
                </ul>
            ))}        
             </div>
             <div className="btnn rounded-md border border-[#b5913a] text-[#b5913a] hover:bg-[#b5913a]  hover:text-white font-semibold duration-300 ease-in-out 2xl:text-xl xl/lg:text-base text-sm">
                <button id='Contact' className='2xl:px-7 xl:px-3  2xl:py-3 xl:py-2 mx-3 rounded-md'>Let's Connect!</button>
             </div>
             </div>
             <div className={`lg:hidden flex flex-col items-center z-50 bg-[url('../src/assets/Bg-theme.png')] bg-[#c6c66f] absolute w-full top-0 pl-3 py-10 h-[660px] overflow-y-auto transition-all ${click ? "left-0" : "left-[-100%]"} duration-500`}>
            {MenuList.map((list, i) => (
                <ul className='text-black my-1 text-xl font-medium tracking-wide md:cursor-pointer '>
                    <Link to={list.Paths}><li onClick={handleclicks} key={i} className='opacity-75 hover:opacity-100 active:opacity-100 '>
                        {list.Name}
                    </li></Link>
                </ul>
            ))}   
              <div className="btnn  text-black text-base mt-7">
                <button id='Contact' className='px-7 py-3 mx-3 border border-black rounded-md hover:bg-black  hover:text-white duration-300 ease-in-out'>Let's Connect!</button>
             </div>
             </div>
        </nav>
        </div>
    </header>
    </>
  )
}

export default Navbar