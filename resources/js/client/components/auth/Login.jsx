import React, { Component } from "react";

import TextInput from "../common/TextInput";

import "./style.scss";

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit = e => {
        e.preventDefault();

        console.log("Submited");
    };

    handleChange = e => {
        console.log(e);
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        return (
            <div className="loginContainer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mx-auto loginBox">
                            <h2 className="loginTitle">Login</h2>
                            <form onSubmit={this.handleSubmit}>
                                <TextInput
                                    name="email"
                                    placeholder="example@example.com"
                                    label="Email"
                                    type="email"
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                />

                                <TextInput
                                    name="password"
                                    label="Password"
                                    type="password"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
