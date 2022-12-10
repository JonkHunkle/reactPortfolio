import React, { useState } from 'react'
// const nodemailer = require('nodemailer');
// import nodemailer from 'nodemailer'
// require('dotenv').config()
import emailjs from '@emailjs/browser'


export default function Contact() {

    const [formState, setForm] = useState({ name: '', email: '', message: '' })
    const { name, email, message } = formState;

    const handleSubmit =  async (e) => {

        e.preventDefault();

        console.log(formState)

        if (name === '' || email === '' || message === '') {
            alert('You cannot send an empty form!')
        } else {

            let params = {
                from_name:name,
                sender_email:email,
                message: message
            }
            let res = await emailjs.send('service_1uebwag','template_s57dup6', params, 'LLY_bqRvlGpeZJNIC')
                        
            alert('thank you for trying out my contact page! Check out my resume or the links below for ways to contact me!')


            setForm({ name: '', email: '', message: '' })
            window.location.reload(false)
        }
    }




    function handleChange(e) {
        const validEmail = (email) => {
            const regEmail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            return regEmail.test(String(email).toLowerCase())
        }
        if (e.target.name === 'email') {
            const valid = validEmail(e.target.value)
            if (!valid) {
                alert('that email is invalid!')
            }
        }
        if (!e.target.value.length) {
            alert(`${e.target.name} is empty! You need to put something!`);
        }
        const { name, value } = e.target
        setForm({ ...formState, [name]: value })


    }

    return (
        <div className='h-screen flex flex-col place-content-center w-full'>
            <div className='flex flex-col justify-around '>

                <p className=' m-5 text-2xl text-center '>Lets connect! <br/> <br/> Fill out the form below and I will get back to you soon!</p>

                <div name='infoForm' className='flex h-full flex-col'>
                    <div className="flex flex-col self-center place-content-center contents-center w-2/3 p-6 rounded-lg shadow-lg bg-slate-200 bg-opacity-25">
                        <form className='flex flex-col'>
                            <div className="form-group mb-6">
                                <input type="text" onChange={handleChange} className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name='name'
                                    placeholder="Name" />
                            </div>
                            <div className="form-group mb-6">
                                <input type="email" onBlur={handleChange} className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name='email'
                                    placeholder="Email address" />
                            </div>
                            <div className="form-group mb-6">
                                <textarea onChange={handleChange}
                                    className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                                    name='message'
                                    rows="5"
                                    placeholder="Message"
                                ></textarea>
                            </div>
                            <button type="submit" onClick={handleSubmit} className="
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out">Send</button>
                        </form>
                    </div >
                </div>
            </div >
        </div>)

}
