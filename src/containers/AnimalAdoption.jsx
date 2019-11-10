import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import SearchContainer from "./SearchContainer";
import {DetailContainer} from "./DetailContainer";
import Home from "./Home";

export default class AnimalAdoption extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="container-fluid">
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/animals' component={SearchContainer}/>
                        <Route path='/animals/:animalId' component={DetailContainer}/>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}
