import React from 'react'

function NewLetter() {
    return (
        <>
            <div className="newsletter">
                <h3>subscribe us for latest updates</h3>
                <form action="">
                    <input className="box" type="email" placeholder="enter your email" />
                    <input type="submit" value="subscribe" className="btn" />
                </form>
            </div>
        </>
    )
}

export default NewLetter
