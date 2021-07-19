import React,{Component} from 'react';
import {BrowserRouter} from "react-router-dom";
import {Redirect, Route, Switch} from "react-router";
import routes from "./routes";
import * as config from './const/config';

class App extends Component{
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    {
                        routes.map((route, key) => (
                                <Route
                                    exact={true}
                                    path={`${route.layout}${route.path}`}
                                    component={route.render}
                                    key={key}
                                />
                            )
                        )
                    })
                    }
                    <Redirect to={config.BASE_ROUTE}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
