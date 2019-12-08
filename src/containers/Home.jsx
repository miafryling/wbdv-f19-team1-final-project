import React from 'react'
import {Link} from "react-router-dom";
import '../Home.css';

const Home = () => (
    <div className="container-fluid">
        <div className='card-header'>
            <h1>Welcome to Adoptable!</h1>
            <h5>Adoptable is your number one place for finding lovable pets and fun animal events.</h5>
        </div>
        <button type="button" className="btn btn-outline-primary btn-lg btn-block">
        <a>
            <Link to="/animals">
                Animal List
            </Link>
        </a>
        </button>
        <button type="button" className="btn btn-outline-danger btn-lg btn-block">
        <a>
            <Link to="/events">
                Event List
            </Link>
        </a>
        </button>
        <button type="button" className="btn btn-outline-success btn-lg btn-block">
        <a>
          <Link to="/users">
            User Search
          </Link>
        </a>
        </button>
    </div>
)


export default Home;
