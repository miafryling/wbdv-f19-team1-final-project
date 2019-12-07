import React, {Component} from 'react';
import {EventService} from "../services/EventService";

export default class EventCreate extends Component {
    constructor(props) {
        super(props);
        this.eventService = EventService.instance;
        this.state = {
            name: '',
            location: '',
            description: '',
            owner: ''
        }
    }

    componentDidMount() {
        this.setState({owner: JSON.parse(sessionStorage.getItem('user'))._id})
    }

    createEvent = () => {
        this.eventService.createEvent(this.state)
            .then(() => {
                alert('Create Event Successfully');
                this.props.history.push('/events');
            })
            .catch(error => alert("Failed to Create Event because " + error))
    };

    nameChanged = event => this.setState({name: event.target.value});
    locationChanged = event => this.setState({location: event.target.value});
    descriptionChanged = event => this.setState({description: event.target.value});

    render() {
        return (
            <div className="container">
                <div className="row ">
                    <div className="col-md-4 py-5 bg-primary text-white text-center ">
                        <div className=" ">
                            <div className="card-body">
                                <img src="http://www.ansonika.com/mavia/img/registration_bg.svg"
                                     style={{width: 0.3}}/>
                                <h2 className="py-3">Registration</h2>
                                <p>Welcome to Adoptable!
                                    You can create your own event NOW!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 py-5 border">
                        <h3 className="pb-4">Please fill with your details</h3>
                        <form>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <input id="Event Name" name="Event Name" placeholder="Event Name"
                                           className="form-control" type="text" onChange={this.nameChanged}/>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <input id="Event Location" name="Event Location" placeholder="Event Location"
                                           className="form-control" type="text" onChange={this.locationChanged}/>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-12">
                                            <textarea id="comment" name="comment" cols="40" rows="5"
                                                      className="form-control" onChange={this.descriptionChanged}/>
                                </div>
                            </div>
                            <div className="form-row">
                                <button type="button" className="btn btn-primary"
                                        onClick={this.createEvent}>
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
