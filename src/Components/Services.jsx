import React from 'react'
import CustomerService from '../assets/customer.png'
import ItRelated from '../assets/itrelated.png'
import SocialMed from '../assets/socialmed.png'
import Market from '../assets/market.png'
import Cs from '../assets/Customer3.jpg'
import It from '../assets/IT.jpg'
import Sm from '../assets/Socmed2.jpg'
import M from '../assets/laptop2.jpg'
import Img1 from "../assets/Staffing.jpg";
import Img2 from "../assets/Virtual.jpg";
import Img3 from "../assets/Strategy.jpg";


import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";


const ServiceCarousel = [
  {
    title: "Customer Support Roles",
    Img: CustomerService,
    Img1: Cs,
    Jobs:
     <div className='w-full h-full flex flex-col justify-end items-start font-[Roboto] tracking-widest 2xl:text-[2rem] xl/lg:text-lg text-white 2xl:gap-2 '>
        <ul>Live Chat Customer Service</ul>
        <ul>Technical Assistance</ul>
        <ul>Virtual Administrative Support</ul>
    </div>
  }, 
  {
    title: "IT-Related Work",
    Img: ItRelated,
    Img1: It,
    Jobs:
     <div className='w-full h-full flex flex-col justify-end items-start font-[Roboto] tracking-widest 2xl:text-[2rem] xl/lg:text-lg text-white 2xl:gap-2 '>
        <ul>Software Developer</ul>
     <ul>Programming</ul>
     <ul>Web Developer</ul>
     <ul>Software Engineer</ul>
     <ul>Graphic Design</ul>
     <ul>Data Entry</ul>
    </div>
  },
  {
    title: "Social Media Management",
    Img: SocialMed,
    Img1: Sm,
    Jobs:
     <div className='w-full h-full flex flex-col justify-end items-start font-[Roboto] tracking-widest 2xl:text-[2rem] xl/lg:text-lg text-white 2xl:gap-2 '>
       <ul>Social Media Ads</ul>
     <ul>Motion Grahpics</ul>
     <ul>Content Creation</ul>
     <ul>Magazine Layout</ul>
    </div>
  },
  {
    title: "Sales And Marketing",
    Img: Market,
    Img1: M,
    Jobs:
     <div className='w-full h-full flex flex-col justify-end items-start font-[Roboto] tracking-widest 2xl:text-[2rem] xl/lg:text-lg text-white 2xl:gap-2 '>
        <ul>Recruiting</ul>
     <ul>Research Assistant</ul>
     <ul>Project Management</ul>
     <ul>Transcription</ul>
    </div>
  }
]

const MoreService = [
  {
    Title: "Staffing Solutions",
    Image: Img1,
    Description: "We specialize in job placement, recruitment services, and both temporary and permanent staffing options."
  }, 
  {
    Title: "Virtual Services",
    Image: Img2,
    Description: "Our virtual services cover administrative support, graphic design, social media management, sales and marketing support, and IT services."
  },
  {
    Title: "Strategy & Consulting",
    Image: Img3,
    Description: "We craft your path to success by fine-tuning your strategy while addressing your unique business challenges."
  }
]

function Services() {
  return (
    <>
    <div className='w-full'> 
        <div className='container mx-auto px-4 '>
        <div className="w-full flex flex-col justify-center items-center pb-16 ">
         <div className='font-[Catamaran] tracking-wider font-bold 2xl:text-[4rem] xl/lg:text-[2.5rem] mt-[7rem]'>AZR's Services Categories</div>
         <div className='mb-4  my-7 font-[Catamaran] font-semibold tracking-wide 2xl:text-[1.7rem] xl/lg:text-[1.2rem] '>Azr offers the following services:</div>
         <div className="flex flex-col w-full bg-[url('../src/assets/LOGOlap1.png')]  bg-center bg-cover bg-no-repeat">
         <div className='w-full 2xl:h-[600px] xl/lg:h-[400px] flex justify-center items-center relative'>
          {/* <img src={Laptop} alt="" className='absolute top-0 opacity-70 2xl:h-[700px] xl/lg:h-[600px]' /> */}
          <div className="absolute flex justify-center w-full 
          2xl:h-[500px] xl/lg:h-[350px]">
          <Swiper
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 25,
          },
          700: {
            slidesPerView: 2,
            spaceBetween: 25,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="2xl:w-full xl/lg:w-[80%]"
      >

{ServiceCarousel.map((item) => (
          <SwiperSlide key={item.title}>
            <div className="flex flex-col gap-10 mb-20 group w-full h-full overflow-hidden cursor-pointer">
            <div className="absolute rounded-3xl inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.Img1})` }}
              />  
              <div className='absolute w-full h-full fade bottom-0 rounded-3xl'></div>
             
              <div className='relative z-20  w-full h-full p-5 flex flex-col-reverse items-start justify-start  gap-3 text-white rounded-3xl '>
                <div className='h-0 opacity-0 translate-y-6 group-hover:h-full   group-hover:translate-y-0 group-hover:opacity-100 duration-100 ease-in-out transition-all text-[1.2rem] font-[Roboto]'>{item.Jobs}</div>
                <span className='flex font-[Catamaran] font-semibold   2xl:text-[2rem] xl/lg:text-[1.5rem] group-hover:text-[#ad8d3d]'>{item.title}</span>
                <img src={item.Img} alt="" className='h-[90px]' />
                 </div>

               
                 <div className="absolute inset-0 rounded-3xl bg-black opacity-10 group-hover:opacity-30 ease-in-out duration-75"  />   
               
            </div>
          </SwiperSlide>
        ))}
        </Swiper>
        

          </div>  
        </div>
        <div className='w-full 2xl:h-[450px] xl/lg:h-[350px] flex justify-center items-center relative 2xl:my-4 xl/lg:my-2'>
          <div className='absolute flex 2xl:flex-row xl/lg:flex-row flex-col justify-center items-center w-full h-full gap-5'>
          {MoreService.map((item) => (
         <>
          <div className='2xl:h-[450px] h-[350px] 2xl:w-[500px] w-[320px] rounded-lg bg-center bg-cover bg-no-repeat relative group text-white'  style={{ backgroundImage: `url(${item.Image})` }}>

          <div className='absolute bg-black/60 opacity-60 rounded-lg group-hover:opacity-90 w-full h-full'></div>

          <div className='text-white p-4 h-full flex flex-col-reverse justify-start items-start absolute overflow-hidden'>
          <div className='h-0 opacity-0 translate-y-6 2xl:group-hover:h-[140px] xl/lg:group-hover:h-[160px]  text-white/60 group-hover:translate-y-0 group-hover:opacity-100 duration-100 ease-in transition-all 2xl:text-[1.4rem] xl/lg:text-xl font-[Roboto]'>{item.Description}</div>
            <span className='font-[Catamaran] 2xl:text-[2rem] xl/lg:text-2xl tracking-wide group-hover:text-[#ad8d3d]'>{item.Title}</span>
          </div>
          </div>

         
         </>
        ))}
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
 