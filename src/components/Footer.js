import React from 'react'
const styles = {
    footerStyles: {
        backgroundcolor: "#cc33ff",
        opacity: "0.4"
    }
}
export default function Footer() {
    return (
        <div class='fixed bottom-0 h-auto w-screen bg-slate-200'><p class='text-center'>ASK A WIZARD</p>
            <div className='flex justify-around'>
                <a href="https://www.linkedin.com/in/david-czerwinski1" target="_blank"
                >My Linkdin!</a
                >
                <a href="https://twitter.com/JimboNerton" target="_blank"
                >My Twitter!</a
                >
                <a href="https://github.com/JonkHunkle" target="_blank">My Github!</a>

            </div></div>
    )
}
