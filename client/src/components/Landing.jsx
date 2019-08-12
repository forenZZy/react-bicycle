import React from 'react';
import Header from "./header";
import {About} from "./about";
import {Work} from "./work";
import {Twits} from "./slider";
import {Shop} from "./shop";
import {Contact} from "./contact";
import {Footer} from "./footer";


export function Landing() {
    return (
            <div className="main-div fixed-nav">
                <Header/>
                <div className="container">
                    <About/>
                    <Work/>
                    <Twits/>
                    <Shop/>
                    <Contact/>
                    <Footer/>
                </div>
            </div>
    )
}
