import React from 'react'
import MyPhoto from '../assets/images/david.jpeg'

export default function About() {


    return (
        <div class='flex justify-between     flex-col'>
            <img class='pl-10 pt-10 rounded-t-full rounded-b-full self-center object-contain' alt='me!' width='500' src={MyPhoto} />
            <span class='flex-col self-center'>
                <h1 class='text-center text-7xl my-10 underline'>About David</h1>
                <p class='font-black text-center'>
                    Front-end web developer leveraging bartending background to pursue a fast and flexible web experience. Recently completed a full-stack certification to develop  my competitive skill set in Javascript and React to ensure smooth UX. After working in a team to create projects using both the MERN and SERN stacks, I have found that the different perspectives of team members to be integral in finding intuitive and unique answers for everyday life. I am excited to start this new career path in an industry that is determined to give users a fast and high quality experience no matter what they need.
                </p>
            </span>
        </div>
    )
}
