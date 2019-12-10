import React from 'react'
import {Link} from "react-router-dom";

var privacyButtonStyle = {
    position: "absolute",
    bottom: "5px",
    width: "100%"
};

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
        <button type="button" className="btn btn-outline-success btn-lg btn-block">
          <Link to="/users">
            User Search
          </Link>
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
