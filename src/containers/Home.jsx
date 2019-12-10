import React from 'react'
import {Link} from "react-router-dom";
import '../Home.css';

var privacyButtonStyle = {
    position: "absolute",
    bottom: "5px",
    width: "100%"
};

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
        <button 
            style={privacyButtonStyle}
            type="button" className="btn btn-outline-info btn-lg btn-block">
          <Link to="/privacy">
            Privacy Policy
          </Link>
        </button>
    </div>
)


export default Home;
