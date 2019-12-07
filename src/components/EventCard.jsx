import React, {Component} from 'react';
import {EventService} from "../services/EventService";
import {Link} from "react-router-dom";

export default class extends Component {
    constructor(props) {
        super(props);
        this.eventService = EventService.instance;
    }

    registerEvent = () => {
        const user = JSON.parse(sessionStorage.getItem('user'));
        const event = this.props.event;
        this.eventService.registerEvent(event._id, user._id)
            .then(() => alert("Successfully Registered!"))
            .catch(error => alert("Failed to Register This Event because " + error))
    };

    render() {
        const {event} = this.props;
        const user = JSON.parse(sessionStorage.getItem('user'));
        return (
            <div className="card mb-3">
                <img className="card-img-top" src="..." alt="Card image cap"/>
                <div className="card-body">
                    {user && <Link to={`/events/${event._id}`} className="card-title">{event.name}</Link>}
                    {!user && <Link to='/login' className="card-title"
                                    onClick={() => alert("Log In First Please!")}>
                        {event.name}
                    </Link>}
                    <p className="card-text">{event.description}</p>
                    {user &&
                    <button className="btn btn-primary"
                            onClick={this.registerEvent}>
                        Register Now!
                    </button>}
                    {!user &&
                    <button className="btn btn-primary"
                            onClick={() => {
                                alert("Log In First Please!");
                                this.props.history.push('/login');
                            }}>
                        Register Now!
                    </button>}
                </div>
            </div>
        )
    }
}
