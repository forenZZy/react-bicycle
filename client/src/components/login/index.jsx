import React, {Component} from 'react'
import {login} from '../UserFunctions'
import {NavLink} from "react-router-dom";

export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(e) {
        e.preventDefault();

        const User = {
            email: this.state.email,
            password: this.state.password
        };

        login(User).then(res => {
            if (res) {
                this.props.history.push('profile')
            }
        })
    }

    render() {
        return (
            <div className="login">
                <nav className="nav">
                    <NavLink to="/" className="nav-link"><img src={require("../../res/img/logo.png")}
                                                              className="nav-logo" alt="logo graphics"/></NavLink>
                </nav>
                <div className="container">
                    <form noValidate onSubmit={this.onSubmit} className="form">
                        <h1 className="heading-1">Please sign in</h1>

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

                        <button type="submit" className="login-btn">
                            Sign in
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}
