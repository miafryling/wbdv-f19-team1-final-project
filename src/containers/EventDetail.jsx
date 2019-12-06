import React, {Component} from 'react';
import {EventService} from "../services/EventService";

export default class EventDetail extends Component {
    constructor(props) {
        super(props);
        this.eventService = EventService.instance;
        this.state = {
            eventId: '',
            event: {}
        }
    }

    componentWillMount() {
        this.setState({eventId: this.props.match.params.eventId})
    }

    componentDidMount() {
        this.eventService.findEventById(this.state.eventId)
            .then(event => this.setState({event: event}))
    }

    registerEvent = () => {
        const user = JSON.parse(sessionStorage.getItem('user'));
        this.eventService.registerEvent(user._id, this.state.eventId)
            .then(() => alert("Register Event Successfully!"))
            .catch(error => alert("Failed to Register Event because " + error))
    }

    render() {
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
                        <h3 className="my-3">Event Description</h3>
                        <p>{this.state.description}</p>
                    </div>
                </div>
                <button className="btn btn-primary"
                        onClick={this.registerEvent}>
                    Register Now!
                </button>
            </div>
        )
    }
}
