import Navbar from './Navbar'
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom'



export default function Header(props) {
    const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
    return (
        <>
            <div id='header' className='flex bg-slate-400 bg-opacity-25 w-screen md:justify-around z-30 justify-between  fixed top-0'>
                <Link to='/' className='flex md:text-8xl hover:text-blue-400 text-5xl mt-9'>Czerwinski</Link>

                {isMobile ?
                    (<Navbar handleClick={props.handleClick} />) : (<div className=' flex h-auto justify-evenly items-center'>
                        <Link to='/' className='hover:bg-zinc-300 h-1/3 flex flex-col justify-around navBtn'>Home</Link>
                        <Link to='/contact' className='hover:bg-zinc-300 h-1/3 flex flex-col justify-around navBtn'>Contact</Link>
                        <Link to='/projects' className='hover:bg-zinc-300 h-1/3 flex flex-col justify-around navBtn'>Projects</Link>
                        <Link to='/resume' className='hover:bg-zinc-300 h-1/3 flex flex-col justify-around navBtn'>Resume</Link>
                    </div>)}
            </div>
        </>)
}
