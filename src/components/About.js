import React from 'react'
import MyPhoto from '../assets/images/david.jpeg'

export default function About() {


    return (
        <div class='flex justify-between     flex-row'>
            <img class='pl-10 pt-10 rounded-t-full rounded-b-full object-contain h-56 w-96' alt='me!' src={MyPhoto} />
            <span class='ml-20 flex-col self-center'>
                <h1 class=' text-7xl my-10 underline'>About David</h1>
                <p class='font-black w-1/2'>
                    Front-end web developer leveraging bartending background to pursue a fast and flexible web experience. Recently completed a full-stack certification to develop  my competitive skill set in Javascript and React to ensure smooth UX. After working in a team to create projects using both the MERN and SERN stacks, I have found that the different perspectives of team members to be integral in finding intuitive and unique answers for everyday life. I am excited to start this new career path in an industry that is determined to give users a fast and high quality experience no matter what they need.
                </p>
            </span>
        </div>
    )
}
