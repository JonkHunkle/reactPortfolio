import React from 'react'
import resume from '../assets/images/resume.svg'

export default function Resume() {
    return (
        <div className='flex h-screen  md:w-full flex-col place-items-center place-content-center bg-gradient-to-l from-indigo-200  via-rose-600 via-purple-300 to-pink-300 '>
            <a className=' text-3xl w-fit hover:bg-indigo-500 rounded-box hover:bg-opacity-25 transition duration-700 bg-indigo-300 bg-opacity-25 md:py-8 p-12 md:px-96' href="https://drive.google.com/file/d/18tG8HtiTgQpenzt93B0CU4QLc3HdJZSx/view?usp=sharing" download='davidResume' target='_blank' ><img className='' src={resume} /><br /> <p className='hover:text-blue-800'>Download my Resume!</p>
            </a>
        </div>
    )
}
