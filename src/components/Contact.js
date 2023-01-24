import React, { useState } from 'react'
import axios from 'axios';
import emailjs from '@emailjs/browser'

export default function Contact() {

    const [formState, setForm] = useState({ name: '', email: '', message: '' })
    const { name, email, message } = formState;

    const handleSubmit =  async (e) => {
            // let {data:cat} = await axios.get(`https://api.thecatapi.com/v1/images/search`)
        e.preventDefault();
        if (name === '' || email === '' || message === '') {
            alert('You cannot send an empty form! If you used autofill, please try again.')
        } else {

            let params = {
                from_name:name,
                sender_email:email,
                message: message
            }
            let res = await emailjs.send(process.env.REACT_APP_SERVICE,process.env.REACT_APP_TEMPLATE, params, process.env.REACT_APP_PASSWORD)

            setForm({ name: '', email: '', message: '' })
            window.location.reload(false)
            if(res){
                alert('Thanks for getting in contact! You will hear from  me soon! :)')
            }
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
                alert('that email is invalid! If you used autofill, please try again')
            }
        }
        const { name, value } = e.target
        setForm({ ...formState, [name]: value })


    }

    return (
        <div className='h-screen flex flex-col place-content-center w-full'>
            <div className='flex flex-col justify-around'>

                <p className=' m-5 text-2xl text-center '>Lets connect! <br/> <br/> Fill out the form below and I will get back to you soon!</p>

                <div name='infoForm' className='flex h-full flex-col'>
                    <div className="flex flex-col self-center place-content-center w-2/3 p-6 rounded-lg shadow-lg bg-slate-200 bg-opacity-25">
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
                            <button type="button" onClick={handleSubmit}
                            data-bs-toggle="modal" 
                            data-bs-target="#exampleModalCenter"
                            style={{border:'none'}}
                            className="
                            place-self-center
      py-2.5
      bg-blue-600
      text-white
      text-xl
      leading-tight
      uppercase
      rounded-full
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out
      ">Send</button>
     
                        </form>
                    </div >
                </div>
            </div >
           

        </div>)

}
