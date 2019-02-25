import React, { Component } from 'react';

import Navbar from '../../common/Navbar/Navbar';

class Dashboard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{ flexGrow: 1 }}>
                <Navbar />
            </div>
        );
    }
}

export default Dashboard;
