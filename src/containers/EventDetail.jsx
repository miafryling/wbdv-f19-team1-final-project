import React, {Component} from 'react';
import {EventService} from "../services/EventService";
import {UserService} from "../services/UserService";

export default class EventDetail extends Component {
    constructor(props) {
        super(props);
        this.eventService = EventService.instance;
        this.userService = UserService.instance;
        this.state = {
            eventId: '',
            event: {},
            // compare to the sessionStorage.getItem('user')._id -> check if you are the creator of this given event
            userId: '',
            ownerName: '',
            description: '',
            location: '',
            name: '',
        }
    }

    componentWillMount() {
        this.setState({eventId: this.props.match.params.eventId})
    }

    componentDidMount() {
        this.eventService.findEventById(this.state.eventId)
            .then(event => this.setState({
                event: event,
                userId: event.owner
            }))
            .then(() => this.userService.findUserById(this.state.userId))
            .then(user => this.setState({ownerName: user.username}))
    }

    nameChanged = event => this.setState({name: event.target.value})
    descriptionChanged = event => this.setState({description: event.target.value})
    locationChanged = event => this.setState({location: event.target.value})

    registerEvent = () => {
        const user = JSON.parse(sessionStorage.getItem('user'));
        this.eventService.registerEvent(this.state.eventId, user._id)
            .then(() => alert("Register Event Successfully!"))
            .catch(error => alert("Failed to Register Event because " + error))
    }

    updateEvent = () => {
        const event = {
            description: this.state.description,
            location: this.state.location,
            name: this.state.name
        };
        this.eventService.updateEvent(this.state.eventId, event)
            .then(() => alert("Successfully Update Your Event!"))
            .catch(error => alert('Failed to Update Your Event because ' + error))
    }

    render() {
        const currentUserId = JSON.parse(sessionStorage.getItem('user'))._id;
        return (
            <div className="container">
                <h1 className="my-4">Event:
                    <small>{this.state.event.name}</small>
                </h1>
                <div className="row">
                    <div className="col-md-8">
                        <img className="img-fluid" src="..." alt="Event Pic"/>
                    </div>
                    <div className="col-md-4">
                        <h3 className="my-3">Event Owner</h3>
                        <p>{this.state.ownerName}</p>
                        <h3 className="my-3">Event Name</h3>
                        {currentUserId === this.state.userId && <p>{this.state.event.name}</p>}
                        {!currentUserId === this.state.userId &&
                        <input onChange={this.nameChanged}
                               className="form-control"
                               value={this.state.event.name}
                               placeholder="New Event Location"
                        />}
                        <h3 className="my-3">Event Location</h3>
                        {currentUserId === this.state.userId && <p>{this.state.event.location}</p>}
                        {!currentUserId === this.state.userId &&
                        <input onChange={this.locationChanged}
                               className="form-control"
                               value={this.state.event.location}
                               placeholder="New Event Location"
                        />}
                        <h3 className="my-3">Event Description</h3>
                        {currentUserId === this.state.userId && <p>{this.state.event.description}</p>}
                        {!currentUserId === this.state.userId &&
                        <input onChange={this.descriptionChanged}
                               className="form-control"
                               value={this.state.event.description}
                               placeholder="New Event Description"
                        />}
                    </div>
                </div>
                <button className="btn btn-primary"
                        onClick={this.registerEvent}>
                    Register Now!
                </button>
                {currentUserId === this.state.userId &&
                <button className="btn btn-primary"
                        onClick={this.updateEvent}>
                    Update
                </button>}
            </div>
        )
    }
}
