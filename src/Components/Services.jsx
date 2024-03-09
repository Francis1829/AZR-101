import React from 'react'
import Laptop from '../assets/Laptop1.png'
import CustomerService from '../assets/customer.png'
import ItRelated from '../assets/itrelated.png'
import SocialMed from '../assets/socialmed.png'
import Market from '../assets/market.png'

function Services() {
  return (
    <>
    <div className='w-full bg-[#f1f1f1]/20 rounded-md'> 
        <div className='container mx-auto px-4 '>
        <div className="w-full flex flex-col justify-center items-center pb-16 ">
         <div className='font-[Catamaran] tracking-wider font-bold 2xl:text-[4rem] xl/lg:text-[2.5rem] mt-[7rem]'>AZR's Services Categories</div>
         <div className='mb-[7rem] my-7 font-[Catamaran] font-semibold tracking-wide 2xl:text-[1.7rem] xl/lg:text-[1.2rem] '>Azr offers the following services:</div>
         <div className='flex w-full justify-center items-center relative z-10 '>
            <div className='flex flex-col'>
              <div className='customerhover'> 
                <div className='blurx 2xl:w-[450px] xl/lg:w-[350px] 2xl:h-[250px] xl/lg:h-[180px] shadow-md rounded-md absolute -top-16 2xl:-left-[6rem] xl/lg:-left-[1rem] flex flex-col justify-center items-start 2xl:p-10 xl:p-5 cursor-pointer z-20'>
                  <div className='px-3'><img src={CustomerService} alt="" className='2xl:w-[80px] xl:w-[50px] lg:w-[40px]' /></div>
                    <div className='flex font-[Catamaran] font-semibold my-4 2xl:text-[2rem] xl/lg:text-[1.5rem]'>Customer Support Roles</div>
                    </div>
                    <div className="customer absolute opacity-0  2xl:w-[947px] xl/lg:w-[635px] 2xl:h-[615px] xl/kg:h-[414px] 2xl:top-7 xl/lg:top-5 2xl:left-[17.4rem] xl/lg:left-[19.1rem] bg-[url('../src/assets/Customer1.png')] bg-center -translate-x-16 bg-cover bg-no-repeat ">
              <div className='w-full h-full mx-[6rem] pb-4 flex flex-col justify-end items-start font-[Roboto] tracking-widest 2xl:text-[2rem] xl/lg:text-lg text-white 2xl:gap-2 xl/lg:gap-1'>
                <ul>Live Chat Customer Service</ul>
                <ul>Technical Assistance</ul>
                <ul>Virtual Administrative Support</ul>
              </div>
            </div>
                    </div>
                      <div className='Marketinghover'>
                      <div className='market blurx 2xl:w-[450px] xl/lg:w-[350px] 2xl:h-[250px] xl/lg:h-[180px] shadow-md rounded-md absolute bottom-[3rem] 2xl:-left-[6rem] xl/lg:-left-[1rem] flex flex-col justify-center items-start 2xl:p-10 xl:p-5 cursor-pointer z-20'><div className='px-3'><img src={Market} alt="" className='2xl:w-[80px] xl:w-[50px] lg:w-[40px]' /></div>
                    <div className='flex font-[Catamaran] font-semibold my-4 2xl:text-[2rem] xl/lg:text-[1.5rem]'>Sales And Marketing</div>
                    </div>
                    <div className="marketing absolute opacity-0 2xl:w-[947px] xl/lg:w-[635px] 2xl:h-[615px] xl/kg:h-[414px] 2xl:top-7 xl/lg:top-5 2xl:left-[17.4rem] xl/lg:left-[19.1rem] bg-[url('../src/assets/Marketing.png')] bg-center bg-cover bg-no-repeat -translate-x-16">
              <div className='w-full h-full px-[6rem] pb-4 flex flex-col justify-end items-end font-[Roboto] tracking-widest 2xl:text-[2rem] xl/lg:text-lg text-white 2xl:gap-2 xl/lg:gap-1'>
                <ul>Recruiting</ul>
                <ul>Research Assistant</ul>
                <ul>Project Management</ul>
                <ul>Transcription</ul>
              </div>
            </div>
                    </div>
            </div>
            <div className='w-full h-full flex justify-center items-center relative -z-10'>
            <div className='2xl:w-[80%] xl/lg:w-[65%] h-auto'><img src={Laptop} alt="" className='' /></div>
            </div>
            <div className='flex flex-col'> 
            <div className='Ithovergroup'>
            <div className='ithover blurx 2xl:w-[450px] xl/lg:w-[350px] 2xl:h-[250px] xl/lg:h-[180px] shadow-md rounded-md 2xl:p-10 xl:p-5 flex flex-col justify-center items-end text-end cursor-pointer absolute  -top-16 2xl:-right-[6rem] xl/lg:-right-[1rem] z-20'><div className='px-3'><img src={ItRelated} alt="" className='2xl:w-[80px] xl:w-[50px] lg:w-[40px]' /></div>
                    <div className='flex font-[Catamaran] font-semibold my-4 2xl:text-[2rem] xl/lg:text-[1.5rem]'>IT-Related Work</div>
                    </div>
                    <div className="IT absolute opacity-0 translate-x-16 2xl:w-[947px] xl/lg:w-[635px] 2xl:h-[615px] xl/kg:h-[414px] 2xl:top-7 xl/lg:top-5 2xl:right-[17.4rem] xl/lg:right-[19.2rem] bg-[url('../src/assets/IT.png')] bg-center bg-cover bg-no-repeat">
              <div className='w-full h-full mx-[6rem] pb-4 flex flex-col justify-end items-start font-[Roboto] tracking-widest 2xl:text-[2rem] xl/lg:text-lg text-white 2xl:gap-2 xl/lg:gap-1'>
                <ul>Software Developer</ul>
                <ul>Programming</ul>
                <ul>Web Developer</ul>
                <ul>Software Engineer</ul>
                <ul>Graphic Design</ul>
                <ul>Data Entry</ul>
              </div>
            </div>
                    </div> 

                    <div className='socialhovergroup'>
                <div className='socialhover blurx 2xl:w-[450px] xl/lg:w-[350px] 2xl:h-[250px] xl/lg:h-[180px] shadow-md rounded-md 2xl:p-10 xl:p-5 flex flex-col justify-center items-end text-end cursor-pointer absolute bottom-[3rem] 2xl:-right-[6rem] xl/lg:-right-[1rem] z-20'><div className='px-3'><img src={SocialMed} alt="" className='2xl:w-[80px] xl:w-[50px] lg:w-[40px]' /></div>
                    <div className='flex font-[Catamaran] font-semibold my-4 2xl:text-[2rem] xl/lg:text-[1.5rem]'>Social Media Management</div>
                    </div>
                         
            <div className="social absolute opacity-0 translate-x-16 2xl:w-[947px] xl/lg:w-[635px] 2xl:h-[615px] xl/kg:h-[414px] 2xl:top-7 xl/lg:top-5 2xl:right-[17.4rem] xl/lg:right-[19.2rem] bg-[url('../src/assets/Socmed2.png')] bg-center bg-cover bg-no-repeat">
              <div className='w-full h-full px-[6rem] pt-4 flex flex-col justify-start items-end font-[Roboto] tracking-widest 2xl:text-[2rem] xl/lg:text-lg text-white 2xl:gap-2 xl/lg:gap-1'>
                <ul>Social Media Ads</ul>
                <ul>Motion Grahpics</ul>
                <ul>Content Creation</ul>
                <ul>Magazine Layout</ul>
              </div>
            </div>
                    </div>
                </div>
         </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Services