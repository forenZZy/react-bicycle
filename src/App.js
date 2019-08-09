import React from 'react';
import {Header} from "./components/header";
import {About} from "./components/about";
import {Work} from "./components/work";
import {Twits} from "./components/slider";
import {Shop} from "./components/shop";
import {Contact} from "./components/contact";
import {Footer} from "./components/footer";


export function App (){
  return (
      <div  className="body fixed-nav" >
        <Header  />
          <div className="container">
              <About />
              <Work />
              <Twits />
              <Shop />
              <Contact />
              <Footer />
          </div>
      </div>
     )
  }
