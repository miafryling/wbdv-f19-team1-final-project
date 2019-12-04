import React, {Component} from 'react';
import {AnimalService} from '../services/AnimalService';
import {Link} from "react-router-dom";

export class DetailContainer extends Component {
    constructor(props) {
        super(props);
        this.animalService = AnimalService.instance;
        this.state = {
            animalId: this.props.match.params.animalId,
            details: {}
        }
    }

    componentWillMount() {
        // this.setState({animalId: this.props.match.params.animalId})
        this.animalService.findAnimalById(this.state.animalId).then(info => this.setState({details: info}))
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-3 ">
                        <div className="text-center">
                            {this.state.details.photo &&
                            <img src={this.state.details.photo}
                                 className="avatar img-circle img-thumbnail"
                                 alt="avatar"/>}
                            {!this.state.details.photo &&
                            <img src="https://picsum.photos/300/200"
                                 className="avatar img-circle img-thumbnail"
                                 alt="avatar"/>}
                        </div>
                        <button type="button" className="btn btn-outline-primary list-group-item">
                            <i className='fa fa-heart'>Like</i>
                        </button>
                    </div>
                    <div className="col-md-9">
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h4>{this.state.details.name}</h4>
                                        <hr/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <form>
                                            <div className="form-group row">
                                                <label htmlFor="name" className="col-4 col-form-label">Name</label>
                                                <div className="col-8">
                                                    <input id="name" name="name" placeholder="Name"
                                                           className="form-control here" required="required"
                                                           readOnly="readonly"
                                                           type="text" value={this.state.details.name}/>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label htmlFor="breed"
                                                       className="col-4 col-form-label">Breed</label>
                                                <div className="col-8">
                                                    <input id="breed" name="breed" placeholder="Breed"
                                                           className="form-control here" required="required"
                                                           readOnly="readonly"
                                                           type="text" value={this.state.details.breed}/>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label htmlFor="description"
                                                       className="col-4 col-form-label">Description</label>
                                                <div className="col-8">
                                                    <textarea id="description" placeholder="First Name"
                                                              className="form-control here col-8"
                                                              value={this.state.details.description}></textarea>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <div className="float-right">
                    <Link to='/animals' className="btn btn-primary">All
                        Animals</Link>
                </div>
            </div>
        )
    }
}
