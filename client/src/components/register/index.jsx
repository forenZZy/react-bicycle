import React, {Component} from 'react'
import {register} from '../UserFunctions'
import {NavLink} from "react-router-dom";

export class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            errors: {}
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(e) {
        e.preventDefault();

        const newUser = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            password: this.state.password
        };

        register(newUser).then(res => {
            this.props.history.push(`/login`)
        })
    }

    render() {
        return (
            <div className="register">
                <nav className="nav">
                    <NavLink to="/" className="nav-link"><img src={require("../../res/img/logo.png")}
                                                              className="nav-logo" alt="logo graphics"/></NavLink>
                </nav>
                <div className="container">
                    <form  onSubmit={this.onSubmit} className="form">
                        <h1 className="heading-1">Register</h1>
                            <input
                                type="text"
                                className="form-control"
                                name="first_name"
                                placeholder="Enter first name"
                                value={this.state.first_name}
                                onChange={this.onChange}
                            />
                            <input
                                type="text"
                                className="form-control"
                                name="last_name"
                                placeholder="Enter lastname name"
                                value={this.state.last_name}
                                onChange={this.onChange}
                            />
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                placeholder="Enter email"
                                value={this.state.email}
                                onChange={this.onChange}
                            />
                            <input
                                type="password"
                                className="form-control"
                                name="password"
                                placeholder="Password"
                                value={this.state.password}
                                onChange={this.onChange}
                            />
                        <button
                            type="submit"
                            className="register-btn"
                        >
                            Register!
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}
