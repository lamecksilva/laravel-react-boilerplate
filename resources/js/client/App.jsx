import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import Login from "./components/auth/Login";
import Landing from "./components/Pages/Landing";

import store from "./store";

// window.location.href = "/login";

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div>
                        <Route exact path="/" component={Landing} />

                        <Route exact path="/login" component={Login} />
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
