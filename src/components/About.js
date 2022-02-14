import React from 'react'
import MyPhoto from '../assets/images/david.jpeg'

export default function About() {


    return (
        <div class='flex md:flex-row flex-col justify-evenly'>
            <img class=' self-center rounded-tr-full md:w-5/12 shadow-2xl
            rounded-br-full scale-50' alt='me!' src={MyPhoto} />
            <span class='flex justify-around flex-col '>
                <h1 class='text-center text-7xl underline'>About David</h1>
                <p class='font-black m-8 self-center text-center
                  w-1/2 md:w-2/3'>
                    Front-end web developer leveraging bartending background to pursue a fast and flexible web experience. Recently completed a full-stack certification to develop  my competitive skill set in Javascript and React to ensure smooth UX. After working in multiple teams to create projects using both the MERN and SERN stacks, I have found that the different perspectives of team members to be integral in finding intuitive and unique answers for everyday life. I am excited to start this new career path in an industry that is determined to give users a fast and high quality experience no matter what they need.
                </p>
            </span>
        </div>
    )
}
