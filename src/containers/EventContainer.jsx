import React, {Component} from 'react';
import {EventService} from "../services/EventService";
import EventCard from "../components/EventCard";

export default class EventContainer extends Component {
    constructor(props) {
        super(props);
        this.eventService = EventService.instance;
        this.state = {
            events: []
        }
    }

    componentDidMount() {
        this.eventService.findAllEvents().then(events => this.setState({events: events}))
    }

    render() {
        return (
            <div>
                <div className="card-header">
                    <h1>All Events Available</h1>
                </div>
                <div className="card-deck">
                    {this.state.events.map(event =>
                        <EventCard
                            key={event._id}
                            event={event}
                        />)}
                </div>
            </div>
        )
    }
}
