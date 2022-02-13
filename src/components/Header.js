import Navbar from './Navbar'

export default function Header(props) {

    return (
        <>
            <div class='flex justify-between'>
                <div class='flex text-9xl m-10'>Czerwinski</div>
                <Navbar handleClick={props.handleClick('About')} />
            </div>
        </>)
}
