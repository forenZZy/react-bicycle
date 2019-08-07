import React, {Component} from 'react';
import Header from "./Components/header/header";
import About from "./Components/about/About";
import Work from "./Components/work/Work";
import Twits from "./Components/slider/Twits";
import Shop from "./Components/shop/Shop";
import Contact from "./Components/contact/Contact";
import Footer from "./Components/footer/Footer";


class App extends Component{


  render(){
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
  }

export default App;
