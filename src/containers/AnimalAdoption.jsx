import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import SearchContainer from "./SearchContainer";
import {DetailContainer} from "./DetailContainer";
import Home from "./Home";


import Login from "./LoginContainer";
import Profile from "./ProfileContainer";
import Register from "./RegisterContainer";
import CunstomerNavBar from "../components/NavbarComponent";
import EventContainer from "./EventContainer";
import EventDetail from "./EventDetail";
import EventCreate from "./EventCreate";
import UserSearch from './UserSearch';
import PublicProfile from './PublicProfile';

export default class AnimalAdoption extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: JSON.parse(sessionStorage.getItem('user'))
        }

        this.changeUser = this.changeUser.bind(this);
    }

    changeUser = user => this.setState({user});

    render() {
        return (
            <BrowserRouter>
                <div className="container-fluid">
                    <CunstomerNavBar user={this.state.user} changeUser={this.changeUser}/>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/animals' component={SearchContainer}/>
                        <Route path='/animals/:animalId' component={DetailContainer}/>
                        <Route exact path='/login'
                               render={(props) => <Login {...props} changeUser={this.changeUser}></Login>}/>
                        <Route exact path='/register'
                               render={(props) => <Register {...props} changeUser={this.changeUser}></Register>}/>
                        <Route path='/profile'
                               render={(props) => <Profile {...props} changeUser={this.changeUser}></Profile>}/>
                        <Route exact path='/events' component={EventContainer}/>
                        <Route path='/events/create' component={EventCreate}/>
                        <Route exact path='/events/:eventId' component={EventDetail}/>
                        <Route exact path='/users' component={UserSearch}/>
                        <Route path='/users/:userId' component={PublicProfile}/>
                        {/*should be /profile/:id*/}
                    </Switch>
                    
                </div>
            </BrowserRouter>
        )
    }
}
