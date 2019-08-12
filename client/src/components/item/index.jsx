import React, {Component} from 'react';
import {Link} from "react-router-dom";

export class Item extends Component {
    constructor() {
        super();
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    onFormSubmit(e) {
        e.preventDefault();
        this.fileUpload(this.state.file);
    }


    logOut(e) {
        e.preventDefault();
        localStorage.removeItem('usertoken');
        this.props.history.push('/')
    }

    render() {
        return (
            <div className="item">
                <nav className="nav">
                    <Link to="/profile" className="nav-link">profile</Link>
                    <Link to="/" className="nav-link"><img src={require("../../res/img/logo.png")}
                                                           className="nav-logo" alt="logo graphics"/></Link>
                    <a href="" onClick={this.logOut.bind(this)} className="nav-link">Logout</a>
                </nav>
                <div className="container">
                    <form>
                        <input className="file-input" type="file" />
                        <button className="upload-btn" onClick={this.onFormSubmit} type="submit">Upload</button>
                    </form>

                </div>
            </div>
        );
    }
}