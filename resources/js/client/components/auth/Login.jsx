import React, { Component } from "react";
import { connect } from "react-redux";

import TextInput from "../common/TextInput";
import "./style.scss";
import { authActions } from "../../actions";

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
        const userData = {
            email: this.state.email,
            password: this.state.password
        };

        console.table(userData);

        // this.props.loginUser(userData);
    };

    handleChange = e => {
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
                                    placeholder="Type your password"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                />

                                <div className="row">
                                    <div className="col-12 mx-auto">
                                        <button className="btn btn-primary btn-block">
                                            Login
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { errors } = state.errors;

    return {
        errors
    };
};

const mapDispathToProps = {
    loginUser: authActions.loginUser
};

export default connect(
    mapStateToProps,
    mapDispathToProps
)(Login);
