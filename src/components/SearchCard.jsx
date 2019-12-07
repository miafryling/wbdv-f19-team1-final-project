import React from 'react';
import {Link} from "react-router-dom";
import {AnimalService} from "../services/AnimalService";

export default class SearchCard extends React.Component {
    constructor(props) {
        super(props);
        this.animalService = AnimalService.instance;
    }

    like = (userId, animalId) => {
        this.animalService.likeAnimal(userId, animalId)
            .then(() => alert("Successfully Added to Your Favourites!"))
            .catch(error => alert("Failed to like this animals because " + error))
    }

    render() {
        const {animal} = this.props;
        const user = JSON.parse(sessionStorage.getItem('user'));
        return (
            <div className="col-sm-4">
                <div className="card" styles={{width: '18rem'}}>
                    {animal.photo &&
                    <img className="card-img-top overflow-auto" src={animal.photo} alt="Card image cap"/>}
                    {!animal.photo &&
                    <img className="card-img-top overflow-auto" src="https://picsum.photos/300/200"
                         alt="Card image cap"/>}
                    <div className="card-body">
                        <Link className="card-title" to={`/animals/${animal.id}`}>{animal.name}</Link>
                        <p className="card-text">{animal.description}</p>
                        {user && <button type="button" className="btn btn-outline-primary"
                                         onClick={() => this.like(user._id, animal.id)}>
                            <i className='fa fa-heart'/>
                        </button>}
                        {!user && <button type="button" className="btn btn-outline-primary">
                            <i className='fa fa-heart' onClick={() => {
                                alert("Log In First Please!")
                                this.props.history.push('/login')
                            }}/>
                        </button>}
                    </div>
                </div>
            </div>
        )
    }
}

