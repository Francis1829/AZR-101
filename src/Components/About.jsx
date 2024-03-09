import React from 'react'
import BoutPic from '../assets/Aboutpic.jpg'

function About() {
  return (
    <>
    <div className='w-full'>
    <div className='container mx-auto px-4 bg-[#f1f1f1]/20 rounded-xl'>
      <div className='w-full flex justify-center gap-10 py-16 px-16'>
          <div className='flex flex-col w-[60%]'>
            <div className='font-[Roboto] text-[1.8rem] tracking-wide leading-16 my-5'>At AZR, our goal is to make outsourcing easy.
            Forget wading through pages of spam and unqualified freelancers on UpWork and other freelancing platforms.
            We take the guesswork out of offshore staffing with a bespoke process to find you the right agents to work with your business.</div>
            <div className='p-5'>
              <div className='text-center text-[2rem] my-2 font-[Catamaran]'>Our Key Values;</div>
            <div className='py-3 border-b border-3 '>
            <div className='my-1 font-[Roboto] text-2xl font-bold'>Quality Service</div>
            <div className='text-xl'>We take pride in doing excellent work that makes you happy.</div>
            </div>
            <div className='py-3 border-b border-3 '>
            <div className='my-1 font-[Roboto] text-2xl font-bold'>Top-Notch Team</div>
            <div className='text-xl'>Our Team is here to make your projects awesome.</div>
            </div>
            <div className='py-3 border-b border-3 '>
            <div className='my-1 font-[Roboto] text-2xl font-bold'>On-Time Delivery</div>
            <div className='text-xl'>We always meet deadlines, so you can rely on us.</div>
            </div>
            <div className='py-3 border-b border-3 '>
            <div className='my-1 font-[Roboto] text-2xl font-bold'>Out Standing Results</div>
            <div className='text-xl'>We do not just meet goals; we exceedthem.</div>
            </div>
            <div className='py-3 border-b border-3 '>
            <div className='my-1 font-[Roboto] text-2xl font-bold'>Smart Planning</div>
            <div className='text-xl'>We are not just doers; we are planners too, helping you succeed.</div>
            </div>
            <div className='py-3 border-b border-3 '>
            <div className='my-1 font-[Roboto] text-2xl font-bold'>Great Leadership</div>
            <div className='text-xl'>Our expercienced leaders guides us to seccess.</div>
            </div>
            <div className='py-3 border-b border-3 '>
            <div className='my-1 font-[Roboto] text-2xl font-bold'>Positive Work Environment</div>
            <div className='text-xl'>We are a friendly and supportive bunch.</div>
            </div>
            <div className='py-3 border-b border-3 '>
            <div className='my-1 font-[Roboto] text-2xl font-bold'>Contonuous Excellence</div>
            <div className='text-xl'>Our team is top-notch and always improving.</div>
            </div>
            </div>
          </div>

          <div className='w-[40%]'>
          <div className='text-[4rem] font-[Catamaran] font-semibold tracking-wider mb-20 text-end'>Why Work with AZR?</div>
          <div className=" h-[700px] bg-[url('../src/assets/Aboutpic.jpg')] bg-center bg-no-repeat bg-cover rounded-md shadow-lg"></div>
          </div>
      </div>

      <div className='w-full flex flex-row-reverse justify-center text-start gap-10 py-16 px-16'>
          <div className='flex flex-col w-[60%] my-5'>
            <div className='text-[2rem] font-[Catamaran] font-bold tracking-wider my-2'>Discovery Call</div>
            <div className='font-[Roboto] text-xl tracking-wide leading-16 pb-3 border-b'>We know that every business is different which is why we take the time to understand your goals and resourcing requirements with a one-on-one Discovery Call, providing consultation and advice on getting the most out of your offshore team.</div>
            <div className='text-[2rem] font-[Catamaran] font-bold tracking-wider my-2'>Candidate Screening and Testing</div>
            <div className='font-[Roboto] text-xl tracking-wide leading-16 pb-3 border-b'>Based on your requirements, BruntWork’s recruitment team sources and selects for a shortlist of the top qualified candidates. We then perform a technical check of their computer and internet connection, as well as require the candidate to pass standardised English language, logic and numeric aptitude tests.</div>
            <div className='text-[2rem] font-[Catamaran] font-bold tracking-wider my-2'>Client Interview and Testing</div>
            <div className='font-[Roboto] text-xl tracking-wide leading-16 pb-3 border-b'>Only once we’ve screened and shortlisted the most suitable candidates will we set up a video call for you to interview.</div>
            <div className='text-[2rem] font-[Catamaran] font-bold tracking-wider my-2'>Cultural Awareness Training</div>
            <div className='font-[Roboto] text-xl tracking-wide leading-16 pb-3 border-b'>We provide a full day training session to ensure awareness of Western communication styles, including working with customers in countries such as in Australia, the US, Canada and the UK.</div>
            <div className='text-[2rem] font-[Catamaran] font-bold tracking-wider my-2'>Timesheet Tracked Hourly Billing</div>
            <div className='font-[Roboto] text-xl tracking-wide leading-16 pb-3 border-b'>AZR’s Client Services Team will track hours and provide you with fortnightly summaries of timesheets for your reference. You are only billed for the hours agents have logged to work.</div>
            <div className='text-[2rem] font-[Catamaran] font-bold tracking-wider my-2'>Admin & Account Management</div>
            <div className='font-[Roboto] text-xl tracking-wide leading-16 pb-3 border-b'>We tally up the total timesheet hours and send you one simple invoice for the total time worked each month.</div>
          </div>

          <div className='w-[40%]'>
            <div className='text-[4rem] font-[Roboto] mb-20'>How do I apply to AZR?</div>
          <div className=" h-[700px] bg-[url('../src/assets/Job.jpg')] bg-center bg-no-repeat bg-cover rounded-md shadow-lg"></div>
          </div>
      </div>
      </div>
    </div>
    </>
  )
}

export default About