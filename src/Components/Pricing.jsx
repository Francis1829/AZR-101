import React from 'react'
import { FaCheck } from "react-icons/fa6";

function Pricing() {
  return (
   <>
   <div className='w-full'> 
        <div className='container mx-auto px-4'>
        <div className="w-full flex flex-col justify-center items-center pb-16">
         <div className='font-[Catamaran] tracking-wider font-bold 2xl:text-[4rem] xl/lg:text-[2.5rem] mt-[7rem]'>Our Pricing For Service</div>
         <div className='mb-[7rem] my-7 font-[Catamaran] font-semibold tracking-wide 2xl:text-[1.7rem] xl/lg:text-[1.2rem] '>Employer will pay compensation to Service Provider for
the Services with the following rate</div>
         <div className='flex 2xl:flex-row xl/lg:flex-row flex-col justify-center items-center'>
        <div className=' first border-2 border-black/15 2xl:w-[500px] xl/lg:w-[300px] 2xl:h-[600px] xl/lg:h-[500px] p-8 mx-7 rounded-lg shadow-2xl flex flex-col justify-start items-center cursor-pointer bg-[#fafafa]'>
          <div className='font-[Catamaran] 2xl:text-[2rem] xl/lg:text-xl font-bold mt-5 '>Training</div>
          <div className='font-[Catamaran] 2xl:text-2xl xl/lg:text-lg font-bold my-1 '>(Phase)</div>
          <div className='flex flex-col justify-start items-start gap-2 my-6'>
          <div className='flex justify-center items-center 2xl:text-[1.5rem] xl/lg:text-[1rem] font-[Roboto] font-medium'><FaCheck className=" 2xl:w-[30px] xl/lg:w-[20px] 2xl:h-[30px] xl/lg:h-[25px] text-[#5faa1d] mx-2" />8 Hours/Day</div>
          <div className='flex justify-center items-center 2xl:text-[1.5rem] xl/lg:text-[1rem] font-[Roboto] font-medium'><FaCheck className=" 2xl:w-[30px] xl/lg:w-[20px] 2xl:h-[30px] xl/lg:h-[25px] text-[#5faa1d] mx-2" />$3 / Hour</div>
          </div>
          <div className='font-[Catamaran] 2xl:text-[2rem] xl/lg:text-xl font-bold mt-[2rem] '>Day 1 to 30</div>
          <div className='font-[Catamaran] 2xl:text-2xl xl/lg:text-lg font-bold my-1 '>(With Client)</div>
          <div className='flex flex-col justify-start items-start gap-2 my-6'>
          <div className='flex justify-center items-center 2xl:text-[1.5rem] xl/lg:text-[1rem] font-[Roboto] font-medium'><FaCheck className=" 2xl:w-[30px] xl/lg:w-[20px] 2xl:h-[30px] xl/lg:h-[25px] text-[#5faa1d] mx-2" />8 Hours/Day</div>
          <div className='flex justify-center items-center 2xl:text-[1.5rem] xl/lg:text-[1rem] font-[Roboto] font-medium'><FaCheck className=" 2xl:w-[30px] xl/lg:w-[20px] 2xl:h-[30px] xl/lg:h-[25px] text-[#5faa1d] mx-2" />$3.5 / Hour</div>
          </div>
        </div>
        <div className='first border-2 border-black/15 2xl:w-[500px] xl/lg:w-[300px] 2xl:h-[600px] xl/lg:h-[500px] p-8 mx-7 rounded-lg shadow-2xl flex flex-col justify-start items-center cursor-pointer bg-[#fafafa]'>
          <div className='font-[Catamaran] 2xl:text-[2rem] xl/lg:text-xl font-bold mt-5 '>Day 31 to 90</div>
          <div className='font-[Catamaran] 2xl:text-2xl xl/lg:text-lg font-bold my-1 '>(With Client)</div>
          <div className='flex flex-col justify-start items-start gap-2 my-6'>
          <div className='flex justify-center items-center 2xl:text-[1.5rem] xl/lg:text-[1rem] font-[Roboto] font-medium'><FaCheck className=" 2xl:w-[30px] xl/lg:w-[20px] 2xl:h-[30px] xl/lg:h-[25px] text-[#5faa1d] mx-2" />8 Hours/Day</div>
          <div className='flex justify-center items-center 2xl:text-[1.5rem] xl/lg:text-[1rem] font-[Roboto] font-medium'><FaCheck className=" 2xl:w-[30px] xl/lg:w-[20px] 2xl:h-[30px] xl/lg:h-[25px] text-[#5faa1d] mx-2" />$4 / Hour</div>
          </div>
          <div className='font-[Catamaran] 2xl:text-[2rem] xl/lg:text-xl font-bold mt-[2rem] '>Day 91 above</div>
          <div className='font-[Catamaran] 2xl:text-2xl xl/lg:text-lg font-bold my-1 '>(With Client)</div>
          <div className='flex flex-col justify-start items-start gap-2 my-6'>
          <div className='flex justify-center items-center 2xl:text-[1.5rem] xl/lg:text-[1rem] font-[Roboto] font-medium'><FaCheck className=" 2xl:w-[30px] xl/lg:w-[20px] 2xl:h-[30px] xl/lg:h-[25px] text-[#5faa1d] mx-2" />8 Hours/Day</div>
          <div className='flex justify-center items-center 2xl:text-[1.5rem] xl/lg:text-[1rem] font-[Roboto] font-medium'><FaCheck className=" 2xl:w-[30px] xl/lg:w-[20px] 2xl:h-[30px] xl/lg:h-[25px] text-[#5faa1d] mx-2" />$4.5/Hour</div>
          </div>
        </div>
        <div className='first border-2 border-black/15 2xl:w-[500px] xl/lg:w-[300px] 2xl:h-[600px] xl/lg:h-[500px] p-8 mx-7 rounded-lg shadow-2xl flex flex-col justify-start items-center cursor-pointer bg-[#fafafa]'>
          <div className='font-[Catamaran] 2xl:text-[2rem] xl/lg:text-xl font-bold mt-5 '>Day 1 to above</div>
          <div className='font-[Catamaran] 2xl:text-2xl xl/lg:text-lg font-bold my-1 '>(With Client)</div>
          <div className='flex flex-col justify-start items-start gap-2 my-6'>
          <div className='flex justify-center items-center 2xl:text-[1.5rem] xl/lg:text-[1rem] font-[Roboto] font-medium'><FaCheck className=" 2xl:w-[30px] xl/lg:w-[20px] 2xl:h-[30px] xl/lg:h-[25px] text-[#5faa1d] mx-2" />8 Hours/Day</div>
          <div className='flex justify-center items-center 2xl:text-[1.5rem] xl/lg:text-[1rem] font-[Roboto] font-medium'><FaCheck className=" 2xl:w-[30px] xl/lg:w-[20px] 2xl:h-[30px] xl/lg:h-[25px] text-[#5faa1d] mx-2" />$5/Hour</div>
          <div className='flex justify-center items-center 2xl:text-[1.5rem] xl/lg:text-[1rem] font-[Roboto] font-medium'><FaCheck className=" 2xl:w-[30px] xl/lg:w-[20px] 2xl:h-[30px] xl/lg:h-[25px] text-[#5faa1d] mx-2" />HMO</div>
          </div>
          <div className='font-[Catamaran] 2xl:text-[2rem] xl/lg:text-xl font-bold  text-center'>Rates can increase depending on performance.</div>
          <div className='flex flex-col justify-start items-start gap-2 my-6'>
          <div className='flex justify-center items-center 2xl:text-[1.5rem] xl/lg:text-[1rem] font-[Roboto] font-medium'><FaCheck className=" 2xl:w-[30px] xl/lg:w-[20px] 2xl:h-[30px] xl/lg:h-[25px] text-[#5faa1d] mx-2" />8 Hours/Day</div>
          <div className='flex justify-center items-center 2xl:text-[1.5rem] xl/lg:text-[1rem] font-[Roboto] font-medium'><FaCheck className=" 2xl:w-[30px] xl/lg:w-[20px] 2xl:h-[30px] xl/lg:h-[25px] text-[#5faa1d] mx-2" />Up to $8 / Hour</div>
          <div className='flex justify-center items-center 2xl:text-[1.5rem] xl/lg:text-[1rem] font-[Roboto] font-medium'><FaCheck className=" 2xl:w-[30px] xl/lg:w-[20px] 2xl:h-[30px] xl/lg:h-[25px] text-[#5faa1d] mx-2" />HMO</div>
          </div>
        </div>
        </div>
        </div>
         </div>
        </div>
   </>
  )
}

export default Pricing