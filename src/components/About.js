import React from 'react'
import MyPhoto from '../assets/images/david.jpeg'

export default function About() {


    return (
        <span className='flex h-full w-full flex-col bg-gradient-to-br from-indigo-200 via-purple-300 via-rose-600 to-pink-300'>
            <div className='flex md:flex-row h-fit flex-col'>
                <img className='animate-megaspin rounded-tl-full md:w-1/3
             shadow-2xl
            rounded-bl-full p-20 mb-10 scale-50' alt='me!' src={MyPhoto} />
                <div className='flex flex-col justify-center content-center'>
                    <h1 className=' text-7xl text-center underline mb-10'>About David</h1>
                    <p className='font-black text-md self-center text-center
                  w-1/2 md:w-2/3 mb-16 md:mb-0'>
                        Front-end web developer leveraging bartending background to pursue a fast and flexible web experience. After working in multiple teams to create projects using both the MERN and SERN stacks, I have found that the different perspectives of team members to be integral in finding intuitive and unique answers for everyday life. I am excited to start this new career path in an industry that is determined to give users a fast and high quality experience no matter what they need.
                    </p>
                </div>
            </div>
        </span>
    )
}
