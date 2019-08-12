import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';

class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
          isToggle:false,
          isScroll:false
        };

        this.handleClick = this.handleClick.bind(this);
    }

    logOut(e){
        e.preventDefault();
        localStorage.removeItem('usertoken');
        this.props.history.push('/')
    }

    handleClick(){
        this.setState(state =>({
            isToggle: !state.isToggle
        }));
    }

    render(){

        const guestNavBar =(
            <nav className="nav">
                <Link to="/login" className="nav-link">Login</Link>
                <a href="#about" className="nav-link">About us</a>
                <a href="#work" className="nav-link">Work</a>
                <a href="#" className="nav-link"><img src={require("../../res/img/logo.png")} className="nav-logo" alt="logo graphics"/></a>
                <a href="#shop" className="nav-link">Shop</a>
                <a href="#contact" className="nav-link">Contact</a>
                <Link to="/register" className="nav-link">register</Link>
            </nav>
        );

        const userNavBar =(
            <nav className="nav">
                <Link to="/profile" className="nav-link">Profile</Link>
                <a href="#about" className="nav-link">About us</a>
                <a href="#work" className="nav-link">Work</a>
                <a href="#" className="nav-link"><img src={require("../../res/img/logo.png")} className="nav-logo" alt="logo graphics"/></a>
                <a href="#shop" className="nav-link">Shop</a>
                <a href="#contact" className="nav-link">Contact</a>
                <a href="" onClick={this.logOut.bind(this)} className="nav-link">Logout</a>
            </nav>
        );
        return (
            <div className="header" >
                {localStorage.usertoken ? userNavBar : guestNavBar}

                <nav className="mobile-nav">
                    <a href="#"><img src={require("../../res/img/logo.png")} alt="logo graphics" /></a>
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

export default withRouter(Header)
