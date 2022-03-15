import React from 'react'
import MyPhoto from '../assets/images/david.jpeg'

export default function About() {


    return (
        <span id='about' className='flex w-full h-full md:h-screen place-content-center flex-col bg-gradient-to-br from-indigo-200 via-purple-300 via-rose-600 to-pink-300'>
            <div className='flex md:flex-row flex-col'>
                <img className='animate-megaspin rounded-tl-full md:w-1/3
             shadow-2xl rounded-bl-full p-20 mb-10 scale-50' alt='me!' src={MyPhoto} />
                <div className='flex flex-col justify-center content-center'>
                    <h1 className=' text-7xl text-center underline mb-10'>About David</h1>
                    <p className='font-black text-md self-center text-center
                  w-1/2 md:w-2/3 mb-24 md:mb-0'>
                        Welcome! I am a front-end web developer leveraging a bartending and music background to pursue a fast and flexible web experience using critical thinking, creativity and anticipation of needs. After recently completing a full-stack certificate to develop  my abilities in Javascript and React to ensure smooth UX, I have been able to work in multiple teams in various positions to create projects using both the MERN and SERN stacks. I have found that the different perspectives of team members to be integral in finding intuitive and unique answers for everyday life.
                    </p>
                </div>
            </div>
        </span>
    )
}
