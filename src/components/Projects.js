import React from 'react'
import { useMediaQuery } from 'react-responsive';
import techblog from '../assets/images/techblog.png'
import project1 from '../assets/images/project1.png'
import planner from '../assets/images/planner.png'
import tracker from '../assets/images/lifetracker.png'
import text from '../assets/images/text.png'


export default function Projects() {
    const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

    return (

        <>
            <div className=' h-screen w-screen flex-col flex  place-content-center'>
                {isMobile ? (<p className='pb-6 text-center self-center text-2xl'>Projects</p>) : (<p className='text-center self-center pb-6 text-2xl'>Projects<br />Use arrow keys or center mouse button to navigate</p>)}
                <div className="carousel carousel-center self-center items-center md:w-5/8 px-2 w-2/3 h-1/2 md:h-5/8 rounded-box" >


                    <div className=' card carousel-item items-center justify-around place-content-center h-full md:w-1/3 w-full flex flex-col'>
                        <a className=' w-fit h-min self-center text-4xl btn  hover:text-green-400'
                            href="https://techblawg.herokuapp.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Tech Blog
                        </a>
                        <img src={techblog} className='h-1/3 w-fit' alt='techblog' ></img><a className='btn h-min w-fit text-2xl text-center hover:text-green-400' href="https://github.com/JonkHunkle/techblog" target='_blank'
                        rel="noreferrer">
                            Repo</a>
                        <p className='text-center'>A bare-bones social connection site with user authentication.<br />Technologies used:
                            <p>Handlebars,
                                SQL,
                                Sessions</p></p>
                    </div>

                    <div className='flex carousel-item card h-full w-full flex-col justify-around md:w-1/3'>
                        <a className='text-4xl btn h-min hover:text-green-400' href="https://jonkhunkle.github.io/Movies-and-Cocktails/" target='_blank'
                        rel="noreferrer">
                            Movies and Cocktails!</a>
                        <img className='h-1/3 self-center' src={project1} alt ='project-1' />
                        <a className='btn self-center text-2xl hover:text-green-400' href="https://github.com/JonkHunkle/Movies-and-Cocktails" target='_blank'
                        rel="noreferrer">
                            Repo</a>
                        <p className='text-center'>Makes api calls to return information about movies and gives recommended drinks<br />Technologies used:
                            <p>Materialize,
                                CSS,
                                JQuery</p></p>
                    </div>

                    <div className='flex card h-full w-full md:w-1/3 carousel-item  justify-around  flex-col'>
                        <a href="https://jonkhunkle.github.io/Day-planner/" target="_blank"
                            className='text-4xl btn self-center h-min hover:text-green-400'
                            rel="noreferrer">Day Planner
                        </a>
                        <img className='self-center h-1/3 w-auto' src={planner} alt='planner'/>
                        <a href="https://github.com/JonkHunkle/Day-planner" target='_blank'
                            className='text-2xl hover:text-green-400 btn w-fit self-center'
                            rel="noreferrer">Repo</a>
                        <p className='text-center'>A planner that shows its user locally stored to-dos with time comparison logic.<br />Technologies used:
                            <p>HTML,
                                CSS,
                                JQuery</p></p>

                    </div>

                    <div className='flex carousel-item card h-full w-full md:w-1/3 justify-around  flex-col'>
                        <a href="https://lifetracker-project2.herokuapp.com/" target="_blank"
                            className='text-4xl btn self-center hover:text-green-400'
                            rel="noreferrer">LifeTracker
                        </a>
                        <img src={tracker} className='h-1/3  self-center' alt='tracker' />
                        <a href="https://github.com/JonkHunkle/lifetracker"
                        target='_blank'
                        rel="noreferrer">Repo</a>
                        className='text-2xl hover:text-green-400 self-center btn'
                        <p className='text-center'>Allows authenticated users full CRUD functionality to keep track of a busy life.<br /> Technologies used:
                            <p>Express.js,
                                Node.js,
                                Handlebars</p></p>
                    </div>



                    <div className='flex carousel-item card h-full w-full md:w-1/3 justify-around flex-col'>
                        <a href="https://textpwa.herokuapp.com/" target="_blank" className='text-4xl btn self-center h-min hover:text-green-400'
                        rel="noreferrer">Text Editor
                        </a>
                        <img className='h-1/3 self-center' src={text} alt ='textPWA' />
                        <a href="https://github.com/JonkHunkle/textPWA" 
                        target='_blank'
                        rel="noreferrer"
                        className='text-2xl hover:text-green-400 btn  self-center '>Repo</a>

                        <p className='text-center'>A handy text editor with a webpack allowing for offline persistance<br />Technologies used:
                            <p>Express.js,
                                Webpacks,
                                IDB</p></p>
                    </div>

                </div>

            </div>
        </>)
}
