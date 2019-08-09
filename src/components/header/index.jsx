import React, {Component} from 'react';

export class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
          isToggle:false,
          isScroll:false
        };

        this.handleClick = this.handleClick.bind(this);
    }



    handleClick(){
        this.setState(state =>({
            isToggle: !state.isToggle
        }));
    }

    render(){
        return (
            <div className="header" >
                <nav className="nav">
                    <a href="#about" className="nav-link">About us</a>
                    <a href="#work" className="nav-link">Work</a>
                    <a href="#" className="nav-link"><img src={require("../../img/logo.png")} className="nav-logo" alt="logo graphics"/></a>
                    <a href="#shop" className="nav-link">Shop</a>
                    <a href="#contact" className="nav-link">Contact</a>
                </nav>

                <nav className="mobile-nav">
                    <a href="#"><img src={require("../../img/logo.png")} alt="logo graphics" /></a>
                    <button className="btn-menu" onClick={this.handleClick}>
                        <span className="btn-line"></span>
                    </button>
                    <div className={this.state.isToggle? 'mobile-nav-menu open': 'mobile-nav-menu' }>
                        <a href="#" className="mobile-nav-link" onClick={this.handleClick}>Home</a>
                        <a href="#about" className="mobile-nav-link" onClick={this.handleClick}>About us</a>
                        <a href="#work" className="mobile-nav-link" onClick={this.handleClick}>Work</a>
                        <a href="#shop" className="mobile-nav-link" onClick={this.handleClick}>Shop</a>
                        <a href="#contact" className="mobile-nav-link" onClick={this.handleClick}>Contact</a>
                    </div>
                </nav>
            </div>
        )
    }
}

