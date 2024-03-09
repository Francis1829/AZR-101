import React from 'react'
import Herox from '../assets/Hero.png'

function Hero() {
  return (
    <>
    <div className='bg1 w-full h-screen bg-no-repeat bg-cover bg-center'>
    <div className="bg-black/70 absolute w-full h-full"></div>
    <div className='w-full'>
        <div className='container mx-auto px-4'>
          <div className='h-screen flex justify-center items-center'>
          <div className='2xl:w-[50%] xl/lg:w-[70%] w-full h-full flex flex-col justify-center 2xl:text-start xl/lg:text-start text-center 2xl:items-start xl/lg:items-start items-center  text-white relative z-10'>
              <div className=' 2xl:text-[3rem] xl:text-[2rem] text-[2.5rem] font-[Catamaran]'>We Provide Top-Tier Virtual Services</div>
              <div className=' 2xl:text-[4.5rem] xl:text-[3.5rem] text-[4rem] font-[Anton] uppercase my-11 '>Elevate Your Future with Remote Excellence</div>
              <div className=' 2xl:text-[2rem] xl:text-[1.5rem] text-[2rem] font-[Catamaran]'>Precisely Matching Our Client's Objective</div>
              <div className="2xl:w-[45vmin] xl:w-[45vmin] 2xl:h-[60vmin] xl:h-[60vmin] bg-[#a9944e]/50 rounded-b-full absolute top-0 2xl:-left-10 -left-0 -z-10"></div>
              <div className="btnn rounded-md border border-[#b5913a] text-[#b5913a] hover:bg-[#b5913a]  hover:text-white font-semibold duration-300 ease-in-out 2xl:text-xl xl/lg:text-base text-sm w-[200px] h-[55px] text-center flex items-center justify-center my-11">
                <button id='Contact' className=''>Start Now</button>
             </div>
          </div>
          <div className='w-[50%] h-full 2xl:flex xl/lg:flex hidden flex-col justify-end items-end relative z-10'>
            <div className='2xl:w-[65vmin] xl:w-[70vmin] 2xl:h-[85vmin] xl:h-[80vmin] bg-[#a9944e]/50 absolute bottom-0 2xl:-right-10 -right-0 -z-10 rounded-t-full'></div>
            <div className='2xl:w-[50vmin] xl:w-[45vmin] 2xl:mr-[2.2rem] xl:mr-20'><img src={Herox} alt="" /></div>
          </div>
          </div>

        </div>
      </div>
    </div>
    </>
  )
}

export default Hero