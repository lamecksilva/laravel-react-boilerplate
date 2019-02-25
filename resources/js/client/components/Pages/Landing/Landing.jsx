import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

class Landing extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.history.push('/login');
    }

    render() {
        return (
            <div className="landingContainer">
                <h1 className="text-center text-white">Landing Teste</h1>
                <div className="row">
                    <div className="offset-col-4 mx-auto justify-content-center">
                        <Link to="/login" className="btn btn-success">
                            Login Page
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Landing;
