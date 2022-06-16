import React from 'react'

function Contact() {
    return (
        <section>
            <h1>Contact</h1>
            <form id='contact-form'>
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
                    <input rows='5' name='name'></input>
                </div>
            </form>
        </section>
    )
}

export default Contact