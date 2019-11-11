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
            hide: true
        }
        this.animalService.getAnimalTypes().then(types => this.setState({ types: types }));
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
                    <form>
                      <div class="form-group">
                        <label for="exampleFormControlSelect1">Type of Animal</label>
                        <select class="form-control" id="exampleFormControlSelect1">
                          {
                            this.state.types.map(x => <option value={x}>{x.charAt(0).toUpperCase() + x.substring(1)}</option>)
                          }
                        </select>
                      </div>
                    </form>
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
