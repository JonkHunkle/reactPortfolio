import React from 'react'

export default function Projects() {

    return (

        <>
            <div className=' h-screen p-24 w-screen bg-gradient-to-b justify-around flex-col flex from-indigo-200 via-purple-300 via-rose-600 to-pink-300'>


                <div className="carousel carousel-center self-center items-center md:w-3/8  w-1/2 rounded-box" >

                    <div className='flex flex-col h-full justify-around carousel-item place-content-center card bg-contain' id="bandcamp">
                        <a className='hover:text-green-400'
                            href="https://techblawg.herokuapp.com/"
                            target="_blank"
                        >
                            <p className='hover:text-green-400 btn self-center text-4xl'>BandCamp!!</p>
                        </a><a href="https://github.com/JonkHunkle/techblog" target='_blank'>
                            <h5 className='text-2xl btn self-center text-center hover:text-green-400'>Repo</h5></a>
                    </div>
                    <div id='techblog' className=' card carousel-item flex bg-center bg-no-repeat flex-col'>
                        <a className=' rounded-full p-4 bg-slate-200 hover:bg-slate-300 bg-opacity-75 w-fit self-center hover:text-green-400'
                            href="https://techblawg.herokuapp.com/"
                            target="_blank"
                        >
                            <p className='hover:text-green-400 text-4xl'>Tech Blog!</p>
                        </a><a className='rounded-full p-4 bg-slate-200 bg-opacity-75 w-fit self-center hover:bg-slate-300' href="https://github.com/JonkHunkle/techblog" target='_blank'>
                            <h5 className='text-2xl hover:text-green-400'>Repo</h5></a>
                    </div>

                    <div id='project1' className='flex carousel-item card flex-col justify-around bg-left-bottom bg-no-repeat '>
                        <a className='text-4xl rounded-full p-4 bg-slate-200 hover:bg-slate-300 bg-opacity-75 self-center hover:text-green-400' href="https://jonkhunkle.github.io/Movies-and-Cocktails/" target='_blank'>
                            Movies and Cocktails!</a>
                        <a className='rounded-full p-4 bg-slate-200 hover:bg-slate-300 bg-opacity-75 self-center text-2xl hover:text-green-400' href="https://github.com/JonkHunkle/Movies-and-Cocktails" target='_blank'>
                            Repo</a>
                    </div>

                    <div id='planner' className='flex carousel-item card bg-cover bg-center justify-around bg-no-repeat flex-col'>
                        <a href="https://jonkhunkle.github.io/Day-planner/" target="_blank">
                            <h2 className='text-4xl rounded-full p-4 bg-slate-200 bg-opacity-75 self-center hover:bg-slate-300 hover:text-green-400'>Day Planner</h2>
                        </a>
                        <a href="https://github.com/JonkHunkle/Day-planner" target='_blank'>
                            <h5 className='text-2xl hover:text-green-400 rounded-full p-4 bg-slate-200 bg-opacity-75  self-center hover:bg-slate-300'>Repo</h5></a>
                    </div>

                    <div id='project2' className='flex carousel-item card bg-center justify-around bg-no-repeat flex-col'>
                        <a href="https://github.com/JonkHunkle/Project-2" target="_blank">
                            <h2 className='text-4xl rounded-full p-4 bg-slate-200 bg-opacity-75 self-center hover:bg-slate-300 hover:text-green-400'>LifeTracker</h2>
                        </a>
                        <a href="https://github.com/JonkHunkle/Project-2" target='_blank'>
                            <h5 className='text-2xl hover:text-green-400 rounded-full p-4 bg-slate-200 bg-opacity-75  self-center hover:bg-slate-300'>Repo</h5></a>
                    </div>

                    <div id='tracker' className='flex carousel-item card bg-center justify-around bg-no-repeat flex-col'>
                        <a>
                            <h2 className='text-4xl rounded-full p-4 bg-slate-200 bg-opacity-75 self-center hover:bg-slate-300 hover:text-green-400'>CLI Employee Tracker</h2>
                        </a>
                        <a href="https://github.com/JonkHunkle/employeeTracker" target='_blank'>
                            <h5 className='text-2xl hover:text-green-400 rounded-full p-4 bg-slate-200 bg-opacity-75  self-center hover:bg-slate-300'>Repo</h5></a>
                    </div>

                    <div id='textEditor' className='flex carousel-item card bg-center justify-around bg-no-repeat flex-col'>
                        <a href="https://textpwa.herokuapp.com/" target="_blank">
                            <h2 className='text-4xl rounded-full p-4 bg-slate-200 bg-opacity-75 self-center hover:bg-slate-300 hover:text-green-400'>Text Editor</h2>
                        </a>
                        <a href="https://github.com/JonkHunkle/textPWA" target='_blank'>
                            <h5 className='text-2xl hover:text-green-400 rounded-full p-4 bg-slate-200 bg-opacity-75  self-center hover:bg-slate-300'>Repo</h5></a>
                    </div>

                </div>
            </div>
        </>)
}
