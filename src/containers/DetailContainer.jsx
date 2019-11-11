import React, {Component} from 'react';
import { AnimalService } from '../services/AnimalService';
import RoundImage from '../components/RoundImage';

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
        this.animalService.findAnimalById(this.state.animalId).then(info => this.setState({details : info}))
    }

    render() {
        return (
            <div class="card mb-3">
                <div class="row no-gutters">
                    <div class="col-md-4 bg-primary">
                        {
                            this.state.details.photo && 
                            <RoundImage
                            key={this.state.animalId}
                            link={this.state.details.photo}
                            name={this.state.details.name}
                            />
                        }
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{this.state.details.name}</h5>
                        <p class="card-text"><small class="text-muted">{this.state.details.breed}</small></p>
                        <p class="card-text">{this.state.details.description}</p>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}
