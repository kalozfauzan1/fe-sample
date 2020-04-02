
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import Group from "./page/Group";

import { Provider} from "mobx-react";
import {AppStore} from "./store/AppStore";


import 'bootstrap/dist/css/bootstrap.css';

const hist = createBrowserHistory();

ReactDOM.render(
    <Provider AppStore={AppStore}>
        <Router history={hist}>
            <Switch>
                <Route path="/group" component={Group} />
                <Route exact path="/" render={() => {
                    return <Redirect to="/group" />;
                }}/>
            </Switch>
        </Router>
    </Provider>,
  document.getElementById("root")
);
