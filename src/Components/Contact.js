import React from 'react'

function Contact() {
    return (
        <>
            <div className="contact" id="contact">
                <h1 className="heading"> <span>contact</span> us </h1>
                <form action="">
                    <div className="inputBox">
                        <input type="text" placeholder="name" />
                        <input type="email" placeholder="email" />
                    </div>
                    <div className="inputBox">
                        <input type="number" placeholder="number" />
                        <input type="text" placeholder="subject" />
                    </div>
                    <textarea placeholder="message" name="" id="" cols="30" rows="10"></textarea>
                    <input type="submit" value="send message" className="btn" />
                </form>
            </div>
        </>
    )
}

export default Contact
