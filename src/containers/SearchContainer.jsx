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
            colors: {},
            selectedType: '',
            selectedSize: '',
            selectedGender: '',
            selectedAge: '',
            selectedColor: '',
            selectedCoat: '',
            selectedStatus: '',
            hide: true
        }

        this.animalService.getAnimalTypes().then(types => {
            let colors = {};
            types.map(type => colors[type.name.toLowerCase()] = type.colors.map(x => x.toLowerCase()));

            this.setState({
                types: types.map(x => x.name.toLowerCase()),
                colors
            });
        });

        this.onTypeChange = this.onTypeChange.bind(this);
        this.onSizeChange = this.onSizeChange.bind(this);
        this.onGenderChange = this.onGenderChange.bind(this);
        this.onAgeChange = this.onAgeChange.bind(this);
        this.onColorChange = this.onColorChange.bind(this);
        this.onCoatChange = this.onCoatChange.bind(this);
        this.onStatusChange = this.onStatusChange.bind(this);
        this.search = this.search.bind(this);
    }

    componentDidMount() {
        // this.props.findAllAnimals();
        this.animalService.findAllAnimals().then(animals => this.setState({animals: animals}))
    }

    onTypeChange(event) {
        this.setState({selectedType: event.target.value});
    }

    onSizeChange(event) {
        this.setState({selectedSize: event.target.value});
    }

    onGenderChange(event) {
        this.setState({selectedGender: event.target.value});
    }

    onAgeChange(event) {
        this.setState({selectedAge: event.target.value});
    }

    onColorChange(event) {
        this.setState({selectedColor: event.target.value});
    }

    onCoatChange(event) {
        this.setState({selectedCoat: event.target.value});
    }

    onStatusChange(event) {
        this.setState({selectedStatus: event.target.value});
    }

    search(event) {
        let criteria = {
            type: this.state.selectedType,
            size: this.state.selectedSize,
            gender: this.state.selectedGender,
            age: this.state.selectedAge,
            color: this.state.selectedColor,
            coat: this.state.selectedCoat,
            status: this.state.selectedStatus
        };
        this.animalService.findAnimalsWithCriteria(criteria)
            .then(animals => this.setState({animals: animals}));
    }

    render() {
        console.log(this.state.colors)
        // const {animals} = this.props;
        console.log(this.state.animals)
        return (
            <div>
                <div className="card-header">
                    <h1>Animal Adoption</h1>
                    <div class="form-group">
                        <label for="animalType">Type of Animal</label>
                        <select class="form-control" id="animalType" value={this.state.selectedType}
                                onChange={this.onTypeChange}>
                            <option value=""></option>
                            {
                                this.state.types.map(x => <option
                                    value={x}>{x.charAt(0).toUpperCase() + x.substring(1)}</option>)
                            }
                        </select>
                        <select className="form-control" id="animalSize" value={this.state.selectedSize}
                                onChange={this.onSizeChange}>
                            <option value=""></option>
                            <option value="small">Small</option>
                            <option value="medium">Medium</option>
                            <option value="large">Large</option>
                            <option value="xlarge">Very Large</option>
                        </select>
                        <select className="form-control" id="animalGender" value={this.state.selectedGender}
                                onChange={this.onGenderChange}>
                            <option value=""></option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                        <select className="form-control" id="animalAge" value={this.state.selectedAge}
                                onChange={this.onAgeChange}>
                            <option value=""></option>
                            <option value="baby">Baby</option>
                            <option value="young">Young</option>
                            <option value="adult">Adult</option>
                            <option value="senior">Senior</option>
                        </select>
                        <select className="form-control" id="animalColor" value={this.state.selectedColor}
                                onChange={this.onColorChange}>
                            <option value=""></option>
                            {
                                this.state.colors[this.state.selectedType] ?
                                    this.state.colors[this.state.selectedType].map(x => <option
                                        value={x}>{x.charAt(0).toUpperCase() + x.substring(1)}</option>) :
                                    <div></div>
                            }
                        </select>
                        <select class="form-control" id="animalCoat" value={this.state.selectedCoat}
                                onChange={this.onCoatChange}>
                            <option value=""></option>
                            <option value="short">Short</option>
                            <option value="medium">Medium</option>
                            <option value="long">Long</option>
                            <option value="wire">Wire</option>
                            <option value="curly">Curly</option>
                            <option value="hairless">Hairless</option>
                        </select>
                        <select class="form-control" id="animalStatus" value={this.state.selectedStatus}
                                onChange={this.onStatusChange}>
                            <option value=""></option>
                            <option value="adoptable">Adoptable</option>
                            <option value="adopted">Adopted</option>
                            <option value="found">Found</option>
                        </select>
                    </div>
                    <button class="btn btn-primary" onClick={this.search}>Search</button>
                </div>
                <div className="card-deck">
                    {console.log(this.state.animals.error)}
                    {!this.state.animals.error && this.state.animals.map(animal =>
                        <SearchCard
                            key={animal.id}
                            animal={animal}
                        />)}

                    {this.state.animals.error &&
                    <div>
                        No results found.
                    </div>
                    }
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
