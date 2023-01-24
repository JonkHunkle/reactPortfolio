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
                  w-1/2 md:w-2/3'>Welcome!<br />I am a full-stack web developer leveraging a background in bartending and  <a
                            href="https://aboyandhiscomputer.bandcamp.com/releases"
                            target="_blank"
                            rel="noreferrer"
                            className='hover:text-green-700 underline decoration-2'>music
                        </a> production to exercise critical thinking, creativity and anticipation of user needs. My extensive background in Javascript and React ensures a smooth user experience with clean, concise code. Working asynchronously with diverse teams in various roles has strengthened my skills in communication and collaboration. Using these strengths, I strive to build accessible, intuitive, and responsive web apps for a far-reaching audience.
                    </p>
                </div>
            </div>
        </span>
    )
}
