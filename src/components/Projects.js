import React from 'react'

export default function Projects() {

    return (
        <div className="flex text-center self-center tex-center flex-col md:flex-row justify-around w-screen place-items-center h-full md:w-2/3 space-y-3 space-x-3 md:h-screen m-12 md:flex-wrap">

            <div id='techblog' className='black-border flex md:w-1/4 justify-around bg-center bg-no-repeat flex-col'>
                <a className=' rounded-full p-4 bg-slate-200 hover:bg-slate-300 bg-opacity-75 w-fit self-center hover:text-green-400'
                    href="https://techblawg.herokuapp.com/"
                    target="_blank"
                >
                    <p className='hover:text-green-400 text-4xl'>Tech Blog!</p>
                </a><a className='rounded-full p-4 bg-slate-200 bg-opacity-75 w-fit self-center hover:bg-slate-300' href="https://github.com/JonkHunkle/techblog" target='_blank'>
                    <h5 className='text-2xl hover:text-green-400'>Repo</h5></a>
            </div>
            <div id='project1' className='flex md:w-1/4 black-border flex-col justify-around bg-left-bottom bg-no-repeat '>
                <a className='text-4xl rounded-full p-4 bg-slate-200 hover:bg-slate-300 bg-opacity-75 self-center hover:text-green-400' href="https://jonkhunkle.github.io/Project-1/" target='_blank'>
                    Movies and Cocktails!</a>
                <a className='rounded-full p-4 bg-slate-200 hover:bg-slate-300 bg-opacity-75 self-center text-2xl hover:text-green-400' href="https://github.com/JonkHunkle/Project-1" target='_blank'>
                    Repo</a>
            </div>

            <div id='planner' className='flex black-border bg-cover bg-center justify-around bg-no-repeat flex-col md:w-1/4'>
                <a href="https://jonkhunkle.github.io/Day-planner/" target="_blank">
                    <h2 className='text-4xl rounded-full p-4 bg-slate-200 bg-opacity-75 self-center hover:bg-slate-300 hover:text-green-400'>Day Planner</h2>
                </a>
                <a href="https://github.com/JonkHunkle/Day-planner" target='_blank'>
                    <h5 className='text-2xl hover:text-green-400 rounded-full p-4 bg-slate-200 bg-opacity-75  self-center hover:bg-slate-300'>Repo</h5></a>
            </div>
            <div id='project2' className='flex black-border bg-center justify-around bg-no-repeat flex-col md:w-1/4'>
                <a href="https://github.com/JonkHunkle/Project-2" target="_blank">
                    <h2 className='text-4xl rounded-full p-4 bg-slate-200 bg-opacity-75 self-center hover:bg-slate-300 hover:text-green-400'>LifeTracker</h2>
                </a>
                <a href="https://github.com/JonkHunkle/Project-2" target='_blank'>
                    <h5 className='text-2xl hover:text-green-400 rounded-full p-4 bg-slate-200 bg-opacity-75  self-center hover:bg-slate-300'>Repo</h5></a>
            </div>
            <div id='tracker' className='flex black-border bg-center justify-around bg-no-repeat flex-col md:w-1/4'>
                <a>
                    <h2 className='text-4xl rounded-full p-4 bg-slate-200 bg-opacity-75 self-center hover:bg-slate-300 hover:text-green-400'>CLI Employee Tracker</h2>
                </a>
                <a href="https://github.com/JonkHunkle/employeeTracker" target='_blank'>
                    <h5 className='text-2xl hover:text-green-400 rounded-full p-4 bg-slate-200 bg-opacity-75  self-center hover:bg-slate-300'>Repo</h5></a>
            </div><div id='textEditor' className='flex black-border bg-center justify-around bg-no-repeat flex-col md:w-1/4'>
                <a href="https://textpwa.herokuapp.com/" target="_blank">
                    <h2 className='text-4xl rounded-full p-4 bg-slate-200 bg-opacity-75 self-center hover:bg-slate-300 hover:text-green-400'>Text Editor</h2>
                </a>
                <a href="https://github.com/JonkHunkle/textPWA" target='_blank'>
                    <h5 className='text-2xl hover:text-green-400 rounded-full p-4 bg-slate-200 bg-opacity-75  self-center hover:bg-slate-300'>Repo</h5></a>
            </div>
        </div >
    )
}
