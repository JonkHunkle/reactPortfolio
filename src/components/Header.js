import Navbar from './Navbar'
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom'



export default function Header(props) {
    const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
    return (
        <>
            <div className='flex md:justify-around justify-between'>
                <div className='flex md:text-8xl text-6xl mt-9'>Czerwinski</div>

                {isMobile ?
                    (<Navbar handleClick={props.handleClick} />) : (<div className=' flex h-auto justify-evenly items-center'><Link to='/' className='hover:bg-zinc-300 h-1/3 '>About</Link>
                        <Link to='/contact' className='hover:bg-zinc-300 h-1/3 '>Contact</Link>
                        <Link to='/projects' className='hover:bg-zinc-300 h-1/3 '>Projects</Link><Link to='/resume' className='hover:bg-zinc-300 h-1/3 '>Resume</Link></div>)}


            </div>
        </>)
}
