import React, {Component} from 'react';
import {connect} from 'react-redux';
import {findAllAnimalsAction} from "../reducer/ActionCreaters";
import SearchCard from "../components/SearchCard";

class SearchContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.findAllAnimals();
    }

    render() {
        const {animals} = this.props;
        return (
            <div>
                <div className="card-header">
                    <h1>Animal Adoption</h1>
                </div>
                <div className="card-deck">
                    {animals.map(animal =>
                        <SearchCard
                            key={animal.id}
                            animal={animal}
                        />)}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    animals: state.animals
})

const mapDispatchToProps = dispatch => {
    return {
        findAllAnimals() {
            dispatch(findAllAnimalsAction())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
