import React,{useRef, useEffect} from 'react'
import techblog from '../assets/images/techblog.png'
import synth from '../assets/images/Synth.png'
import mernstore from '../assets/images/mernstore.png'
import tracker from '../assets/images/lifetracker.png'
import text from '../assets/images/text.png'


export default function Projects() {
    const containerRef = useRef(null);
    

    useEffect(() => {
        const handleWheel = (event) => {
          event.preventDefault();
          const { current } = containerRef;
          current.scrollLeft += event.deltaY;
        };
    
        containerRef.current.addEventListener('wheel', handleWheel);
      }, []);

    return (

        <>
            <div className=' h-screen w-screen flex-col flex  place-content-center'  >
                <p className='pb-6 text-center self-center text-2xl'>Projects</p> 
                <div className="self-center items-center flex md:w-5/8 px-2 w-2/3 h-1/2 md:h-5/8 rounded-box overflow-x-scroll" id ='projectsSections'ref={containerRef} >

                <div className='card carousel-item items-center justify-around place-content-center h-full md:w-1/3 w-full flex flex-col'>
                        <a className='w-fit h-min self-center text-2xl btn  hover:text-green-400' href="https://jonkhunkle.github.io/WebSynth/" target='_blank'
                        rel="noreferrer">
                            Lyre Bird<br/> Synthesizer</a>
                        <img className='h-1/3 self-center' src={synth} alt ='project-1' />
                        <a className='btn self-center text-2xl hover:text-green-400' href="https://github.com/JonkHunkle/WebSynth" target='_blank'
                        rel="noreferrer">
                            Repo</a>
                        <p className='text-center'>Open source drone synthesizer with effects<br />Tools used:</p>
                            <p>Tone.js,
                                MUI,
                                React</p>
                    </div>

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
                        <p className='text-center'>A social connection site with user authentication.<br />Tools used:
                        </p>
                            <p>Handlebars,
                                SQL,
                                Sessions</p>
                    </div>

                    

                    <div className='card carousel-item items-center justify-around place-content-center h-full md:w-1/3 w-full flex flex-col'>
                        <a href="https://antique-store-frontend.onrender.com" target="_blank"
                            className='text-4xl btn self-center h-min hover:text-green-400'
                            rel="noreferrer">MERN Store
                        </a>
                        <img className='self-center h-1/3 w-auto' src={mernstore} alt='planner'/>
                        <a href="https://github.com/JonkHunkle/MERN_store" target='_blank'
                            className='text-2xl hover:text-green-400 btn w-fit self-center'
                            rel="noreferrer">Repo</a>
                        <p className='text-center'>An inventory management system allowing users to create, read, update, and delete items.<br />
                        Tools used:</p>
                            <p>React,
                                Express,
                                Node.js</p>
                    </div>

                    <div className='card carousel-item items-center justify-around place-content-center h-full md:w-1/3 w-full flex flex-col'>
                        <a href="https://lifetracker-project2.herokuapp.com/" target="_blank"
                            className='text-4xl btn self-center hover:text-green-400'
                            rel="noreferrer">LifeTracker
                        </a>
                        <img src={tracker} className='h-1/3  self-center' alt='tracker' />
                        <a href="https://github.com/JonkHunkle/lifetracker"
                        target='_blank'
                        className='text-2xl hover:text-green-400 self-center btn'
                        rel="noreferrer">Repo</a>
                        <p className='text-center'>Allows authenticated users full CRUD functionality to keep track of a busy life.<br /> Tools used:</p>
                            <p>Express.js,
                                Node.js,
                                Handlebars</p>
                    </div>



                    <div className='card carousel-item items-center justify-around place-content-center h-full md:w-1/3 w-full flex flex-col'>
                        <a href="https://textpwa.herokuapp.com/" target="_blank" className='text-4xl btn self-center h-min hover:text-green-400'
                        rel="noreferrer">Text Editor
                        </a>
                        <img className='h-1/3 self-center' src={text} alt ='textPWA' />
                        <a href="https://github.com/JonkHunkle/textPWA" 
                        target='_blank'
                        rel="noreferrer"
                        className='text-2xl hover:text-green-400 btn  self-center '>Repo</a>

                        <p className='text-center'>A handy text editor with a webpack allowing for offline persistance<br />Tools used:</p>
                            <p>Express.js,
                                Webpacks,
                                IDB</p>
                    </div>

                </div>

            </div>
        </>)
}
