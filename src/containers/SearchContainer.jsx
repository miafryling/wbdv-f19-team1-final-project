import React, {Component} from 'react';
import SearchCard from "../components/SearchCard";
import {AnimalService} from "../services/AnimalService";

export default class SearchContainer extends Component {
    constructor(props) {
        super(props);
        this.animalService = AnimalService.instance;
        this.state = {
            animals: [],
            hide: true
        }
    }

    componentDidMount() {
        // this.props.findAllAnimals();
        this.animalService.findAllAnimals().then(animals => this.setState({animals: animals}))
    }

    show = () => {
        const hide = !this.state.hide;
        this.setState({hide: hide})
    }

    render() {
        // const {animals} = this.props;
        console.log(this.state.animals)
        return (
            <div>
                <div className="card-header">
                    <h1>Animal Adoption</h1>
                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal"
                            onClick={this.show}
                    >
                        Search
                    </button>
                    <div className="row" hidden={this.state.hide}>
                        <div className="col-12">
                            <div className="input-group">
                                <input className="form-control border-secondary py-2" type="search" value="Type"/>
                                <div className="input-group-append">
                                    <button className="btn btn-outline-secondary" type="button">
                                        <i className="fa fa-search"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="input-group">
                                <input className="form-control border-secondary py-2" type="search" value="Age"/>
                                <div className="input-group-append">
                                    <button className="btn btn-outline-secondary" type="button">
                                        <i className="fa fa-search"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="input-group">
                                <input className="form-control border-secondary py-2" type="search" value="Breed"/>
                                <div className="input-group-append">
                                    <button className="btn btn-outline-secondary" type="button">
                                        <i className="fa fa-search"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-deck">
                    {this.state.animals.map(animal =>
                        <SearchCard
                            key={animal.id}
                            animal={animal}
                        />)}
                </div>
            </div>
        )
    }
}

// const mapStateToProps = state => ({
//     animals: state.animals
// })
//
// const mapDispatchToProps = dispatch => {
//     return {
//         findAllAnimals() {
//             dispatch(findAllAnimalsAction())
//         }
//     }
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
