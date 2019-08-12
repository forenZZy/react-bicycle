import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import {Link} from "react-router-dom";

 export class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            errors: {}
        }
    }

     logOut(e){
         e.preventDefault();
         localStorage.removeItem('usertoken');
         this.props.history.push('/')
     }

    componentDidMount() {
        const token = localStorage.usertoken;
        const decoded = jwt_decode(token);
        this.setState({
            first_name: decoded.first_name,
            last_name: decoded.last_name,
            email: decoded.email
        })
    }

    render() {
        return (
            <div className="profile">
                <nav className="nav">
                    <Link to="/my_items" className="nav-link">MY ITEMS</Link>
                    <Link to="/" className="nav-link"><img src={require("../../res/img/logo.png")}
                                                              className="nav-logo" alt="logo graphics"/></Link>
                    <a href="" onClick={this.logOut.bind(this)} className="nav-link">Logout</a>
                </nav>
                <div className="container">
                    <table className="profile-table">
                        <h1 className="heading-1">PROFILE</h1>
                        <tbody>
                        <tr className="profile-info">
                            <td>Fist Name:  </td>
                            <td>  {this.state.first_name}</td>
                        </tr>
                        <tr className="profile-info">
                            <td>Last Name:  </td>
                            <td>  {this.state.last_name}</td>
                        </tr>
                        <tr className="profile-info">
                            <td>Email:  </td>
                            <td>  {this.state.email}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
