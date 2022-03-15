import React from 'react'
import github from '../assets/images/github-copilot.svg'
import twitter from '../assets/images/twitter-svg.svg'
import linked from '../assets/images/linkedin.svg'
export default function Footer() {
    return (
        <div className='fixed bottom-0 py-2 w-screen bg-slate-300'><p className='text-center'>ASK A WIZARD</p>
            <div className='flex justify-around'>
                <a className='flex hover:text-blue-800' href="https://www.linkedin.com/in/david-czerwinski1" target="_blank"
                ><img className='icon' src={linked} /> My Linkedin!</a>
                <a className='flex hover:text-blue-800' href="https://twitter.com/JimboNerton" target="_blank"
                > <img className='icon' src={twitter} /> My Twitter!</a
                >

                <a className='flex hover:text-blue-800' href="https://github.com/JonkHunkle" target="_blank"> <img className='icon' src={github} /> My Github!</a>

            </div></div>
    )
}
