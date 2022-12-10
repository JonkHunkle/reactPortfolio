import React from 'react'
import resume from '../assets/images/resume.svg'

export default function Resume() {
    return (
        <div className='flex h-screen md:w-full flex-col place-items-center place-content-center'>
            <a className=' text-3xl w-fit flex flex-col content-center justify-around self-center hover:bg-slate-500 rounded-box hover:bg-opacity-25 transition duration-700 bg-slate-300 bg-opacity-25 md:py-8 p-12 md:px-96' href="https://drive.google.com/file/d/1MXPtPwHeaOBl5mX-v0kRFFOcPxoZX_tP/view?usp=sharing" download='davidResume' target='_blank' rel="noreferrer" ><img className='' src={resume} alt='resumeBtn' /><br /> <p className='hover:text-blue-800'>Download my Resume!</p>
            </a>
        </div>
    )
}
