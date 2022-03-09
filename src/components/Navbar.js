import { useState } from "react"
import React from 'react'

export default function Navbar(props) {

    const [showSidebar, setShowSidebar] = useState('false')


    return (
        <>{
            !showSidebar ?
                (
                    <div className=" fixed top-0 flex right-10 flex-col">
                        <a
                            className="flex w-auto h-auto text-4xl text-white items-center cursor-pointer self-center"
                            onClick={() => setShowSidebar(!showSidebar)}> x                    </a>

                        <button className='hover:bg-zinc-300' onClick={() => { props.handleClick('About') }}>About</button>
                        <button className='hover:bg-zinc-300' onClick={() => { props.handleClick('Contact') }}>Contact</button>
                        <button className='hover:bg-zinc-300' onClick={() => { props.handleClick('Projects') }}>Projects</button>
                        <button className='hover:bg-zinc-300' onClick={() => { props.handleClick('Resume') }}>Resume</button>

                    </div>
                ) : <svg
                    onClick={() => setShowSidebar(!showSidebar)}
                    className="fixed z-30 flex items-center cursor-pointer right-10 top-6"
                    fill="#000000"
                    viewBox="0 0 100 80"
                    width="40"
                    height="40"
                >
                    <rect width="100" height="10"></rect>
                    <rect y="30" width="100" height="10"></rect>
                    <rect y="60" width="100" height="10"></rect>
                </svg>
        }


        </>)
}
