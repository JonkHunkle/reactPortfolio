import React from 'react'
import MyPhoto from '../assets/images/david.jpeg'

export default function About() {


    return (
        <div class='flex md:flex-row h-fit flex-col'>
            <img class='animate-megaspin rounded-tr-full md:w-1/3
             shadow-2xl
            rounded-br-full p-20 mb-10 scale-50' alt='me!' src={MyPhoto} />
            <div class='flex flex-col justify-center content-center'>
                <h1 class=' text-7xl text-center underline mb-10'>About David</h1>
                <p class='font-black text-md self-center text-center
                  w-1/2 md:w-2/3'>
                    Front-end web developer leveraging bartending background to pursue a fast and flexible web experience. After working in multiple teams to create projects using both the MERN and SERN stacks, I have found that the different perspectives of team members to be integral in finding intuitive and unique answers for everyday life. I am excited to start this new career path in an industry that is determined to give users a fast and high quality experience no matter what they need.
                </p>
            </div>
        </div>
    )
}
