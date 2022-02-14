import Navbar from './Navbar'
import { useMediaQuery } from 'react-responsive';



export default function Header(props) {
    const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
    return (
        <>
            <div class='flex md:justify-around justify-between'>
                <div class='flex h-25 p-6 md:text-9xl text-6xl mt-5'>Czerwinski</div>


                {isMobile ? (<Navbar handleClick={props.handleClick} />) : (<div className=' flex w-screen h-auto justify-evenly items-center'><button class='hover:bg-zinc-300 h-1/3' onClick={() => { props.handleClick('About') }}>About</button>
                    <button class='hover:bg-zinc-300 h-1/3 ' onClick={() => { props.handleClick('Contact') }}>Contact</button>
                    <button class='hover:bg-zinc-300 h-1/3' onClick={() => { props.handleClick('Projects') }}>Projects</button></div>)}

            </div>
        </>)
}
