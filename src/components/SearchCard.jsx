import React from 'react';
import {Link} from "react-router-dom";

export default class SearchCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {animal} = this.props;
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
                        <button type="button" className="btn btn-outline-primary">
                            <i className='fa fa-heart'/>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

