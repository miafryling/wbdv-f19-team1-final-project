import React, {Component} from 'react';
import SearchCard from "../components/SearchCard";
import {AnimalService} from "../services/AnimalService";

export default class SearchContainer extends Component {
    constructor(props) {
        super(props);
        this.animalService = AnimalService.instance;
        this.state = {
            animals: [],
            types: [],
            selectedType: '',
            hide: true
        }
        this.animalService.getAnimalTypes().then(types => this.setState({ types: types, selectedType: types[0] }));

        this.onTypeChange = this.onTypeChange.bind(this);
        this.search = this.search.bind(this);
    }

    componentDidMount() {
        // this.props.findAllAnimals();
        this.animalService.findAllAnimals().then(animals => this.setState({animals: animals}))
    }

    onTypeChange(event) {
      this.setState({ selectedType: event.target.value });
    }

    search(event) {
      this.animalService.findAnimalsWithCriteria({ type: this.state.selectedType })
                        .then(animals => this.setState({ animals: animals }));
    }

    render() {
        // const {animals} = this.props;
        console.log(this.state.animals)
        return (
            <div>
                <div className="card-header">
                    <h1>Animal Adoption</h1>
                    <div class="form-group">
                      <label for="animalType">Type of Animal</label>
                      <select class="form-control" id="animalType" value={this.state.selectedType} onChange={this.onTypeChange}>
                        {
                          this.state.types.map(x => <option value={x}>{x.charAt(0).toUpperCase() + x.substring(1)}</option>)
                        }
                      </select>
                    </div>
                    <button class="btn btn-primary" onClick={this.search}>Search</button>
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
