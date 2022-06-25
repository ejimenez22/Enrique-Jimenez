import React from 'react'
import SideNav from '../Nav'

function Contact() {
    return (
        <>
        <SideNav />
        <section id='Contact'>
            <h1>Contact</h1>
            <form id='contact-form'className='contactFormEntry' >
                <div>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' name='name'></input>
                </div>
                <div>
                    <label htmlFor='email'>Email Address:</label>
                    <input type='email' name='email'></input>
                </div>
                <div>
                    <label htmlFor='message'>Message:</label>
                    <input rows='10' message='message'></input>
                </div>
            </form>
        </section>
        </>
    )
}

export default Contact