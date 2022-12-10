import React from 'react'
import MyPhoto from '../assets/images/david.jpeg'

export default function About() {


    return (
        <span id='about' className='flex w-full h-full py-24 px-4 md:px-12 md:h-screen place-content-center flex-col bg-none '>
            <div className='flex md:flex-row md:h-2/3 md:space-x-12 place-content-center space-y-10 flex-col'>
                <img className='animate-megaspin rounded-tl-full rounded-bl-full md:w-2/6
             shadow-2xl scale-50 place-self-center bg-gradient-to-b p-20 from-transparent to-[#1B3429]' alt='me!' src={MyPhoto} />
                <div className='flex flex-col  bg-opacity-50 rounded-lg h-max bg-slate-300 py-12 md:p-12 self-center content-center'>
                    <h1 className='pb-10 text-7xl text-center underline'>About David</h1>
                    <p className='font-black text-md self-center text-center
                  w-1/2 md:w-2/3'>Welcome!<br />I am a front-end web developer leveraging a bartending and <a
                            href="https://aboyandhiscomputer.bandcamp.com/releases"
                            target="_blank"
                            rel="noreferrer"
                            className='hover:text-green-700 underline decoration-4'>music
                        </a> background to pursue a fast and flexible web experience using critical thinking, creativity and anticipation of needs. After recently completing a full-stack certificate to develop  my abilities in Javascript and React to ensure smooth UX, I have been able to work in multiple teams in various positions to create projects using Express, Node, SQL and NoSQL. I have found that the different perspectives of team members to be integral in finding intuitive and unique answers for everyday life.
                    </p>
                </div>
            </div>
        </span>
    )
}
