import Navbar from './Navbar'
import { useMediaQuery } from 'react-responsive';



export default function Header(props) {
    const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
    return (
        <>
            <div className='flex md:justify-around justify-between'>
                <div className='flex md:text-8xl text-6xl mt-9'>Czerwinski</div>

                {isMobile ?
                    (<Navbar handleClick={props.handleClick} />) : (<div className=' flex h-auto justify-evenly items-center'><button className='hover:bg-zinc-300 h-1/3' onClick={() => { props.handleClick('About') }}>About</button>
                        <button className='hover:bg-zinc-300 h-1/3 ' onClick={() => { props.handleClick('Contact') }}>Contact</button>
                        <button className='hover:bg-zinc-300 h-1/3' onClick={() => { props.handleClick('Projects') }}>Projects</button><button className='hover:bg-zinc-300 h-1/3' onClick={() => { props.handleClick('Resume') }}>Resume</button></div>)}


            </div>
        </>)
}
