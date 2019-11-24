import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import SearchContainer from "./SearchContainer";
import {DetailContainer} from "./DetailContainer";
import Home from "./Home";


import Login from "./LoginContainer";
import Profile from "./ProfileContainer";
import Register from "./RegisterContainer";
import CunstomerNavBar from "../components/NavbarComponent";

export default class AnimalAdoption extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="container-fluid">
                    <CunstomerNavBar/>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/animals' component={SearchContainer}/>
                        <Route path='/animals/:animalId' component={DetailContainer}/>
                        <Route path='/login' component={Login}/>
                        <Route path='/register' component={Register}/>
                        <Route path='/profile' component={Profile}/>
                        {/*should be /profile/:id*/}
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}
