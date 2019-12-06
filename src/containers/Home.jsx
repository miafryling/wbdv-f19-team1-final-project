import React from 'react'
import {Link} from "react-router-dom";

const Home = () => (
    <div className="container-fluid">
        <div className='card-header'>
            <h1>Welcome!</h1>
        </div>
        <button type="button" className="btn btn-outline-primary btn-lg btn-block">
            <Link to="/animals">
                Animal List
            </Link>
        </button>
        <button type="button" className="btn btn-outline-danger btn-lg btn-block">
            <Link to="/events">
                Event List
            </Link>
        </button>
    </div>
)


export default Home;
