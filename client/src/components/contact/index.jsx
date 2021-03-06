import React from 'react';

export function Contact (){
    return (
        <section id="contact" className="contact">
            <img src={require("../../res/img/logo.png")} alt="logo" className="margin-s"/>
            <h4 className="heading-3 margin-m">Stay on the saddle!</h4>
            <form className="contact-form">
                <input type="email" placeholder="enter your email..." className="contact-form-input"/>
                <input type="submit" value="Go" className="contact-btn"/>
            </form>
        </section>
    )
}
