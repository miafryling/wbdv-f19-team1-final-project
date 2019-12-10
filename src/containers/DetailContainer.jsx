import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {AnimalService} from '../services/AnimalService';
import {UserService} from '../services/UserService';

class MyAppChild extends React.Component {
    render() {
        return <li>{this.props.label + " - " + this.props.value}</li>;
    }
}

export class DetailContainer extends Component {
    constructor(props) {
        super(props);
        this.animalService = AnimalService.instance;
        this.userService = UserService.instance;
        this.state = {
            loading: true,
            animalId: this.props.match.params.animalId,
            details: {},
            likes: []
        }
    }

    componentWillMount() {
        // this.setState({animalId: this.props.match.params.animalId})
        this.animalService.findAnimalById(this.state.animalId).then(info => this.setState({
            loading: false,
            details: info
        }))
        this.animalService.getLikes(this.state.animalId)
          .then(users => {
            console.log(users)
            return this.userService.getBatch(users)
          })
          .then(likes => this.setState({ likes }))
    }


    renderObject(object_var) {
        {/* TODO: RENDER DYNAMICALLY */
        }
        var arr = [];
        Object.keys(object_var).forEach(function (key) {
            arr.push(object_var[key]);
        });
        return <ul>{arr.map(item => <li> {item.toString()} </li>)}</ul>;
    }


    renderList = data => {
        return (
            <ul>
                {data.map(item => (
                    <li style={{listStyle: "none"}} key={item.id}>
                        {item.title}
                    </li>
                ))}
            </ul>
        );
    };


    renderSimpleObject(object_var) {
        if (object_var) {
            return Object.keys(object_var).map((key) => {
                return <p>{key} :
                    {JSON.stringify(object_var[key])}</p>;
            });
        } else {
            return <p>data is not available</p>;
        }
    }

    render() {
        console.log(this.state)
        const {loading, animalID, details} = this.state
        return (
            <div class="card mb-3">
                <div class="row no-gutters">
                    <div class="col-md-4">
                        {/* TODO: FIx the loading placeholder */}
                        {loading ? "":
                            details.photos[0] &&
                              <img
                                style={
                                    {
                                        display: 'block',
                                        margin: 'auto',
                                        alignSelf: 'center',
                                        maxHeight: 200,
                                        maxWidth: 500,
                                    }
                                }
                                resizeMode="stretch"
                                src={details.photos[0].full}
                                alt={"Picture of " + details.name}
                            />
                        }
                             {loading ? "":
                                !details.photos[0] &&
                              <img
                                style={
                                    {
                                        display: 'block',
                                        margin: 'auto',
                                        alignSelf: 'center',
                                        maxHeight: 200,
                                        maxWidth: 500,
                                    }
                                }
                                resizeMode="stretch"
                                src="https://www.publicdomainpictures.net/pictures/150000/nahled/pet-silhouette-icons.jpg"
                                alt={"Picture of " + details.name}
                            />
                        }
                            
                        }


                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">{this.state.details.name}</h5>
                            {/* TODO: FIx the loading placeholder */}
                            {loading ? "" :
                                <div>
                                    <h6 class="card-subtitle text-muted">{details.breeds.primary}</h6>
                                    <p class="card-text">{this.state.details.description}</p>
                                    <h6> Details </h6>
                                    <p class="card-text"> Age: {details.age} </p>
                                    <p class="card-text"> Gender: {details.gender} </p>
                                    <p class="card-text"> Coat: {details.coat} </p>
                                    <p class="card-text"> {this.renderSimpleObject(details.attributes)} </p>
                                    <h6 class="card-text">Contact Info </h6>
                                    <p class="card-text"> {this.renderSimpleObject(details.contact)} </p>
                                    <h4 class="card-text">Liked by:</h4>
                                    { this.state.likes.map(x => <div className="row"><Link to={`/users/${x._id}`}>{x.username}</Link></div>) }
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
