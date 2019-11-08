import React, {Component} from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import {Switch} from "react-bootstrap";
import SearchContainer from "./SearchContainer";
import {DetailContainer} from "./DetailContainer";
import Home from "./Home";

export default class AnimalAdoption extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="container-fluid">
                    <Switch>
                        <Route exact path='/' componnet={Home}/>
                        <Route exact path='/animals' component={SearchContainer}/>
                        <Route path='/animals/:animalId' component={DetailContainer}/>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}
