import React, { useState } from 'react'



export default function Contact() {

    const [formState, setForm] = useState({ name: '', email: '', message: '' })
    const { name, email, message } = formState;



    function handleSubmit(e) {
        e.preventDefault();
        if (name === '' || email === '' || message === '')
            alert('You cannot send an empty form!')


        alert("Thanks for the message! Unfortunately I have not set up a mail handler but feel free to reach out through the links below!")




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
    }

    return (
        <div className='h-full md:h-screen w-screen bg-gradient-to-bl from-indigo-200 via-purple-300 via-rose-600 to-pink-300'>
            <div className='flex flex-col justify-around mt-10'>
                <a className='hover:text-blue-800 text-3xl place-self-center w-fit ' href="https://drive.google.com/file/d/11MIK43Y9pm5FXQG_6dwNabcoIlnX5En_/view" download='davidResume' target='_blank' >Download my Resume!</a>
                <p class=' mt-5 text-center '>and send me an email below!</p>

                <div name='infoForm' className='flex mt-10 flex-col'>
                    <div className="flex flex-col self-center place-content-center contents-center w-2/3 p-6 rounded-lg shadow-lg bg-slate-200 bg-opacity-25">
                        <form className='flex flex-col'>
                            <div className="form-group mb-6">
                                <input type="text" onBlur={handleChange} className="form-control block
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
                                <textarea onBlur={handleChange}
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
                            <button type="submit" onSubmit={handleSubmit} className="
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
