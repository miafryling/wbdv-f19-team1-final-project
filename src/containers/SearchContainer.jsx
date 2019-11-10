import React, {Component} from 'react';
import SearchCard from "../components/SearchCard";
import {AnimalService} from "../services/AnimalService";

export default class SearchContainer extends Component {
    constructor(props) {
        super(props);
        this.animalService = AnimalService.instance;
        this.state = {animals: []}
    }

    componentDidMount() {
        // this.props.findAllAnimals();
        this.animalService.findAllAnimals().then(animals => this.setState({animals: animals}))
    }

    render() {
        // const {animals} = this.props;
        console.log(this.state.animals)
        return (
            <div>
                <div className="card-header">
                    <h1>Animal Adoption</h1>
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
