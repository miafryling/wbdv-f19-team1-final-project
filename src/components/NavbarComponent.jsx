import React from 'react'
import {UserService} from "../services/UserService";
import {Link, withRouter} from "react-router-dom";
import {Collapse, Navbar, NavbarToggler} from 'reactstrap'
import {Image}from 'react-bootstrap';
import '../Home.css'

class NavbarComponent extends React.Component {
    state = {
        isOpen: false,
    };

    constructor(props) {
        super(props)
        this.userService = UserService.instance;

        this.logOut = this.logOut.bind(this);
    }

    logOut = () => {
        sessionStorage.setItem('user', null)
        this.props.changeUser(null);
        this.props.history.push('/');
    }

    openNavButton = () => this.setState({isOpen: !this.state.isOpen})

    render() {
        const {user} = this.props;
        return (
            <Navbar className='mb-3' color="dark" dark expand="md">
                <Link to="/" className="navbar-brand">Adoptable</Link>
                <img class="image" src="https://image.flaticon.com/icons/png/128/53/53113.png" />
                <NavbarToggler onClick={this.openNavButton}/>
                <Collapse isOpen={this.state.isOpen} navbar>
                    <ul className="navbar-nav mr-auto">
                        {user != null &&
                        <li className='nav-item'>
                            <div
                                className='nav-link font-weight-light mb-2 mb-md-0 text-white-50'>Hello! {user.username}</div>
                        </li>
                        }
                    </ul>
                    {user == null &&
                    <div className="form-inline my-lg-0">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link to="/register"
                                      className="btn btn-outline-info mr-md-2 mb-2 mb-md-0">Register</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/login" className="btn btn-outline-info mr-md-2 mb-2 mb-md-0">Login</Link>
                            </li>
                        </ul>
                    </div>
                    }
                    {user != null &&
                    <div className="form-inline my-lg-0">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link to="/profile" className="btn btn-outline-info mr-md-2 mb-2 mb-md-0">Update Profile</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={`/users/${user._id}`} className="btn btn-outline-info mr-md-2 mb-2 mb-md-0">Public Profile</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/events/create" className="btn btn-outline-primary mr-md-2 mb-2 mb-md-0">
                                    Create Events
                                </Link>
                            </li>
                            <li className="nav-item">
                                <button onClick={this.logOut}
                                        className="btn btn-outline-danger mr-md-2 mb-2 mb-md-0">Logout
                                </button>
                            </li>
                        </ul>
                    </div>
                    }
                </Collapse>
            </Navbar>
        )
    }
}

export default withRouter(NavbarComponent);
