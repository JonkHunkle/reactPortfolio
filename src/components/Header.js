import Navbar from './Navbar'

export default function Header(props) {

    return (
        <>
            <div class='flex justify-between'>
                <div class='flex h-30 md:text-9xl text-6xl m-10'>Czerwinski</div>
                <Navbar handleClick={props.handleClick}>

                </Navbar>
            </div>
        </>)
}
